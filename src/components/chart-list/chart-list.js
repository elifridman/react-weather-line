import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../chart/chart';
import { MyMapComponent } from '../google-map/google-map';


class ChartList extends Component{
  constructor(props){
    super(props);
  }
  renderWeather(cityData){
    const cityName = cityData.city.name;
    const temps = cityData.list.map(weather =>weather.main.temp);
    const pressures = cityData.list.map(weather =>weather.main.pressure);
    const humidities = cityData.list.map(weather =>weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    return(
      <tr key={cityName}>
        <th scope="row">
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100px`, width:'100px' }} />}
            mapElement={<div style={{ height: `100%` }} />}
            lon = {lon}
            lat = {lat}
          />
        </th>
        <th>
          <Chart data={temps} color="orange" />
        </th>
        <th>
          <Chart data={pressures} color="green"  />
        </th>
        <th>
          <Chart data={humidities} color="black" />
        </th>
      </tr>

    )
  }
  render(){
    return(
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <table className="table">
            <thead>
              <tr>
                <th scope="col">City</th>
                <th scope="col">Temprature</th>
                <th scope="col">Pressure</th>
                <th scope="col">Hummidity</th>
              </tr>
            </thead>
            <tbody>
              {this.props.weather.map(this.renderWeather)}
            </tbody>
          </table>
          </div>
        </div>
    )
  }
}
function mapStateToProps(state){
  console.log(state.weather)
  return{
    weather: state.weather
  }
}
export default connect(mapStateToProps)(ChartList);
