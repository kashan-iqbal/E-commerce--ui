import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "./Style.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section id="header">
        <Link>
          <img src={logo} className="logo" alt="" />
        </Link>
        <div>
          <ul id="navbar" className={open && "active"} style={{ margin: "0" }}>
            <li>
              <Link className="active" to="/home">
                home
              </Link>
            </li>
            <li>
              <Link to="/home">shop</Link>
            </li>
            <li>
              {/* <Link to="/home">categories</Link> */}
              <div class="dropdown">
                <button class="dropbtn">categories</button>
                <div class="dropdown-content">
                  <Link>Link 1</Link>
                  <Link>Link 2</Link>
                  <Link>Link 3</Link>
                </div>
              </div>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>

            <li id="lg-bag">
              <Link to="/home">
                <i className="fa fa-thin fa-cart-shopping" />
              </Link>
            </li>
            <p id="close">
              <i className="fa fa-times" onClick={() => setOpen(false)} />
            </p>
          </ul>
        </div>
        <div id="mobile">
          <Link>
            <i className="fa fa-thin fa-cart-shopping" />
          </Link>
          <i
            id="bar"
            className="fas fa-outdent"
            onClick={() => setOpen(true)}
          />
        </div>
      </section>
    </>
  );
};

export default Header;
