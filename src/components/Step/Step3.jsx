import '../../styles/Step3.css'

function Step3() {
  return (
              <form class="col" data-phase="credit-card">
              <h3 class="form-title">付款資訊</h3>
              <section class="form-body">
                <div class="step3-col">
                  <div class="input-group">
                    <div class="input-label">持卡人姓名</div>
                    <input id="input-name" type="text" placeholder="John Doe" />
                  </div>
                </div>
                <div class="step3-col">
                  <div class="input-group">
                    <div class="input-label">卡號</div>
                    <input id="input-credit" type="text" placeholder="1111 2222 3333 4444" />
                  </div>
                </div>
                <div class="step3-col">
                  <div class="input-group">
                    <div class="input-label">有效期限</div>
                    <input id="input-date" type="text" placeholder="MM/YY" />
                  </div>
                  <div class="input-group">
                    <div class="input-label" id="input-label-ccv">CVC / CCV</div>
                    <input id="input-ccv" type="text" placeholder="123" />
                  </div>
                </div>
              </section>
            </form>
  )
}

export default Step3


