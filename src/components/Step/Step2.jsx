import '../../styles/Step2.css'

function Step2() {
  return (
      <section className="form-container">
            <form className="step2-colcol" data-phase="shipping">
              <h3 className="form-title">運送方式</h3>
              <section className="form-body">
            <label for="shipping-standard" className="radio-group" id="radio-group-shipping-standard" data-price="0">
            <input id="shipping-standard" type="radio" name="shipping" checked />
                  <div className="radio-info">
                    <div className="step2-col">
                      <div className="text">標準運送</div>
                      <div className="price"></div>
                    </div>
                    <div className="period">約 3~7 個工作天</div>
                  </div>
                  <div className="radio-box-border"></div>
                </label>
                <label for="shipping-dhl" className="radio-group" id="radio-group-shipping-dhl" data-price="500">
                  <input id="shipping-dhl" type="radio" name="shipping" />
                  <div className="radio-info">
                    <div className="step2-col">
                      <div className="text">DHL 貨運</div>
                      <div className="price"></div>
                    </div>
                    <div className="period">48 小時內送達</div>
                  </div>
                  <div className="radio-box-border"></div>
                </label>
              </section>
            </form>
            </section>
  )
}

export default Step2

