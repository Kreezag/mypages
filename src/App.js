import React, { Component } from 'react';
import './App.css';
import SimpleCard from './components/Card';
import Header from './components/Head';
import HeadFilters from './components/HeadFilters';
import { withStyles } from 'material-ui/styles';
import { articleStore, labelStore } from './store';



const styles = {
  cards: {
    paddingLeft: 14,
    paddingRight: 14,
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%'
  },
  headerFilters: {
    float: 'left',
    paddingLeft: 10,
    paddingRight: 10
  },
  cardsIn: {
    float: 'left',
    paddingLeft: 10,
    paddingRight: 10
  },
  header: {
    width: '100%'
  }
};

const App = ({ classes }) => {
  return (
    <div className="App">
      <Header className={classes.header} />
      <HeadFilters className={classes.headerFilters} />
      <div className={classes.cards}>
        {articleStore.articles.map((item) => (
          <div key={item.title} className={classes.cardsIn}>
            <SimpleCard
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
