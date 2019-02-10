import React from 'react';
import { withStyles } from 'material-ui/styles';
import { articleStore } from '../../store/testStores';
import CardLink from '../../components/CardLink';
import CardEmpty from '../../components/CardEmpty';
import HeadFilters from '../../components/HeadFilters';



const styles = {
  App: {
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


const Dashboard = ({ classes }) => (
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
      <div className={classes.AppCardLinksItem}>
        <CardEmpty />
      </div>
    </div>
  </div>
);


export default withStyles(styles)(Dashboard);
