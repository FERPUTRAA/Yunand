require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from Server YUNAND Menfess:∆');
});

// Route untuk API
app.use('/v1/api', route);

// Route Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
app.use(express.static(path.join(__dirname, '../public')));

//*ini baru
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 menit
  max: 100, // Maksimum 100 permintaan per IP
  message: "Terlalu banyak permintaan dari IP ini. Silakan coba lagi nanti.",
});

app.use(limiter);



const app = express();



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));