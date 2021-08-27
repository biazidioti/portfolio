import fetchAPI from '../services/endpoints';

export const LOADING = 'LOADING';

export const FINISH_LOADING = 'FINISH_LOADING';

export const GET_API_SUCCESS = 'GET_API_SUCCESS';

export const loading = () => ({
  type: LOADING,
});

export const finishLoading = () => ({
  type: FINISH_LOADING,
});

export const getAPISuccess = (payload) => ({
  type: GET_API_SUCCESS,
  payload,
});

export const getAPIThunk = () => (dispatch) => {
  dispatch(loading());
  return fetchAPI('').then((response) => (response.json())).then((data) => {
    console.log(data)
    const results = data.data.results;
    console.log(results);
    dispatch(getAPISuccess(results));
    dispatch(finishLoading());   
  }).catch(() => { dispatch(getAPISuccess([])); }); // Quando tiver um erro, retorna um array vazio */
};
