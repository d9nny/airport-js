describe("Airport", function() {
  Airport = require('../lib/Airport');
  var airport;
  var plane;
  var landed = null;

  beforeEach(function() {
    airport = new Airport();
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
    airport.land(plane);
    expect(airport.isInAirport(plane)).toEqual(true);
  });
});
