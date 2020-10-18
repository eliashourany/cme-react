/*
 *
 * Github reducer
 *
 */
import produce from 'immer';
import { LOAD_REPOS_ERROR, LOAD_REPOS_SUCCESS, LOAD_REPOS } from './constants';

export const initialState = {
  loading: false,
  repos: null,
  error: false,
  search: null,
};

/* eslint-disable default-case, no-param-reassign */
const githubReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.repos = null;
        draft.error = false;
        draft.search = action.search;
        break;
      case LOAD_REPOS_SUCCESS:
        draft.loading = false;
        draft.repos = action.users;
        draft.error = false;
        break;
      case LOAD_REPOS_ERROR:
        draft.loading = false;
        draft.repos = null;
        draft.error = action.error;
        break;
    }
  });

export default githubReducer;
