import React, { Component } from 'react'

export class ProductRow extends Component {
  render() {
    const { product } = this.props
    const color = product.stocked ? 'black' : 'red'

    return (

      <tr>
        <td style={{ color: color }}>{product.name}</td>
        <td>{product.price}</td>
      </tr>

    )
  }
}

export default ProductRow
