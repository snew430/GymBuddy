import React, { useState, useEffect } from "react";
import MemberList from "./component/MemberList";
import { v4 as uuidv4 } from "uuid";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Button from "./component/Button";
import Footer from "./component/Footer";

const LOCAL_STORAGE_KEY = "gymbuddyApp.members";

export default function App() {
  const [members, setMembers] = useState([]);
  const [input, setInput] = useState("");
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);
  // const memberRef = useRef();

  useEffect(() => {
    console.log("******1");
    const storedMembers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedMembers) setMembers(storedMembers);
  }, []);

  useEffect(() => {
    console.log("******2");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(members));
  }, [members]);

  // useEffect(() => {
  //   fetch("https://geek-jokes.sameerkumar.website/api?format=json")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  function onDelete(id) {
    const newMembers = [...members];
    const member = newMembers.find((member) => member.id === id);
    member.complete = !member.complete;
    setMembers(newMembers);
  }

  function handleAddMember(e) {
    //const name = memberRef.current.value;
    if (input === "") return;
    setMembers((oldData) => {
      return [...oldData, { id: uuidv4(), name: input, complete: false }];
    });
    setInput(null);
  }

  function handleDeleteMember(e) {
    const newMembers = members.filter((member) => !member.complete);
    setMembers(newMembers);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div style={bodyStyle}>
      <Header />
      <Nav />
      <input
        // ref={memberRef}
        value={input}
        onChange={handleChange}
        type="text"
      />
      <Button name="Add Member" event={handleAddMember} />

      <div>{members.length} members</div>
      <MemberList members={members} onDelete={onDelete} />
      <Button name="Delete Member" event={handleDeleteMember} />
      <Footer/>
    </div>
  );
}

const bodyStyle = {
  background: "grey",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// props and states - useState hook REACT
// useInput
