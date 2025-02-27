import express from "express"
// import path from "path"
const router = express.Router();
import Blogs from '../data/allblogs.js';
// import { title } from "process";

const __dirname = import.meta.dirname;

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('home')
})

router.get('/blog', (req, res) => {
    // blogs.forEach(e => {
    //     console.log(e.slug)
    // });
    // res.sendFile(path.join(__dirname, '../templates/bloghome.html'))
    res.render('BlogHome', {
        blogs: Blogs
    })
})

router.get('/blogpage/:slug', (req, res) => {
    // blogs.forEach(e => {
        // });
        // console.log(req.params.slug)
        // const myblog = blogs.filter((e)=>{
        //     return e.slug == req.params.slug
        // })
    // const {slug} = myblog
    // console.log(myblog[0])
    // res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
    res.render('blogpage', {
        title: Blogs.title
    })
})

export default router;