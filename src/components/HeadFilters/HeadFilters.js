import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { labelStore } from '../../store';



const styles = {
  headFilters: {
    padding: 20,
    textAlign: 'left'
  },
  headFiltersButton: {
    margin: 4,
    fontSize: 14
  },
  headFiltersButtonText: {
    color: 'white'
  }
};

const HeadFilters = ({ classes }) => {
  return (
    <div className={classes.headFilters}>
      {labelStore.items.map((label) => (
        <Button
          key={label.uuid}
          className={classes.headFiltersButton}
          variant="fab"
          aria-label={label.text}
          style={{ backgroundColor: label.color }}
        >
          <span className={classes.headFiltersButtonText}>
            {label.shortTitle}
          </span>
        </Button>
      ))}
      <Button
        variant="fab"
        color="default"
        aria-label="add"
        className={classes.headFiltersButton}
      >
        <AddIcon style={{ width: '1.5em', height: '1.5em' }} />
      </Button>
    </div>
  );
};

HeadFilters.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeadFilters);