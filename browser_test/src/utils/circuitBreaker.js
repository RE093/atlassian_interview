function circuitBreaker(func, failureLimit, timeThreshold) {
  let failureCount = 0;
  let lastFailureTime;
  let cbClosed = false;

  return function () {
    if (cbClosed) {
      const timeSinceLastFailure = Date.now() - lastFailureTime;

      if (timeSinceLastFailure > timeThreshold) {
        failureCount = 0;
      }
    }

    try {
      const result = func();
      return result;
    } catch (error) {
      if (failureCount >= failureLimit) {
        return console.error("Service Unavailable");
      }
      failureCount++;
      lastFailureTime = Date.now();
      console.log("error: ", error);
    }
  };
}

export { circuitBreaker };
