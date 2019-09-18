function Thermostat(temperature = 20) {
  this.temperature = temperature;
};

Thermostat.prototype.upTemp = function(tempRaise) {
  this.temperature += tempRaise
};
