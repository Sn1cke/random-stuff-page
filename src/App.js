import "./App.css";
import React, { useState } from "react";
import addTwoNumbers from "sn1cke-add-two-numbers";
import reverseString from "sn1cke-reverse-string";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [sum, setSum] = useState("");
  const [reverseText, setReverseText] = useState("");
  const [reverseResult, setReverseResult] = useState("");

  const handleAddButtonClick = () => {
    const result = addTwoNumbers(Number(firstNumber), Number(secondNumber));
    setSum(result);
    setFirstNumber("");
    setSecondNumber("");
  };

  const handleReverseButtonClick = () => {
    const result = reverseString(reverseText);
    setReverseResult(result);
    setReverseText("");
  };

  return (
    <div className="wrapper">
      <h2>Welcome to the Random Stuff Page!</h2>
      <div className="add-numbers-wrapper">
        <h3>Add two numbers together! Cool, huh?</h3>
        <input
          type="number"
          className="first-number"
          value={firstNumber}
          onChange={e => setFirstNumber(e.target.value)}
        />
        <input
          type="number"
          className="second-number"
          value={secondNumber}
          onChange={e => setSecondNumber(e.target.value)}
        />
        <button className="add-btn" onClick={handleAddButtonClick}>
          Add Numbers
        </button>
        {sum && <p>The sum is {sum}. Incredible!</p>}
      </div>

      <div className="reverse-input-wrapper">
        <h3>
          Do you know what else you can do? Reverse your text with every other
          letter capitalized!
        </h3>
        <input
          type="text"
          className="reverse-text"
          value={reverseText}
          onChange={e => setReverseText(e.target.value)}
        />
        <button className="reverse-btn" onClick={handleReverseButtonClick}>
          Reverse Text
        </button>
        {reverseResult && (
          <p>What a strange mix... Here is your result: {reverseResult}</p>
        )}
      </div>
    </div>
  );
}

export default App;
