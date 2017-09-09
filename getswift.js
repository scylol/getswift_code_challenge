const fetch = require('node-fetch');
const moment = require('moment');

let depo = {
  'latitude': -37.816664,
  'longitude': 144.963848
};

function getData(){

  return Promise.all(
    [
      fetch('https://codetest.kube.getswift.co/packages', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(function(response) {
        return response.json();
      }).catch(err => {
        console.log(err);
      }),

      fetch('https://codetest.kube.getswift.co/drones', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(response => response.json())
    ]);

}
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  let R = 6371; // Radius of the earth in km
  let dLat = deg2rad(lat2-lat1);  // deg2rad below
  let dLon = deg2rad(lon2-lon1);
  let a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  let d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}

function timeToDepo(droneArray) {
  return droneArray.map(drone => {
    let distance =0;
    if(drone.packages.length > 0) {
      let distance1 = getDistanceFromLatLonInKm(drone.location.latitude,
        drone.location.longitude,
        drone.packages[0].destination.latitude,
        drone.packages[0].destination.longitude);
      let distance2 = getDistanceFromLatLonInKm( drone.packages[0].destination.latitude,
          drone.packages[0].destination.longitude,
          depo.latitude,depo.longitude);
      distance = distance1 + distance2;
    }
    else {
      distance = getDistanceFromLatLonInKm(drone.location.latitude,
        drone.location.longitude, 
        depo.latitude,
        depo.longitude);
    }
    let timeToDepo = (distance / 50)*3600;
    return {timeToDepo: timeToDepo, droneId: drone.droneId};
  }).sort((a,b) => {
    return a.timeToDepo - b.timeToDepo;
  });

}

function findTimeDifference(packageArray, currentTime) {
  let sortedPackages = packageArray.sort((a,b) => {
    return a.deadline - b.deadline;
  });
  // let currentTime = moment();
  for(let i=0; i< sortedPackages.length; i++) {
    sortedPackages[i].difference = moment.unix(sortedPackages[i].deadline).diff(currentTime, 'seconds');
  }
  return sortedPackages;
}

function assignPackages(packages, drones) {
  let assignments = [];
  let unassignedPackagesIds = [];
  let smallestLength = Math.min(packages.length, drones.length);
  for(let i=0; i<smallestLength; i++) {
    let difference = packages[i].difference;
    console.log('dif',difference);
    let travelTime = drones[i].timeToDepo + getDistanceFromLatLonInKm(depo.latitude,depo.longitude,packages[0].destination.latitude,packages[0].destination.longitude);
    if(travelTime < difference) {
      assignments.push({droneId: drones[i].droneId, packageId: packages[i].packageId});
    }
    else {
      unassignedPackagesIds.push(packages[i].packageId);
    }
  }
  console.log('assignments',assignments);
  console.log('unassignedPackageIds',unassignedPackagesIds);
}



getData()
    .then(data =>{
      let packages = findTimeDifference(data[0],moment());
      let drones = timeToDepo(data[1]);
      assignPackages(packages, drones);
    } );


module.exports = {getDistanceFromLatLonInKm,findTimeDifference,timeToDepo,assignPackages};




