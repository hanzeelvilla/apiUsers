const express = require('express');
const app = express();
const cors = require('cors');
const { sequelize } = require('./models');

app.use(express.json());
app.use(cors());

require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.json({"Main": "Api entry point"})
})

const router = require('./routes/index.js');
app.use('/api', router);

sequelize.sync({ force: true })  // syncs the database schema when it starts
  .then(() => {
    console.log('Database & tables created!');
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch(error => console.error('Error sincronizando la base de datos:', error));