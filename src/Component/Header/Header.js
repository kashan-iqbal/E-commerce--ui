import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import "./Style.css";



// =======================================FOR HAMBERGER SLIDE======================================================
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')
if(bar){
  bar.addEventListener('click',()=>{
      nav.classList.add("active" )
  })
}
if(close){
  close.addEventListener('click' ,() =>{
      nav.classList.remove("active")
  })
}





const Header = () => {
  return (
    <>
      <section id="header">
        <Link>
          <img src={logo} className="logo" alt="" />
        </Link>
        <div>
          <ul id="navbar">
            <li>
              <Link className="active" to="/home">
                home
              </Link>
            </li>
            <li>
              <Link to="/home">shop</Link>
            </li>
            <li>
              <Link to="/home">blog</Link>
            </li>
            <li>
              <Link to="/home">about</Link>
            </li>
            <li>
              <Link to="/home">contact</Link>
            </li>
            <li id="lg-bag">
              <Link to="/home">
                <i className="fa fa-thin fa-cart-shopping" />
              </Link>
            </li>
            <p id="close">
              <i className="fa fa-times" />{" "}
            </p>
          </ul>
        </div>
        <div id="mobile">
          <Link>
            <i className="fa fa-thin fa-cart-shopping" />
          </Link>
          <i id="bar" className="fas fa-outdent" />
        </div>
      </section>
    </>
  );
};

export default Header;
