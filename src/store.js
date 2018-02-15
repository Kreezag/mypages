import { createStore } from 'redux'



const store = createStore( () => {}, {}) //WAT ;)

const articleStore = {
  articles: [
    {
      publisher: 'Autor',
      title: 'Title',
      description: 'some long description',
      link: 'https://reactjs.org/',
      image: 'https://reactjs.org/logo-og.png',
      stars: '5',
      date: new Date(),
      labels: [
        {
          uuid: '@JS',
          text: 'JS',
          color: '#f09'
        },
        {
          uuid: '@REACT',
          text: 'REACT',
          color: '#61dafb'
        }
      ]
    },
    {
      publisher: 'MY fruend',
      title: 'best article',
      description: 'two versino some long description',
      link: 'http://habrahabr.ru/post/148050/',
      image: 'https://www.iab.com/wp-content/uploads/2016/03/html5-advertising-platform-showcase-2-1024x1020.jpg',
      stars: '4.5',
      date: new Date(),
      labels: [
        {
          uuid: '@JS',
          text: 'JS',
          color: '#f09'
        },
        {
          uuid: '@HTML',
          text: 'HTML',
          color: '#f15931'
        }
      ]
    },
    {
      publisher: 'MY fruend',
      title: 'best article',
      description: 'two versino some long description',
      link: 'http://habrahabr.ru/post/148050/',
      image: 'https://www.iab.com/wp-content/uploads/2016/03/html5-advertising-platform-showcase-2-1024x1020.jpg',
      stars: '4.5',
      date: new Date(),
      labels: [
        {
          uuid: '@JS',
          text: 'JS',
          shortTitle: 'JS',
          color: '#f09'
        },
        {
          uuid: '@HTML',
          text: 'HTML',
          shortTitle: 'HTML',
          color: '#f15931'
        }
      ]
    }
  ]
};


const labelStore = {
  items: [
    {
      uuid: '@JS',
      text: 'JS',
      shortTitle: 'JS',
      color: '#f09'
    },
    {
      uuid: '@CSS',
      text: 'CSS',
      shortTitle: 'CSS',
      color: '#28A9E0'
    },
    {
      uuid: '@HTML',
      text: 'HTML',
      shortTitle: 'HTML',
      color: '#f15931'
    },
    {
      uuid: '@REDUX',
      text: 'REDUX',
      shortTitle: 'REDUX',
      color: '#764ABC'
    }
  ]
};


export { articleStore, labelStore, store };
