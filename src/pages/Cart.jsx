import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  // we get the value of cart using useSelector() method!
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  //
  useEffect(() => {
    // 0 is default value using setTotalAmount because in cart item will update or delete
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    // setTotalAmount() only work when any item in the cart
  }, [cart]);
  console.log('cart',cart)
  return (

    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          {/* with the cart summery */}
          <div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                {/* cart.lenght means total items of cart */}
                <span>Total Items: {cart.lenght}</span>
              </p>
            </div>

            <div>
              <p>Total Amount: ${totalAmount}</p>
              <button>Checkout Item</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-10">
          <h1>Cart Items</h1>
          {/* redirect to home screen */}
          <NavLink to={"/"}>
            <button
              className=" bg-green-600 text-slate-700 border-2 border-gray-700 font-semibold 
          text-[12px] p-1 px-3 uppercase "
            >
              Shope Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
