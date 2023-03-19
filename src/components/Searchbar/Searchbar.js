import React, { Component } from 'react';
import styled from 'styled-components';

class Searchbar extends Component {
  state = {
    query: '',
  };

  onChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    e.target.reset();
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.onChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
