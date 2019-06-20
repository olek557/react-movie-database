import React from "react";

function Favorites() {
  return (
    <div>
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="main-title mod-with-edit-btn">Your watchlist</h1>
              <a href="" class="share-btn">
                Share
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <a href="" class="btn-icon icon-tile" />
              <a href="" class="btn-icon icon-rows" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="container films-list"
        class="mod-rows"
        // ng-class="{'mod-rows': listView, 'mod-tile': !listView}"
      >
        <div class="row">
          <div class="col-12">
            <div class="film-item" ng-repeat="film in watchlist">
              <div class="film-item--poster">
                <img
                  src="https://img.posterlounge.de/img/products/680000/676414/676414_poster_l.jpg"
                  alt="poster"
                />
              </div>
              <div class="film-item--info">
                <div class="film-item--title">
                  <a href="#!/movie">Fight club</a>
                  <span class="film-year">(1999)</span>
                </div>
                <div class="film-item--info-row">
                  <div class="info-row--item mod-grey-text">130 min</div>
                  <div class="info-row--item mod-grey-text hide-on-tile">
                    Drama
                  </div>
                  <div class="info-row--item">IMDb: 9.5</div>
                </div>
                <div class="film-info--def">
                  <div class="def--name">Director:</div>
                  <div class="def-descr">Devid Fincher</div>
                </div>
                <div class="film-info--def">
                  <div class="def--name">Stars:</div>
                  <div class="def-descr">Bred Pit</div>
                </div>
                <div class="film-info--descr">Lorem ipsum dolores amit</div>
                Lorem ipsum dolores amitLorem ipsum dolores amitLorem ipsum
                dolores amitLorem ipsum dolores amitLorem ipsum dolores
                amitLorem ipsum dolores amitLorem ipsum dolores amit
              </div>
            </div>
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

export default Favorites;
