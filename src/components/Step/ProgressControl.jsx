import '../../styles/ProgressControl.css'

function ProgressControl() {

  return (
    <>
          <span class="col-line"></span>
          <section class="step-button" data-phase="">
            <button class="step-button-pre">
              上一步
            </button>
            <button class="step-button-next">
              下一步
            </button>
          </section>
    </>
  )
}

export default ProgressControl
