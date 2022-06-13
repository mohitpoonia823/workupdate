import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserLists from './components/Users/UserLists';

function App() {
const [userslist,setUsersList] = useState([]);

const handlingUserData = (uName , uAge) =>{
  
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
};


  return (
    <div>
      <AddUser onAddUser={handlingUserData} />
         <UserLists usersData={userslist}/>
    </div>
  );
}

export default App;
