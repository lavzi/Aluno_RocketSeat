const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data_videos')
const cursos = require('./data_cursos')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, () => {
    console.log('The server has started at port localhost:5000')
})

server.get('/', (req, res) => {
    const data_student = {
       img_url: 'https://avatars3.githubusercontent.com/u/67061939?v=4',
       name: 'Lucas Avanzi',
       role: 'Aluno - Rocketseat',
       description: 'No caminho para se tornar um programador full-stack na <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
       links: [
           {name: 'twitter', link_url: 'https://twitter.com/LavziBR'},
           {name: 'github', link_url: 'https://github.com/lavzi'},
           {name: 'linkedin', link_url: 'https://www.linkedin.com/in/avanzilucas/'}
       ] 
    }

    res.render('sobre_aluno', { data_student })
}) 

server.get('/classes', (req, res) => {
    res.render('classes', { video: videos })
}) 

server.get('/cursos', (req, res) => {
    res.render('cursos', { cursos })
}) 

server.get('/sobre_rckseat', (req, res) => {
    const data_rckseat = {
        img_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
        name: 'Rocketseat',
        description: 'Uma empresa focada em produzir o melhor conteúdo de desenvolvimento da Web',
        tecnologias_title: 'Tecnologias abordadas:',
        tecnologias: ['JavaScript', 'NodeJS', 'ReactJS', 'React Native'],
        links: [
            {name: 'twitter', link_url: 'https://twitter.com/rocketseat'},
            {name: 'github', link_url: 'https://github.com/rocketseat'},
            {name: 'linkedin', link_url: 'https://www.linkedin.com/school/rocketseat/'}
        ] 
     }
    res.render('sobre_rckseat', { data_rckseat })
}) 

server.get('/video', function(req, res){
    const id = req.query.id
    
    const video = videos.find(function(video){
        return id == video.id
    })

    if (!video) {
        res.send('Video was not found!')
    }

    return res.render('video', { item: video })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});