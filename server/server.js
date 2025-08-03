import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import './models/db.js'; // Include `.js` extension explicitly in ESM
import AuthRouter from './routes/AuthRouter.js'; // Include `.js` extension explicitly in ESM
import ProductRouter from './routes/ProductRouter.js'; // Include `.js` extension explicitly in ESM
import ExpenseRouter from './routes/ExpenseRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
const allowedOrigins = ['https://your-client.vercel.app'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true // if using cookies
}));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Task Buddy Backend!');
});

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/expenses', ExpenseRouter);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
