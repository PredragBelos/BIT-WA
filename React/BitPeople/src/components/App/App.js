import { useState } from 'react';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import { MainSection } from '../Main section/mainSection';
import './App.css';

function App() {

  // STATE

  /* Functon for folowing state of userList element*/
  const [userListVisibility, setVisibilityOfUserList] = useState("block");

  /* Function for folowing state of userCard element*/
  const [userCardVisibility, setVisibilityOfUserCard] = useState("hide");

  //FUNCTIONS

  /* UserList prop function*/
  const userListProps = userListVisibility => setVisibilityOfUserList(userListVisibility);

  /* UserCard prop function*/
  const userCardProps = userCardVisibility => setVisibilityOfUserCard(userCardVisibility);


  //RENDER
  return (
    <div className="App">
      <Header
        userListVisibility={userListProps}
        stateOfUserList={userListVisibility}
        userCardVisibility={userCardProps}
        stateOfUserCard={userCardVisibility}
      />
      <MainSection
        visibilityOfUserList={userListVisibility}
        visibilityOfUserCard={userCardVisibility}
      />
      <Footer />
    </div>
  );
}

export default App;
