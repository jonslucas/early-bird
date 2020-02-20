import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const stateToProps = (state, ownProps) => ({
  item: state.tasks[ownProps.id],
});

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    border: '2px solid #000',
    padding: '1em',
  },
});

const TaskDetail = ({ open, close, item }) => {
  const style = useStyles();

  return (
    <Modal
      aria-labelledby="Task Details Modal"
      aria-describedby="Task Details Modal"
      className={style.modal}
      open={open}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Card className={style.modalContent}>
          <Typography variant="h6">{item.label}</Typography>
          <hr />
          <Typography variant="h6">Description:</Typography>
          {item.desc && <Typography variant="body1">{item.desc}</Typography>}
          <hr />

        </Card>
      </Fade>
    </Modal>
  );
};

TaskDetail.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    desc: PropTypes.string,
  }).isRequired,
};

export default connect(stateToProps)(TaskDetail);
