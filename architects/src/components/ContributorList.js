import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Contributor from './Contributor';
import contributors from '../data/contributors.json';


function ContributorList(props) {
  const { classes } = props;
  const contributorsList = contributors;

  return (
    <div className={classes.contributorsList}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {/* sooo bad temporary solution */}
        <Contributor photo={contributorsList[0].photo} name={contributorsList[0].name} link={contributorsList[0].link} />
        <Contributor photo={contributorsList[1].photo} name={contributorsList[1].name} link={contributorsList[1].link} />
        <Contributor photo={contributorsList[2].photo} name={contributorsList[2].name} link={contributorsList[2].link} />
        <Contributor photo={contributorsList[3].photo} name={contributorsList[3].name} link={contributorsList[3].link} /> 
        <Contributor photo={contributorsList[4].photo} name={contributorsList[4].name} link={contributorsList[4].link} />  
      </GridList>
    </div>
  );
}

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

export default withStyles(styles)(ContributorList);
