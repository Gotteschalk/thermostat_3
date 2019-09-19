thermostat = new Thermostat()

$(document).ready(function () {
  $("#changeMode").click(function () {
    thermostat.changeEnergyMode()
    uiChangePowerMode()
    console.log(thermostat)
  })
  $("#increaseTemp").click(function () {
    thermostat.upTemp()
    uiIncreaseTemp()
    console.log(thermostat)
  })
  $("#decreaseTemp").click(function () {
    thermostat.downTemp()
    console.log(thermostat)
  })
  $("#reset").click(function() {
    thermostat.reset()
    console.log(thermostat)
  })

});

function uiChangePowerMode() {
  if(thermostat.powerSave === true) {
    $("#powerMode").html("Powersave On")
  } else {
    $("#powerMode").html("Powersave Off")
  };
};

function uiIncreaseTemp() {
    $("#temperature").html(thermostat.temperature)
};
