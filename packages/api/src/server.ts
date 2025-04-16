import app from './app';
import suggestionRoutes from './routes/suggestions.routes';

const PORT = 3000;

app.use('/suggestions', suggestionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
