import React, { Component } from 'react';

export default class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    console.log('submit');
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