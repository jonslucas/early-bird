import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Group from './Group';
import { moveTask } from '../state/groups/actions';

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
});

const GroupList = ({ groups, moveCard }) => (
  <>
    {groups.map((g) => (
      <Group
        key={g.id}
        name={g.label}
        items={g.items}
        id={g.id}
        moveCard={moveCard}
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
};

GroupList.defaultProps = {
  groups: [],
};

export default connect(stateToProps, dispatchToProps)(GroupList);
