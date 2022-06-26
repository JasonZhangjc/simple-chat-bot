import React, { Component } from 'react'

const list = [
    'Yes', 'No', 'Maybe', 'Not sure ... try again', 'Ask a friend', 'Call the police'
]

const MyContext = React.createContext();

class MyProvider extends Component {

    // state keeps track of the scene we can see
    // 0: initial
    // after we click "next" on the screen,
    // we go to 1:confirm
    state = {
        screen:0,
        question: '',
        result: '',
    }

    // Go to 'next' and update screen
    // not a const function
    handleGoTo = (value) => {
        this.setState({screen:value})
    }

    // a function to store the 'question' of the user
    handleQuestion = (value) => {
        this.setState({question:value})
    }

    // generate a random result from the 'list'
    getRandomValue = () => {
        return list[Math.floor(Math.random() * list.length)]
    }

    handleResult = () => {
        let rand = this.getRandomValue()
        // Need to ensure that the random value is different from before
        if (this.state.result !== '') {
            while (rand === this.state.result) {
                rand = this.getRandomValue();
            }
        }
        // update result in the state
        this.setState({result:rand})
    }

    handleReset = () => {
        this.setState({
            screen:0,
            question: '',
            result: '',
        })
    }


    // if need to return something from a class
    // use render()
    render() {
        return(
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    goTo: this.handleGoTo,
                    question: this.handleQuestion,
                    result: this.handleResult,
                    reset:this.handleReset,
                }}
                >
                    {this.props.children}
                </MyContext.Provider>
            </>

        )
    }
}

export {
    MyProvider,
    MyContext
}