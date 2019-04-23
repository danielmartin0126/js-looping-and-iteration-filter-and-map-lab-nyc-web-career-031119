// Code your solution here:
function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (driver) { return driver["revenue"] > revenue; });
}

function driverNamesWithRevenueOver(arr,revenue) {
    return driversWithRevenueOver(arr, revenue).map(d => d.name);
}

function exactMatch(drivers, obj){
  return drivers.filter(driver =>
    driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]);
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(d => d.name);
}