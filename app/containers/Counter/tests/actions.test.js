import { increment } from '../actions';
import { INCREMENT } from '../constants';

describe('Counter actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: INCREMENT,
      };
      expect(increment()).toEqual(expected);
    });
  });
});
