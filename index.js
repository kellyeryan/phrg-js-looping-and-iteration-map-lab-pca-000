function lowerCaseDrivers(drivers) {
  const lowerCaseNames = drivers.map(function (name) {return name.toLowerCase(); });
  return lowerCaseNames;
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const firstInName = driver.split(" ")[0];
    const lastInName = driver.split(" ")[1];

    return { firstName: firstInName, lastName: lastInName };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
}
