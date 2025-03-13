import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <Counter
            name="Initial Investment"
            onChange={handleChange}
            userInput={userInput}
          />
          <Counter
            name="Annual Investment"
            onChange={handleChange}
            userInput={userInput}
          />
        </div>
        <div className="input-group">
          <Counter
            name="Expected return"
            onChange={handleChange}
            userInput={userInput}
          />
          <Counter
            name="Duration"
            onChange={handleChange}
            userInput={userInput}
          />
        </div>
      </section>
      {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
