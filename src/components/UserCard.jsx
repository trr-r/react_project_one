// Создай компонент UserCard, который принимает через props:

// name
// age
// city

// и отображает их на странице.

// Пример использования
// <UserCard
//   name="Иван"
//   age={25}
//   city="Москва"
// />
// Ожидаемый результат
// Имя: Иван
// Возраст: 25
// Город: Москва

import React from "react"

const UserCard = ({ name, age, city }) => {
  return (
    <div>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      <p>Город: {city}</p>
    </div>
  )
}

export default UserCard
