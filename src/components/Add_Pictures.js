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
        return (
            <form 
                onSubmit={e => {
                    e.preventDefault()
                    axios
                    .post("/api/pictures", {
                        name: this.state.name,
                        image: this.state.image
                    })
                    .then(response => {
                        this.props.changeView("pictures")
                    })
                    .catch(error => {
                        console.log(error)
                    })
                }}
                >
                <input name="name" onChange={this.handleChange} placeholder="Name" />
                <input name="image" onChange={this.handleChange} placeholder="Image"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Add_Pictures;