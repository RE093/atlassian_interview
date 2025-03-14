// import { useEffect } from "react";
// import { circuitBreaker } from "./utils/circuitBreaker";

import Graph from "./components/Graph";
import FeatureFlag from "./components/FeatureFlag";
import { FEATURE_FLAGS } from "./constants";
import "./styles/App.scss";

function App() {
  //   useEffect(() => {
  //     function onlyReturnsError() {
  //       throw "Cool error";
  //     }

  //     const protectedOnlyReturnsError = circuitBreaker(onlyReturnsError, 3, 300);

  //     protectedOnlyReturnsError();
  //     protectedOnlyReturnsError();
  //     protectedOnlyReturnsError();
  //     protectedOnlyReturnsError();
  //   }, []);

  return (
    <div style={{ height: 500, width: 500 }}>
      <FeatureFlag featureFlag={FEATURE_FLAGS.graph_v1}>
        <Graph />
      </FeatureFlag>
    </div>
  );
}

export default App;
