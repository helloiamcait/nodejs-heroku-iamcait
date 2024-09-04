import express from "express";
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("public"));
/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
