describe("Airport", function() {
  Airport = require('../lib/Airport');
  var airport;
  var plane;
  var landed = null;
  var capacity = 10;
  beforeEach(function() {
    airport = new Airport(capacity);
    plane = {
      land : function() {
        landed = true;
      },

      takeOff : function() {
        landed = false;
      },

      isLanded : function() {
        return landed;
      }
    };

    spyOn(plane, 'land');
    spyOn(plane, 'takeOff');
    spyOn(plane, 'isLanded');
  });

  it("Should be a able to land a given plane", function() {
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it("A landed plane should be in the hangar", function() {
    spyOn(Math, 'random').andReturn(0.9);
    airport.land(plane);
    expect(airport.isInAirport(plane)).toEqual(true);
  });

  it("Should not allow a plane to land when it is stormy", function() {
    spyOn(Math, 'random').andReturn(0.0);
    expect(function(){airport.land(plane);}).toThrow(Error("Too stormy to land"));
  });

  it('Should not allow a plane to land when the airport is full', function() {
    spyOn(Math, 'random').andReturn(0.9);
    for (var i = 0; i < capacity; i++) {
       airport.land(plane);
     }
     expect(function(){airport.land(plane);}).toThrow(Error('Airport is full'));
  });

  it("Should tell us when the weather", function() {
    expect(airport.weather()).toBeTruthy();
  });

  it("Should tell us when the weather is stormy", function() {
    spyOn(Math, 'random').andReturn(0.0);
    expect(airport.isStormy()).toBe(true);
  });

  it("should't allow a plane to take off when it's stormy", function() {
    spyOn(Math, 'random').andReturn(0.0);
    expect(function(){airport.takeOff(plane);}).toThrow(Error("Can't take off. Stormy"));
  });

  it("should allow a plane to take off when it's sunny", function() {
    spyOn(Math, 'random').andReturn(0.9);
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.isInAirport(plane)).toBe(false);
  });

  it("should not allow a plane to take off if its not in the airport", function () {
    spyOn(Math, 'random').andReturn(0.9);
    expect(function(){airport.takeOff(plane);}).toThrow(Error('Not in airport'));
  });

});

