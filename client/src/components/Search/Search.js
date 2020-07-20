import React, { useReducer } from 'react'
import SearchBar from './SearchBar'
import BookResultList from './BookResultList'

export const BookContext = React.createContext()

const reducer = (books, action) => {
    switch (action.type) {
        case 'add-books':
            return null
        case 'test':
            console.log("this is a test")
            console.log("is it working")
        case 'book-test':
            return action.payload
    }
}

const Search = () => {
    const [books, dispatch] = useReducer(reducer, []);

    return (
        <BookContext.Provider
            value={{ booksState: books, booksDispatch: dispatch }}
        >
            <SearchBar />
            <br />
            <BookResultList />
        </BookContext.Provider>
    )
}

export default Search
