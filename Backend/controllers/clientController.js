const Client = require ('../models/Client')
const {validateClient} = require('./validate')


const clientController = {
    
    registerClient: async function (req, res) {

        const { error } = validateClient(req.body)
        if (error) { return res.status(400).send(error.message)}

        const selectedclient = await Client.findOne({ cpf: req.body.cpf })
        if (selectedclient) return res.status(400).send('Este cliente já possui cadastro.')

        const client = new Client({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            adress: req.body.adress,
            cpf: req.body.cpf,  
        })

        try {
            const savedClient = await client.save()
            res.send(savedClient)
            console.log("Novo Cliente", savedClient )
        } catch (error) {
            res.status(400).send(error)
        }
    }
}

module.exports = clientController