import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';



const styles = {
  head: {
    width: '100%',
  },
  headMenu: {
    marginLeft: -12,
    marginRight: 20,
  },
  headTitle: {
    flex: 1,
  },
  headUser: {}
};

const Head = ({ classes }) => {
  return (
    <AppBar className={classes.head} position="static">
      <Toolbar>
        <IconButton className={classes.headMenu} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.headTitle}>
          MyPages
        </Typography>
        <Button className={classes.headUser} color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

Head.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Head);