import { useState } from 'react'


const SearchForm = (props) => {
  const [modelFilter, setModelFilter] = useState("")
  const [makeFilter, setMakeFilter] = useState("")
  const [yearFilter, setYearFilter] = useState("")

  const handleSearch = (evt) => {

    if (makeFilter !== '' || modelFilter !== '' || yearFilter !== '') {
      const vehicles = props.data.filter(vehicle => vehicle.make === makeFilter || vehicle.model === modelFilter || vehicle.year === yearFilter);

      props.setVehicleList(vehicles)
    } else {
      props.setVehicleList(props.data)
    }

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
        <label htmlFor="Year">Year</label>{"  "}
        <input type="text" id="year-input" aria-label={"Year:"}
          value={yearFilter}
          onChange={(event) => {
            setYearFilter(event.target.value)
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