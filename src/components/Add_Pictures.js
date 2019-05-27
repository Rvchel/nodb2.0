import React, {Component} from 'react'
import axios from 'axios';

class Add_Pictures extends Component {
    constructor() {
        super(); 
        this.state = {
            name: "",
            image: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    
    render() {
        const {name} = this.state
        const {image} = this.state
        return (
            <form id="Input_Submit"
                onSubmit={e => {
                    e.preventDefault()
                    axios
                    .post("/api/pictures", {
                        name: name,
                        image: image
                    })
                    .then(response => {
                        this.props.changeView("pictures")
                    })
                    .catch(error => {
                        console.log(error)
                    })
                }}
                >
                <input id="Name_Input" name="name" onChange={this.handleChange} placeholder="Name" />
                <input id="Image_Input" name="image" onChange={this.handleChange} placeholder="Image"/>
                <button id="Submit_Button" type="submit">Submit</button>
            </form>
        )
    }
}

export default Add_Pictures;