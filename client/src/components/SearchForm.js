import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props =>
  <form className="search">
    <div className="form-group">
      <label htmlFor="searchT">Search Term:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="searchT"
        type="text"
        className="form-control"
        id="searchT"
      />
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn black waves-effect waves-light"
      >
        Search
      </button>
    </div>
  </form>;

export default SearchForm;
