import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from './Avatar';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: 'solid #80808045 2px',
    width: '100%',
    padding: '5px 10px 5px 10px',
    maxHeight: '50px',
  },
  appName: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  avatar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

const Header = () => {
  const style = useStyles();
  return (
    <div className={style.root}>
      <div className={style.appName}>
        <Typography variant="h4">Tracker</Typography>
      </div>
      <div className={style.avatar}><Avatar /></div>
    </div>
  );
};

export default Header;
