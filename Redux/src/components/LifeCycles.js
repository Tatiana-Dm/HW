import React from "react";

class LifeCycles extends React.Component {
    // state = {
    //     myNumber: 5
    // };
    // defaultColor = this.props.color;

    constructor(props) {
        super(props);
        this.state = {
            myNumber: 5,
            numbers: [1, 2, 3, 4, 5]
        };
        this.defaultColor = this.props.color;
    }

    componentDidMount() {
        console.log("componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => console.log("data", data))
            .catch((error) => console.log("error", error))
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {
        const { myNumber, numbers } = this.state
        const age = this.state.myNumber * 5;
        return (
            <div>
                <h1>
                    LifeCycles {myNumber} {age} {this.defaultColor}
                </h1>
                <button
                    onClick={
                        () => this.setState({ myNumber: myNumber + 1 })
                    }
                >Click</button>
                <ul>
                    {
                        numbers.map((item, i) => <li key={i}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }

}

export default LifeCycles;
