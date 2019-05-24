import React, {Component} from 'react';
import Picture from './Picture';
import axios from 'axios';

class Pictures extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
            loading: true,
            error: "",
        }
        this.updatePictures = this.updatePictures.bind(this)
    }
    componentDidMount() {
        axios
        .get("/api/pictures")
        .then(response => {
            this.setState({pictures: response.data, loading: false})
        })
        .catch(error => {
            console.log(error)
            // this.setState({loading: false, error: "An error has occurred"})
        })
    }

    updatePictures(newPictures) {
        this.setState({pictures: newPictures})
    }


    render () {
        return (
            <section>
                {this.state.loading ? <p>Loading...</p> : null}
                {this.state.error}
                {this.state.pictures.map((picture, index) => (
                    <Picture key={index} picture={picture} updatePictures={this.updatePictures} />
                ))}
            </section>
        )
    }
}

export default Pictures;