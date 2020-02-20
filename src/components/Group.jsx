import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
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
    justifyContent: 'space-between',
    width: '100%',
    padding: '.5em',
    minHeight: '3em',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
  },
  preview: {
    height: '5em',
    width: '100%',
    opacity: '0.5',
    backgroundColor: 'grey',
    margin: '10px 0',
  },
  newTask: {
    margin: '.5em 0',
    padding: '.5em',
  },
});

const Group = ({
  name,
  items,
  id,
  moveCard,
  createTask,
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

  const [adding, addTask] = React.useState(false);
  const [newTask, editTask] = React.useState('');

  const handleAdd = () => addTask(true);
  const handleAddCancel = () => addTask(false);


  const handleSave = () => createTask(newTask);
  const handleEdit = (e) => editTask(e.target.value);

  return (
    <Container className={style.root} disableGutters>
      <Card className="" variant="outlined" ref={dropRef}>
        <Typography variant="h5" className={style.heading} align="center">
          {name}
        </Typography>
        <CardContent className={style.content}>
          {items.map((i) => (<TaskCard id={i} key={i} groupId={id} />))}
          {isOver && <Card className={style.preview} />}
          {adding && (
            <Card className={style.newTask}>
              <form onSubmit={handleSave}>
                <TextField id="standard-basic" label="Task" onChange={handleEdit} />
              </form>
            </Card>
          )}
        </CardContent>
        <CardActions className={style.footer}>
          {adding && (
            <>
              <Button size="small" onClick={handleSave}>Add</Button>
              <Button size="small" onClick={handleAddCancel}>Cancel</Button>
            </>
          )}
          {!adding && <Button size="small" onClick={handleAdd}>Add Card</Button>}
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
  createTask: PropTypes.func.isRequired,
};

Group.defaultProps = {
  items: [],
};

export default Group;
