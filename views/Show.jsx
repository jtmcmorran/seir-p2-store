const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component{
  render(){
    const product = this.props.product;
    let inStock = true;
    product.qty>0?
    inStock=true:
    inStock=false
    return(
      <DefaultLayout styles={[{href:"/css/show.css"}]}>
        <h1>{product.name}</h1>
        <img src={product.img}/>
        <p>{product.description}</p>
        <div>quantity remaining:{product.qty}</div>
        <div>Price:{`$${product.price}`}</div>
        {
          inStock?
          (<form method="POST" action={`/products/${this.props.product.id}/buy?_method=PUT`}><input type="submit" value="buy"/></form>):
          (<div>out of stock</div>)
        }
        <form method="POST" action={`/products/${product._id}?_method=DELETE`}><input type="submit" value="DELETE"/></form>
        <a href={`/products/${product._id}/edit`}> edit this product</a><br/>
        <a href={"/products/"}>return to main page</a>
      </DefaultLayout>
    )
  }
}
module.exports=Show
