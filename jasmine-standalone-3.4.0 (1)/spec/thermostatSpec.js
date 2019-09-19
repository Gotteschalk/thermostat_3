describe("Thermostat", function () {
  beforeEach(function () {
    thermo = new Thermostat();
  })

  it("Sets default temperature to 20 degrees for new instance", function () {
    expect(thermo.temperature).toEqual(20);
  });

  describe("upTemp", function () {
    it("increases the temperature by 1 degree", function () {
      thermo.upTemp()
      expect(thermo.temperature).toEqual(21);
    });

    it("only raises the temp to 25 degrees when powersave mode is on", function () {
      for(i=0; i<6; i++) {
        thermo.upTemp()
      };
      expect(thermo.temperature).toEqual(25);
    })

    it("only raises the temp to 32 degrees when powersave mode is off", function () {
      thermo.powerSave = false;
      for(i=0; i<15; i++) {
        thermo.upTemp()
      };
      expect(thermo.temperature).toEqual(32);
    })
  })

  describe("downTemp", function () {
    it("decreases the temperature by 1 degree", function () {
      thermo.downTemp()
      expect(thermo.temperature).toEqual(19)
    });

    it("does not lower the temperature below the minimum, 10 degrees", function () {
      for(i=0; i<11; i++) {
        thermo.downTemp()
      };
      expect(thermo.temperature).toEqual(10)
    })
  });

  describe("reset", function () {
    it("Expects to reset the temperature to 20 when actioned", function () {
      thermo.downTemp()
      thermo.reset()
      expect(thermo.temperature).toEqual(20)
    })
  })

  describe("checkEnergyUsage", function () {
    it("Expects to return an object with text: low-usage and color: green when temperature is less than 18", function () {
      for(i=0; i<3; i++) {
        thermo.downTemp()
      }
      expect(thermo.checkEnergyUsage()).toEqual({ text: 'low-usage', color: 'green' })
    })

    it("Expects to return an object with text: medium-usage and color: black when temperature is less than 25", function () {
      expect(thermo.checkEnergyUsage()).toEqual({ text: 'medium-usage', color: 'black' })
    })

    it("Expects to return an object with text: high-usage and color: green when temperature is more than 25", function () {
      for(i=0; i<6; i++) {
        thermo.upTemp()
      };
      expect(thermo.checkEnergyUsage()).toEqual({ text: 'high-usage', color: 'red' })
    })
  });

  describe('changeEnergyMode', function() {
    it('switches powersavemode on and off', function() {
      thermo.changeEnergyMode()
      expect(thermo.powerSave).toEqual(false)
      thermo.changeEnergyMode()
      expect(thermo.powerSave).toEqual(true)
    });

    it('reduces the temperature to 25 if temperature is above 25 when pressed', function() {
      thermo.changeEnergyMode()
      for(i=0; i<10; i++) {
        thermo.upTemp()
      }
      thermo.changeEnergyMode()
      expect(thermo.temperature).toEqual(25)
    })
  })

});
