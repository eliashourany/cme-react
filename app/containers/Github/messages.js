/*
 * Github Messages
 *
 * This contains all the text for the Github container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Github';

export default defineMessages({
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Search',
  },
  searchGithub: {
    id: `${scope}.searchGithub`,
    defaultMessage: 'Search Github Users',
  },
  minChars: {
    id: `${scope}.minChars`,
    defaultMessage: 'Must be 3 characters and up',
  },
  repos: {
    id: `${scope}.repos`,
    defaultMessage: 'Repos For User',
  },
  user: {
    id: `${scope}.user`,
    defaultMessage: 'No user found for',
  },
});
