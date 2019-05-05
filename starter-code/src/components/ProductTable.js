import React, { Component } from 'react'
import ProductRow from './ProductRow';

export class ProductTable extends Component {
  render() {
    const productList = this.props.products.map((product, i) => {
      return <ProductRow product={product} key={i} />
    })

    return (
      <div>
        <table style={{ width: '50%', margin: 'auto' }}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            {productList}
          </tbody >
        </table>
      </div>
    )
  }
}

export default ProductTable
