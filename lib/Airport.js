function Airport(value) {
  this.hangar = [];
  this.capacity = value;
  this.stormy = Symbol("stormy");
  this.sunny = Symbol("sunny");
  this.conditions = [this.stormy, this.sunny, this.sunny];
}

Airport.prototype.isFull = function() {
  return this.hangar.length >= this.capacity;
};

Airport.prototype.land = function(plane) {
  if (this.isFull()) {throw "Airport is full";}
  plane.land();
  this.hangar.push(plane);
};

Airport.prototype.isInAirport = function(plane) {
  matches = this.hangar.filter(function(p) {
    return (p === plane);
  });
  return (matches.length > 0);
};

Airport.prototype.weather = function() {
  return this.conditions[Math.round(Math.random() * 3)];
};

Airport.prototype.isStormy = function() {
  return this.weather() === this.stormy;
};

Airport.prototype.takeOff = function(plane) {
  if (this.isStormy()) {
    throw "Can't take off. Stormy";
  }
  plane.takeOff();
  this.hangar.splice(this.hangar.indexOf(plane),1);
};

module.exports = Airport;
