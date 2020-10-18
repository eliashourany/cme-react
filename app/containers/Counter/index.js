/**
 *
 * Counter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useInjectReducer } from 'utils/injectReducer';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import makeSelectCounter from './selectors';
import reducer from './reducer';
import { decrement, increment } from './actions';
import Wrapper from './wrapper';

const useStyles = makeStyles(() => ({
  counter: {
    width: '80px',
    height: '80px',
    lineHeight: '80px',
    textAlign: 'center',
  },
  counterText: {
    fontSize: '1.3em',
    fontWeight: 'bold',
  },
}));
export function Counter(props) {
  useInjectReducer({ key: 'counter', reducer });
  const classes = useStyles();

  return (
    <React.Fragment>
      <Wrapper>
        <Fab onClick={props.decrement} color="primary">
          <RemoveIcon />
        </Fab>
        <Paper className={classes.counter} elevation={3}>
          <span className={classes.counterText}>{props.counter}</span>
        </Paper>
        <Fab onClick={props.increment} color="primary">
          <AddIcon />
        </Fab>
      </Wrapper>
    </React.Fragment>
  );
}

Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  counter: makeSelectCounter(),
});

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Counter);
