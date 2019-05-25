const pictures = [{
    name: "Coffee Mugs",
    image: "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    //type
    //description
},
{
    name: "Pouring Cafe",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
}]
const getPictures = (req, res) =>  {
    res.json(pictures)
}
const deletePictures = (req, res) => {
    const index = pictures.findIndex(picture => picture.name === req.params.name)
    pictures.splice(index, 1)
    res.json(pictures)
}
const addPicture = (req, res) => {
    pictures.push(req.body)
    res.json(pictures)
}
module.exports = {
    getPictures,
    deletePictures,
    addPicture
}