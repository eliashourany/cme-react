/**
 *
 * LocaleToggler
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import IconButton from '@material-ui/core/IconButton';
import TranslateIcon from '@material-ui/icons/Translate';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import { changeLocale } from '../LanguageProvider/actions';

export function LocaleToggler(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = local => {
    props.onLocaleToggle(local);
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <IconButton
        onClick={handleMenu}
        className={props.className}
        color="inherit"
      >
        <TranslateIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        {locales.map(local => (
          <MenuItem
            selected={props.locale === local.value}
            key={local.value}
            onClick={() => handleClick(local.value)}
          >
            {local.label}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}

LocaleToggler.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
  className: PropTypes.string,
};

const locales = [{ label: 'EN', value: 'en' }, { label: 'FR', value: 'fr' }];

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: local => dispatch(changeLocale(local)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggler);
