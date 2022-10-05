import React from 'react'
import "../../App.css"
import {Container} from 'react-bootstrap'
import Topgame from './Topgame'


const Games = () => {
  return (
    <div className="landing">
            <div className="dark-overlay">
                <Container className='BodyContainer'>
                  <h2>Top 10 game release on October</h2>
                  <Topgame/>
                </Container>
            </div>
        </div> 
  )
}


export default Games