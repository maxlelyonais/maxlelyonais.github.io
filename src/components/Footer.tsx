import React from 'react'
import '../styles/footer.css'
import CurriculumLink from "../assets/CV_HaoXu.pdf"

function Footer() {
    return (
        <section className='footer'>
            <button onClick={() => {
                            const link = document.createElement("a");
                            link.href = CurriculumLink;
                            link.download = "CV.pdf";
                            link.click();}}>
            Download CV
            </button>
        </section>
    )
}

export default Footer