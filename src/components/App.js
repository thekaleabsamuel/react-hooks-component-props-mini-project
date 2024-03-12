// import React from "react";
// import ArticleList from "./ArticleList";
// import blogData from "../data/blog";
// import Header from "./Header"

// import Article from "./Article.js";
// import About from "./About.js";


// console.log(blogData);

// function App() {
//   return (
//     <div className="App">
//      <Header name={blogData.name}/>
//      <About image={blogData.image} about={blogData.about} />
//      <Article List posts={blogData.posts} />
//     </div>
//   );
// }

// export default App;

import React from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;