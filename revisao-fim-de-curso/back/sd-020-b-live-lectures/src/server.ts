import app from './app';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log(`Alive at ${PORT}`));

export default server;