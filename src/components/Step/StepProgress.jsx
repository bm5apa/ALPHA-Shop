import '../../styles/StepProgress.css'

function StepProgress() {

  return (
    <>
    <h2 class="register-title">結帳</h2>
    <section class="progress-container">
      <div className="progress">
            <span class="progress-group" data-phase="address">
              <span class="progress-icon" data-order="1">
                <span class="progress-text" data-order="1">1</span>
              </span>
              <span class="progress-label" data-order="1">寄送地址</span>
            </span>
            </div>
            <div className="progress">
            <span class="progress-group" data-phase="shipping">
              <span class="progress-icon" data-order="2">
              <span class="progress-text" data-order="2">2</span>
              </span>
              <span class="progress-label" data-order="2">運送方式</span>
            </span>
            <span class="progress-bar" data-order="1"></span>
            </div>
            <div className="progress">
            <span class="progress-group" data-phase="credit-card">
              <span class="progress-icon" data-order="3">
                <span class="progress-text" data-order="3">3</span>
              </span>
              <span class="progress-label" data-order="3">付款資訊</span>
              <span class="progress-bar" data-order="2"></span>
            </span>
            </div>
          </section>
    </>
  )
}

export default StepProgress
