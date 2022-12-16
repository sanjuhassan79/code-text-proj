import {
  DATE_KEY,
  SEARCH_KEY,
  TOGGLE_STATUS,
  TOGGLE_UPCOMING,
} from '../actionTypes/actionTypes';

export const LaunchStatusfun = () => {
  return {
    type: TOGGLE_STATUS,
  };
};
export const upcomingfun = () => {
  return {
    type: TOGGLE_UPCOMING,
  };
};
export const searchKeyfun = (brandName) => {
  return {
    type: SEARCH_KEY,
    payload: brandName,
  };
};
export const datefun = (date) => {
  return {
    type: DATE_KEY,
    payload: date,
  };
};
