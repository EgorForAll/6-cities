import {nameSpace} from "../../root-reducer";

export const getOffers = (state) => state[nameSpace.DATA].offers;
export const checkOffersLoading = (state) => state[nameSpace.DATA].isOffersLoaded;
export const getComments = (state) => state[nameSpace.DATA].loaded_comments;
export const checkCommentsLoading = (state) => state[nameSpace.DATA].isCommentsLoaded;
export const getNewComment = (state) => state[nameSpace.DATA].newComment;
export const getCommentById = (state) => state[nameSpace.DATA].commentById;
export const checkCommentPosted = (state) => state[nameSpace.DATA].isCommentPosted
