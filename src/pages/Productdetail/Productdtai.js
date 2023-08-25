import React from "react";
import { Link } from "react-router-dom";
import { p1 ,p3} from "../../Component/img";
import "./Style.css";

const Productdetail = () => {
  return (
    <>
      <div>
        <section id="prodetails" className="section-p1">
          <div className="single-pro-image">
            <img src={p1} width="100%" id="Main Img" alt="" />
          </div>
          <div className="single-pro-details">
            <h6>Home / T-Shirt</h6>
            <h4>Men's Fashion T Shirt</h4>
            <h2>$139.00</h2>
            <select>
              <option>Select Size</option>
              <option>XL</option>
              <option>XXL</option>
              <option>Small</option>
              <option>Large</option>
            </select>
            <input type="number" defaultValue={1} />
            <button className="normal">Add To Cart</button>
            <h4>Product Details</h4>
            <span>
              The Gildan Ultra Cotton T-shirt is made from Link substantial 6.0
              oz. per sq. yd. fabric constructed from 100% cotton, this classic
              fit preshrunk jersey knit provides unmatched comfort with each
              wear. Featuring Link taped neck and shoulder, and Link seamless
              double-needle collar, and available in Link range of colors, it
              offers it all in the ultimate head-turning package.
            </span>
          </div>
        </section>
        <section id="product1" className="section-p1">
          <h2>Related Product</h2>
          <p>Summer Collection New Arival Desigin</p>
          <div className="proContainer">
            <div className="pro">
              <img src={p3} alt="" />
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
              <Link to="/">
                {" "}
                <i className="fa fal fa-shopping-cart" />
              </Link>
            </div>
            <div className="pro">
              <img src={p3} alt="" />
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
              <Link to="/">
                {" "}
                <i className="fa fal fa-shopping-cart" />
              </Link>
            </div>
            <div className="pro">
              <img src={p3} alt="" />
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
              <Link to="/">
                {" "}
                <i className="fa fal fa-shopping-cart" />
              </Link>
            </div>
            <div className="pro">
              <img src={p3} alt="" />
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
              <Link to="/">
                {" "}
                <i className="fa fal fa-shopping-cart" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Productdetail;
