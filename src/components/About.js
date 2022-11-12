import React from 'react'

const About = () => {
  return (
    <div style={{'margin':'30px'}}>
        <h1 style={{'textAlign':'center'}}>About Page</h1>
        <div>
        <h5>Components used in this react app</h5>
            <ul>
                <li>Header</li>
                <li>DateTime</li>
                <li>Home</li>
                <li>Search</li>
                <li>Products</li>
                <li>Footer</li>
                <li>About</li>
            </ul>
        </div>
        <div>
            <h5>API from : https://developer.edamam.com</h5>
            <p>This api contains Application Id and Application Key</p>
            <p>There are three APIs available in above website "recipe search API" is used in this web app</p>
        </div>
    </div>
  )
}

export default About;