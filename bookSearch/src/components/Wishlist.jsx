import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBooks, addWishlist, removeWishlist } from '../redux/actions';
import { WishlistContainer, WishlistElementContainer } from '../StyledComponents';

const Wishlist = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleRemoveWishlist = (e) => {
    dispatch(removeWishlist(e.target.id));
  }

  return (
    <WishlistContainer>
      <h1>Wishlist</h1>
      {state.wishlist?.map(item =>
        <WishlistElementContainer id={item.id}>
          <div>{item.title}</div>
          <button id={item.id} onClick={handleRemoveWishlist}>Delete</button>
        </WishlistElementContainer>
      )}
    </WishlistContainer>

  )
}

export default Wishlist;