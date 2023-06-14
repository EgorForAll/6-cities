import {AuthorizationStatus, CLIENT_PATHES} from "../const/const";
import {onLoadHotels, onLoadComments, requireAuthorization, addUserEmail, redirectToRoute, onPostComment, loadFavoritesList, addRemoveFavorites, handleError} from "./actions";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(onLoadHotels(data)))
    .catch((err) => dispatch(handleError(err.response.status)))
);

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(onLoadComments(data)))
    .catch((err) => dispatch(handleError(err.response.status)))
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
    .then(() => dispatch(redirectToRoute(CLIENT_PATHES.MAIN)))
);

export const postComment = ({comment, rating}, id) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
  .then(() => dispatch(onPostComment(comment)))
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoritesList(data)))
);

export const postFavorite = (id, stat) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${stat}`)
    .then(() => dispatch((addRemoveFavorites())))
)
