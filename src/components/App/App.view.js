import React from 'react';
import { CardLink, Head, HeadFilters } from '../';
import { withStyles } from 'material-ui/styles';
import { articleStore } from '../../store/testStores';



const styles = {
  App: {
  },
  AppHead: {
    width: '100%'
  },
  AppContent: {
    maxWidth: 1200,
    margin: '0 auto'
  },
  AppAppHeadsFilters: {
    float: 'left',
    paddingLeft: 10,
    paddingRight: 10
  },
  AppCardLinks: {
    paddingLeft: 14,
    paddingRight: 14,
    boxSizing: 'border-box',
    width: '100%',
    alignItems: 'stretch'
  },
  AppCardLinksItem: {
    display: 'inline-block',
    padding: 10,
    width: '25%',
    boxSizing: 'border-box'
  }
};



const App = ({ classes }) => {
  return (
    <div  className={classes.App}>
      <Head className={classes.AppHead} />
      <div className={classes.AppContent} >
        <HeadFilters className={classes.AppAppHeadsFilters} />
        <div className={classes.AppCardLinks}>
          {articleStore.articles.map(({ image, title, publisher, stars, labels, link }, index) => (
            <div key={`@${link}${index}`} className={classes.AppCardLinksItem}>
              <CardLink
                image={image}
                title={title}
                publisher={publisher}
                stars={stars}
                labels={labels}
                link={link}
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

    </div>
  );
};



export default withStyles(styles)(App);
