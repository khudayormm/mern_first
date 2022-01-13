const Travel = require('../models/travel.model');


//Method: GET 
//description: get all items
const getAllItems = async(req, res) => {
    try {
        const travels = await Travel.find();
        res.status(200).json({
            message: "success",
            travels
        })
        
    } catch (error) {
        res.send(error)
    }
}

//Method: GET 
//description: get one items
const getOneItem = async(req, res) => {
    try {
        const travel = await Travel.findById(req.params.id);
        if(!travel)
            return res.status(404).json({
                message: "Not found!"
            })
        return res.status(200).json({
            message: "success",
            travel
        })
    } catch (error) {
        res.send(error)
    }
}



//Method: POST 
//description: POST one items
const addItem = async(req, res) => {
    try {
        const { title, image, description } = req.body;
        const newItem = await Travel.create({
            title,
            image,
            description
        })

        res.status(201).json({
            message: "success",
            newItem
        })
    } catch (error) {
        res.send(error)
    }
}


//Method: PUT 
//description: UPDATE one items
const updateOneItem = async(req, res) => {
    try {
        const { title, image, description } = req.body;
        const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, {
            title,
            image,
            description
        })

        res.status(200).json({
            message: "success",
            updatedTravel
        })
    } catch (error) {
        res.send(error)
    }
}



//Method: DELETE 
//description: DELETE one items
const removeItem = async(req, res) => {
    try {
        const { title, image, description } = req.body;
        await Travel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Deleted one element!"
        })
    } catch (error) {
        res.send(error)
    }
}


module.exports = {
    getAllItems,
    getOneItem,
    addItem,
    updateOneItem,
    removeItem
}