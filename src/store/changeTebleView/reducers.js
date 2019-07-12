import { CHANGE_TABLE_VIEW } from "./actions";

const defaultState = {
  tableViewType: 'tile'
};

const changeTableViewReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_TABLE_VIEW:
      return { ...state, tableViewType: action.payload };
  }
  return state;
};

export default changeTableViewReducer;
