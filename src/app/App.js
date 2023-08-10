import { useEffect, useMemo, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/App.css';

import Home from '../pages/Home';
import Favorite from '../pages/Favorite';

function App() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [house, setHouse] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState('');
  const [likedCards, setLikedCards] = useState([]);

  // Обработчик ввода текста в поле поиска
  const handleInput = (event) => {
    setInputValue(event.target.value);
  }

  // Обработчик выбора факультета
  const handleHouseChange = (event) => {
    const selectedHouse = event.target.value;
    setSelectedHouse(selectedHouse);

    if (selectedHouse !== '-- Choose one --') {
      const updatedHouseList = [selectedHouse, ...house.filter(h => h !== selectedHouse)];
      setHouse(updatedHouseList);
    }
  }





  const handleButtonClick = (id) => {
    if (likedCards.includes(id)) {
      setLikedCards(likedCards.filter(cardId => cardId !== id));
    } else {
      setLikedCards([...likedCards, id]);

    }
  }

  const filteredData = useMemo(() => {
    return data.filter(
      (student) =>
        student.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        (!selectedHouse || student.house === selectedHouse)
    );
  }, [data, inputValue, selectedHouse]);

  useEffect(() => {
    const storedLikedCards = localStorage.getItem('likedCards');
    if (storedLikedCards) {
      setLikedCards(JSON.parse(storedLikedCards));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('likedCards', JSON.stringify(likedCards));
  }, [likedCards]);


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


  const favoriteStudents = data.filter(student => likedCards.includes(student.id));



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


  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
