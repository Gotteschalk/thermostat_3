thermostat = new Thermostat()

$(document).ready(function () {
  $("#changeMode").click(function () {
    thermostat.changeEnergyMode()
    // uiChangePowerMode()
    console.log(thermostat)
  })
  $("#increaseTemp").click()
  $("#decreaseTemp").click()
  $("#reset").click()

});




function changeEnergyMode() {
  thermostat.changeEnergyMode()
}


