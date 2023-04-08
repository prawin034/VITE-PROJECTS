import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTALS,
} from '../utils/Actions';

const Cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;

    const tempCart = state.cart.find((i) => i.id === id + color);
    if (tempCart) {
      const tempCartItem = state.cart.map((cartItem) => {
        //id is gonna match
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount >= cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCartItem };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        img: product.images[0].url,
        price: product.price,
        max: product.stock,

        amount,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);

    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    let toggleCart = state.cart.map((cartitem) => {
      if (cartitem.id === id) {
        if (value === 'increase') {
          let newAmount = cartitem.amount + 1;

          if (newAmount > cartitem.max) {
            newAmount = cartitem.max;
          }
          return { ...cartitem, amount: newAmount };
        }
        if (value === 'decrease') {
          let newAmount = cartitem.amount - 1;

          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...cartitem, amount: newAmount };
        }
      } else {
        return cartitem;
      }
    });

    return { ...state, cart: toggleCart };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { price, amount } = cartItem;

        total.total_items += amount;
        total.total_amount = total.total_amount + price * amount;

        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );

    return { ...state, total_items, total_amount };
  }
  return { ...state };
};

export default Cart_reducer;
