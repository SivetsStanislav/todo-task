import React, { useState }  from "react";
import './index.css';

// components
import ToDoCounter from "./components/ToDoCounter/ToDoCounter";
import ToDoMainMenu from "./components/ToDoMainMenu/ToDoMainMenu";
import ToDoSearchMenu from "./components/ToDoSearchMenu/ToDoSearchMenu";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import ToDoFooter from "./components/ToDoFooter/ToDoFooter";

function App() {
  const [toDoArr, setToDoArr] = useState([]);

  const infoArray = [
    'Блокнот (To-Do list).',
    'Небольшой тестовый проект на React JS.',
    'Дизайн разрабатываю сам.',
    'Стремился к простому, интуитивно понятному интерфейсу',
    '(как мне кажется - получилось весело).',
    'Приложение адаптируется под мобильные устройства.',
    'Удобно добавлять, редактировать, удалять заметки.',
  ];

  const addToDoToArray = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        value: userInput,
        change: function (value) {
          this.value = value;
        }
      }
      setToDoArr([...toDoArr, newItem]);
    }
  };

  const updateItem = (toDo, newValue) => {
    const updatedEl = toDoArr.find(el => el.id === toDo.id)
    updatedEl.change(newValue);
    return updatedEl;
  };

  const removeItem = (id) => {
    setToDoArr([...toDoArr.filter((el) => el.id !== id)]);
  };

  return (
    <div className="App">
      <ToDoCounter toDoCount={toDoArr.length} />
      <ToDoMainMenu addToDoToArray={addToDoToArray} />
      <ToDoSearchMenu toDoArr={toDoArr} />
      {toDoArr.length > 0 && toDoArr.map((el) => (
          <ToDoItem
            key={el.id}
            item={el}
            removeItem={removeItem}
            updateItem={updateItem}
          />
        ))
      }
      <ToDoFooter infoArray={infoArray} />
    </div>
  );
}

export default App;
