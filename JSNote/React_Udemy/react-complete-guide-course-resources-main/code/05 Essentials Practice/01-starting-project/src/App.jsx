import { useState } from "react";
import Header from './components/Header.jsx';
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {

    const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

    const  inputIsValid = userInput.duration >=1;

    function handleChange(inputIdnetifier, newValue){
        setUserInput((preUserInput) => {
            return {
                ...preUserInput,
                [inputIdnetifier] : +newValue
            };
        });
    }



  return (
      <>
          <Header />
          <UserInput userInput={userInput} onChange={handleChange} />
          {!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
          {inputIsValid && <Result Input={userInput}/>}
      </>
  )
}

export default App
