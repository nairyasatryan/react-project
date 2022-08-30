import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td className="myTd">{contact.author}</td>
      <td className="myTd">{contact.title}</td>
      <td className="myTd">{contact.language}</td>
      <td className="myTd">{contact.status}</td>
      <td className="myTd">
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
