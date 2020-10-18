import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the github state domain
 */

const selectGithubDomain = state => state.github || initialState;

/**
 * Default selector used by Github
 */

const makeSelectGithub = () =>
  createSelector(
    selectGithubDomain,
    substate => substate,
  );

const makeSelectGithubLoading = () =>
  createSelector(
    selectGithubDomain,
    substate => substate.loading,
  );

const makeSelectGithubRepos = () =>
  createSelector(
    selectGithubDomain,
    substate => substate.repos,
  );

const makeSelectGithubError = () =>
  createSelector(
    selectGithubDomain,
    substate => substate.error,
  );

const makeSelectGithubSearch = () =>
  createSelector(
    selectGithubDomain,
    substate => substate.search,
  );

export default makeSelectGithub;
export {
  selectGithubDomain,
  makeSelectGithubError,
  makeSelectGithubLoading,
  makeSelectGithubRepos,
  makeSelectGithubSearch,
};
