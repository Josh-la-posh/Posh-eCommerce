import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavSearch.css";
import { useSelector } from "react-redux";
import { PRODUCTS } from "../../../files/products";
import SearchDisplay from "../SearchDisplay/SearchDisplay";

function Search({ onSearch }) {
  const search = useSelector((state) => state.reducer.search);
  const FilterSearch = PRODUCTS.filter((item) => {
    return item.name.toLowerCase().includes(search);
  });
  return (
    <form className="search">
      <div className="search-content">
        <div className="input">
          <input
            type="text"
            placeholder="Search products, brands adn categories"
            onChange={onSearch}
          />
          <span className="icon">
            <FontAwesomeIcon icon="magnifying-glass" />
          </span>

          <SearchDisplay search={search} FilterSearch={FilterSearch} />
        </div>
      </div>
    </form>
  );
}

export default Search;
