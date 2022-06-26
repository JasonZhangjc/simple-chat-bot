import { useContext } from 'react';
import { MyContext } from './context';

/* 
Need to install animate.css to 
enable animations between different screens
npm install animate.css --save
*/
import 'animate.css';

/*
Also need to use SwitchTransition and CSSTransition
npm install react-transition-group --save
*/
import {SwitchTransition, CSSTransition} from 'react-transition-group';

import './assets/App.css';
import Initial from './components/initial';
import Confirm from './components/confirm';
import Result from './components/result';


const App = () => {
  // context is shared across initial, confirm, and result
  const context = useContext(MyContext);

  const handleComponent = () => {
    const screen = context.state.screen;
    if (screen === 0) return <Initial/>
    if (screen === 1) return <Confirm/>
    if (screen === 2) return <Result/>
  }

  return (
    <div className="container">
      {/* The Transitions here are for animations */}
      <SwitchTransition mode="out-in">
        {/* animation lasts for 500ms */}
        <CSSTransition
          key={context.state.screen}
          timeout={500}
          classNames="fade"
        >
          {handleComponent()}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
