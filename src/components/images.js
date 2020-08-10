import React, {Component} from "react";

class Images extends Component {

    state = {
        loading: true,
        images: [],
    };

    async componentDidMount() {
        const url2 = 'https://gorest.co.in/public-api/photos?_format=json&access-token=27dGdE8i2MaCTzRff0IQpn6m3KaLbDuMXwr0';
        
        const response = await fetch(url2);
        const data = await response.json();
        console.log("DATA is " + data);
        this.setState({images : data.result, loading: false});
        console.log(this.state.images);
        // console.log("PERSONS=" + this.state.persons);
    }

    render() {
        const p = this.state.images.map((image) => <p key={image.id}>{image.title} {image.thumbnail} <img src={image.thumbnail} alt/> </p>)
        //console.log("P is " + p)
        return (
            <div>{p}</div>
        )
    }
}

export default Images; 












