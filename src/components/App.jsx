import React from 'react';
import { useState } from 'react';
import Main from './Step/MainWrapper.jsx';
import StepProgress from './Step/StepProgress.jsx';
import { Step1, Step2, Step3 } from './Step/Step.jsx';
import ProgressControl from './Step/ProgressControl.jsx';
import Cart from './Cart/Cart.jsx';
import '../styles/App.css';


export default function App() {
  return (
    <>
    <div className='main'>
      <Main>
        <StepProgress />
        <Step1 />
        <ProgressControl />
      </Main>
    </div>
    <div className="cart">
      <Cart/>
    </div>
    </>
  );
}