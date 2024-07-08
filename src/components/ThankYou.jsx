import React from "react";
import Complete from "./images/icon-complete.svg";

function ThankYou(){
    return(
        <>
        <section className="thanks">
            <img src={Complete} alt="completeicon" />
            <h3>THANK YOU</h3>
            <p>We've added your card details</p>

        <button>Continue</button>
            </section>
        </>
    )
}

export default ThankYou;