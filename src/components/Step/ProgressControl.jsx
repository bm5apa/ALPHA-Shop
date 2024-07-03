import { useEffect, useState } from 'react';
import '../../styles/ProgressControl.css'

function ProgressControl({stepState, clickPre , clickNext}) {
  
  const [lastPageChange, setLastPageChange] = useState('下一步');
  const [firstPageChange, setFirstPageChange] = useState({visibility: 'hidden'});

  useEffect(() => {
    if(stepState === 0){
      setFirstPageChange({visibility: 'hidden'})
      setLastPageChange('下一步')
    }else if(stepState === 1 || stepState === 2){
      setFirstPageChange({display: ''})
      setLastPageChange('確認資訊')
    }else{
      setFirstPageChange({display: ''})
      setLastPageChange('下一步')
    }
  }, [stepState]);


  return (
    <>
    <div className='progress-control'>
          <span className="col-line"></span>
          <section className="step-button" data-phase="">
            <button className="step-button-pre" onClick={clickPre} style={firstPageChange}>
              上一步
            </button>
            <button className="step-button-next" onClick={clickNext}>
              {lastPageChange}
            </button>
          </section>
        </div>
    </>
  )
}

export default ProgressControl
