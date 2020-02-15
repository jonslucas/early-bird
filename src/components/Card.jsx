import React from 'react';
import PropTypes from 'prop-types';
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

const CardWrap = ({ item }) => {
  const [monitor, dragRef] = useDrag({
    item: { type: Types.CARD },
    collect: monitor => monitor,
  });
  console.log({ item: monitor.getItem() });
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

CardWrap.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
};

export default CardWrap;
