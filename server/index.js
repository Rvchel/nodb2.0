const express = require("express");
const pictureController = require("./controllers/pictureController");
const app = express();

app.use(express.json())

app.get("/api/pictures/:image", pictureController.getPictures)
app.get("/api/pictures", pictureController.getPictures)
app.delete("/api/pictures/:name", pictureController.deletePictures)
app.post("/api/pictures", pictureController.addPicture)
app.put("/api/pictures/:id", pictureController.editPicture)

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})
