import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './state/rootReducer';
import './App.css';
import Header from './components/Header';
import GroupList from './components/GroupList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    paddingBottom: '10px',
    height: '99vh',
  },
  contentContainer: {
    display: 'flex',
    width: '100vw',
    height: '100%',
    background: 'linear-gradient(135deg, rgb(16, 2, 90), rgba(249, 128, 3, 0.6))',
    justifyContent: 'flex-start',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    padding: '10px',
  },
}));

function App() {
  const style = useStyles();
  return (
    <Provider store={createStore(rootReducer)}>
      <CssBaseline />
      <div className={style.root}>
        <Header />
        <div className={style.contentContainer}>
          <DndProvider backend={Backend}>
            <GridList className={style.gridList}>
              <GroupList />
            </GridList>
          </DndProvider>
        </div>
      </div>
    </Provider>
  );
}

export default App;
