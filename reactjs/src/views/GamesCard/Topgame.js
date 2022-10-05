import React from "react";
import './GameBody.css'

const Topgame = () => {
  return (
    <>
        <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/G9_Bi5ldwsc"></iframe>
        </div>
        <div className="VideoDescription text-center text-white pl-3">
          <a>
            Get your fright on! Check out our list of upcoming horror titles 
            with plenty of tricks and treats to make you wish you'd life the lights
            on - or try a game that will help you avoid Halloween altogether.
            Share your reactions with the GS Corner community, and happy scary season!
          </a>
        </div>
        
    </>
  )
}

export default Topgame