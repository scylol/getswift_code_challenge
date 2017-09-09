const chai = require('chai');
const should = chai.should();

const {getDistanceFromLatLonInKm} = require('../getswift');

describe('getDistanceFromLatLoninKm', () => {
  it('should calculate distance', () => {
    const answer = getDistanceFromLatLonInKm(10, 100, 50, 100);
    answer.should.equal(4447.797065782349);
  });
});

