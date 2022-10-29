import express from 'express'


const index = express()

const PORT = process.env.PORT || 4444

index.get('/name', ( req, res) => {
    res.json({
        name : 'Maks'
    })
})


index.listen(PORT, (err) => {
    if (err){
        return  console.log('Произошла ошибка', err)
    }
    console.log(`Сервер запущен на порту ${PORT}`)
})