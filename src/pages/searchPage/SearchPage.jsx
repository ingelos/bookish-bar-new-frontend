function SearchPage() {
    
    return (
        <section className="search-results">
            <div>
                <div className="search-container">
                    <SearchBar
                        onSearch={handleSearch}
                        value={query}
                        />
                </div>

            </div>
        </section>
    )
}

export default SearchPage;