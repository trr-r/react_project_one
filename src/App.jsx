import "./App.css"
import Counter from "./components/Counter"
import Data from "./components/Data"
import Hi from "./components/Name"
import Array from "./components/Array"
import UserCard from "./components/UserCard"
import axios from "axios"
import { useEffect, useState } from "react"

const api_key = "XFH3YeKpMuG7NAgOcbptbuHftBNR1tDDQYzIJ7Af"

function App() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  async function getCat() {
    setLoading(true)
    try {
      const url = await axios.get(
        "https://api.api-ninjas.com/v1/cats?min_weight=10",
        {
          headers: { "X-Api-Key": api_key },
        }
      )
      //cats.push(...url.data)
      setCats(url.data)
      setLoading(false)
      //console.log(cats)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  useEffect(function(){
console.log(cats)
  }, [cats])
  //getcat()
  // useEffect(function () {
  //   getCat()
  // }, [])
  if(loading === true){
    return <h1>Идет загрузка...</h1>
  }
  if(error === true){
    return <h1>Произошла ошибка</h1>
  }
  if (cats.length === 0) {
    return (
      <div>
        <h1>Постов нет</h1>
        <button onClick={getCat}>Загрузить котов</button>
      </div>
    )
  }

  return (
    <div className="App">
      {cats.map((cat) => {
        return (
          <div key={cat.image_link}>
            <h2>Порода: {cat.name}</h2>
            {/* <h2>Происхождение: {cat.origin}</h2>
            <h2>Минимальный вес: {Math.round(cat.min_weight / 2.2)} кг.</h2>
            <h2>Максимальный вес: {Math.round(cat.max_weight / 2.2)} кг.</h2>
            <img src={cat.image_link} width="300" height="200"></img> */}
          </div>
        )
      })}
       {/* <Counter start={5} />
      <Counter />
      <Data />
      <Hi age={20} name="Полина" />
      <Hi name="Кирилл" />
      <Hi name="Светлана" />
      <Array />
      <UserCard name="Иван" age={25} city="Москва" />
      <UserCard name="Петр" age={23} city="Москва" /> */}
    </div>
  )
}

export default App

//1. Мы с вами отправляли запрос на апи с котами, предлагаю еще немного поработать с ним.
//Мы с вами отображали породу кота и его картинку. Можно также отображать поля "origin" (происхождение) и минимальный и максимальный вес
//(я посмотрела в описании, он там правда отображался в фунтах). Можете брать значение в фунтах и делить на на 2.2, чтобы были килограммы)
//2. Картинки котов сделать одинакового размера - чтобы аккуратно смотрелось)
//3. Повторите как работает try catch и оберните наш запрос в эту конструкцию. В случае ошибки можно просто выводить в консоль текст, что произошла ошибка
