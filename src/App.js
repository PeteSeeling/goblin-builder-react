import './App.css';
import { useState } from 'react';

import GoblinForm from './GoblinForm';
import GoblinList from './GoblinList';
import Goblin from './Goblin';


function App() {
  
  const [goblins, setGoblins] = useState([]);
  const [filteredGoblins, setFilteredGoblins] = useState([]);
  const [goblinFormName, setGoblinFormName] = useState('');
  const [goblinFormHP, setGoblinFormHP] = useState(1);
  const [goblinFormColor, setGoblinFormColor] = useState('');

  function submitGoblin(e) {
    e.preventDefault();
    
    const newGoblin = {
      id: Math.ceil(Math.random() * 100),
      name: goblinFormName,
      hp: goblinFormHP,
      color: goblinFormColor
    };

    setGoblins(...goblins, newGoblin);
  }
  // {
  //   setGoblinFormName('');
  //   setGoblinFormHP(1);
  //   setGoblinFormColor('lightgreen');
  // }
    // on submit, make a new goblin object with a random id, a name that comes from the form state, an hp that comes from the form state, and a color that comes from the form state

    // update the allGoblins array. Add the new goblin to the allGoblins array immutably.
    
    // clear out the goblin form state items by setting them to empty strings. This will cause the form to reset in the UI.


  function handleDeleteGoblin(id) {
    // find the index of the goblin in allGoblins with this id
    const index = goblins.findIndex(goblin => goblin.id === id);
    // use splice to delete the goblin object at this index
    goblins.splice(index, 1);
    // update the allGoblins array immutably to this new, smaller array
    setGoblins([...goblins]);
  }

  function handleFilterGoblins(search) {
    // use the filter method to get an array of goblins whose name includes this search argument
    if (search) {
      const filteredGoblins = goblins.filter(goblin => goblin.name.includes(search));

      setFilteredGoblins(filteredGoblins);
    }
    else {
      setFilteredGoblins(goblins);
    }
  }
    // if there is a search argument, set the filtered goblins to the filtered goblins
    // if the search argument is undefined, set the filtered goblins in state to just be the array of all goblins



  return (
    <div className="App">
      <div className='current-goblin quarter'>
        <h3>{goblinFormName}</h3>
        <Goblin goblin={{

          id: Math.ceil(Math.random() * 100),
          name: goblinFormName,
          hp: goblinFormHP,
          color: goblinFormColor
          /* 
            use the goblin form state to make a goblin object and to display it. 
            This will let the user see the current form state 
          */
      
       
        }}/>
        <h4>{goblinFormHP}</h4>
      </div>
      <div className='goblin-filter quarter'>
        Filter Goblins
        {/* note that handleFilterGoblins is defined upstairs. This is where the allGoblins array gets filtered */}
        <input onChange={(e) => handleFilterGoblins(e.target.value)} />
      </div>
      <GoblinForm 

        submitGoblin={submitGoblin}
        goblinFormName={goblinFormName}
        setGoblinFormName={setGoblinFormName}
        goblinFormColor={goblinFormColor}
        setGoblinFormColor={setGoblinFormColor}
        goblinFormHP={goblinFormHP}
        setGoblinFormHP={setGoblinFormHP}
        /*
        This component takes in a ton of props! 
        Here is the list of props to pass:
          submitGoblin,
          goblinFormName, 
          setGoblinFormName,
          goblinFormColor, 
          setGoblinFormColor,
          goblinFormHP, 
          setGoblinFormHP,
        */
      />
      <GoblinList 
        goblins={[filteredGoblins]} // this takes in an array of goblins. If the filteredGoblins has a length, use that array. Otherwise, use the allGoblins array 
        handleDeleteGoblin={handleDeleteGoblin} // note that the goblin list has access to the ability to delete
      />
    </div>
  );

}
export default App;
      