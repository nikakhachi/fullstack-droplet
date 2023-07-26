import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [n, setN] = useState(0);

  const fetchN = async () => {
    const { data } = await axios.get("http://164.92.139.247/number");
    setN(data.number);
  };

  useEffect(() => {
    fetchN();
  }, []);

  const handleClick = async () => {
    await axios.post("http://164.92.139.247/increment");
    fetchN();
  };

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>Increment</button>
        <p>{n}</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
