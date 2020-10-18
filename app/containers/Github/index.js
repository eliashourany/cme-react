/**
 *
 * Github
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Dialog from '@material-ui/core/Dialog';
import Moment from 'moment';
import {
  makeSelectGithubRepos,
  makeSelectGithubLoading,
  makeSelectGithubError,
  makeSelectGithubSearch,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import FormWrapper from '../../components/FormWrapper';
import { loadRepos } from './actions';
import {
  DialogTitle,
  DialogActions,
  DialogContent,
} from '../../components/Dialog';
import CardLoading from '../../components/CardLoading';
import AppCard from '../../components/AppCard';

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(1),
    marginTop: '-22px',
  },
  input: {
    width: '300px',
  },
  title: {
    margin: '20px',
    textAlign: 'center',
  },
}));

export function Github(props) {
  useInjectReducer({ key: 'github', reducer });
  useInjectSaga({ key: 'github', saga });
  const classes = useStyles();
  const [search, setSearch] = React.useState('');
  const handleChange = event => {
    setSearch(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const [selectedRepo, setSelectedRepo] = React.useState(null);

  const handleClickOpen = repo => {
    setSelectedRepo(repo);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fieldValidator = () => search.length < 3;

  const searchClicked = () => {
    props.loadRepos(search);
  };

  return (
    <React.Fragment>
      <Container>
        <FormWrapper>
          <TextField
            className={classes.input}
            disabled={props.loading}
            value={search}
            onChange={handleChange}
            id="outlined-basic"
            label={<FormattedMessage {...messages.searchGithub} />}
            variant="outlined"
            helperText={<FormattedMessage {...messages.minChars} />}
          />
          <Button
            disabled={props.loading || fieldValidator()}
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
            endIcon={<SearchIcon />}
            onClick={searchClicked}
          >
            <FormattedMessage {...messages.search} />
          </Button>
        </FormWrapper>
        {props.search && !props.error && (
          <Typography variant="h4" className={classes.title}>
            <FormattedMessage {...messages.repos} />: {props.search}
          </Typography>
        )}
        {props.error && (
          <Typography variant="h4" className={classes.title}>
            <FormattedMessage {...messages.user} />: {props.search}
          </Typography>
        )}
        <Grid container spacing={3}>
          {props.repos &&
            props.repos.map(repo => (
              <Grid key={repo.clone_url} item md={4} sm={6} xs={12}>
                <AppCard
                  title={repo.name}
                  description={repo.description}
                  onClick={() => handleClickOpen(repo)}
                />
              </Grid>
            ))}
          {props.loading &&
            [1, 2, 3, 4, 5, 6].map(key => (
              <Grid key={key} item md={4} sm={6} xs={12}>
                <CardLoading />
              </Grid>
            ))}
        </Grid>
      </Container>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {selectedRepo && (
          <React.Fragment>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              {selectedRepo.full_name}
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Description: {selectedRepo.description}
              </Typography>
              <Typography gutterBottom>
                Created At:{' '}
                {Moment(selectedRepo.created_at).format('MM-DD-YYYY')}
              </Typography>
              <Typography gutterBottom>Forks: {selectedRepo.forks}</Typography>
              <Typography gutterBottom>
                Open Issues: {selectedRepo.open_issues}
              </Typography>
              <Typography gutterBottom>
                Stars: {selectedRepo.stargazers_count}
              </Typography>
              <Typography gutterBottom>
                Watchers: {selectedRepo.watchers_count}
              </Typography>
              <Typography gutterBottom>
                Link:{' '}
                <a href={selectedRepo.html_url} target="_blank">
                  {selectedRepo.html_url}
                </a>
              </Typography>
              {selectedRepo.license && (
                <Typography gutterBottom>
                  License: {selectedRepo.license.name}
                </Typography>
              )}
            </DialogContent>
          </React.Fragment>
        )}
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

Github.propTypes = {
  repos: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  search: PropTypes.string,
  loadRepos: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectGithubRepos(),
  loading: makeSelectGithubLoading(),
  error: makeSelectGithubError(),
  search: makeSelectGithubSearch(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadRepos: search => dispatch(loadRepos(search)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Github);
