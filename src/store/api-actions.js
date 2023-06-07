import {AuthorizationStatus, CLIENT_PATHES} from "../const/const";
import {onLoadHotels, onLoadComments, requireAuthorization, addUserEmail, redirectToRoute, onPostComment, addToFavorites} from "./actions";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(onLoadHotels(data)))
);

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(onLoadComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(addUserEmail(data.email)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(addUserEmail(email)))
    .then(() => dispatch(redirectToRoute(CLIENT_PATHES.FAVORITES)))
);

export const postComment = ({comment, rating}, id) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
  .then(() => dispatch(onPostComment(comment)))
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(addToFavorites(data)))
);
