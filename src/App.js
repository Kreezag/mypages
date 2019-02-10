import React from 'react';
import Dashboard from './pages/Dashboard';
import Head from './components/Head';
import { withStyles } from 'material-ui/styles';



const styles = {
  App: {},
  AppHead: {
    width: '100%'
  },
};



const App = ({ classes }) => {
  return (
    <div className={classes.App}>
      <Head className={classes.AppHead} />
      <Dashboard />
    </div>
  );
};



export default withStyles(styles)(App);
