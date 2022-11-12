import React from "react";
import { Link } from "react-router-dom";
import { Nav, Card, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="text-danger">
        <h4>Sw!mato</h4>
      </div>
      <footer className="d-flex justify-content-between text-white">
        <div class="p-2">
          <h4>About</h4>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            <p>about swimato</p>
          </Link>
          <p>help</p>
          <p>contact us</p>
        </div>
        <div class="p-2">
          <h4>API use in this Website</h4>
          <p>edamam.com</p>
          <p>recipe search API</p>
          <p>application Id, Key</p>
        </div>
        <div class="p-2">
          <h4>Learn More</h4>
          <p>privacy policy</p>
          <p>security</p>
          <p>terms</p>
        </div>
        <div class="p-2">
          <h4>Feedback</h4>
          <p>blog</p>
          <p>report fraud</p>
          <p>
            <abbr
              title="Author : Gangadhar Yadavilli"
              style={{ textDecoration: "none" }}
            >
              @Gangadhar
            </abbr>
          </p>
        </div>
        <div class="p-2">
          <h4>Follow Us</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
