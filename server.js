import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log(`\n Listening  in port: ${port}`);
  console.log(`\n CTRL + Clique em  http://localhost:${port}`);
});
