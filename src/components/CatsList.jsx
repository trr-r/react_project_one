import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

const CatsList = () => {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  async function getCat() {
    setLoading(true)
    let link
    const randomNumber = Math.random()
    if (randomNumber > 0.5) {
      link = "https://api.api-ninjas.com/v1/cats?min_weight=10"
    } else link = "https://1api.api-ninjas.com/v1/cats?min_weight=10"
    try {
      const url = await axios.get(link, {
        headers: { "X-Api-Key": process.env.REACT_APP_Api_key },
      })
      //cats.push(...url.data)
      setCats(url.data)
      setLoading(false)
      setError(false)
      //console.log(cats)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  useEffect(
    function () {
      console.log(cats)
    },
    [cats]
  )
  //getcat()
  // useEffect(function () {
  //   getCat()
  // }, [])
  if (loading === true) {
    return <h1>Идет загрузка...</h1>
  }
  if (error === true) {
    return (
      <div>
        <h1>Произошла ошибка</h1>
        <button onClick={getCat}>Повторить попытку</button>
      </div>
    )
  }
  if (cats.length === 0) {
    return (
      <div>
        <h1>Постов нет</h1>
        <button onClick={getCat}>Загрузить котов</button>
      </div>
    )
  }
  return <div className="App">
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
  })}</div>
}

export default CatsList
