import React from "react";
import { useState } from "react";
import Products from "./Products";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "329afd50";
  const YOUR_APP_KEY = "14146a3e184c9e22665ccd714707d97f";

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(search);
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`
    )
      .then((Response) => Response.json())
      .then((data) => setData(data.hits))
      .catch((err) => {
        alert("Sorry No data found, Try to enter valid keyword");
        console.log(err.message);
      });
  };
  return (
    <div className="container-fluid p-5 my-5 border">
      <form onSubmit={SubmitHandler} className="form-group">
        <input
          className="form-control" type="text" placeholder="Enter Recipe Here" value={search}
          onChange={(e) => setSearch(e.target.value)}
        /><br />
        <center>
          <input
            type="submit" value="search" className="btn btn-primary mb-2" />
        </center>
      </form>

      {data.length >= 1 ? <Products data={data} /> : null}
    </div>
  );
};

export default Search;
