const express = require('express');
const path = require('path');

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.post('/search', (req, res) => {
  res.redirect(`/filter/${req.body.value}`);
});

app.get('/filter/:value',(req,res)=>{
  fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=b9da8a8928ade30c5680978edd9a4330&query=${req.params.value}`).then((result)=>result.json()).then((result)=>console.log(result))
  res.redirect("/");
  res.end()
})

app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', 'public', 'html', '404.html'));
});

app.use((err, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', 'public', 'html', '500.html'));
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
