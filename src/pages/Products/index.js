import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Component/Layout";
import { p2 } from "../../Component/img";
import "./style.css";
const Products = () => {
  return (
    <Layout>
      <section id="products-header">
        <h2>#stayhome</h2>
        <p>Save More with Coupons & upto 70% off</p>
      </section>
      <h2 style={{ marginTop: "4rem", textAlign: "center" }}>All Products</h2>
      <section id="product1" className="section-p1">
        <div className="filters ">
          <h2 style={{ marginTop: "2.5rem", textAlign: "center" }}>Filters</h2>
          {/* <div className="text"> */}
          {/*                    filter by price                 */}
          {/* <h4 className="mx-3 mt-5">Filter By catageory</h4>
            <div className="d-flex flex-column mx-3">
              {catageory?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handlerFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>
        
            <h4 className="mx-3 mt-3 ">Filter By price</h4>
            <div className="d-flex flex-column mx-3">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {prices?.map((p) => (
                  <div key={p.id}>
                    <Radio value={p.array}> {p.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            <div className="d-flex flex-column w-50  mt-4  mx-3">
              <button
                className="btn btn-danger"
                onClick={() => window.location.reload()}
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div> */}
        </div>
        <div className="proContainer ">
          <div className="pro ">
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
      <section id="pagination" className="section-p1">
        <button className="pagination_btn">Load More</button>
      </section>
    </Layout>
  );
};

export default Products;
