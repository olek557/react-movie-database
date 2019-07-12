import React from "react";
import { connect } from "react-redux";
import { changeTableView } from "../store/changeTebleView/actions";

import { FaThLarge, FaThList } from "react-icons/fa";

class ChangeTableView extends React.Component {
  handleChangeTableView(tableType) {
    this.props.changeTableView(tableType);
  }
  render() {
    return (
      <div>
        <button
          className={`btn-icon ${
            this.props.tableView === "tile" ? "active" : ''
          }`}
          onClick={() => {
            this.handleChangeTableView("tile");
          }}
        >
          <FaThLarge />
        </button>
        <button
          className={`btn-icon ${
            this.props.tableView === "rows" ? "active" : ''
          }`}
          onClick={() => {
            this.handleChangeTableView("rows");
          }}
        >
          <FaThList />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tableView: state.changeTableView.tableViewType };
};

const mapDispatchToProps = {
  changeTableView
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeTableView);
