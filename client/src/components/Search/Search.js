import React from 'react'
import SearchTitle from './SearchTitle'
import SearchBar from './SearchBar'
import BookResultList from './BookResultList'

const Search = () => {
    return (
        <div>
            <SearchTitle />
            <br />
            <SearchBar />
            <br />
            <BookResultList />
        </div>
    )
}

export default Search
