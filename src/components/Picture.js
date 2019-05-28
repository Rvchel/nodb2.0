import React from 'react';
import axios from 'axios';

function Picture(props) {
    
    return (

    <article className="gallary">
    
        <img
         src={props.picture.image}
         alt={"picture"}
         >
        </img> 

    <section>
         <h3>{props.name}</h3>

         <button id="Delete_Button"
             onClick={() => {
             axios.delete("/api/pictures/" + props.picture.name).then(response => {
             props.updatePictures(response.data)
         })
             .catch(error => {
             console.log(error)
         })
         }}  >delete</button>


         <button id="Like_Button" 
             onClick={() => {
             axios.put("/api/pictures/" + props.picture.id ).then(response => {
                 props.updatePictures(response.data)
             })
             .catch(error => {
                 console.log(error)
             })
             }}
             
             >Likes</button>
            <div id="counter">{props.picture.like}</div>
         
        
    </section>
    
    </article>
    )
}

export default Picture; 