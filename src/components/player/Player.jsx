import React, { useState } from "react";

function Player({ initialName, symbol, isActive, handlePlayerChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [player, setPlayer] = useState(initialName);

    const handleChange = (e) => {
        setPlayer(e.target.value)
    }
    const handleEditClick = ()=>{
        setIsEditing((prevState) => !prevState);
        if(isEditing){
            handlePlayerChange(symbol, player);
        }
    }
    return (
        <>
            <li className={isActive ? 'active' : undefined}>
                <span className="player">
                    {!isEditing ? (
                        <span className="player-name" >{player}</span>
                    ) : (
                        <input
                            type="text"
                            required
                            value={player}
                            onChange={(e) => handleChange(e)}
                        ></input>
                    )}

                    <span className="player-symbol">{symbol}</span>
                    <button
                    onClick={handleEditClick}
                >
                    {isEditing ? "Submit" : "Edit"}
                </button>
                </span>
                
            </li>
        </>
    );
}

export default Player;
