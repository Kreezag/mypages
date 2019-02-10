import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import CardLink from '../CardLink';



const styles = {
  CardEmptyLabel: {
    display: 'inline-block',
    color: '#bbb',
    fontSize: '40px',
    lineHeight: '80px',
    textAlign: 'center',
    width: '100%',
    verticalAlign: 'middle',
    height: '100%'
  }
};

const CardEmpty = ({ classes }) => {
  const placeholderFunc = () => (<div className={classes.CardEmptyLabel}>+</div>);

  return (
    <CardLink
      title="&nbsp;"
      publisher="&nbsp;"
      labels={null}
      link="&nbsp;"
      placeholder={placeholderFunc}
    />
  );
};

CardEmpty.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(CardEmpty);
