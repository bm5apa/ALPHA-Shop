import '../../styles/StepProgress.css'

function StepProgress() {

  return (
    <>
    <h2 className="register-title">結帳</h2>
    <section className="progress-container">
      <div className="progress">
            <span className="progress-group" data-phase="address">
              <span className="progress-icon" data-order="1">
                <span className="progress-text" data-order="1">1</span>
              </span>
              <span className="progress-label" data-order="1">寄送地址</span>
            </span>
            </div>
            <div className="progress">
            <span className="progress-group" data-phase="shipping">
              <span className="progress-icon" data-order="2">
              <span className="progress-text" data-order="2">2</span>
              </span>
              <span className="progress-label" data-order="2">運送方式</span>
            </span>
            <span className="progress-bar" data-order="1"></span>
            </div>
            <div className="progress">
            <span className="progress-group" data-phase="credit-card">
              <span className="progress-icon" data-order="3">
                <span className="progress-text" data-order="3">3</span>
              </span>
              <span className="progress-label" data-order="3">付款資訊</span>
              <span className="progress-bar" data-order="2"></span>
            </span>
            </div>
          </section>
    </>
  )
}

export default StepProgress
