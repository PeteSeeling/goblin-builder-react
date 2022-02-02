import React from 'react';

export default function Goblin({ goblinName, handleDeleteGoblin, goblinHp, goblinColor, goblinId }) {
  return (
    // be sure you take a look at this component i'm handing you and figure out what props it will need to work correctly.
    <div 
      className='goblin' 
      onClick={() => handleDeleteGoblin && handleDeleteGoblin({ goblinId })}>
      <h3>{ goblinName}</h3>  
      <img src="goblin.png" style={{ backgroundColor: goblinColor }} />
      <p>{ goblinHp } HP</p>
    </div>
  );
}
