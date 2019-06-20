import React from "react";

function Movie() {
  return (
    <div>
      <div class="container films-detail-view">
        <div class="row header">
          <div class="col-12">
            <a href="index.html" class="back-btn">
              Back to your wathlist
            </a>
            <div class="push-right">
              <span class="share-btn">Share</span>
              <span class="delete-btn" />
            </div>
          </div>
        </div>
        <div class="row m-bottom-25">
          <div class="film-item--title">
            <a href="">Fight club</a> <span class="film-year">(1999)</span>
            <div class="film-imbd">
              9.30
              <div class="f-z-24">IMDb</div>
            </div>
          </div>
          <div class="film-item--info-row mod-grey-text">
            <div class="info-row--item">2h 22m</div>
            <div class="info-row--item">Crime, Drama</div>
          </div>
        </div>
        <div class="row m-bottom-25">
          <div class="film-item--poster">
            <img
              src="https://cdn.shopify.com/s/files/1/0969/9128/products/Art_-_Fight_Club_Poster_-_Hollywood_Collection_431209b6-70d6-42b9-9204-937c0ce5c440.jpg?v=1480320470"
              alt="poster"
            />
          </div>
          <div class="film-trailer">
            <iframe
              src="https://www.youtube.com/embed/EJzuT5HT2QA"
              frameborder="0"
              allowfullscreen
            />
          </div>
        </div>
        <div class="row m-bottom-25">
          <div class="film-info--def">
            <div class="def--name">Director:</div>
            <div class="def-descr">Frank Darabont</div>
          </div>
          <div class="film-info--def">
            <div class="def--name">Stars:</div>
            <div class="def-descr">Tim Robbins, Morgan Freeman, Bob Gunton</div>
          </div>
        </div>
        <div class="row">
          <div class="film-info--descr">
            Two imprisoned men bond over a number of years, finding solace and
            eventual redemption through acts of common decency.
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="social-links">
                <a href="" class="btn-icon icon-fb" />
                <a href="" class="btn-icon icon-tw" />
                <a href="" class="btn-icon icon-tl" />
                <a href="" class="about-link">
                  About
                </a>
              </div>
              <div class="copyright">2017, All rights reserved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
