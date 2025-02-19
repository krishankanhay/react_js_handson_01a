import React, { Component } from 'react'
import ClassCompo from './ClassCompo';
import { FunctionCompo } from './FunctionCompo';


class DisplayCompo extends Component {
    constructor() {
        super();
        this.state = {
            class_count: true,
            function_count: true
        }
    }
    render() {
        return (
            <>
                <h1>Styling using Functional and Class Component333</h1>
                <h1>Styling using Functional and Class Component</h1>
                <div className='see'>
                    <p className='see_in' onClick={() => this.setState({ function_count: !this.state.function_count })}>To see styling in functional component</p>
                    <p className='see_in' onClick={() => this.setState({ class_count: !this.state.class_count })}>To see styling in class component</p>
                </div>
                <div className='component'>
                    {this.state.function_count ? <FunctionCompo /> : <h1 className='hello'>Hello</h1>}
                    {this.state.class_count ? <ClassCompo /> : <h1 className='hello'>Hello</h1>}
                </div>
            </>
        )
    }
}

export default DisplayCompo





