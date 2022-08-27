import "./Players.css";
import { useState } from "react";
import Details from "../Details/Details";

interface Props {
  id: number | string;
  username: string;
  charName: string;
  distanse: number;
}

const Players = ({ id, username, charName, distanse }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="users" >
        <div className="list"> {id} </div>
        <div className="list"> {username} </div>
        <div className="list"> {charName} </div>
        <div className="list">
          <span> {distanse}m </span>
        </div>
        <div className="list" onClick={() => setIsActive(!isActive)} >
          <div>
            {isActive ? <button className="listBtn"> X </button> : <button className="listBtn"> Details </button>}
          </div>
        </div>
      </div>
      <div className="info">{isActive && <Details />}</div>
    </div>
  );
};

export default Players;
