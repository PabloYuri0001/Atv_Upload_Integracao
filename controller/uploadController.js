const csv = require('csv-parser');
const path = require('path');
const fs = require('fs');
const supabase = require('../config/db');

const FuncUpload = async (req, res) => {
  const results = [];

  if (!req.file) {
    return res.status(400).send('Nenhum arquivo enviado.');
  }
  console.log('Arquivo recebido:', req.file);

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      const { data, error } = await supabase.from('users').insert(results);

      fs.unlinkSync(req.file.path);
      if (error) {
        console.error(error);
        return res.status(500).send('Erro ao inserir no banco.');
      }
      res.send(
        `Upload realizado com sucesso. ${results.length} registros inseridos.`
      );
    });
};

module.exports = { FuncUpload };
