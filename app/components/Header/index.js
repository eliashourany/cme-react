import React from 'react';
import { FormattedMessage } from 'react-intl';

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import { Link } from 'react-router-dom';
import messages from './messages';
import LocaleToggler from '../../containers/LocaleToggler';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuButtonEnd: {
    marginLeft: 'auto',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Button
          component={Link}
          to="/"
          className={classes.menuButton}
          color="inherit"
          endIcon={<GitHubIcon />}
        >
          <FormattedMessage {...messages.github} />
        </Button>
        <Button
          component={Link}
          to="/counter"
          className={classes.menuButton}
          color="inherit"
          endIcon={<FormatListNumberedIcon />}
        >
          <FormattedMessage {...messages.counter} />
        </Button>
        <LocaleToggler className={classes.menuButtonEnd} />
      </Toolbar>
    </AppBar>
  );
}
