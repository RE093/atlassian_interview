import { fetchAllFeatures } from "../connected/fetchFeatures.js";

const Cache = {
  featureFlags: null,
};
const cacheTTL = 2000;

function fetchFeatureFlags() {
  Cache.featureFlags = {
    promise: fetchAllFeatures(),
    datetime: new Date(),
  };
}

// Note: This was not the answer I gave in the interview. This is what I re-factored it too after the pressure was off.

async function getFeatureState(featureFlag) {
  if (!Cache.featureFlags) {
    fetchFeatureFlags();
  }

  const requestTime = new Date();

  if (requestTime - Cache.featureFlags.datetime > cacheTTL) {
    fetchFeatureFlags();
  }

  const featureFlags = await Cache.featureFlags.promise;

  return featureFlags[featureFlag] ?? false;
}

getFeatureState("extended-summary").then(function (isEnabled) {
  if (isEnabled) {
    console.log("extended-summary: enabled");
  } else {
    console.log("extended-summary: disabled");
  }
});

setTimeout(() => {
  getFeatureState("feedback-dialog").then(function (isEnabled) {
    if (isEnabled) {
      console.log("feedback-dialog: enabled");
    } else {
      console.log("feedback-dialog: disabled");
    }
  });
}, 1000); // Make this over 2 seconds to see invalidated cache
