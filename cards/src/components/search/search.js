import React, {useState} from 'react';
import SearchIcon from "@mui/icons-material/Search";
import "./search.css"

export const Search = ({handleChange, filter}) => {

    return (
        <div className="search_block">
            <h5>Filter by keywords</h5>
            <div className="search">
                <input type="text" value={filter} onChange={(e)=>handleChange(e)} className="search-field" placeholder="The most successful IT companies in 2020"/>
                <SearchIcon className="search-icon"/>
            </div>
        </div>
    );
};

