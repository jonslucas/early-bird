import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useDrag } from 'react-dnd';
import Types from '../state/dnd/types';
import TaskDetail from './TaskDetail';

const useStyles = makeStyles({
  card: {
    width: '90%',
    margin: '.25em 0',
  },
});

const stateToProps = (state, ownProps) => ({
  ...ownProps,
  item: state.tasks[ownProps.id],
});

const TaskCard = ({ item, id, groupId }) => {
  const style = useStyles();

  const [, dragRef] = useDrag({
    item: {
      type: Types.CARD,
      cardId: id,
      groupId,
    },
    collect: (monitor) => monitor,
  });

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <ButtonBase
        ref={dragRef}
        onClick={handleOpen}
        disableRipple
      >
        <Card className={style.card}>
          <CardContent>
            <Typography variant="body1" gutterBottom>
              {item.label}
            </Typography>
          </CardContent>
        </Card>
      </ButtonBase>
      <TaskDetail close={handleClose} open={open} id={id}/>
    </>
  );
};

TaskCard.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
  id: PropTypes.number.isRequired,
  groupId: PropTypes.string.isRequired,
};

export default connect(stateToProps)(TaskCard);
