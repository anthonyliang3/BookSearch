import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBooks, addWishlist } from '../redux/actions';
import { BooksContainer, AllBooksContainer, SearchContainer, MainContainer } from '../StyledComponents';
import Wishlist from './Wishlist';

const Books = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const renderBooks = () => {
    if (state.loading) {
      return <h1>Loading...</h1>
    }
    return state.items.items?.map(book => {
      return (
          <AllBooksContainer>
            <img id={book.id} onClick={handleAddWishlist} src={book.volumeInfo.imageLinks?.smallThumbnail}/>
            <BooksContainer>
              <h3>{book.volumeInfo.title}</h3>
              <div><b>Authors</b>: {book.volumeInfo.authors?.map(author => book.volumeInfo.authors.length === 1 ? <span>{author}</span> : <span>{author}, </span>)}</div>
              <div><b>Publisher</b>: {book.volumeInfo.publisher}</div>
              <div><b>Publish Date</b>: {book.volumeInfo.publishedDate}</div>
              <div><b>Description</b>: {book.volumeInfo.description}</div>
            </BooksContainer>
          </AllBooksContainer>

      )
    })
  }

  const handleAddWishlist = (e) => {
    dispatch(addWishlist(e.target.id))
  }

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchBooks(searchValue));
    setSearchValue(searchValue => '');
  }

  const onSearchChange = (e) => {
    setSearchValue(searchValue => e.target.value);
  }

  return (
    <div>
      <SearchContainer>
        <h1>Book Search</h1>
        <form onSubmit={handleSearch}>
          <input onChange={onSearchChange} value={searchValue}></input>
          <button>Search</button>
        </form>
      </SearchContainer>
      <MainContainer>
        <div>
          {renderBooks()}
        </div>
        <Wishlist/>
      </MainContainer>
    </div>
  )
}

export default Books;
