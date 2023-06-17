import { useState } from "react";
import "./App.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(!isClicked);
  return (
    <div>
      <button
        style={{
          backgroundColor: isClicked ? "blue" : "red",
          color: "#ffffff",
        }}
        onClick={handleClick}
      >
        {isClicked ? "Change to red" : "Change to blue"}
      </button>
    </div>
  );
}

export default App;
