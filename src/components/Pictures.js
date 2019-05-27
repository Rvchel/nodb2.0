import React, {Component} from 'react';
import Picture from './Picture';
import axios from 'axios';

class Pictures extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            pictures: [],
            loading: true,
            error: "",
        }
        this.updatePictures = this.updatePictures.bind(this)
        this.increase = this.increase.bind(this)
    }
    increase() {
        this.setState({count: this.state.count +1})
        console.log(this.state.count)
    }
    componentDidMount() {
        axios
        .get("/api/pictures")
        .then(response => {
            this.setState({pictures: response.data, loading: false})
        })
        .catch(error => {
            console.log(error)
            this.setState({loading: false, error: "No Coffee"})
        })
    }

    updatePictures(newPictures) {
        this.setState({pictures: newPictures})
    }


    render () {
        // console.log(this.state.pictures)
        const {pictures} = this.state
        const {error} = this.state
        const {loading} = this.state
       
        return (
    
            <section>

                {loading ? <p>Loading</p> : null}
                {error}
                {pictures.map((picture, index) => (
                    <Picture key={index} picture={picture} updatePictures={this.updatePictures} increase={this.increase}
                    count={this.state.count}/>
                ))}
            </section>
        )
    }
}

export default Pictures;