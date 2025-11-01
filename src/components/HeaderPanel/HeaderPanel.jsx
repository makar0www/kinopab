// import styles from './HeaderPanel.module.css';
import SvgPicture from '../SvgPicture/SvgPicture';
import HeaderButton from '../HeaderButton/HeaderButton';

function HeaderPanel({users, setUsers}) {

    const currentUser = users.find(u => u.isLogined)

    const logout = (name) => {
    setUsers(oldUsers => 
        oldUsers.map(u =>
        u.name === name ? {...u, isLogined: false} : u)
    )};

    return (
        <>
        <SvgPicture path="/Bookmark.svg" alt="logo"/>
        <HeaderButton text="Поиск фильмов" link="https://www.kinopoisk.ru/"/>
        <HeaderButton text="Мои фильмы" link="https://hd.kinopoisk.ru/"/>
        
        {currentUser ? 
        (<>
            <HeaderButton text={currentUser.name} path="/User.svg"/>
            <HeaderButton text="Выйти" onClick={() => logout(currentUser.name)}/>
        </>) : (<>
            <HeaderButton text="Войти" path="/Login 3.svg" link="https://hd.kinopoisk.ru/"/>
        </>)}
        </>
    )
    };

export default HeaderPanel;