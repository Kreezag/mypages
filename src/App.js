import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleCard from './components/Card';
import Header from './components/Head';
import { withStyles } from 'material-ui/styles';
import { articleStore } from './store';



const styles = {
  cards: {
    padding: 20,
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%'
  },
  cardsIn: {
    float: 'left',
    padding: 10
  },
  header: {
    width: '100%'
  }
};

const App = ({ classes }) => {
  return (
    <div className="App">
      <div className={classes.header}>
        <Header />
      </div>
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
