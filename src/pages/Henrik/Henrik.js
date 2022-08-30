import React, { useState } from "react";
import AddForm from "./components/AddForm";
import StaticRowNames from "./components/StaticRowNames";
import Userlist from "./components/Userlist";
import data from "./db.js";
import './style.css'

export default function Henrik() {

  const [userData, setUserData] = useState(data)
  const [users, setUsers] = useState([])
  const [editUserData, setEditUserData] = useState({
    isEdit: false,
    userIndex: null
  })

  const isFilledFields = userData.name && userData.surname && userData.age && userData.nation && userData.cityOfBirth && userData.club && userData.job && userData.wage

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (isFilledFields) {
      if (editUserData.isEdit) {
        const editedData = users
        editedData.splice(editUserData.userIndex, 1, userData)
        setUsers(editedData)
        setEditUserData({
          isEdit: false,
          userIndex: null
        })
      } else {
        setUsers((prevState) => [...prevState, userData])
      }
      setUserData({
        name: "",
        surname: "",
        age: "",
        nation: "",
        cityOfBirth: "",
        club: "",
        job: "",
        wage: ""
    })
    }
  }

  const handleChange = (e, name) => {
    setUserData((prevState) => ({
      ...prevState,
      [name]: e.target.value
    }))
  }

  return (
    <section className="mySection">
      <div className="addPlayers">
        <h3>Add New Player</h3>
        <form onSubmit={handleSubmitUser}>

          <AddForm
            placeholder='Enter Name'
            handleInputChange={handleChange}
            value={userData.name}
            fieldName='name'
          />
          <AddForm
            placeholder='Enter Surname'
            handleInputChange={handleChange}
            value={userData.surname}
            fieldName='surname'
          />
          <AddForm
            placeholder='Enter Age'
            handleInputChange={handleChange}
            value={userData.age}
            fieldName='age'
          />
          <AddForm
            placeholder='Enter Nation'
            handleInputChange={handleChange}
            value={userData.nation}
            fieldName='nation'
          />
          <AddForm
            placeholder='Enter City Of Birth'
            handleInputChange={handleChange}
            value={userData.cityOfBirth}
            fieldName='cityOfBirth'
          />
          <AddForm
            placeholder='Enter Club'
            handleInputChange={handleChange}
            value={userData.club}
            fieldName='club'
          />
          <AddForm
            placeholder='Enter Job'
            handleInputChange={handleChange}
            value={userData.job}
            fieldName='job'
          />
          <AddForm
            placeholder='Enter Wage'
            handleInputChange={handleChange}
            value={userData.wage}
            fieldName='wage'
          />

          <button 
            type="submit" 
            className={`myButton ${editUserData.isEdit ? 'edit' : 'add'}`} 
            disabled={!isFilledFields}>
              {editUserData.isEdit ? 'EDIT' : 'ADD'}
          </button>
        </form>
      </div>

      <div className="playerLists">
        <table>
          <thead>
            <StaticRowNames className='staticRows' />
          </thead>
          <tbody>
            {users && users.length > 0
              ?
              users.map((item, i) => {
                return < Userlist
                  key={i}
                  data={item}
                  index={i}
                  users={users}
                  changeUsers={setUsers}
                  userData={setUserData}
                  setEditData={setEditUserData}
                />
              })
              : <p>no data available</p>
            }
          </tbody>
        </table>
      </div>
    </section>
  );
}
