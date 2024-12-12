const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  "openapi": "3.0.0",
  "info": {
    "title": "API Documentation",
    "version": "1.0.0",
    "description": "Dokumentasi API dengan Swagger"
  },
  "servers": [
    {
      "url": "https://unand.vercel.app"
    }
  ],
  "components": {
    "schemas": {
      "Menfess": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "description": "ID menfess yang unik"
          },
          "sender": {
            "type": "string",
            "description": "Pengirim menfess"
          },
          "message": {
            "type": "string",
            "description": "Pesan dari menfess"
          },
          "song": {
            "type": "string",
            "description": "Lagu terkait dengan menfess (opsional)"
          },
          "recipient": {
            "type": "string",
            "description": "Penerima menfess"
          },
          "createdAt": {
            "type": "string",
            "format": "date-time",
            "description": "Tanggal dan waktu saat menfess dibuat"
          },
          "updatedAt": {
            "type": "string",
            "format": "date-time",
            "description": "Tanggal dan waktu saat menfess terakhir diperbarui"
          }
        }
      }
    }
  },
  "paths": {},
  "tags": []
}
  




