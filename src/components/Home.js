import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container p-5 my-5 border">
      <center>
        <div>
          <h3>Hello User</h3>
          <h4>welcome To Food recipe search</h4>
          <h1 className="text-danger">SW!MATO</h1>
          <br />
          <br />
        </div>
        <div>
          <Link to="/search">
            <button className="btn btn-outline-success">
              Press here for search !tem
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
};

export default Home;
