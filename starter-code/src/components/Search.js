import React, { Component } from 'react'

export class Search extends Component {

  handleSearch = e => {
    let { name, value } = e.target

    this.props.onSearchChange(name, value)
  }

  handleCheck = e => {
    let { name, value } = e.target

    value = !this.props.checked
    this.props.onCheckChange(name, value);
  }

  render() {
    const { searchInput, checked } = this.props

    return (
      <div>
        <form>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="searchInput"
            value={searchInput}
            onChange={this.handleSearch}
            style={{ width: '60%' }}
          />
          <br />

          <input
            type="checkbox"
            onChange={this.handleCheck}
            value={checked}
            name="checked"
          />
          <label htmlFor="in-stock">In stock only</label>
        </form>
      </div>
    )
  }
}

export default Search
