/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import messages from './messages';

const useStyles = makeStyles(() => ({
  title: {
    margin: '80px',
    textAlign: 'center',
  },
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.title}>
      <FormattedMessage {...messages.header} />
    </Typography>
  );
}
