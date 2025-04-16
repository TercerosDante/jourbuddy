import app from './app';
import express from 'express';
import cors from 'cors';
import suggestionRoutes from './routes/suggestions.routes';
import { errorHandler } from './common/middleware/error.middleware';
const PORT = 3000;

app.use(cors({
  origin: '*',
}));

app.use(express.json());

app.use('/suggestions', suggestionRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
