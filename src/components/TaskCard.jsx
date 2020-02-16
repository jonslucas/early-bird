import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDrag } from 'react-dnd';
import Types from '../state/dnd/types';

const style = makeStyles({
  root: {
    width: '90%',
  },
});

const stateToProps = (state, ownProps) => ({
  ...ownProps,
  item: state.tasks[ownProps.id],
});

const TaskCard = ({ item, id, groupId }) => {
  const [, dragRef] = useDrag({
    item: {
      type: Types.CARD,
      cardId: id,
      groupId,
    },
    collect: (monitor) => monitor,
  });

  return (
    <div ref={dragRef}>
      <Card className={style.root}>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            {item.label}
          </Typography>
        </CardContent>
      </Card>
    </div>
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
