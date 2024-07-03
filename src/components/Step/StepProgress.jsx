import { useEffect, useState } from 'react';
import '../../styles/StepProgress.css'

function StepProgress({stepState}) {

    const [isCheckedFirst, setIsCheckedFirst] = useState('1');
    const [isCheckedSecond, setIsCheckedSecond] = useState('2');
    const [itemBlackChangeSecond, setItemBlackChangeSecond] = useState({ backgroundColor: ''});
    const [itemBlackChangeThird, setItemBlackChangeThird] = useState({ color: ''});
    const [borderBlackChange, setBorderBlackChange] = useState({ color: '' });
    const [barBlackChange, setBarBlackChange] = useState({ backgroundColor: ''});
    const [iconChange, setIconChange] = useState({ color: '' });
    const [textChange, setTextChange] = useState({ color: '' });

    useEffect(() => {
    if (stepState === 1 ) {
      setIsCheckedFirst('✔')
      setItemBlackChangeSecond({ color: 'black' })
      setBarBlackChange({ backgroundColor: 'black'})
      setIconChange({ borderColor: 'black'})
      setTextChange({ color: 'black' })
    } else if (stepState === 2) {
      setIsCheckedFirst('✔')
      setIsCheckedSecond('✔')
      setItemBlackChangeSecond({ color: 'black' })
      setItemBlackChangeThird({ color: 'black' })
      setBorderBlackChange({ borderColor: 'black'})
      setBarBlackChange({ backgroundColor: 'black'})
      setIconChange({ borderColor: 'black', backgroundColor: 'black'})
      setTextChange({ color: 'white' })
    } else {
      setIsCheckedFirst('1')
      setIsCheckedSecond('2')
      setItemBlackChangeSecond({ color: '' })
      setItemBlackChangeThird({ color: '' })
      setBorderBlackChange({ borderColor: ''})
      setBarBlackChange({ backgroundColor: ''})
      setIconChange({ borderColor: '', backgroundColor: ''})
      setTextChange({ color: '' })
    }
  }, [stepState]);


  return (
    <>
    <h2 className="register-title">結帳</h2>
    <section className="progress-container">
      <div className="progress">
            <span className="progress-group" data-phase="address">
              <span className="progress-icon" data-order="1">
                <span className="progress-text" data-order="1">{isCheckedFirst}</span>
              </span>
              <span className="progress-label" data-order="1">寄送地址</span>
            </span>
            </div>
            <div className="progress">
            <span className="progress-group" data-phase="shipping">
              <span className="progress-icon" style={iconChange}>
              <span className="progress-text" style={textChange}>{isCheckedSecond}</span>
              </span>
              <span className="progress-label" style={itemBlackChangeSecond}>運送方式</span>
            </span>
            <span className="progress-bar" data-order="1"></span>
            </div>
            <div className="progress">
            <span className="progress-group" data-phase="credit-card">
              <span className="progress-icon" style={borderBlackChange}>
                <span className="progress-text" style={itemBlackChangeThird}>3</span>
              </span>
              <span className="progress-label" style={itemBlackChangeThird}>付款資訊</span>
              <span className="progress-bar" style={barBlackChange}></span>
            </span>
            </div>
          </section>
    </>
  )
}

export default StepProgress
