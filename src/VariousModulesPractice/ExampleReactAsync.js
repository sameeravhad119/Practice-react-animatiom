import React, { Component } from 'react';
import Async from 'react-async'

class ExampleReactAsync extends Component {
    loadJson=()=>
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json())
    
    
    render() {
        return (
            <div>
                <span>Step1</span>
                <Async promiseFn={this.loadJson}>
                    {({ data, error, isLoading }) => {
                        if (isLoading) return "Loading..."
                        if (error) return `Something went wrong: ${error.message}`
                        if (data)
                            return (
                                <div>
                                    <strong>Loaded some data:</strong>
                                    <pre>{JSON.stringify(data, null, 2)}</pre>
                                </div>
                            )
                        return null
                    }}
                </Async>
                <div>Step3</div>
            </div>
        );
    }
}

export default ExampleReactAsync;