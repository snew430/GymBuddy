import React from "react";
import Members from "./Members";

export default function MemberList({ members, onDelete }) {
  return members.map((member) => {
    return <Members key={member.id} onDelete={onDelete} member={member} />;
  });
}
