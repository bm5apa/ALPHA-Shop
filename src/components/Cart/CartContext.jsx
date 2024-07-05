import { createContext, useState } from 'react';

export const CartContext = createContext();
 
export function CartProvider({ children }){
const [items, setItems] = useState([
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
  ]);


  function handleClickPlus(id) {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  }
  
  function handleClickMinus(id) {
    setItems(items.map(item => 
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  }

  const [cardInfo, setCardInfo] = useState({
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    ccv: ''
  });

  const handleCardInfoChange = (e) => {
  const { name, value } = e.target;
  setCardInfo(prevCardInfo => ({
    ...prevCardInfo,
    [name]: value
  }));
  };

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, handleClickPlus, handleClickMinus, cardInfo, handleCardInfoChange, totalAmount}}>
      {children}
    </CartContext.Provider>
  );

}