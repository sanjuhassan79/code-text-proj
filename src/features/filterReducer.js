
import {
  DATE_KEY,
  SEARCH_KEY,
  TOGGLE_STATUS,
  TOGGLE_UPCOMING,
} from './actionTypes/actionTypes';



export const initialState = {
  filters: {
    keyword: [],
    LaunchDate: [],
    LaunchStatus: false,
    upcoming: false,
  },
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_KEY:
      if (!state.filters.keyword.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            keyword: [...state.filters.keyword, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            keyword: state.filters.keyword.filter(
              (brand) => brand !== action.payload
            ),
          },
        };
      }
    case DATE_KEY:
      if (!state.filters.LaunchDate.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            LaunchDate: [...state.filters.LaunchDate, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            LaunchDate: state.filters.LaunchDate.filter(
              (brand) => brand !== action.payload
            ),
          },
        };
      }
    case TOGGLE_STATUS:
      return {
        ...state,
        filters: {
          ...state.filters,
          LaunchStatus: !state.filters.LaunchStatus,
        },
      };
    case TOGGLE_UPCOMING:
      return {
        ...state,
        filters: {
          ...state.filters,
          upcoming: !state.filters.upcoming,
        },
      };
    default:
      return state;
  }
};
