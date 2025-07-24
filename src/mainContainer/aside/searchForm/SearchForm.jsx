import "./searchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <input
        type="search"
        id="search-input"
        placeholder="Search location..."
        autofocus
        required
      />
      <button type="submit" id="search-button">
        <img
          src="./assets/media/icons/search icon.svg"
          alt="search icon"
          class="search-icon"
        />
      </button>
    </form>
  );
}

export default SearchForm;
