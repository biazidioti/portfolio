import { LOADING, GET_API_SUCCESS,
  FINISH_LOADING } from '../actions/cardGrid';

  const INITIAL_STATE = {
    characters: [],
    isLoading: true,
  };

  const cardGrid = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOADING:
        return {
          ...state, isLoading: true,
        };
      case GET_API_SUCCESS:
        return {
          ...state, currencies: action.payload,
        };
      case FINISH_LOADING:
        return {
          ...state, isLoading: false,
        };
        default:
    return state;
  }
};


export default cardGrid;