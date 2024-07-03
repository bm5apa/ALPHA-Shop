import React from 'react';
import { useState } from 'react';
import Main from './Step/MainWrapper.jsx';
import StepProgress from './Step/StepProgress.jsx';
import { Step1, Step2, Step3 } from './Step/Step.jsx';
import ProgressControl from './Step/ProgressControl.jsx';
import Cart from './Cart/Cart.jsx';
import '../styles/App.css';


export default function App() {

  const [stepState, setStepState] = useState(0);

  function handleClickNext() {
    setStepState(stepState + 1);
  }
  
  function handleClickPre() {
    setStepState(stepState - 1);
  }
  
  function stepChange() {
    if(stepState === 0){
      return <Step1/>
    }else if (stepState === 1){
      return <Step2/>
    }else if (stepState === 2){
      return <Step3 />
    }else{
      setStepState(0);
      return null
    }
  }

  return (
    <>
    <div className='main'>
      <Main>
        <StepProgress stepState={stepState} />
        {stepChange()}
        <ProgressControl stepState={stepState} clickNext={handleClickNext} clickPre={handleClickPre}/>
      </Main>
    </div>
    <div className="cart">
      <Cart/>
    </div>
    </>
  );
}