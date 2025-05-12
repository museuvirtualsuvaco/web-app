import React, { useEffect, useState } from "react";


function Video(){
  return (
    <div className="video-section">
      <div className="gradient-side left"></div>
        <video autoPlay loop muted className="background-video">
            <source src="/video/videoHomePage.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeos.
        </video>
    </div>
  )
}  

export default Video;