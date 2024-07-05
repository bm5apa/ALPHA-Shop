import React, { useState } from 'react';
import { Step1, Step2, Step3 } from './Step/Step.jsx';
import { CartProvider } from './Cart/CartContext.jsx';
import { StepProvider } from './Step/StepContext.jsx';
import StepProgress from './Step/StepProgress.jsx';
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
    if (stepState === 0) {
      return <Step1/>;
    } else if (stepState === 1) {
      return <Step2/>; 
    } else if (stepState === 2) {
      return <Step3/>;
    } else {
      setStepState(0);
      return null;
    }
  }

  return (
    <>
      <StepProvider>
        <CartProvider>
          <div className='main'>
            <StepProgress stepState={stepState} />
            {stepChange()}
            <ProgressControl stepState={stepState} clickNext={handleClickNext} clickPre={handleClickPre}/>
          </div>
          <div className="cart">
            <Cart />
          </div>
        </CartProvider>
        </StepProvider>
    </>
  );
}