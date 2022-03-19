import { FaTimes } from "react-icons/fa";

export default function Members({ member, onDelete }) {
  function handleDeleteClick() {
    onDelete(member.id);
  }
  return (
    <div style={memberCard}>
      <label>
        <input
          type="checkbox"
          checked={member.complete}
          onChange={handleDeleteClick}
        />
        {member.name}
      </label>
      <FaTimes style={deleteBtn} />
    </div>
  );
}

const deleteBtn = {
  color: "red",
  cursor: "pointer",
};

const memberCard = {
  border: "solid 1px",
  borderRadius: "5px",
  margin: "10px",
  padding: "10px",
  width: "25%",
  textAlign: "center"
};
