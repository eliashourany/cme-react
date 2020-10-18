import { loadRepos } from '../actions';
import { LOAD_REPOS } from '../constants';

describe('Github actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: LOAD_REPOS,
        search: 'test',
      };
      expect(loadRepos('test')).toEqual(expected);
    });
  });
});
