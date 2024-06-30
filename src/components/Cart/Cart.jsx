import '../../styles/Cart.css'
import minusIcon from '../../styles/svg/minus-solid.svg';
import plusIcon from '../../styles/svg/plus-solid.svg';

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
]

function Item() {
  const listItem = items.map(itemContent => 
            <div className="product-container" data-count="0" key={itemContent.id}>
              <img className="img-container"src={itemContent.img} />
              <div className="product-info">
                <div className="product-name">{itemContent.name}</div>
                <div className="product-control-container">
                  <div className="product-control">
                    <div className="product-action">
                  <img className="product-icon minus" src={minusIcon} alt="Minus" />
                  </div>
                  <span className="product-count">1</span>
                   <div className="product-action">
                  <img className="product-icon plus" src={plusIcon} alt="Plus" />
                   </div>
                  </div>
                </div>
                <div className="product-price">${itemContent.price}</div>
              </div>
            </div>
  )
  return listItem
}

function Cart() {
  return (
    <>
        <section className="cart-container">
          <h3 className="cart-title">購物籃</h3>
          <section className="shopping-cart-list" data-total-price="0">
            <Item />
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
            <div className="cart-info-rightside price">$0000</div>
          </section>
        </section>
    </>
  )
}
export default Cart
