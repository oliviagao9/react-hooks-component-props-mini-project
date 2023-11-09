import React from "react";

function Article( {title, date, preview} ) {
    console.log(title)
  return (
    <article>
      <h3>{title}</h3>
      {!date? "January 1, 1970" : <small>{date}</small>}
      <p>{preview}</p>
    </article>
  );
}

export default Article;