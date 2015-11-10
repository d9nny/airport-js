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
    airport.land(plane);
    expect(airport.isInAirport(plane)).toEqual(true);
  });
  it('Should not allow a plane to land when the airport is full', function() {
    for (var i = 0; i < capacity; i++) {
       airport.land(plane);
     }; 
     expect(function(){airport.land(plane);}).toThrow(Error('Airport is full'));
  });
});

