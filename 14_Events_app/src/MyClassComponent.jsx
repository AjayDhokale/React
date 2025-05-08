import React, { Component } from 'react'

export class MyClassComponent extends Component {
    constructor() {
        super();
        this.name = "Ajay";
    }

    componentDidMount() {
        console.log("Components Mounted");

    }

    componentDidUpdate() {
        console.log("Components Updated");

    }

    componentWillUnmount() {
        console.log("Components Unmounted");

    }


    render() {
        return (
            <div>
                <h1 className='text-2xl text-center  m-10'>MyClassComponent</h1>
                <h1 className='text-2xl text-center  m-10'>My Name is {this.name}</h1>
            </div>
        )
    }
}

export default MyClassComponent
