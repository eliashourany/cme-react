/*
 *
 * Github actions
 *
 */

import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from './constants';

export function loadRepos(search) {
  return {
    type: LOAD_REPOS,
    search,
  };
}

export function reposLoaded(users) {
  return {
    type: LOAD_REPOS_SUCCESS,
    users,
  };
}

export function reposLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
