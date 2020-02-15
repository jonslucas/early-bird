import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import './App.css';
import Header from './components/Header';
import Group from './components/Group';

const groups = {
  Backlog: {
    items: [],
  },
  Active: {
    items: [{
      label: 'Create Portfolio to Assist with Finding a New Job',
      comments: [],
      assignedTo: null,
      watchers: [],
      tags: [],
    }],
  },
  Review: {
    items: [],
  },
  Complete: {
    items: [],
  },
};

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
    <>
      <CssBaseline />
      <div className={style.root}>
        <Header />
        <div className={style.contentContainer}>
          <GridList className={style.gridList}>
            {Object.keys(groups).map((name) => (
              <Group key={name} name={name} items={groups[name].items} />
            ))}
          </GridList>
        </div>
      </div>
    </>
  );
}

export default App;
