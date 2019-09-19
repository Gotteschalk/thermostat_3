'use strict';

console.log('Hello')

const MINTEMP = 10;
const MAX_TEMP_POWER_SAVE_ON = 25
const MAX_TEMP_POWER_SAVE_OFF = 32
const STARTING_TEMPERATURE = 20

function Thermostat(temperature = STARTING_TEMPERATURE) {
  this.temperature = temperature;
  this.powerSave = true;
  this.maxtemp = MAX_TEMP_POWER_SAVE_ON;
};

Thermostat.prototype.upTemp = function () {
  this.modeCheck()
  this.temperature += 1
  if (this.temperature > this.maxtemp) {
    this.temperature = this.maxtemp
  };
};

Thermostat.prototype.downTemp = function () {
  this.temperature -= 1
  if (this.temperature < MINTEMP) {
    this.temperature = MINTEMP
  };
};

Thermostat.prototype.modeCheck = function () {
  this.powerSave ? this.maxtemp = MAX_TEMP_POWER_SAVE_ON : this.maxtemp = MAX_TEMP_POWER_SAVE_OFF
};

Thermostat.prototype.reset = function () {
  this.temperature = STARTING_TEMPERATURE
};

Thermostat.prototype.checkEnergyUsage = function () {
  if (this.temperature < 18) {
    return { text: 'low-usage', color: 'green' }
  } else if (this.temperature < 25) {
    return { text: 'medium-usage', color: 'black' }
  } else {
    return { text: 'high-usage', color: 'red' }
  };
};

Thermostat.prototype.changeEnergyMode = function () {
  this.powerSave = !this.powerSave
};

