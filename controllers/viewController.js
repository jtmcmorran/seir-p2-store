const PATH = '/products'
const viewController = {
    index(req,res,next){ res.render('Index',{products:res.locals.data.products})},
    show(req,res,next){ res.render('Show', {product:res.locals.data.product})},
    edit(req,res,next){ res.render('Edit', {product:res.locals.data.product})},
    reHome(req,res,next){ res.redirect(PATH)},
    reShow(req,res,next){ res.redirect(PATH+`/${req.params.id}`)}
    }
}
module.exports = viewController;
