import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
      {/* <label htmlFor="search">Search:</label> */}
        <input
          name="q"
          list="book"
          type="text"
          onChange={handleInputChange}
          className="form-control"
          placeholder="Search Books"
          id="book"
        />
        <button type="submit" onClick={handleFormSubmit}>
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
