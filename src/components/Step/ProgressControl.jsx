import '../../styles/ProgressControl.css'

function ProgressControl() {

  return (
    <>
          <span className="col-line"></span>
          <section className="step-button" data-phase="">
            <button className="step-button-pre">
              上一步
            </button>
            <button className="step-button-next">
              下一步
            </button>
          </section>
    </>
  )
}

export default ProgressControl
