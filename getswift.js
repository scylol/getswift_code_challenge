let newDroneArray = [];


// fetch('https://codetest.kube.getswift.co/packages', {
//   method: 'get',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   }
// }).then(function(response) {
//   return response.json();
// }).catch(err => {
//   console.log(err);
// });


let droneArray = [
  {
    'droneId': 39269,
    'location': {
      'latitude': -37.77140024380609,
      'longitude': 144.8475111708793
    },
    'packages': [
      {
        'destination': {
          'latitude': -37.769217264298696,
          'longitude': 144.85983376288834
        },
        'packageId': 130,
        'deadline': 1504905967
      }
    ]
  },
  {
    'droneId': 151487,
    'location': {
      'latitude': -37.76751935617135,
      'longitude': 144.8633616584896
    },
    'packages': [
      {
        'destination': {
          'latitude': -37.7836193805147,
          'longitude': 144.84888742921927
        },
        'packageId': 181,
        'deadline': 1504904105
      }
    ]
  },
  {
    'droneId': 155181,
    'location': {
      'latitude': -37.77413360146526,
      'longitude': 144.85259915280756
    },
    'packages': [
      {
        'destination': {
          'latitude': -37.78408183047758,
          'longitude': 144.8604333751837
        },
        'packageId': 749,
        'deadline': 1504905655
      }
    ]
  },
  {
    'droneId': 155990,
    'location': {
      'latitude': -37.77788666244752,
      'longitude': 144.86001274801816
    },
    'packages': [
      {
        'destination': {
          'latitude': -37.77860375393345,
          'longitude': 144.85036397466763
        },
        'packageId': 1072,
        'deadline': 1504904456
      }
    ]
  },
  {
    'droneId': 162628,
    'location': {
      'latitude': -37.77267967352264,
      'longitude': 144.85355679641427
    },
    'packages': [
      {
        'destination': {
          'latitude': -37.78182786219593,
          'longitude': 144.86046963825356
        },
        'packageId': 1353,
        'deadline': 1504904760
      }
    ]
  },
  {
    'droneId': 183032,
    'location': {
      'latitude': -37.77313554977773,
      'longitude': 144.85701706397808
    },
    'packages': [
      {
        'destination': {
          'latitude': -37.76830675360251,
          'longitude': 144.85187045716486
        },
        'packageId': 1592,
        'deadline': 1504905036
      }
    ]
  },
  {
    'droneId': 211653,
    'location': {
      'latitude': -37.78166723359473,
      'longitude': 144.8549909129677
    },
    'packages': [
      {
        'destination': {
          'latitude': -37.76741112539883,
          'longitude': 144.85825172719046
        },
        'packageId': 1990,
        'deadline': 1504903922
      }
    ]
  },
  {
    'droneId': 229383,
    'location': {
      'latitude': -37.78123369167161,
      'longitude': 144.86474551718678
    },
    'packages': [
      {
        'destination': {
          'latitude': -37.784241540405155,
          'longitude': 144.8487697195173
        },
        'packageId': 2251,
        'deadline': 1504905238
      }
    ]
  },
  {
    'droneId': 232826,
    'location': {
      'latitude': -37.77373048686103,
      'longitude': 144.85042618232282
    },
    'packages': [
      {
        'destination': {
          'latitude': -37.783641399614105,
          'longitude': 144.84855069566518
        },
        'packageId': 2365,
        'deadline': 1504903715
      }
    ]
  },
  {
    'droneId': 238821,
    'location': {
      'latitude': -37.768473486056116,
      'longitude': 144.85439555371437
    },
    'packages': [
      {
        'destination': {
          'latitude': -37.775511696145806,
          'longitude': 144.8589201567015
        },
        'packageId': 2588,
        'deadline': 1504905951
      }
    ]
  },
  {
    'droneId': 284312,
    'location': {
      'latitude': -37.78295682888208,
      'longitude': 144.8591610134465
    },
    'packages': [
      {
        'destination': {
          'latitude': -37.784818508092364,
          'longitude': 144.8498780608173
        },
        'packageId': 2662,
        'deadline': 1504905731
      }
    ]
  },
  {
    'droneId': 313671,
    'location': {
      'latitude': -37.76970277808521,
      'longitude': 144.86212477189744
    },
    'packages': [
      {
        'destination': {
          'latitude': -37.77972275422783,
          'longitude': 144.86427505977156
        },
        'packageId': 2873,
        'deadline': 1504903070
      }
    ]
  },
  {
    'droneId': 367351,
    'location': {
      'latitude': -37.77397039156481,
      'longitude': 144.85934904602794
    },
    'packages': [
      {
        'destination': {
          'latitude': -37.77376249079116,
          'longitude': 144.85162994259844
        },
        'packageId': 3043,
        'deadline': 1504905140
      }
    ]
  }
];

let packageArray = [
  {
    'destination': {
      'latitude': -37.76686557332093,
      'longitude': 144.85712379325759
    },
    'packageId': 215,
    'deadline': 1504904877
  },
  {
    'destination': {
      'latitude': -37.76835421353573,
      'longitude': 144.86237622492203
    },
    'packageId': 878,
    'deadline': 1504904943
  },
  {
    'destination': {
      'latitude': -37.766854461828075,
      'longitude': 144.86033322271493
    },
    'packageId': 1252,
    'deadline': 1504905543
  },
  {
    'destination': {
      'latitude': -37.77674627048037,
      'longitude': 144.85852060434883
    },
    'packageId': 1406,
    'deadline': 1504903811
  },
  {
    'destination': {
      'latitude': -37.770134300659485,
      'longitude': 144.84863948034337
    },
    'packageId': 1640,
    'deadline': 1504904691
  },
  {
    'destination': {
      'latitude': -37.77419215693862,
      'longitude': 144.8474314646967
    },
    'packageId': 2246,
    'deadline': 1504905710
  },
  {
    'destination': {
      'latitude': -37.76884036229438,
      'longitude': 144.84996035449527
    },
    'packageId': 2986,
    'deadline': 1504904493
  },
  {
    'destination': {
      'latitude': -37.780117529284716,
      'longitude': 144.84852947167113
    },
    'packageId': 3781,
    'deadline': 1504904961
  },
  {
    'destination': {
      'latitude': -37.766951525277236,
      'longitude': 144.84816577986024
    },
    'packageId': 4550,
    'deadline': 1504902993
  },
  {
    'destination': {
      'latitude': -37.78403530986147,
      'longitude': 144.8544196248394
    },
    'packageId': 4989,
    'deadline': 1504905931
  },
  {
    'destination': {
      'latitude': -37.78159000393153,
      'longitude': 144.86426541110487
    },
    'packageId': 6382,
    'deadline': 1504904293
  },
  {
    'destination': {
      'latitude': -37.77726636018805,
      'longitude': 144.85122450276697
    },
    'packageId': 6520,
    'deadline': 1504905413
  },
  {
    'destination': {
      'latitude': -37.783151834038755,
      'longitude': 144.86075144310917
    },
    'packageId': 7038,
    'deadline': 1504903682
  },
  {
    'destination': {
      'latitude': -37.767594363949755,
      'longitude': 144.8631246810888
    },
    'packageId': 7086,
    'deadline': 1504905303
  },
  {
    'destination': {
      'latitude': -37.777728720987675,
      'longitude': 144.8622506134254
    },
    'packageId': 7129,
    'deadline': 1504903896
  },
  {
    'destination': {
      'latitude': -37.76814961263079,
      'longitude': 144.8602284563397
    },
    'packageId': 7363,
    'deadline': 1504903688
  },
  {
    'destination': {
      'latitude': -37.78071226326765,
      'longitude': 144.86348805920218
    },
    'packageId': 7396,
    'deadline': 1504905786
  }];

let depo = {
  'latitude': -37.816664,
  'longitude': 144.963848
};



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

function timeToDepo() {
  
  let timeArray = [];
  
  for(let i=0; i<droneArray.length; i++) {
    if(typeof droneArray[i].packages[0] === 'undefined') {
      let distance = getDistanceFromLatLonInKm(droneArray[i].location.latitude,droneArray[i].location.longitude, depo.latitude,depo.longitude);
      let timeToDepo = (distance / 50)*3600;
      timeArray.push({timeToDepo: timeToDepo, droneId: droneArray[i].droneId});
    }
    else {
      let distance1 = getDistanceFromLatLonInKm(droneArray[i].location.latitude,droneArray[i].location.longitude, droneArray[i].packages[0].destination.latitude,droneArray[i].packages[0].destination.longitude);
      let distance2 = getDistanceFromLatLonInKm( droneArray[i].packages[0].destination.latitude,droneArray[i].packages[0].destination.longitude,depo.latitude,depo.longitude);
      
      let totalDistance = distance1 + distance2;
      let timeToDepo = (totalDistance / 50)*3600;
      timeArray.push({timeToDepo: timeToDepo, droneId: droneArray[i].droneId});
    }
  }
  timeArray.sort((a,b) => {
    return a.timeToDepo - b.timeToDepo;
  });
  
  return timeArray;
}

function findTimeDifference() {
  let sortedPackages = packageArray.sort((a,b) => {
    return a.deadline - b.deadline;
  });
  let currentTime = moment();
  console.log('current time is',currentTime);
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
    let travelTime = drones[i].timeToDepo + getDistanceFromLatLonInKm(depo.latitude,depo.longitude,packages[0].destination.latitude,packages[0].destination.longitude);
    console.log(difference);
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

assignPackages(findTimeDifference(), timeToDepo());



//The difference is the difference between current Time and the Deadline
// I need to compare this time, with the time it would take the drone to make it to its destination
// SO what I need to do is compare all of my packages with my drones
// I need to add together the timeToDepo with the timeToDestination, if that is less than the difference, then I can assign that drone to that package.


//What I need/have
// I need to find the distance of the drone from the depo, then the depo from the destination DONE
// I need variable of the current time DONE
// I need a varaible of the deadline time, its given to me in Unix Timestamp DONE
// I need to figure out the time difference of these 2 dates DONE
// I need to figure out how long the package will take to arrive. Time = Distance / Speed DONE
// I need to check every drone for each package to find the one that can deliver it the soonest.
//fill up an array of assigned packages,
//fill up an array of unassigned packages.

//once they are at the base it doesnt matter which one we use
//start by selecting appropiate data structures for the things we use
//maybe use a queue to have the quickest drones at the front
//match the first package to the first drone
//queue will help with the future problem


//sort an array of drones, from shortest time back to base, this will happen after calculating distance

//sort an array of packages, from soonest deadline time

//check to see if the drone at the corresponding index to the package, can deliver it in time.

//If it can deliver it one time, print the output saying droneId is delivering packageId.

