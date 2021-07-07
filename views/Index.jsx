const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component{
  render(){
    const products = this.props.products;
    return(
      <DefaultLayout title={"Delightful Dice"} styles={[{href:"/css/index.css"}]}>
        <a href="/products/new">add new product</a>
        <div id="flexContainer">
        {
          products.map((product)=>{
            return(
              <div key = {product._id} class="flexChild">
              <img src={`${product.img}`}/><br/>
              <a href={`/products/${product._id}`}>{product.name}</a>
              </div>
            )
          })
        }
        </div>
      </DefaultLayout>
    )

  }
}
module.exports=Index
