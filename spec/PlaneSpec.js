describe("Plane", function() {
  Plane = require('../lib/Plane');
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should be able to land a plane", function() {
    plane.land();
    expect(plane.isLanded()).toEqual(true);
  });

});
