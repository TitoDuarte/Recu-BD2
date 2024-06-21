const Crud = require('../models/crudModel');

const crud_index = async (req, res) => {
  try {
    const cruds = await Crud.find();
    res.json(cruds);
  } catch (error) {
    res.status(500).send('Error fetching CRUD data');
  }
};

const crud_create_post = async (req, res) => {
  const crud = new Crud(req.body);
  try {
    const newCrud = await crud.save();
    res.status(201).json(newCrud);
  } catch (error) {
    res.status(422).send('Crud add failed');
  }
};

const crud_details = async (req, res) => {
  try {
    const crud = await Crud.findById(req.params.id);
    if (!crud) {
      res.status(404).send('No result found');
    } else {
      res.json(crud);
    }
  } catch (error) {
    res.status(500).send('Error fetching CRUD details');
  }
};

const crud_update = async (req, res) => {
  try {
    const crud = await Crud.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!crud) {
      res.status(404).send('Crud not found');
    } else {
      res.json(crud);
    }
  } catch (error) {
    res.status(422).send('Crud update failed.');
  }
};

const crud_delete = async (req, res) => {
  try {
    const crud = await Crud.findByIdAndDelete(req.params.id);
    if (!crud) {
      res.status(404).send('Crud not found');
    } else {
      res.json('Crud deleted');
    }
  } catch (error) {
    res.status(400).send('Crud delete failed.');
  }
};

module.exports = {
  crud_index,
  crud_create_post,
  crud_details,
  crud_update,
  crud_delete,
};
