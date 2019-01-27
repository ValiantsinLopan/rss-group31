import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginBottom: '70px',
    marginTop: '70px',
    paddingBottom: '50px',
    paddingTop: '50px',
  },
  gridList: {
    width: 500,
    height: 450,
  },
});


// example data!! to be replaced
const tileData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Josef_Langbard_Minsk_Watercolor_Museum_of_History_of_Minsk.jpg/800px-Josef_Langbard_Minsk_Watercolor_Museum_of_History_of_Minsk.jpg',
    title: 'Image',
    cols: 1,
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Josef_Langbard_Minsk_Watercolor_Museum_of_History_of_Minsk.jpg/800px-Josef_Langbard_Minsk_Watercolor_Museum_of_History_of_Minsk.jpg',
    title: 'Image',
    cols: 1,
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Josef_Langbard_Minsk_Watercolor_Museum_of_History_of_Minsk.jpg/800px-Josef_Langbard_Minsk_Watercolor_Museum_of_History_of_Minsk.jpg',
    title: 'Image',
    cols: 3,
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Josef_Langbard_Minsk_Watercolor_Museum_of_History_of_Minsk.jpg/800px-Josef_Langbard_Minsk_Watercolor_Museum_of_History_of_Minsk.jpg',
    title: 'Image',
    cols: 5,
  },
];


function ImageGridList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h3" component="h2">
        Photogallery
      </Typography>
      <GridList cellHeight={220} className={classes.gridList} cols={5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

// ImageGridList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ImageGridList);
