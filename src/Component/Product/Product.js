import React from "react";
import { Link } from "react-router-dom";
import { p1, p2, p3 } from "../img";
import "./Style.css";

const Product = () => {
  return (
    <>
      <section id="product1" className="section-p1">
        <h2>Feature Product</h2>
        <p>Summer Collection New Arival Desigin</p>
        <div className="proContainer">
          <div className="pro">
            <img src={p1} alt="" />
            <div className="des">
              <span>addias</span>
              <h5>Astronote T-Shirt</h5>
              <div className="start">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>78$</h4>
            </div>
            <Link to="/"> </Link>
          </div>
          <div className="pro">
            <img src={p2} alt="" />
            <div className="des">
              <span>addias</span>
              <h5>Astronote T-Shirt</h5>
              <div className="start">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>78$</h4>
            </div>
            <Link to="/">
              {" "}
              <i className="fa fal fa-shopping-cart"></i>
            </Link>
          </div>
          <div className="pro">
            <img src={p3} alt="" />
            <div className="des">
              <span>addias</span>
              <h5>Astronote T-Shirt</h5>
              <div className="start">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>78$</h4>
            </div>
            <Link to="/">
              {" "}
              <i className="fa fal fa-shopping-cart"></i>
            </Link>
          </div>
          <div className="pro">
            <img src={p3} alt="" />
            <div className="des">
              <span>addias</span>
              <h5>Astronote T-Shirt</h5>
              <div className="start">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>78$</h4>
            </div>
            <Link to="/">
              {" "}
              <i className="fa fal fa-shopping-cart"></i>
            </Link>
          </div>{" "}
          <div className="pro">
            <img src={p3} alt="" />
            <div className="des">
              <span>addias</span>
              <h5>Astronote T-Shirt</h5>
              <div className="start">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>78$</h4>
            </div>
            <Link to="/">
              {" "}
              <i className="fa fal fa-shopping-cart"></i>
            </Link>
          </div>{" "}
          <div className="pro">
            <img src={p3} alt="" />
            <div className="des">
              <span>addias</span>
              <h5>Astronote T-Shirt</h5>
              <div className="start">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>78$</h4>
            </div>
            <Link to="/">
              {" "}
              <i className="fa fal fa-shopping-cart"></i>
            </Link>
          </div>{" "}
          <div className="pro">
            <img src={p3} alt="" />
            <div className="des">
              <span>addias</span>
              <h5>Astronote T-Shirt</h5>
              <div className="start">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>78$</h4>
            </div>
            <Link to="/">
              {" "}
              <i className="fa fal fa-shopping-cart"></i>
            </Link>
          </div>{" "}
          <div className="pro">
            <img src={p3} alt="" />
            <div className="des">
              <span>addias</span>
              <h5>Astronote T-Shirt</h5>
              <div className="start">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>78$</h4>
            </div>
            <Link to="/">
              {" "}
              <i className="fa fal fa-shopping-cart"></i>
            </Link>
          </div>{" "}
          <div className="pro">
            <img src={p3} alt="" />
            <div className="des">
              <span>addias</span>
              <h5>Astronote T-Shirt</h5>
              <div className="start">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>78$</h4>
            </div>
            <Link to="/">
              {" "}
              <i className="fa fal fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
