import Main from '../../main.jsx';
import StepProgress from './StepProgress.jsx';
import Step1 from './Step1.jsx';
import Step2 from './Step2.jsx';
import Step3 from './Step3.jsx';
import ProgressControl from './ProgressControl.jsx';
import '../../styles/App.css'

function App() {
  return (
    <div className='main'>
    <Main>
      <StepProgress />
      <Step1 />
      <ProgressControl />
    </Main>
    </div>
  );
}

export default App;