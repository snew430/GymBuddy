import React, { useState, useRef, useEffect } from "react";
import MemberList from "./component/MemberList";
import { v4 as uuidv4 } from "uuid";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Button from "./component/Button";

const LOCAL_STORAGE_KEY = "gymbuddyApp.members";

export default function App() {
  const [members, setMembers] = useState([]);
  const memberRef = useRef();

  useEffect(() => {
    const storedMembers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedMembers) setMembers(storedMembers);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(members));
  }, [members]);

  function onDelete(id) {
    const newMembers = [...members];
    const member = newMembers.find((member) => member.id === id);
    member.complete = !member.complete;
    setMembers(newMembers);
  }

  function handleAddMember(e) {
    const name = memberRef.current.value;
    if (name === "") return;
    setMembers((oldData) => {
      return [...oldData, { id: uuidv4(), name: name, complete: false }];
    });
    memberRef.current.value = null;
  }

  function handleDeleteMember(e) {
    const newMembers = members.filter((member) => !member.complete);
    setMembers(newMembers);
  }

  return (
    <div style={bodyStyle}>
      <Header />
      <Nav />
      <input ref={memberRef} type="text" />
      <Button name="Add Member" event={handleAddMember} />

      <div>{members.length} members</div>
      <MemberList members={members} onDelete={onDelete} />
      <Button name="Delete Member" event={handleDeleteMember} />
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
