import express from "express"

const app = express();

    app.get('/', (req, res) => {
        return res.send('Estou rodando')
    })

app.listen(8080, () => console.log('Server is Running'))


