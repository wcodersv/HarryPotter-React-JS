import React from 'react'
import Header from '../../layout/Header';
import Main from '../../layout/Main';
import Footer from '../../layout/Footer';
import Borderline from '../../ui/Borderline';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Loader from '../../ui/Loader';
import Card from '../../components/Card';
import ButtonLike from '../../ui/ButtonLike';
import ButtonDislike from '../../ui/ButtonDislike';
import ButtonLikeList from '../../ui/ButtonLikeList';
import { Link } from 'react-router-dom';

export const Home = ({ handleInput, house, handleHouseChange, selectedHouse, isLoading, filteredData, likedCards, handleButtonClick }) => {
    return (
        <>
            {/* Верхний блок страницы */}
            <Header>
                <Input handleInput={handleInput} />
                <Select house={house} handleHouseChange={handleHouseChange} selectedHouse={selectedHouse} />
            </Header>
            <Borderline />
            {/* Показать загрузчик, если данные загружаются */}
            {isLoading && <Loader />}
            {/* Главная часть страницы */}
            <Main>
                {/* Отобразить карточки персонажей */}
                {filteredData.map(student => (
                    <Card
                        key={student.id}
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
            {/* Кнопка для перехода к избранным персонажам */}
            <Link to="/favorite"><ButtonLikeList /></Link>
            {/* Нижний блок страницы */}
            <Footer />
        </>
    )
}
