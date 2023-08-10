import React from 'react';
import { Link } from 'react-router-dom';
import './Favorite.css'
import Borderline from '../../ui/Borderline';
import Main from '../../layout/Main';
import Footer from '../../layout/Footer';
import Card from '../../components/Card';
import ButtonLike from '../../ui/ButtonLike';
import ButtonDislike from '../../ui/ButtonDislike';

export const Favorite = ({ likedCards, handleButtonClick, favoriteStudents }) => {
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
            {likedCards.includes(student.id) ? (
              <ButtonLike handleButtonClick={() => handleButtonClick(student.id)} />
            ) : (
              <ButtonDislike handleButtonClick={() => handleButtonClick(student.id)} />
            )}
          </Card>
        ))}
      </Main>
      {/* Нижний блок страницы */}
      <Footer />
    </>
  )
}
