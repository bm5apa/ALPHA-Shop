import '../../styles/Step2.css'

function Step2() {
  return (
      <section class="form-container">
            <form class="step2-colcol" data-phase="shipping">
              <h3 class="form-title">運送方式</h3>
              <section class="form-body">
            <label for="shipping-standard" class="radio-group" id="radio-group-shipping-standard" data-price="0">
            <input id="shipping-standard" type="radio" name="shipping" checked />
                  <div class="radio-info">
                    <div class="step2-col">
                      <div class="text">標準運送</div>
                      <div class="price"></div>
                    </div>
                    <div class="period">約 3~7 個工作天</div>
                  </div>
                  <div class="radio-box-border"></div>
                </label>
                <label for="shipping-dhl" class="radio-group" id="radio-group-shipping-dhl" data-price="500">
                  <input id="shipping-dhl" type="radio" name="shipping" />
                  <div class="radio-info">
                    <div class="step2-col">
                      <div class="text">DHL 貨運</div>
                      <div class="price"></div>
                    </div>
                    <div class="period">48 小時內送達</div>
                  </div>
                  <div class="radio-box-border"></div>
                </label>
              </section>
            </form>
            </section>
  )
}

export default Step2

