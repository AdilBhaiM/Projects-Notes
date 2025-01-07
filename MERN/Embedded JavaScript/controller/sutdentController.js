// import { join } from 'path';

const studentAll = (req, res) =>{
    // res.sendFile(join(process.cwd(), 'views', 'index.html'))
    res.render('Home', {
        'Alpha': 'compiler'
    })
}

export { studentAll } 