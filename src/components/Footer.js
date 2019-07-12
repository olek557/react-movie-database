import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="social-links">
              <a href="https://facebook.com" className="btn-icon icon-fb" area-label="facebook">
              </a>
              <a href="https://twiter.com" className="btn-icon icon-tw" area-label="facebook">
              </a>
              <a href="https://linkedin.com" className="btn-icon icon-tl" area-label="facebook">
              </a>
              <a href="/about" className="about-link">
                About
              </a>
            </div>
            <div className="copyright">2019, All rights reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
}
