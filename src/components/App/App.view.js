import React from 'react';
import { CardLink, Head, HeadFilters } from '../';
import { withStyles } from 'material-ui/styles';
import { articleStore } from '../../store/testStores';



const styles = {
  App: {
    textAlign: 'center'
  },
  AppHead: {
    width: '100%'
  },
  AppAppHeadsFilters: {
    float: 'left',
    paddingLeft: 10,
    paddingRight: 10
  },
  AppCardLink: {
    paddingLeft: 14,
    paddingRight: 14,
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
    alignItems: 'stretch'
  },
  AppCardLinkIn: {
    display: 'inline-flex',
    paddingLeft: 10,
    paddingRight: 10
  }
};



const App = ({ classes }) => {
  return (
    <div  className={classes.App}>
      <Head className={classes.AppHead} />
      <HeadFilters className={classes.AppAppHeadsFilters} />
      <div className={classes.AppCardLink}>
        {articleStore.articles.map((item, index) => (
          <div key={`@${index}${item.title}`} className={classes.AppCardLinkIn}>
            <CardLink
              image={item.image}
              title={item.title}
              publisher={item.publisher}
              stars={item.stars}
              labels={item.labels}
            />
          </div>
        ))}
      </div>
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </div>
  );
};



export default withStyles(styles)(App);
