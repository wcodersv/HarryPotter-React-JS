import { useEffect, useMemo, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/App.css';

import Home from '../pages/Home';
import Favorite from '../pages/Favorite';

function App() {
  const [isLoading, setLoading] = useState(false); // Состояние загрузки laoding
  const [data, setData] = useState([]); // Состояние данные персонажей
  const [inputValue, setInputValue] = useState(''); // Значение ввода поиска
  const [house, setHouse] = useState([]); // Список факультетов
  const [selectedHouse, setSelectedHouse] = useState(''); // Выбранный факультет
  const [likedCards, setLikedCards] = useState([]); // Список избранных карт

  // Обработчик ввода текста в поле поиска
  const handleInput = (event) => {
    setInputValue(event.target.value);
  }

  // Обработчик выбора факультета
  const handleHouseChange = (event) => {
    const selectedHouse = event.target.value;
    setSelectedHouse(selectedHouse);
  }

  // Обработчик нажатия на кнопку "Like"
  const handleButtonClick = (id) => {
    setLikedCards(prevLikedCards => {
      if (prevLikedCards.includes(id)) {
        return prevLikedCards.filter(cardId => cardId !== id);
      } else {
        return [...prevLikedCards, id];
      }
    });
  }

  // Получение избранных карт из localStorage
  useEffect(() => {
    const storedLikedCards = localStorage.getItem('likedCards');
    if (storedLikedCards) {
      setLikedCards(JSON.parse(storedLikedCards));
    }
  }, []);

  // Сохранение избранных карт в localStorage
  useEffect(() => {
    localStorage.setItem('likedCards', JSON.stringify(likedCards));
  }, [likedCards]);

  //Загрузка данных с сервера
  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://hp-api.onrender.com/api/characters")
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const jsonData = await response.json();
        setData(jsonData);
        setHouse([...new Set(jsonData.map(student => student.house))].filter(house => house));
      } catch (error) {
        console.log("Произошла ошибка", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, []);

  // Создание мемоизированного вычисления отфильтрованных данных на основе ввода и выбранного факультета.
  const filteredData = useMemo(() => {
    return data.filter(
      (student) =>
        student.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        (!selectedHouse || student.house === selectedHouse)
    );
  }, [data, inputValue, selectedHouse]);

  // Фильтрация избранных студентов
  const favoriteStudents = useMemo(() => {
    return data.filter(student => likedCards.includes(student.id));
  }, [data, likedCards]);


  // Создание маршрутов для роутинга
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Home
        handleInput={handleInput}
        house={house}
        handleHouseChange={handleHouseChange}
        selectedHouse={selectedHouse}
        isLoading={isLoading}
        filteredData={filteredData}
        likedCards={likedCards}
        handleButtonClick={handleButtonClick}
      />
    },
    {
      path: '/favorite',
      element: <Favorite
        likedCards={likedCards}
        favoriteStudents={favoriteStudents}
        handleButtonClick={handleButtonClick} />
    }
  ])


  // Возвращение компонента с маршрутами
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
