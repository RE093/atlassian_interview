import { useState } from "react";

export const useFeatureFlag = (featureFlag, defaultValue) => {
  const [enabled, setEnabled] = useState(() => {
    const storedFeatureFlag = localStorage.getItem(featureFlag);

    return Boolean(storedFeatureFlag) || defaultValue;
  });

  

  return [enabled, setEnabled];
};
