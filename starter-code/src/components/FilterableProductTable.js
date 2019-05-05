import React, { Component } from 'react'
import Search from './Search';
import ProductTable from './ProductTable';

export class FilterableProductTable extends Component {

  state = {
    products: this.props.products,
    filtered: this.props.products,
    searchInput: '',
    checked: false
  }


  onSearchChange = (name, value) => {
    const { products, checked } = this.state;

    let filtered = products.filter(product => {
      return product.name.toLowerCase().includes(value.toLowerCase());
    })

    if (checked) filtered = filtered.filter(product => product.stocked)

    this.setState({
      [name]: value,
      filtered
    })
  }

  onCheckChange = (name, value) => {
    let { filtered, products, searchInput } = this.state;

    if (value) {
      filtered = filtered.filter(product => product.stocked)
    } else {
      filtered = products.filter(product => {
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
      })
    }

    this.setState({
      [name]: value,
      filtered
    })

  }



  render() {
    const { searchInput, checked, filtered } = this.state

    return (
      <div>
        <h1>IronStore</h1>
        <Search
          searchInput={searchInput}
          onSearchChange={this.onSearchChange}
          onCheckChange={this.onCheckChange}
          checked={checked}
        />
        <br />
        <ProductTable products={filtered} />
      </div>
    )
  }
}

export default FilterableProductTable
