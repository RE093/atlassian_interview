import { useFeatureFlag } from "../hooks/useFeatureFlag";

function FeatureFlag({ featureFlag, children }) {
  const [enabled, setEnabled] = useFeatureFlag(featureFlag, false);

  return (
    <>
      <button onClick={() => setEnabled((current) => !current)}>
        Toggle Feature Flag
      </button>
      <>{enabled ? children : null}</>
    </>
  );
}

export default FeatureFlag;
