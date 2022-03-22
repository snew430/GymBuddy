import React, { useState, useEffect } from "react";

function Footer() {
  // const [error, setError] = useState(null);
  const [sendRequest, setSendRequest] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://geek-jokes.sameerkumar.website/api?format=json")
      .then((res) => res.json())
      .then((result) => {
        setItem(result.joke);
      });
  }, [sendRequest]);

  return (
    <div>
      {item}
      <button onClick={() => setSendRequest(!sendRequest)}>New Joke</button>
    </div>
  );
}

export default Footer;
