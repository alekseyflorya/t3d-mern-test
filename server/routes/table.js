import express from 'express';

import { getTable, getTableItem, createTableItem, updateTableItem, deleteTableItem } from '../controllers/table.js';

const router = express.Router();

router.get('/', getTable);
router.post('/', createTableItem);
router.get('/:id', getTableItem);
router.patch('/:id', updateTableItem);
router.delete('/:id', deleteTableItem);

export default router;