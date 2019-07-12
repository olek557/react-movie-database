export const getNameFromId = (id, namesList) => {
  if (namesList[id]) {
    return namesList[id].name;
  }
};
