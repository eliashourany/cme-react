// import produce from 'immer';
import counterReducer from '../reducer';
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('counterReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      number: 0,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(counterReducer(undefined, {})).toEqual(expectedResult);
  });
});
