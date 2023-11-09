import React from "react";

function About( {image, about} ) {
  return (
    <aside> 
      {!image ? "https://via.placeholder.com/215" : <img src = {image} alt = "blog logo"></img>}
      <p>{about}</p>
    </aside>
  );
}

export default About;