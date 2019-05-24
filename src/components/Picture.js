import React, {Component} from 'react';
import axios from 'axios';

function Picture(props) {
    return (
        <article className="picture">
         <img>
         src={props.picture.image}
         alt={props.picture.name}
         </img> 
         <h3>{this.props.name}</h3>
         <button onClick={() => {axios.delete("api/pictures" + props.picture.name).then(response => {
             props.updatePictures(response.data)
         })
         .catch(error => {
             console.log(error)
         })
         }}>delete</button>
        </article>
    )
}

export default Picture; 