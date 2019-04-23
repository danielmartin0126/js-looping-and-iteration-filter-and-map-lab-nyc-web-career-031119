// Code your solution here:
function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function (driver) { return driver["revenue"] > revenue; });
}

function driverNamesWithRenueOver(arr,revenue) {
    return driversWithRevenueOver(arr, revenue).map(d => d.name);

}