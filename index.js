// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) { return driver.toLowerCase(); });
}

function nameToAttributes (drivers) {
  const splitNames = function (fullName) {
    nameObj = {};

    nameObj.firstName = fullName.split(" ")[0];
    nameObj.lastName = fullName.split(" ")[1];
    return nameObj;
  }

  return drivers.map(function (name) {return splitNames(name)});
}

function attributesToPhrase (drivers) {
  return drivers.map(function (person) { return `${person.name} is from ${person.hometown}`; });
}
