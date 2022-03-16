import React from "react";

export default function Members({ member, onDelete }) {
  function handleDeleteClick() {
      onDelete(member.id)
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={member.complete}
          onChange={handleDeleteClick}
        />
        {member.name}
      </label>
    </div>
  );
}
