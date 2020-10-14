import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    let search = this.query.value;
    let path = `/search/${search}`;
    this.props.history.push(path);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search" 
               onChange={this.onSearchChange}
               ref={(input) => this.query = input} 
               placeholder="Search..." />
        <button type="submit" className="search-button">Search</button>
      </form>      
    );
  }
}

export default withRouter(SearchForm);