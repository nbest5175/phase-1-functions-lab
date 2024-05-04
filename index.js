// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
if (someValue >= 42) {
    return someValue - 42
}
if (someValue < 42) {
    return 42 - someValue 
}
    
  }

  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    if (someValue >= 42) {
        return (someValue - 42) * 264
    }
    if (someValue < 42) {
        return (42 - someValue) * 264
    }
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start < destination) {
        return (destination - start) * 264
    }
    if (start > destination) {
        return (start - destination) * 264
    }
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer 
    let ride = distanceTravelledInFeet(start, destination)
    if (ride <= 400) {
        return (0)
      }
      if (ride > 400 && ride < 2000) {
        return (ride - 400) * .02
      }
      if (ride > 2000 && ride < 2500) {
        return (25)
      }
      if (ride > 2500) {
        return ('cannot travel that far')
  }
}
