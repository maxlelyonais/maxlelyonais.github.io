import '../styles/aboutMe.css'

function AboutMe() {
    return (
        <section id='aboutMe'>
            <h2>About Me</h2>

            <div className='card'>
                
                <div className='Detail'>
                    <p>I’m passionate about creating technology that makes life easier and more efficient.
                        I thrive on learning, experimenting, and applying the latest innovations to real-world challenges.
                    </p>

                    <div className="contactInfo">
                        <button onClick={() => window.open("https://www.linkedin.com/in/hao-xu-031289223/", "_blank")}>Linkedin</button>
                        <button onClick={() => window.open("https://github.com/maxlelyonais", "_blank")}>Github</button>
                    </div>
                </div>

                <div className='Image'>
                </div>
            </div>

        </section>
    )
}

export default AboutMe