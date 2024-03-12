// function About ({image = "https://via.placeholder.com/215",about}) {
//     return (
//         <aside>
//             <img src={image} alt id="blog logo"></img>
//             <p>{about}</p>

//         </aside>
//     );
// }

// export default About;



import React from "react";

function About({ about, image = "https://via.placeholder.com/215" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;