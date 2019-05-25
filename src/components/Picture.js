import React from 'react';
import axios from 'axios';

function Picture(props) {
    return (
        <article className="picture">
         <img
         src={props.picture.image}
         alt={"picture"}
         >
         </img> 
         <section>
         <h3>{props.name}</h3>
         <button id="Delete_Button"
         onClick={() => {
             axios.delete("/api/pictures/:name" + props.picture.name).then(response => {
             props.updatePictures(response.data)
         })
         .catch(error => {
             console.log(error)
         })
         }}>delete</button>
         <form id="Input_Button">
         <input id="Des_Input" name="submit" placeholder="Type Here" />
         <button id="Edit_Button" type="submit">Edit</button>
        </form>
        </section>
        </article>
    )
}

export default Picture; 