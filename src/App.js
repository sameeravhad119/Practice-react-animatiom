import React, { Component } from 'react';


import ExampleReactjsPopup from './VariousModulesPractice/ExampleReactjsPopup';
import ExampleReactAsync from './VariousModulesPractice/ExampleReactAsync';
import ReduxUpdate from './VariousModulesPractice/ReduxUpdate';
import ReactTransitionGroup from './VariousModulesPractice/ReactTransitionGroup';
import './App.css';
class App extends Component {

  render() {
    return (
      <div className={'app-level'}>
        {/* <ReduxUpdate /> */}
        {/* <ExampleReactAsync/> */}
        {/* <ExampleReactjsPopup></ExampleReactjsPopup> */}
        <ReactTransitionGroup/>
      </div>
    )
  }
}

export default App;
