


const SearchForm = (props) => {


    const setFiltersList = props.setFiltersList;
    let filtersList = props.filtersList

    const handleSearch = (evt) => {
        alert('before push ' + filtersList)
        filtersList.push("something")
        setFiltersList(filtersList)
        alert('after push ' + filtersList)

        return
    }
    return (<button onClick={handleSearch}>Search</button>);
}

export default SearchForm