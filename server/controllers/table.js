import express from 'express';
import mongoose from 'mongoose';

import TableItem from '../models/TableItem.js';

const router = express.Router();

export const getTable = async (req, res) => {
    try {
        const table = await TableItem.find();
                
        res.status(200).json(table);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTableItem = async (req, res) => {
    const { id } = req.params;

    try {
        const tableItem = await TableItem.findById(id);
        
        res.status(200).json(tableItem);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTableItem = async (req, res) => {
    const { firstname, lastname, email, nickname, date } = req.body;

    const newTableItem = new TableItem({ firstname, lastname, email, nickname, date })

    try {
        await newTableItem.save();

        res.status(201).json(newTableItem );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTableItem = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, nickname, date } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedTableItem = { firstname, lastname, email, nickname, date, _id: id };

    await TableItem.findByIdAndUpdate(id, updatedTableItem, { new: true });

    res.json(updatedTableItem);
}

export const deleteTableItem = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await TableItem.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;