const MINTEMP = 10;

function Thermostat(temperature = 20) {
  this.temperature = temperature;
};

Thermostat.prototype.upTemp = function(tempRaise) {
  this.temperature += tempRaise
};

Thermostat.prototype.downTemp = function(tempLower) {
  this.temperature -= tempLower
  if (this.temperature < MINTEMP) {
    this.temperature = MINTEMP
  };
};
