import React, { Component } from 'react';
import ReactDOM from 'react-dom';

  const url = "https://edutech-cors-anywhere.herokuapp.com/https://canvas.abudlc.edu.ng";
  const api = `${url}/api/v1/`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            courseCode: ''
        }
    }

    componentDidMount() {
        this.getCourses()
    }
    getCourses() {
        fetch(`${api}courses?enrollment_type=student&access_token=${token}`)
        .then(response => response.json())
        .then(data => {
            this.setState({name: data[0].name, courseCode: data[0].course_code})
            console.log(data[0].name)
        });
    }

    render() {
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h2>Course Code: {this.state.courseCode}</h2>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));