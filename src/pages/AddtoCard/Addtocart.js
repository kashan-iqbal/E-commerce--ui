import React from "react";
import { Link } from "react-router-dom";
import { p2 } from "../../Component/img";
import "./Style.css";

function Addtocart() {
  return (
    <>
      <div>
        <section id="cart" className="section-p1">
          <table width="100%">
            <thead>
              <tr>
                <td>Remove</td>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="#">
                    <i className="far fa-times-circle" />
                  </Link>
                </td>
                <td>
                  <img src={p2} alt="" />
                </td>
                <td>Cartoon Astronaut T-Shirts</td>
                <td>$118.19</td>
                <td>
                  <input type="number" defaultValue={1} />
                </td>
                <td>$118.19</td>
              </tr>
              <tr>
                <td>
                  <Link to="#">
                    <i className="far fa-times-circle" />
                  </Link>
                </td>
                <td>
                  <img src={p2} alt="" />
                </td>
                <td>Cartoon Astronaut T-Shirts</td>
                <td>$118.19</td>
                <td>
                  <input type="number" defaultValue={1} />
                </td>
                <td>$118.19</td>
              </tr>{" "}
              <tr>
                <td>
                  <Link to="#">
                    <i className="far fa-times-circle" />
                  </Link>
                </td>
                <td>
                  <img src={p2} alt="" />
                </td>
                <td>Cartoon Astronaut T-Shirts</td>
                <td>$118.19</td>
                <td>
                  <input type="number" defaultValue={1} />
                </td>
                <td>$118.19</td>
              </tr>{" "}
              <tr>
                <td>
                  <Link to="#">
                    <i className="far fa-times-circle" />
                  </Link>
                </td>
                <td>
                  <img src={p2} alt="" />
                </td>
                <td>Cartoon Astronaut T-Shirts</td>
                <td>$118.19</td>
                <td>
                  <input type="number" defaultValue={1} />
                </td>
                <td>$118.19</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="cart-add" className="section-p1">
          <div id="coupon">
            <input type="text" placeholder="enter your coupan" />
            <button className="normal">Apply</button>
          </div>
          <div id="subtotal">
            <h3>Cards total</h3>
            <table>
              <tbody>
                <tr>
                  <td>card subtoal is</td>
                  <td> $ 3939</td>
                </tr>
                <tr>
                  <td>shipping</td>
                  <td> Free</td>
                </tr>
                <tr>
                  <td>
                    <strong>card subtoal is</strong>
                  </td>
                  <td>
                    {" "}
                    <strong>$ 3939 </strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="normal"> proced to payment</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Addtocart;
