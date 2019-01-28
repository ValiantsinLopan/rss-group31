import React, { Component } from 'react';
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


// const mapState = { center: [55.76, 37.64], zoom: 10 };
const mapState = { center: [53.54, 27.34], zoom: 10 };

const styles = () => ({
  map: {
  },
  mapTitle: {
    margin: 30,
    paddingTop: 30,
  }
});


class MapBasics extends Component {
  state = { showMap: true };

  toggleMap() {
    const { showMap } = this.state;
    this.setState({ showMap: !showMap });
  }

  render() {
    const { showMap } = this.state;
    const { classes, work } = this.props;

    return (
      <Paper>
        <Typography className={classes.mapTitle} variant="h5" component="h2"> Explore some sign places on thе map: </Typography>
        <YMaps>
          <div id="map-basics" className={classes.map}>
            {showMap &&
              <Map width={'100%'} height={300} state={mapState}>
                {/* Creating a geo object with the "Point" geometry type. */}
                <GeoObject
                  // The geometry description.
                  geometry={{
                    type: 'Point',
                    coordinates: [55.8, 37.8],
                  }}
                  // Properties.
                  properties={{
                    // The placemark content.
                    iconContent: 'test mark',
                    hintContent: 'Ну давай уже тащи',
                  }}
                  // Options.
                  options={{
                    // The placemark's icon will stretch to fit its contents.
                    preset: 'islands#blackStretchyIcon',
                    draggable: false,
                  }}
                />
          
                {placemarks.map((placemarkParams, i) =>
                  <Placemark key={i} {...placemarkParams} />
                )}
              </Map>
              
              }
          </div>
        </YMaps>
      </Paper>
    );
  }
}


// export default MapBasics;
export default connect(
  store => ({
    language: store.page.language,
    work: store.architects.currentArchitect.biography.work.Place,
  }),
)(withStyles(styles)(MapBasics));
