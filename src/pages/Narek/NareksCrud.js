import React, { useState } from 'react'
import './TableCss.css';
const initialValues = {
  Name: "",
  Hours: "",
  Price: "",
  Comments: ""
}


export default function NareksCrud() {
  
  const [GameData, setGameData] = useState(initialValues);
  
  const [Games, setGames] = useState([]);

  const removeClick = (index) => {
        setGames(Games.filter((Game, GameIndex) => GameIndex !== index ))
  }
  const [EditGameData, setEditGameData] = useState({
    Edit: false,
    GameIndex: null
  })

  const filledFields = GameData.Name && GameData.Price &&GameData.Hours && GameData.Comments;
  const handleSubmit = (e) =>{
    e.preventDefault();
      
    
      if(filledFields){
        if(EditGameData.Edit){
          const editedGames = Games;
          editedGames.splice(EditGameData.GameIndex, 1, GameData)

          setGames(editedGames);
          setEditGameData({
            Edit: false,
            GameIndex: null
          })
          
        }
        else{
          setGames((prevState) =>[...prevState, GameData]);
        }
        
        
        setGameData(initialValues)
    
 

  }
}
const cleanClick = () => setGameData(initialValues);
const editClick = (data, index) =>{
  setGameData(data);
  setEditGameData({
    Edit: true,
    GameIndex: index
  })
}
  return (
    <section className='backgroundOfPage'>
    <div className='wrapperNarek'>
         <div className='wrapper-content'>
          <div>
          <table className='table-data'>
                    <th className='thStyle'>#</th>
                    <th className='thStyle'>Name</th>
                    <th className='thStyle'>Hours</th>
                    <th className='thStyle'>Price</th>
                    <th className='thStyle'>Comments</th>
                    <th className='thStyleActions'>Actions</th>
               


            <tbody>
              {Games.map((games, index) => (
                <tr>
                  <td className='tdStyle'>{index +1}</td>
                  <td className='tdStyle'>{games.Name}</td>
                  <td className='tdStyle'>{games.Hours}</td>
                  <td className='tdStyle'>{games.Price}</td>
                  <td className='tdStyle'>{games.Comments}</td>
                    <div >
                      <button onClick={() => editClick(games, index)} className='buttonsStyle'>Edit</button>
                      <button onClick={() => removeClick(index) } className='buttonsStyle'>Remove</button>
                      
                    </div>
                </tr>
              ))}

            </tbody>
          </table>

        </div>
        <div>
  
                <form onSubmit={handleSubmit} onReset={cleanClick} className="formStyle"  >
                  <input className='myInputsStyle' placeholder='Name of Game' onChange={(e) => setGameData((prevState) => ({
                    ...prevState,
                    Name: e.target.value
                  }))}
                  value = {GameData.Name}/>
                  <input className='myInputsStyle' placeholder='Hours of playing' onChange={(e) => setGameData((prevState) => ({
                    ...prevState,
                    Hours: e.target.value
                  }))}
                  value = {GameData.Hours}/>
                  <input className='myInputsStyle' placeholder='Price of Game' onChange={(e) => setGameData((prevState) => ({
                    ...prevState,
                    Price: e.target.value
                  }))}
                  value = {GameData.Price}/>
                  <input className='myInputsStyle' placeholder='My comments' onChange={(e) => setGameData((prevState) => ({
                    ...prevState,
                    Comments: e.target.value
                  }))}
                  value = {GameData.Comments}/>


            <div className='buttons'>
              <button className='buttonsStyle' type='submit'>Add</button>
              <button className='buttonsStyle' type='reset'>Clear</button>
            </div>
          </form>

        </div>
      </div>
      
    </div>
    </section>
  )
}
