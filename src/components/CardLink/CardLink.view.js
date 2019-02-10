import React from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';
import { withStyles } from 'material-ui/styles';
// import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
// import FormatPaint from 'material-ui-icons/FormatPaint';
import Card, { /*CardActions, */CardContent, CardMedia } from 'material-ui/Card';



const styles = {
  CardLink: {
    width: '100%',
    textAlign: 'left',
    display: 'inline-block',
    textDecoration: 'none'
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
    borderRadius: '2px',
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
  labels,
  link,
  placeholder
}) => {
  return (
    <Card>
      <a className={classes.CardLink} href={link} target="_blank" rel="noreferer noopener">
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
        </CardContent>
        {image ? (
          <CardMedia
            className={classes.CardLinkImage}
            image={image}
            title="article image"
          />
        ) : (
          <div className={classes.CardLinkImage}>
            {placeholder ? (isFunction(placeholder) ? placeholder() : placeholder ) : 'placeholder'}
          </div>
        )}
        <CardContent>
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
        {/*<CardActions className={classes.CardLinkButtonWr}>*/}
          {/*<Button className={classes.CardLinkButton} size="small" color="primary">*/}
            {/*<FormatPaint />*/}
          {/*</Button>*/}
        {/*</CardActions>*/}
      </a>
    </Card>
  );
};

CardLink.defaultProps = {
  placeholder: null,

};

CardLink.propTypes = {
  classes: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  })),
  link: PropTypes.string.isRequired
};

export default withStyles(styles)(CardLink);
