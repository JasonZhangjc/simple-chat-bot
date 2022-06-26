import { useContext } from "react";
import { MyContext } from "../context";


const Confirm = () => {
    // If want to use the context
    // add the following line at the beginning of the function
    const context = useContext(MyContext)

    // The current page is No. 1
    // Next page is No. 2, the result page
    const goNext = () => {
        context.goTo(2)
    }

    const goBack = () => {
        context.question('')
        context.goTo(0)
    }

    return (
        <div>
            <h3>Your question is:</h3>
            <div className="viewer">
                { context.state.question }
            </div>

            {/* Two Options here */}
            <div className="animate__animated animate__bounceIn animate__delay-1s">
                <hr/>
                <button className="btn" onClick={goNext}>
                    Decide it
                </button>
                <button className="btn" onClick={goBack}>
                    Ask a new question
                </button>
            </div>
        </div>
    )
}

export default Confirm