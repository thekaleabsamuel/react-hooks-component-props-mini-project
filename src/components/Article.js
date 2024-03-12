// function Article ({ title, date ="January 1,1970", preview }) {
//     return ( <article>
// <h3>{title}</h3>
// <small>{date}</small>
// <p>{preview}</p>
//     </article>

//     );
// }

// export default Article;

// function Article({ title, date, preview }) {
//     // Check if the date prop is provided
//     const formattedDate = date ? date : "January 1, 1970";

//     return (
//         <article>
//             <h3>{title}</h3>
//             <small>{formattedDate}</small>
//             <p>{preview}</p>
//         </article>
//     );
// }

// export default Article;


function Article({ title, date = "January 1, 1970", preview, }) {  
    return (
      <article>
        <h3>{title}</h3>
        <small>   {date}  </small>
        <p>{preview}</p>
      </article>
    );
  }
  
  export default Article;