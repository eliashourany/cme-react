import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_REPOS } from './constants';
import { makeSelectGithubSearch } from './selectors';
import { reposLoaded, reposLoadingError } from './actions';

export function* getRepos() {
  const search = yield select(makeSelectGithubSearch());
  const requestURL = `https://api.github.com/users/${search}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos));
  } catch (err) {
    yield put(reposLoadingError(err));
  }
}

export default function* githubSaga() {
  yield takeLatest(LOAD_REPOS, getRepos);
}
