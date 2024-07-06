import { useEffect, useState, useContext } from 'react';
import { StepContext } from './StepContext.jsx';
import { CartContext } from '../Cart/CartContext.jsx';
import '../../styles/ProgressControl.css'

export default function ProgressControl({stepState, clickPre, clickNext}) {

  const { totalAmount } = useContext(CartContext);
  const { cardInfo } = useContext(StepContext);
  const [lastPageChange, setLastPageChange] = useState("下一步");
  const [firstPageChange, setFirstPageChange] = useState({visibility: "hidden"});

  useEffect(() => {
    if(stepState === 0){
      setFirstPageChange({ visibility: "hidden" });
      setLastPageChange("下一步");
    }else if(stepState === 1){
      setFirstPageChange({display: ""});
      setLastPageChange("下一步");
    }else if(stepState === 2){
      setFirstPageChange({display: ""});
      setLastPageChange("確認資訊");
    }else{
      setFirstPageChange({display: ""});
      setLastPageChange("下一步");
    }
  }, [stepState]);

   const handleSubmit = () => {
    Object.entries(cardInfo).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
    console.log('Total:', totalAmount)
  };

  const handleClickNext = () => {
    if (stepState === 2) {
      handleSubmit();
    }
    clickNext();
  };

  return (
    <div className='progress-control'>
          <span className="col-line"></span>
          <section className="step-button" data-phase="">
            <button className="step-button-pre" onClick={clickPre} style={firstPageChange}>
              上一步
            </button>
            <button className="step-button-next" onClick={handleClickNext}>
              {lastPageChange}
            </button>
          </section>
        </div>
  )
}