import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import FormatPaint from 'material-ui-icons/FormatPaint';
import Card, { CardActions, CardContent } from 'material-ui/Card';



const styles = {
  card: {
    maxWidth: 300,
    display: 'inline-block'
  },
  cardImage: {
    width: 300,
    height: 150
  },
  cardTitle: {
  },
  cardPublisher: {},
  cardButtonWr: {
    // alignItems: 'right'
    float: 'right'
  },
  cardButton: {
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
    <Card className={classes.card}>
      {image && (<img
        className={classes.cardImage}
        src={image}
        title="Contemplative Reptile"
      />)}
      <CardContent>
        {title && (
          <Typography className={classes.cardTitle} variant="headline" component="h2">
            {title}
          </Typography>
        )}
        {publisher && (
          <Typography className={classes.cardPublisher} component="div">
            {publisher}
          </Typography>
        )}
        {Array.isArray(labels) && labels.map((label) => (
          <div key={label.uuid} style={{ backgroundColor: label.color }}>{label.text}</div>
        ))}
      </CardContent>
      <CardActions className={classes.cardButtonWr}>
        <Button className={classes.cardButton} size="small" color="primary">
          <FormatPaint />
        </Button>
      </CardActions>
    </Card>
  );
};

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);