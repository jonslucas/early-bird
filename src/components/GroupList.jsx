import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Group from './Group';
import { moveTask, addTask } from '../state/groups/actions';
import { createTask } from '../state/tasks/actions';

const stateToProps = (state, ownProps) => ({
  ...ownProps,
  groups: Object.keys(state.groups).map((key) => ({
    id: key,
    label: state.groups[key].label,
    items: state.groups[key].items,
  })),
});

const dispatchToProps = (dispatch) => ({
  moveCard: (card, src, dst) => dispatch(moveTask(card, src, dst)),
  createAndAdd: (groupId) => (label) => {
    const taskId = 2;
    dispatch(createTask(taskId, label));
    dispatch(addTask(groupId, taskId));
  },
});

const GroupList = ({ groups, moveCard, createAndAdd }) => (
  <>
    {groups.map((g) => (
      <Group
        key={g.id}
        name={g.label}
        items={g.items}
        id={g.id}
        moveCard={moveCard}
        createTask={createAndAdd(g.id)}
      />
    ))}
  </>
);

GroupList.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      items: PropTypes.array,
    }),
  ),
  moveCard: PropTypes.func.isRequired,
  createAndAdd: PropTypes.func.isRequired,
};

GroupList.defaultProps = {
  groups: [],
};

export default connect(stateToProps, dispatchToProps)(GroupList);
