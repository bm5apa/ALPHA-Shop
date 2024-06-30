import React from 'react';
import Main from './Step/MainWrapper.jsx';
import StepProgress from './Step/StepProgress.jsx';
import Step1 from './Step/Step1.jsx';
import Step2 from './Step/Step2.jsx';
import Step3 from './Step/Step3.jsx';
import ProgressControl from './Step/ProgressControl.jsx';
import Cart from './Cart/Cart.jsx';
import '../styles/App.css';

function App() {
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

export default App;