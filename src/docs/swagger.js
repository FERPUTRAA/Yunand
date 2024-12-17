const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');


import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { menfess, id, sender, recipient, song, updatedAt } from "./server.js";



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const app = express();

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'Dokumentasi API dengan Swagger',
  },
  servers: [
    {
      url: process.env.NODE_ENV === 'production' 
        ? 'https://unand.vercel.app' 
        : 'https://localhost:8080',
    },
  ],
  components: {
    schemas: {
      Menfess: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'ID menfess yang unik',
          },
          sender: {
            type: 'string',
            description: 'Pengirim menfess',
          },
          message: {
            type: 'string',
            description: 'Pesan dari menfess',
          },
          song: {
            type: 'string',
            description: 'Lagu terkait dengan menfess (opsional)',
          },
          recipient: {
            type: 'string',
            description: 'Penerima menfess',
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Tanggal dan waktu saat menfess dibuat',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'Tanggal dan waktu saat menfess terakhir diperbarui',
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, '../controllers/*.js')],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;