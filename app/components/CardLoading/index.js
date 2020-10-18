/**
 *
 * CardLoading
 *
 */

import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import Card from '@material-ui/core/Card';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CardLoading() {
  return (
    <Card>
      <CardContent>
        <Skeleton height={40} />
        <Skeleton />
        <Skeleton />
        <Skeleton width={50} />
      </CardContent>
    </Card>
  );
}

CardLoading.propTypes = {};

export default CardLoading;
