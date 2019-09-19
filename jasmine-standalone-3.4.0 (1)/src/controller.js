thermostat = new Thermostat()

$(document).ready(function () {
  $("#changeMode").click(function () {
    thermostat.changeEnergyMode()
    uiChangePowerMode()
    uiChangeTemp()
    console.log(thermostat)
  })
  $("#increaseTemp").click(function () {
    thermostat.upTemp()
    uiChangeTemp()

    console.log(thermostat)
  })
  $("#decreaseTemp").click(function () {
    thermostat.downTemp()
    uiChangeTemp()
    console.log(thermostat)
  })
  $("#reset").click(function () {
    thermostat.reset()
    uiChangeTemp()
    console.log(thermostat)
  })
});

function uiChangePowerMode() {
  if (thermostat.powerSave === true) {
    $("#powerMode").html("Powersave On")
  } else {
    $("#powerMode").html("Powersave Off")
  };
};

function uiChangeTemp() {
  $("#temperature").html(thermostat.temperature)
  $('#energyUsage').html(thermostat.checkEnergyUsage().text)
  $('#energyUsage').css("color", `${thermostat.checkEnergyUsage().color}`)

};


