import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { labelStore } from '../../store/testStores';



const styles = {
  HeadFilters: {
    padding: 20,
    textAlign: 'left'
  },
  HeadFiltersButton: {
    margin: 4,
    fontSize: 14
  },
  HeadFiltersButtonText: {
    color: 'white'
  }
};

const HeadFilters = ({ classes }) => {
  return (
    <div className={classes.HeadFilters}>
      {labelStore.items.map((label) => (
        <Button
          key={label.uuid}
          className={classes.HeadFiltersButton}
          variant="fab"
          aria-label={label.text}
          style={{ backgroundColor: label.color }}
        >
          <span className={classes.HeadFiltersButtonText}>
            {label.shortTitle}
          </span>
        </Button>
      ))}
      <Button
        variant="fab"
        color="default"
        aria-label="add"
        className={classes.HeadFiltersButton}
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
