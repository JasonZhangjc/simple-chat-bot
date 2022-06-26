import { useContext, useEffect } from "react";
import { MyContext } from "../context";

const Result = () => {
    // If want to use the context
    // add the following line at the beginning of the function
    const context = useContext(MyContext)

    // only want to call the result once
    // therefore we need the [] at the end of the following 3-line code
    useEffect(() => {
        context.result()
    },[])

    return (
        <div>
            <h3>Your answer is:</h3>
            <div className="viewer">
                {context.state.result}
            </div>

            {/* Two Options here */}
            <div className="animate__animated animate__bounceIn animate__delay-1s">
                <hr/>
                <button className="btn" onClick={context.reset}>
                    Start over
                </button>
                <button className="btn" onClick={context.result}>
                    Decide again
                </button>
            </div>

        </div>
    )
}

export default Result