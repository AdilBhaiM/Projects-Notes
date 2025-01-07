// import { join } from 'path';

const teacherAll = (req, res) =>{
    // res.sendFile(join(process.cwd(), 'views', 'index.html'))
    res.render('About', {
        'Alpha': 'compiler'
    })
}

export { teacherAll } 