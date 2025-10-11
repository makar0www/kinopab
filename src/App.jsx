import './App.css';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import Headline from './components/Headline/Headline';
import Header from './layouts/Header/Header';
import HeaderButton from './components/HeaderButton/HeaderButton';
import Input from './components/InputType/InputType';
import Picture from './components/Picture/Picture';

function App() {
  return (
    <>
    <Header>
      <Picture path="/Bookmark.svg"/>
      <HeaderButton text="Поиск фильмов" link="https://www.kinopoisk.ru/"/>
      <HeaderButton text="Мои фильмы" link="https://hd.kinopoisk.ru/"/>
      <HeaderButton text="Войти" path="/Login 3.svg" link="https://hd.kinopoisk.ru/"/>

    </Header>
    <Headline text="Поиск"/>

    <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."/>
    <Input placeholder="Введите текст" path="search-normal.svg" name="search" textButton="Искать"/> 
    </>
  );
}


export default App
