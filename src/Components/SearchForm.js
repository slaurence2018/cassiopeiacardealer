import {useState} from 'react'


const SearchForm = (props) => {
    const [modelFilter, setModelFilter] = useState("")
    const [makeFilter, setMakeFilter] = useState("")
    const [fromYearFilter, setFromYearFilter] = useState("")


    const handleSearch = (evt) => {
        evt.preventDefault()
        let filtersnew = {make: makeFilter, model: modelFilter, year: fromYearFilter}
        props.setFiltersList(filtersnew)
        return
    }


  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
      <div>
        <label htmlFor="Make">Make</label>{"  "}
        <input type="text" id="make-input" aria-label={"Make:"}
               value={makeFilter}
               onChange={(event) => {
                 setMakeFilter(event.target.value)
               }}
        />
      </div>
      <div>
        <label htmlFor="Model">Model</label>{"  "}
        <input type="text" id="model-input" aria-label={"Model:"}
               value={modelFilter}
               onChange={(event) => {
                 setModelFilter(event.target.value)
               }}
        />
      </div>

      <div>
        <label htmlFor="fromYear">From Year</label>{"  "}
        <input type="text" id="from-year-input" aria-label={"From Year:"}
               value={fromYearFilter}
               onChange={(event) => {
                 setFromYearFilter(event.target.value)
               }}
        />
      </div>
      <div>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchForm