import "./styles/App.scss";

function App() {
  return (
    <div>
      <h1>Hello, Nidhin!</h1>
      <p>
        <b>Date & Time:</b>
        &nbsp;
        <span>{new Date(Date.now()).toString()}</span>
      </p>
    </div>
  );
}

export default App;
