function Airport() {
  this.hangar = [];
}

Airport.prototype.land = function(plane) {
  plane.land();
  this.hangar.push(plane);
};

Airport.prototype.isInAirport = function(plane) {
  matches = this.hangar.filter(function(p) {
    return (p === plane);
  });
  return (matches.length > 0);
};

module.exports = Airport;
