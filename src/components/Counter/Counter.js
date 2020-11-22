import React from 'react';

import Button from '../Button/Button';

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }
    
    render() {
        const {count} = this.state;
        let decrementButton;

        if (this.state.count > 0) {
            decrementButton = <Button title={"arrow_down.png"} task={() => this.decrement()} />;
        }

        return (
            <center>
                <Button title={"arrow_up.png"} task={() => this.increment()} />
                <h1 id="count" style={{fontSize: "100px"}}>{count}</h1>
                {decrementButton}
            </center>
        );
    }
}

export default Counter;