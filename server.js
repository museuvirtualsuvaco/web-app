import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// No Heroku, a porta vem da variável de ambiente PORT (tanto staging quanto produção)
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res, next) => {
  // Se a URL parecer ser um arquivo (contém ponto "."), deixe o express.static lidar
  if (req.path.includes('.')) {
    return next(); // deixa o express.static tentar servir o arquivo
  }

  // Senão, é uma rota SPA — envia o index.html
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} (staging)`);
});
