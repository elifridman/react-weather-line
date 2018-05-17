import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../store/actions';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({
      term: event.target.value
    })
    console.log(this.state.term);
  }
  onFormSubmit(e){
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});

  }
  render(){
    return(
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <form onSubmit={this.onFormSubmit}  className="input-group mb-3 mt-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">@</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Get Five Day Forcast in your favorite cities"
                aria-describedby="basic-addon1"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <button className="btn btn-outline-secondary" type="submit">Submit</button>
            </form >
          </div>
        </div>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar);
