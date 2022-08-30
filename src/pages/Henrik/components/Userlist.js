import React from 'react'
import '../style.css'

export default function Userlist({ data, index, users, changeUsers, userData, setEditData }) {

  function editData(data, index) {
    userData(data)
    setEditData({
      isEdit: true,
      userIndex: index
    })
  }
  function deleteData(index) {
    changeUsers(users.filter((user, userIndex) => userIndex !== index))
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.name}</td>
      <td>{data.surname}</td>
      <td>{data.age}</td>
      <td>{data.nation}</td>
      <td>{data.cityOfBirth}</td>
      <td>{data.club}</td>
      <td>{data.job}</td>
      <td>{data.wage}</td>
      <td>
        <button className='myButton edit' onClick={()=>editData(data, index)}>EDIT</button>
        <button className='myButton remove' onClick={() => deleteData(index)}>DELETE</button>
      </td>
    </tr>
  )
}
