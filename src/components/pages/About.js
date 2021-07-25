import React from 'react'

const About = ({love}) => {
    return (
        <>
            <div>
                <h1>About this App</h1>
                <p>App to search Github users</p>
                <p>Version: 1.0.0</p>
            </div>
            <br/>
            <div>
                <h2>Motivation</h2>
                <p>Finding users on github is a challange and we ended up spending a significant amount of time. This application saves your time in finding them.</p>
            </div>
            <br/>
            <div>
                Made with <i className={love}/> by <a href="https://github.com/akshayysharma" target="_blank">Akshay Sharma</a>
            </div>
        </>
    )
}

About.defaultProps = {
    love: "fas fa-heart"
}

export default About
