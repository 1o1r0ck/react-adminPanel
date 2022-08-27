import "./App.css";
import { useState } from "react";
import Players from "./Players/Players";
import {Users} from './Players/users'

const App = () => {

  const [searchValue, setSearchValue] = useState("");

  // const clean = () => {
  //   setSearchValue("");
  // };

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <div className="panel">
            <h2> Admin Panel </h2>
            <h4> Players: 50 </h4>
          </div>
          <div className="exit"> X </div>
        </header>

        <div className="content">
          <div className="title">
            <div className="grid"> ID </div>
            <div className="grid"> Username </div>
            <div className="grid"> Char name </div>
            <div className="grid"> Distanse </div>
            <div className="grid">
              <div className="searchBar">
                    <input
                      onChange={onChangeSearchInput}
                      value={searchValue}
                      placeholder="Search..."
                    />
              </div>
            </div>
          </div>

          <div className="players">
          {Users.filter((obj) =>
          obj.charName.toLowerCase().includes(searchValue.toLowerCase())
        ).map((obj) => 
            <Players
            id = {obj.id}
            username= {obj.username}
            charName = {obj.charName}
            distanse = {obj.distanse}
          />
          )}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default App;

