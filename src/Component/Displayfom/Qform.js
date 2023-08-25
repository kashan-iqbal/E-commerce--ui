import React from "react";
import "./Style.css";

const Qform = () => {
  return (
    <>
      <section className="newsletter section-m1 section-p1">
        <div className="newstext">
          <h4>sign in for Newsletter</h4>
          <p>
            get email update about our latest shop and
            <span>Special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="ENTER YOUR E-MAIL" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </>
  );
};

export default Qform;
