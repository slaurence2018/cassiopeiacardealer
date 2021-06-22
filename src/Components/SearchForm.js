import {useState} from 'react'


const SearchForm = (props) => {
    const [modelFilter, setModelFilter] = useState("")
    const [makeFilter, setMakeFilter] = useState("")
    const [yearFilter, setYearFilter] = useState("")


    const handleSearch = (evt) => {
        evt.preventDefault()
        let filtersnew = {make: makeFilter, model: modelFilter, year: yearFilter}
        props.setFiltersList(filtersnew)
        return
    }


    return (
      <div>
        <div>
        <label>Model:</label>
          <input type="text" id="model-input" aria-label={"Model:"}
                 value={modelFilter}
                 onChange={(event) => {
                   setModelFilter(event.target.value)
                 }}
          />
          </div>
        <div>
        <label>Make:</label>
          <input type="text" id="make-input" aria-label={"Make:"}
                 value={makeFilter}
                 onChange={(event) => {
                   setMakeFilter(event.target.value)
                 }}
          />
          </div>
        <div>
        <label>Year:</label>
          <input type="text" id="year-input" aria-label={"Year:"}
                 value={yearFilter}
                 onChange={(event) => {
                   setYearFilter(event.target.value)
                 }}
          />
          </div>
        <br/>
        <button className="Search-button" onClick={handleSearch}>Search</button>
      </div>
          );
}

export default SearchForm