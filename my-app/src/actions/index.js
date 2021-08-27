export const SET_SEARCH  = 'SET_SEARCH ';

function setSearch(payload) {
  return {
    type: SET_SEARCH,
    payload,
  };
}

export default setSearch;