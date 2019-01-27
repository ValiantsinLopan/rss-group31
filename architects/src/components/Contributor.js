import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 350,
    margin: 10,
  },
  cardContent: {
    paddingBottom: 0,
  },
  media: {
    objectFit: 'cover',
  },

  link: {
    marginTop: 0,
    fontSize: '14px',
    textDecoration: 'underline',
  },
};

function Contributor(props) {
  const {
    classes, photo, name, link,
  } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          height="140"
          image={photo}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={link} className={classes.link}>
          {link}
        </Link>
      </CardActions>
    </Card>
  );
}

// Contributor.propTypes = {
//   // classes: PropTypes.object.isRequired,
//   photo: PropTypes.string,
//   name: PropTypes.string,
//   link: PropTypes.string,
// };

Contributor.defaultProps = {
  photo: 'https://avatars1.githubusercontent.com/u/1309537?s=460&v=4',
  name: 'unknown contributor',
  link: 'https://github.com',
};

export default withStyles(styles)(Contributor);
