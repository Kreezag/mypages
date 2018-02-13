import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import FormatPaint from 'material-ui-icons/FormatPaint';
import Card, { CardActions, CardContent } from 'material-ui/Card';



const styles = {
  CardLink: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'left'
  },
  CardLinkIn: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  CardLinkImage: {
    width: '100%',
    height: '125px'
  },
  CardLinkTitle: {
    width: '100%'
  },
  CardLinkPublisher: {},
  CardLinkButtonWr: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  CardLinkButton: {
    color: 'black'
  },
  CardLinkLabelList: {
    textAlign: 'left'
  },
  CardLinkLabel: {
    display: 'inline-block',
    borderRadius: '0 10px 10px 0',
    color: 'white',
    padding: '2px 4px',
    marginRight: '4px',
    fontSize: '12px'
  }
};

const CardLink = ({
  classes,
  image,
  title,
  publisher,
  stars,
  labels,
  link
}) => {
  return (
    <a className={classes.CardLink} href={link} target="_blank" rel="noreferer noopener">
      <Card className={classes.CardLinkIn}>
        {image && (<img
          className={classes.CardLinkImage}
          src={image}
          title="Contemplative Reptile"
        />)}
        <CardContent>
          {title && (
            <Typography className={classes.CardLinkTitle} variant="headline" component="h2">
              {title}
            </Typography>
          )}
          {publisher && (
            <Typography className={classes.CardLinkPublisher} component="div">
              {publisher}
            </Typography>
          )}
          <div className={classes.CardLinkLabelList}>
            {Array.isArray(labels) && labels.map((label) => (
              <div
                key={label.uuid}
                style={{ backgroundColor: label.color }}
                className={classes.CardLinkLabel}
              >{label.text}</div>
            ))}
          </div>
        </CardContent>
        <CardActions className={classes.CardLinkButtonWr}>
          <Button className={classes.CardLinkButton} size="small" color="primary">
            <FormatPaint />
          </Button>
        </CardActions>
      </Card>
    </a>
  );
};

CardLink.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardLink);