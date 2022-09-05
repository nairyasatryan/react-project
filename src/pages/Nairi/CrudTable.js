import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./CrudTable.css";
import data from './mock-data.json'
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const CrudTable = () => {


    const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    author: "",
    title: "",
    language: "",
    status: "",
  });

  const [editFormData, setEditFormData] = useState({
    author: "",
    title: "",
    language: "",
    status: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      author: addFormData.author,
      title: addFormData.title,
      language: addFormData.language,
      status: addFormData.status,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      author: editFormData.author,
      title: editFormData.title,
      language: editFormData.language,
      status: editFormData.status,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      author: contact.author,
      title: contact.title,
      language: contact.language,
      status: contact.status,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <section className="my_body">
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table className="table">
          <thead>
            <tr className="table_row">
              <th className="table_high">Author</th>
              <th className="table_high">Title</th>
              <th className="table_high">Languagr</th>
              <th className="table_high">Status</th>
              <th className="table_high" >Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      
      <form  className="myForm"  onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="author"
          required="required"
          placeholder="Enter an author..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter a title..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="language"
          required="required"
          placeholder="Enter a language..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="status"
          required="required"
          placeholder="Enter a status..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
    </section>
  );
};


export default CrudTable