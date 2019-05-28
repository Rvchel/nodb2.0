const pictures = [{
    name: "Coffee Mugs",
    image: "https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    like: 0,
    id: 1
    // description
    //type
},
{
    name: "Pouring Cafe",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    like: 0,
    id: 2
},
{
    name: "Dream",
    image: "https://images.pexels.com/photos/877695/pexels-photo-877695.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    like: 0,
    id: 3
},
]

let id = 4

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
    //add id to each image
    res.json(pictures)
}
const editPicture = (req, res) => {
    const index = pictures.findIndex(picture => picture.id == req.params.id);
    pictures[index].like += 1;
    // console.log(index)
    
    
    res.json(pictures)
}
module.exports = {
    getPictures,
    deletePictures,
    addPicture,
    editPicture
}