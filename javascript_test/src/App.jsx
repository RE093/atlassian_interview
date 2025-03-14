import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div>
      <h1>Hello, Interviewer!</h1>
      <p>{time}</p>
    </div>
  );
}

export default App;
