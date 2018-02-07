import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';



const styles = {
  card: {
    maxWidth: 300,
    display: 'inline-block'
  },
  media: {
    width: 300,
    height: 150
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
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
    <div>
      <Card className={classes.card}>
        {image && (<img
          className={classes.media}
          src={image}
          title="Contemplative Reptile"
        />)}
        <CardContent>
          {title && (<Typography variant="headline" component="h2">
            {title}
          </Typography>)}
          {publisher && (<Typography component="p">
            {publisher}
          </Typography>)}
          {Array.isArray(labels) && labels.map((label) => (
            <div key={label.uuid} style={{ backgroundColor: label.color }}>{label.text}</div>
          ))}
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
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