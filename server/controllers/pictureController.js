const pictures = [{
    name: "Coffee Mugs",
    image: "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    // description
    //type
},
{
    name: "Pouring Cafe",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
},
{
    name: "Dream",
    image: "https://images.pexels.com/photos/877695/pexels-photo-877695.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
const editPicture = (req, res) => {
    const index = pictures.findIndex(picture => picture.name === req.params.name)
    
    res.json(pictures)
}
module.exports = {
    getPictures,
    deletePictures,
    addPicture,
    editPicture
}