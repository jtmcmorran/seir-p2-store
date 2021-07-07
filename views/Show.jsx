const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component{
  render(){
    const product = this.props.product;
    return(
      <DefaultLayout>
        <h3>{product.name}</h3>
        <img src={product.img}/>
        <p>{product.description}</p>
        <div>quantity remaining:{product.qty}</div>
        <div>Price:{product.price}</div>
        <a href={`/products/${product._id}/edit`}> edit</a>
      </DefaultLayout>

    )
  }
}
module.exports=Show
