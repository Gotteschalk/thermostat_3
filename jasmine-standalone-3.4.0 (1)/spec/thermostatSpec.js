describe("Thermostat", function() {
  beforeEach(function() {
    thermo = new Thermostat();
  })

  it("Sets default temperature to 20 degrees for new instance", function() {
    expect(thermo.temperature).toEqual(20)
  });
});