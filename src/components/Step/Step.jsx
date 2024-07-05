import React, { createContext, useContext, useState } from 'react';
import '../../styles/Step1.css'
import '../../styles/Step2.css'
import '../../styles/Step3.css'

export function Step1() {
  return (
  <section className="form-container">
  <form data-phase="address">
    <h3 className="form-title">寄送地址</h3>
      <div className="step1-col">
        <div className="input-group-mx">
          <div className="input-label">稱謂</div>
          <div className="select-container">
            <select id="input-mx">
              <option value="mr">先生</option>
              <option value="ms">女士</option>
              <option value="mx">不明</option>
            </select>
          </div>
        </div>
        <div className="input-group-name">
          <div className="input-label">姓名</div>
          <input type="text" id="input-name" placeholder="請輸入姓名" />
        </div>
      </div>
      <div className="step1-col">
        <div className="input-group-phone">
          <div className="input-label">電話</div>
          <input type="tel" id="input-phone" placeholder="請輸入行動電話" />
        </div>
        <div className="input-group-email">
          <div className="input-label">Email</div>
          <input type="email" id="input-email" placeholder="請輸入電子郵件" />
        </div>
      </div>
      <div className="step1-col">
        <div className="input-group-county">
          <div className="input-label">縣市</div>
          <div className="select-container">
            <select id="input-county" required>
              <option value="">請選擇縣市</option>
              <option value="KLU">基隆市</option>
              <option value="TPH">新北市</option>
              <option value="TPE">臺北市</option>
              <option value="TYC">桃園市</option>
              <option value="HSH">新竹縣</option>
              <option value="HSC">新竹市</option>
              <option value="MAC">苗栗市</option>
              <option value="MAL">苗栗縣</option>
              <option value="TXG">臺中市</option>
              <option value="CWH">彰化縣</option>
              <option value="CWS">彰化市</option>
              <option value="NTC">南投市</option>
              <option value="NTO">南投縣</option>
              <option value="YLH">雲林縣</option>
              <option value="CHY">嘉義縣</option>
              <option value="CYI">嘉義市</option>
              <option value="TNN">臺南市</option>
              <option value="KHH">高雄市</option>
              <option value="IUH">屏東縣</option>
              <option value="PTS">屏東市</option>
              <option value="ILN">宜蘭縣</option>
              <option value="ILC">宜蘭市</option>
              <option value="HWA">花蓮縣</option>
              <option value="HWC">花蓮市</option>
              <option value="TTC">臺東市</option>
              <option value="TTT">臺東縣</option>
              <option value="PEH">澎湖縣</option>
              <option value="KMN">金門縣</option>
              <option value="LNN">連江縣</option>
            </select>
          </div>
        </div>
        <div className="input-group-address">
          <div className="input-label">地址</div>
          <input type="text" id="input-address" placeholder="請輸入地址" />
        </div>
      </div>
  </form>
  </section>
  )
}

export function Step2() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
      <section className="form-container">
            <form className="step2-colcol" data-phase="shipping">
              <h3 className="form-title">運送方式</h3>
              <section className="form-body">
            <label htmlFor="shipping-standard" className="radio-group" id="radio-group-shipping-standard" data-price="0">
            <input id="shipping-standard" type="radio" name="shipping" checked={isChecked}  onChange={handleCheckboxChange} />
                  <div className="radio-info">
                    <div className="step2-col">
                      <div className="text">標準運送</div>
                      <div className="price"></div>
                    </div>
                    <div className="period">約 3~7 個工作天</div>
                  </div>
                  <div className="radio-box-border"></div>
                </label>
                <label htmlFor="shipping-dhl" className="radio-group" id="radio-group-shipping-dhl" data-price="500">
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

export function Step3() {

  return (
          <section className="form-container">
              <form className="col" data-phase="credit-card">
              <h3 className="form-title">付款資訊</h3>
              <section className="form-body">
                <div className="step3-col">
                  <div className="input-group">
                    <div className="input-label">持卡人姓名</div>
                    <input id="cardHolder" name="cardHolder" type="text" placeholder="John Doe" />
                  </div>
                </div>
                <div className="step3-col">
                  <div className="input-group">
                    <div className="input-label">卡號</div>
                    <input id="cardNumber" name="cardNumber" type="text" placeholder="1111 2222 3333 4444"/>
                  </div>
                </div>
                <div className="step3-col">
                  <div className="input-group">
                    <div className="input-label">有效期限</div>
                    <input id="expiryDate" name="expiryDate" type="text" placeholder="MM/YY" />
                  </div>
                  <div className="input-group">
                    <div className="input-label" id="input-label-ccv">CVC / CCV</div>
                    <input id="ccv" name="ccv" type="text" placeholder="123" />
                  </div>
                </div>
              </section>
            </form>
            </section>
  )
}

