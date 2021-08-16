import * as actionTypes from "./types";
import instance from "./instance";

export const createIdea = (newIdea, history) => {
  return async (dispatch) => {
    try {
      // console.log(newIdea)
      const formData = new FormData();
      for (const key in newIdea) {
        formData.append(key, newIdea[key]);
      }
      const res = await instance.post(`/ideas`, formData);
      dispatch({
        type: actionTypes.CREATE_IDEA,
        payload: {
          newProduct: res.data,
        },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchIdeas = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/ideas`);
      dispatch({
        type: actionTypes.FETCH_IDEAS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fundIdea = (updatedIdea) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedIdea) {
        formData.append(key, updatedIdea[key]);
      }

      const res = await instance.put(`/ideas/${updatedIdea.ideaId}`, formData);
      console.log(res.data);
      dispatch({
        type: actionTypes.UPDATE_IDEA,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
