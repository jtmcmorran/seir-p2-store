const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component{
  render(){
    const products = this.props.products;
    return(
      <DefaultLayout title={"Games and Goodies"}>
        <ul>
        {
          products.map((product)=>{
            return(
              <li key = {product._id}>
              <a href={`/products/${product._id}`}>{product.name}</a>
            </li>
            )
          })
        }
        </ul>
        <a href="/products/new">add new product</a>
      </DefaultLayout>
    )

  }
}
module.exports=Index
