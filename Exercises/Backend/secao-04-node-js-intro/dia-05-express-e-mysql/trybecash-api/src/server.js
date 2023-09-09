const app = require('./app');

const PORT = 3005;

app.listen(PORT, () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);
  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);
});