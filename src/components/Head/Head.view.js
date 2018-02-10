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
  Head: {
    width: '100%',
  },
  HeadBar: {},
  HeadMenu: {
    marginLeft: -12,
    marginRight: 20,
  },
  HeadTitle: {
    flex: 1,
  },
  HeadUser: {}
};

const Head = ({ classes }) => {
  return (
    <div className={classes.Head}>
      <AppBar className={classes.HeadBar} position="static">
        <Toolbar>
          <IconButton className={classes.HeadMenu} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.HeadTitle}>
            MyPages
          </Typography>
          <Button className={classes.HeadUser} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Head.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Head);