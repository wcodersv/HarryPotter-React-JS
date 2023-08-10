import React from 'react';
import { Link } from 'react-router-dom';
import './Favorite.css'
import Borderline from '../../ui/Borderline';
import Main from '../../layout/Main';
import Footer from '../../layout/Footer';
import Card from '../../components/Card';
import ButtonLike from '../../ui/ButtonLike';

export const Favorite = ({ likedCards, toggleLike, favoriteStudents }) => {
  return (
    <>
      {/* Верхний блок страницы */}
      <header className='favorite-header main'>
        <Link to='/' className='favorite-header__link'>← Back To All</Link>
        <h1 className='favorite-header__title'>Liked ones</h1>
        <p className='favorite-header__description'>Your favorite characters from the Harry Potter universe.</p>
      </header>
      <Borderline />
      {/* Главная часть страницы */}
      <Main>
        {/* Отобразить карточки избранных персонажей */}
        {favoriteStudents.map(student => (
          <Card
            key={`${student.id}-favorite`}
            image={student.image}
            name={student.name}
            actor={student.actor}
            gender={student.gender}
            house={student.house}
            wand={student.wand}
            alive={student.alive}
          >
            {/* Отобразить кнопку "Like" или "Dislike" в зависимости от состояния */}
            <ButtonLike
              toggleLike={() => toggleLike(student.id)}
              isLiked={likedCards.includes(student.id)}
            />
          </Card>
        ))}
      </Main>
      {/* Нижний блок страницы */}
      <Footer />
    </>
  )
}
