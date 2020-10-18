/**
 *
 * AppCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import messages from './messages';

function AppCard(props) {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography>{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={props.onClick} size="small">
            <FormattedMessage {...messages.learnMore} />
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

AppCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default AppCard;
