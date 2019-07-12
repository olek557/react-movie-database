import React from "react";
import { Link, withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.props.history.push(`/search/${event.target.value}`);
  }
  render() {
    return (
      <div className="container">
        <header className="header">
          <ul className="header__nav">
            <li className="header__item">
              <Link className="black-link" to="/">
                Popular movies
              </Link>
            </li>
            <li className="header__item">
              <Link className="black-link" to="/favorites">
                Your favorite movies
              </Link>
            </li>
          </ul>
            <input placeholder="Search" className="header__search" onKeyUp={this.handleSearch}/>
        </header>
      </div>
    );
  }
}
export default withRouter(Header);
