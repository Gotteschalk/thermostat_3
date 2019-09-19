describe("Thermostat", function () {
  beforeEach(function () {
    thermo = new Thermostat();
  })

  it("Sets default temperature to 20 degrees for new instance", function () {
    expect(thermo.temperature).toEqual(20);
  });

  describe("upTemp", function () {
    it("increases the temperature by a certain number of degrees", function () {
      thermo.upTemp(5)
      expect(thermo.temperature).toEqual(25);
    });

    it("only raises the temp to 25 degrees when powersave mode is on", function () {
      thermo.upTemp(15);
      expect(thermo.temperature).toEqual(25);
    })

    it("only raises the temp to 32 degrees when powersave mode is off", function () {
      thermo.powerSave = false;
      thermo.upTemp(15);
      expect(thermo.temperature).toEqual(32);
    })
  })

  describe("downTemp", function () {
    it("decreases the temperature by a certain number of degrees", function () {
      thermo.downTemp(8)
      expect(thermo.temperature).toEqual(12)
    });

    it("does not lower the temperature below the minimum, 10 degrees", function () {
      thermo.downTemp(15)
      expect(thermo.temperature).toEqual(10)
    })
  });

  describe("reset", function () {
    it("Expects to reset the temperature to 20 when actioned", function () {
      thermo.downTemp(3)
      thermo.reset()
      expect(thermo.temperature).toEqual(20)
    })
  })

  describe("checkEnergyUsage", function () {
    it("Expects to return an object with text: low-usage and color: green when temperature is less than 18", function () {
      thermo.downTemp(3)
      expect(thermo.checkEnergyUsage()).toEqual({ text: 'low-usage', color: 'green' })
    })

    it("Expects to return an object with text: medium-usage and color: black when temperature is less than 25", function () {
      expect(thermo.checkEnergyUsage()).toEqual({ text: 'medium-usage', color: 'black' })
    })

    it("Expects to return an object with text: high-usage and color: green when temperature is more than 25", function () {
      thermo.upTemp(6)
      expect(thermo.checkEnergyUsage()).toEqual({ text: 'high-usage', color: 'red' })
    })
  });
});
