import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';
import Types from '../state/dnd/types';

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
    flexDirection: 'column',
    backgroundColor: '#d3d3d33b',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
  },
  preview: {
    height: '5em',
    width: '100%',
    opacity: '0.5',
  },
});

const Group = ({
  name,
  items,
  id,
  moveCard,
}) => {
  const style = useStyles();

  const [{ isOver }, dropRef] = useDrop({
    accept: Types.CARD,
    drop: (item) => {
      if (item.groupId !== id) moveCard(item.cardId, item.groupId, id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <Container className={style.root} disableGutters>
      <Card className="" variant="outlined" ref={dropRef}>
        <Typography variant="h5" className={style.heading} align="center">
          {name}
        </Typography>
        <CardContent className={style.content}>
          {items.map((i) => (<TaskCard id={i} key={i} groupId={id} />))}
          {isOver && <Card className={style.preview} />}
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
    PropTypes.number,
  ),
  id: PropTypes.string.isRequired,
  moveCard: PropTypes.func.isRequired,
};

Group.defaultProps = {
  items: [],
};

export default Group;
