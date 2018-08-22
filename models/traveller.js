const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
 return this.journeys.map((journey) => {
   return journey.endLocation;
 });
};

Traveller.prototype.getModesOfTransport = function () {
return this.journeys.map((journey) => {
  return journey.transport;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  },0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  //sauce: https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates

  // More than one way to do this. We can create an array from a set.
 //Sets contain unique values only. ... is the 'spread' operator:
  return  [...new Set(this.getModesOfTransport())];

//Or we can find the first (and only the first) index of each value,
//then filter by these unique indexes:
  // return this.getModesOfTransport().filter((value, index, array) => {
  //   return array.indexOf(value) === index;
  // });
};



module.exports = Traveller;
