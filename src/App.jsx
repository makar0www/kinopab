import './App.css';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import Headline from './components/Headline/Headline';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import HeaderButton from './components/HeaderButton/HeaderButton';
import Input from './components/InputType/InputType';
import SvgPicture from './components/SvgPicture/SvgPicture';
import CardButton from './components/CardButton/CardButton';
import CardList from './layouts/CardList/CardList';
import MovieItem from './components/MovieItem/MovieItem';
// import { useState } from 'react';


const FILM = [
  {
    id:1,
    path: 'movies/1.svg',
    movie: 'Black window',
  },
  {
    id:2,
    path: 'movies/2.svg',
    movie: 'Shang chi',
  },
  {
    id:3,
    path: 'movies/3.svg',
    movie: 'Loki',
  },
  {
    id:4,
    path: 'movies/4.svg',
    movie: 'How I met your mother',
  },
  {
    id:5,
    path: 'movies/5.svg',
    movie: 'Money heist',
  },
  {
    id:6,
    path: 'movies/6.svg',
    movie: 'Friends 2',
  },
  {
    id:7,
    path: 'movies/7.svg',
    movie: 'The big bang theory',
  },
  {
    id:8,
    path: 'movies/8.svg',
    movie: 'Two and a half men',
  }
]

function App() {
  // const [items, setItems] = useState(FILM);


  const handleSearch = (query) => {
  console.log("Выполняем поиск по запросу:", query);
  // Здесь может быть реальный API-запрос или фильтрация данных
  };



  return (
    <>
    <Header>
      <SvgPicture path="/Bookmark.svg" alt="logo"/>
      <HeaderButton text="Поиск фильмов" link="https://www.kinopoisk.ru/"/>
      <HeaderButton text="Мои фильмы" link="https://hd.kinopoisk.ru/"/>
      <HeaderButton text="Войти" path="/Login 3.svg" link="https://hd.kinopoisk.ru/"/>
    </Header>
    <Headline text="Поиск"/>
    <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."/>
    <Input placeholder="Введите текст" path="search-normal.svg" name="search" textButton="Искать" onSubmit={handleSearch}/> 
   
   <CardList items={FILM}/>
   
   <Footer/>
    </>
  );


}


export default App
