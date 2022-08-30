import React, { useState } from 'react'
const initialValues = {
  Name: "",
  Hours: "",
  Price: "",
  Comments: ""
}


export default function NareksCrud() {
  const [GameData, setGameData] = useState(initialValues);
  console.log(GameData)

  return (
    <div>
      <h1>Games I Played</h1>
      <div>
        <div>
          <table>
            <th>Name</th>
            <th>Hours</th>
            <th>Price</th>
            <th>Comments</th>
            <th>Actions</th>


            <tbody>

            </tbody>
          </table>

        </div>
        <div>
          <form>
            <input placeholder='Name of Game' onChange={(e) => setGameData((prevState) => ({
              ...prevState,
              Name: e.target.value
            }))}/>
            <input placeholder='Hours of playing'/>
            <input placeholder='Price of Game'/>
            <input placeholder='My comments'/>


            <div>
              <button type='submit'>Add</button>
              <button type='reset'>Clear</button>
            </div>
          </form>

        </div>
      </div>
      
    </div>
  )
}
