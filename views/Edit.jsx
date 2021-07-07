const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class Edit extends React.Component{
  render(){
    return(
      <DefaultLayout title = "Edit Product" styles={[{href:"/css/form.css"}]}>
      <div>
      <form method="POST" action={`/products/${this.props.product.id}?_method=PUT`}>
           Name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
           Description: <input type="text" name="description" defaultValue={this.props.product.description}/><br/>
           Image Url: <input type="text" name="img" defaultValue={this.props.product.img}/><br/>
           Price: <input type="number" name="price" defaultValue={this.props.product.price}/><br/>
           Quantity: <input type="number" name="qty" defaultValue={this.props.product.qty}/><br/>
           <input type="submit" name="" value="Update Product"/>
        </form>
        </div>
        <a href="/products/">return to main page without changing</a>
      </DefaultLayout>
    )
  }
}

module.exports=Edit
