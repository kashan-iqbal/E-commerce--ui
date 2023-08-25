import React from "react";
import { Link } from "react-router-dom";
import { p2 } from "../img";
import "./Style.css";

const NewProduct = () => {
  return (
    <>
      <section id="product1" className="section-p1">
        <h2>New Arival</h2>
        <p>Summer Collection New Arival Desigin</p>
        <div className="proContainer">
          <div className="pro">
            <img src={p2} alt="ok" />
            <div className="des">
              <span>addias</span>
              <h5>Astronote T-Shirt</h5>
              <div className="start">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>78$</h4>
            </div>
            <Link>
              <i className="fa fal fa-shopping-cart" />
            </Link>
          </div>
          <div className="pro">
            <img src={p2} alt="ok" />
            <div className="des">
              <span>addias</span>
              <h5>Astronote T-Shirt</h5>
              <div className="start">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>78$</h4>
            </div>
            <Link>
              {" "}
              <i className="fa fal fa-shopping-cart" />{" "}
            </Link>
          </div>
          <div className="pro">
            <img src={p2} alt="ok" />
            <div className="des">
              <span>addias</span>
              <h5>Astronote T-Shirt</h5>
              <div className="start">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>78$</h4>
            </div>
            <Link>
              <i className="fa fal fa-shopping-cart" />{" "}
            </Link>
          </div>{" "}
          <div className="pro">
            <img src={p2} alt="ok" />
            <div className="des">
              <span>addias</span>
              <h5>Astronote T-Shirt</h5>
              <div className="start">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>78$</h4>
            </div>
            <Link>
              <i className="fa fal fa-shopping-cart" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewProduct;
