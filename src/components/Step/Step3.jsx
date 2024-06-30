import '../../styles/Step3.css'

function Step3() {
  return (
          <section className="form-container">
              <form className="col" data-phase="credit-card">
              <h3 className="form-title">付款資訊</h3>
              <section className="form-body">
                <div className="step3-col">
                  <div className="input-group">
                    <div className="input-label">持卡人姓名</div>
                    <input id="input-name" type="text" placeholder="John Doe" />
                  </div>
                </div>
                <div className="step3-col">
                  <div className="input-group">
                    <div className="input-label">卡號</div>
                    <input id="input-credit" type="text" placeholder="1111 2222 3333 4444" />
                  </div>
                </div>
                <div className="step3-col">
                  <div className="input-group">
                    <div className="input-label">有效期限</div>
                    <input id="input-date" type="text" placeholder="MM/YY" />
                  </div>
                  <div className="input-group">
                    <div className="input-label" id="input-label-ccv">CVC / CCV</div>
                    <input id="input-ccv" type="text" placeholder="123" />
                  </div>
                </div>
              </section>
            </form>
            </section>
  )
}

export default Step3


