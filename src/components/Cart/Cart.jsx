import '../../styles/Cart.css'
import { useState } from 'react';
import minusIcon from '../../styles/svg/minus-solid.svg';
import plusIcon from '../../styles/svg/plus-solid.svg';

export default function Cart() {

  const items = [
    {
      id: '1',
      name: '貓咪罐罐',
      img: 'https://picsum.photos/300/300?text=1',
      price: 100,
      quantity: 2,
    },
    {
      id: '2',
      name: '貓咪干干',
      img: 'https://picsum.photos/300/300?text=2',
      price: 200,
      quantity: 1,
    },
  ];

    const [amount, setAmount] = useState(() => {
    const initialAmounts = {};
    items.forEach(item => {
      initialAmounts[item.id] = 0;
    });
    return initialAmounts;
  });


  function handleClickPlus(id) {
    setAmount(prevAmounts => ({
      ...prevAmounts,
      [id]: Math.min(prevAmounts[id] + 1, items.find(item => item.id === id).quantity)
    }));
  }
  
  function handleClickMinus(id) {
    setAmount(prevAmounts => ({
      ...prevAmounts,
      [id]: Math.max(prevAmounts[id] - 1, 0)
    }));
  }

function Items() {
  const listItem = items.map(itemContent => 
            <div className="product-container" key={itemContent.id}>
              <img className="img-container"src={itemContent.img} />
              <div className="product-info">
                <div className="product-name">{itemContent.name}</div>
                <div className="product-control-container">
                  <div className="product-control">
                    <div className="product-action">
                  <img className="product-icon minus" src={minusIcon} alt="Minus" onClick={() => handleClickMinus(itemContent.id)}/>
                  </div>
                  <span className="product-count">{amount[itemContent.id]}</span>
                   <div className="product-action">
                  <img className="product-icon plus" src={plusIcon} alt="Plus" onClick={() => handleClickPlus(itemContent.id)} />
                   </div>
                  </div>
                </div>
                <div className="product-price">${itemContent.price}</div>
              </div>
            </div>
  )
  return listItem
}

  return (
    <>
        <section className="cart-container">
          <h3 className="cart-title">購物籃</h3>
          <section className="shopping-cart-list" data-total-price="0">
            <Items />
          </section>
          <section className="cart-info shipping">
            <span className='cart-info-line'></span>
            <div className="cart-info-text">運費</div>
            <div className="price"></div>
            <div className="cart-info-rightside price">免費</div>
          </section>
          <section className="cart-info total">
            <span className='cart-info-line'></span>
            <div className="cart-info-text">小計</div>
            <div className="price"></div>
            <div className="cart-info-rightside price">${items.reduce((total, item) => total + item.price * amount[item.id], 0)}</div>
          </section>
        </section>
    </>
  )
}
