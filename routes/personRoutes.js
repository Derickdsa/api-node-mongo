const router = require('express').Router()
const Person = require('../models/Person')


// Create - criação de dados
router.post('/', async (req,res) =>{

    // req.body
    const { name, salary, approved } = req.body

    if(!name){
        res.status(422).json({error: 'O nome é obrigatorio! '})
    }

    if(!salary){
        res.status(422).json({error: 'O Salario é obrigatorio! '})
    }
    
    const person = {
        name,
        salary,
        approved
    }

    try {
        // criando dados
        await Person.create(person)

        res.status(201).json({message: 'Pessoa inserida no sistema com suceeso!' })
    } catch (error) {
        res.status(500).json({error: error})
    }

})

// Read - leitura de dados
router.get('/', async (req,res) => {
    try {

        const people = await Person.find()

        res.status(200).json(people)
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/:id', async (req,res) =>{
    //extrair dados da req, pela url = req.params
    const id = req.params.id
    try {
        const person = await Person.findOne({_id: id})

        if(!person){
            res.status(424).json({message: 'Pessoa não encontrada'})
            return 
        }

        res.status(200).json(person)
        
    } catch (error) {
        res.status(500).json({error: error})
    }


})

// Update - atualização de dados (PUT, PATCH)
router.patch('/:id', async (req, res) => {
    
    const id = req.params.id 

    const { name, salary, approved } = req.body

    const person = {
        name,
        salary,
        approved,
    }

    try {
        
        const UpdatePerson = await Person.updateOne({_id: id}, person)

        if(UpdatePerson.matchedCount === 0){
            res.status(424).json({message: 'Usuario não encontrado!'})
            return
        }

        res.status(200).json(person)
    } catch (error) {
         res.status(500).json({error: error})
    }

})

// Deletar dados
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const person = await Person.findOne({_id: id})

        if(!person){
            res.status(424).json({message: 'Pessoa não encontrada'})
            return 
        }

        try {
            await Person.deleteOne({_id: id})

            res.status(201).json({message: 'Usuario deletado do sistema com suceeso!' })

        } catch (error) {
            res.status(500).json({error: error})
        }
})

module.exports = router