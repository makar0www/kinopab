import './App.css';
import Paragraph from './components/Paragraph/Paragraph';
import Headline from './components/Headline/Headline';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Input from './components/InputType/InputType';
import CardList from './layouts/CardList/CardList';
import { FILM } from './data/films';
import { useState, useEffect } from 'react';
import HeaderPanel from './components/HeaderPanel/HeaderPanel';



function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users'));
    if (savedUsers) {
      setUsers(savedUsers);
    } 
  }, []);

 useEffect(() => {
  if(users.length) {
  localStorage.setItem('users', JSON.stringify(users))
  }
 }, [users])

  const addUser = (user) => {

    setUsers(oldUsers => { 
      const exsiting = oldUsers.find(u => u.name === user.name);

      if(exsiting) {
        return oldUsers.map(u => ({
          ...u,
          isLogined: u.name === user.name
        }))
      }

    return [...oldUsers.map(u => ({
      ...u, 
      isLogined: false})), 

      {
      name: user.name,
      id: crypto.randomUUID(),
      isLogined: true
      }

      ]})
    }


  return (
    <>
    <Header>
      <HeaderPanel users={users} setUsers={setUsers}/>
    </Header>

    <Headline text="Поиск"/>
    <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."/>
    <Input placeholder="Введите текст" path="search-normal.svg" name="search" textButton="Искать" /> 
   
    <CardList items={FILM}/>
   
    <Headline text="Войти"/>
    <Input placeholder="Введите имя" name="login" textButton="Войти в профиль" onSubmit={addUser}/> 

   <Footer/>
    </>
  );


}


export default App
