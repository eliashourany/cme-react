import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the counter state domain
 */

const selectCounterDomain = state => state.counter || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Counter
 */

const makeSelectCounter = () =>
  createSelector(
    selectCounterDomain,
    substate => substate.number,
  );

export default makeSelectCounter;
export { selectCounterDomain };
