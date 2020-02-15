import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardWrap from './Card';

const useStyles = makeStyles({
  root: {
    width: '15rem',
    maxWidth: '33%',
    minWidth: '200px',
    display: 'flex',
    margin: '5px 5px 0 5px',
    flexDirection: 'column',
    maxHeight: '90%',
  },
  heading: {
    borderBottom: 'solid lightgrey 1px',
  },
  content: {
    display: 'flex',
    backgroundColor: '#d3d3d33b',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Group = ({ name, items }) => {
  const style = useStyles();
  return (
    <Container className={style.root} disableGutters>
      <Card className="" variant="outlined">
        <Typography variant="h5" className={style.heading} align="center">
          {name}
        </Typography>
        <CardContent className={style.content}>
          {items.map((i) => (<CardWrap item={i} key={i} />))}
        </CardContent>
        <CardActions className={style.footer}>
          <Button size="small">Add Card</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

Group.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

Group.defaultProps = {
  items: [],
};

export default Group;
