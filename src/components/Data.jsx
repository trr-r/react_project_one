import React from "react"

const Data = () => {
  return (
    <>
    <p>{new Date().toLocaleDateString()}</p>
    <p>{new Date().toLocaleTimeString('ru-RU')}</p>
  </>
  )
}

export default Data
