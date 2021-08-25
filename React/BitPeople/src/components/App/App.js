import { useState } from 'react';
import { About } from '../About page/about';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import { MainSection } from '../Main section/mainSection';
import './App.css';

function App() {

  // STATE

  /* State of userList element*/
  const [userListVisibility, setVisibilityOfUserList] = useState("block");

  /* State of userCard element*/
  const [userCardVisibility, setVisibilityOfUserCard] = useState("hide");

  /* State of user data*/
  const [isRefresh, setRefreshState] = useState(true);

  /* State of about page visibility*/
  const [aboutVisibility, setAboutVisibility] = useState("hide");




  //FUNCTIONS

  /* UserList prop function*/
  const userListProps = userListVisibility => setVisibilityOfUserList(userListVisibility);

  /* UserCard prop function*/
  const userCardProps = userCardVisibility => setVisibilityOfUserCard(userCardVisibility);

  /* Refresh users prop function*/
  const refreshProps = isRefresh => setRefreshState(isRefresh);

  /* About visibility props*/
  const aboutVisibilityProps = aboutVisibility => (setAboutVisibility(aboutVisibility));


  //RENDER
  return (
    <div className="App">
      <Header
        userListVisibility={userListProps}
        stateOfUserList={userListVisibility}
        userCardVisibility={userCardProps}
        stateOfUserCard={userCardVisibility}
        refreshState={isRefresh}
        setRefreshState={refreshProps}
        aboutVisibility={aboutVisibilityProps}
        aboutVisibilityState={aboutVisibility}
      />
      <MainSection
        visibilityOfUserList={userListVisibility}
        visibilityOfUserCard={userCardVisibility}
        refreshState={isRefresh}
        aboutVisibility={aboutVisibility}
      />

      <div className={aboutVisibility}><About /></div>

      <Footer refreshState={isRefresh} />
    </div>
  );
}

export default App;
