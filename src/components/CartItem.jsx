import React from "react";
import {  toast } from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    // taking remove method from reducer
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };
  return (
    <div>
      <div>
        <div>
          <img alt="img" src={item.image} />
        </div>

        <div>
          <div>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
            <div>
              <p>{item.price}</p>
              <div onClick={removeFromCart}>
                <AiTwotoneDelete />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
