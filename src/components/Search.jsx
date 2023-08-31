import React from "react";

const Search = ({searchChange}) => {
    return (
        <div className="search">
            <input
            type="search"
            placeholder="find your friend"
            onChange={searchChange} />
        </div>
    )
}

export default Search;