app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.post("/search", (req, res) => {
  console.log(req.body.value);
  res.redirect("/");
});

app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "..", "public", "html", "404.html"));
});

app.use((err, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, "..", "public", "html", "500.html"));
});
