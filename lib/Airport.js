function Airport(value) {
  this.hangar = [];
  this.capacity = value;
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

module.exports = Airport;
