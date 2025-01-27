// src/App.jsx

import { useState } from "react";
import "./App.css";
const App = () => {
  const [money, setMoney] = useState(100);
  const [team, setTeam] = useState([]);
  const [agility, setTotalAgility] = useState(0);
  const [strength, setTotalStrength] = useState(0);
  const [zombieFighters, setZombieFighter] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const handleAddFighter = (event) => {
    const currentFighter = zombieFighters.find(
      (fighter) => fighter.name === event.target.name
    );
    let currentMoney = { money };

    if (currentMoney.money - currentFighter.price >= 0) {
      let newmoney = currentMoney.money - currentFighter.price;
      let newagility = agility + currentFighter.agility;
      let newstrength = strength + currentFighter.strength;

      setTeam([...team, currentFighter]);
      setMoney(newmoney);
      setTotalAgility(newagility);
      setTotalStrength(newstrength);
    } else {
      console.log("not enough money");
    }
  };

   const handleDeleteFighter = (event)=>{
    const currentFighter=team.find(fighter=>fighter.name===event.target.name)

    const updatedTeam=team.filter(fighter=>fighter.name!==event.target.name)
    let currentMoney={money}

    if(currentMoney.money-currentFighter.price<=100&&agility>0&&strength>0){let

      newmoney=currentMoney.money+currentFighter.price
      let newagility=agility-currentFighter.agility
      let newstrength=strength-currentFighter.strength

   
      const index = team.indexOf(currentFighter)

      team.splice(index,1)
      
    setMoney(newmoney)
    setTotalAgility(newagility)
    setTotalStrength(newstrength)

    }
    else{
      console.log("not enough money")
    }

   }

  return (
    <>
      <h1>your money : {money}</h1>
      <h3>fighters list:</h3>

      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt="" />
            <li>name : {fighter.name}</li>
            <li>price : {fighter.price}</li>
            <li>strength : {fighter.strength}</li>
            <li>agility : {fighter.agility}</li>
            <button name={fighter.name} onClick={handleAddFighter}>
              add this fighter
            </button>
          </li>
        ))}
      </ul>

      <>
        {team.length !== 0 ? (
          <h2>your team : </h2>
        ) : (
          <h2>your team is empty , please pick members</h2>
        )}

        <h2>total agility : {agility}</h2>
        <h2>total strength : {strength}</h2>
      </>
<ul>
      {team.map((member,index) => (
        
<li key={index}>
          <img src={member.img} alt="" />
          <li>name : {member.name}</li>
          <li>price : {member.price}</li>
          <li>strength : {member.strength}</li>
          <li>agility : {member.agility}</li>
          <button name={member.name} onClick={handleDeleteFighter}>
            delete this fighter
          </button>
        </li>
      ))}</ul>
    </>
  );
};

export default App;
