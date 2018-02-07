import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import FormatPaint from 'material-ui-icons/FormatPaint';
import Card, { CardActions, CardContent } from 'material-ui/Card';



const styles = {
  simpleCard: {
    maxWidth: 300,
    display: 'inline-block'
  },
  simpleCardIn: {

  },
  simpleCardImage: {
    width: 300,
    height: 150
  },
  simpleCardTitle: {
  },
  simpleCardPublisher: {},
  simpleCardButtonWr: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  simpleCardButton: {
    color: 'black'
  }
};

const SimpleCard = ({
  classes,
  image,
  title,
  publisher,
  stars,
  labels
}) => {
  console.log(image);
  return (
    <div className={classes.simpleCard}>
      <Card className={classes.simpleCardIn}>
        {image && (<img
          className={classes.simpleCardImage}
          src={image}
          title="Contemplative Reptile"
        />)}
        <CardContent>
          {title && (
            <Typography className={classes.simpleCardTitle} variant="headline" component="h2">
              {title}
            </Typography>
          )}
          {publisher && (
            <Typography className={classes.simpleCardPublisher} component="div">
              {publisher}
            </Typography>
          )}
          {Array.isArray(labels) && labels.map((label) => (
            <div key={label.uuid} style={{ backgroundColor: label.color }}>{label.text}</div>
          ))}
        </CardContent>
        <CardActions className={classes.simpleCardButtonWr}>
          <Button className={classes.simpleCardButton} size="small" color="primary">
            <FormatPaint />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);