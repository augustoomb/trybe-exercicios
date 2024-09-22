import express from 'express';

import UserRoutes from '../routes/user.routes';

const app = express();

app.use(express.json());
app.use(UserRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});