import React, { useState, useRef, useEffect } from "react";
import MemberList from "./component/MemberList";
import { v4 as uuidv4 } from "uuid";

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

  function handleAddMamber(e) {
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
    <div style={{background: 'grey', padding: "10px"}}>
      <input ref={memberRef} type="text" />
      <button style={{width: "140px", height:"150px", margin: "20px"}} onClick={handleAddMamber}>Add Member</button>
  
      <div>{members.length} members</div>
      <MemberList members={members} onDelete={onDelete} />
      <button onClick={handleDeleteMember}>Delete Member(s)</button>
    </div>
  );
}
// props and states - useState hook REACT
