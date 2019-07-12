export const CHANGE_TABLE_VIEW = "CHANGE_TABLE_VIEW";

export const changeTableView = tableViewType => {
  return {
    type: CHANGE_TABLE_VIEW,
    payload: tableViewType
  };
};
