import express from 'express';
import { addExpenses, deleteExpenses, fetchExpenses } from '../controllers/ExpenseController.js';

const router = express.Router();

//fetch all expenses of the user based on the user id
router.get('/', fetchExpenses);
//add expenses
router.post('/', addExpenses);
//delete expenses
router.delete('/:expenseId', deleteExpenses);


export default router;