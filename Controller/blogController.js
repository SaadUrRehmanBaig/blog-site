const Blog = require('../models/blog')

const blog_index = (req,res)=>{
    Blog.find().sort({createdAt:-1})
        .then((results)=>{res.render('index',{title:'All Blogs',blogs:results})})
        .catch(err=>{console.log(err)})
}
const blog_details = (req,res)=>{
    Blog.findById(req.params.id)
        .then((result)=>{res.render('details',{title:'Blog details',blog:result})})
        .catch(err=>{res.render('404',{title:"Blog not found"})})
}
const blog_delete = (req,res)=>{
    Blog.findByIdAndDelete(req.params.id)
        .then(result=>{
            res.send({redirect: '/blogs'})
        })
        .catch(err=>{console.log(err)})
}
const blog_create_get = (req,res)=>{
    res.render('create',{title:'Create a new Blog'})
}
const blog_create_post = (req,res)=>{
    const blog = new Blog(req.body)
    blog.save().then(result=>{
        res.redirect('/blogs')
    }).catch(err=>console.log(err))
}

module.exports.blog_index = blog_index
module.exports.blog_details = blog_details
module.exports.blog_delete = blog_delete
module.exports.blog_create_get=blog_create_get
module.exports.blog_create_post=blog_create_post
