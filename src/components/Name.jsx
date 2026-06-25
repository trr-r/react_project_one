import React from "react"

const Hi = ({name, age="неизвестно сколько"}) => {
    console.log(typeof age)
    if (typeof age == "number"){
        return (
            <h1>Привет, {name} тебе {age+1} лет!</h1>
        )
    }
    else return (
            <h1>Привет, {name} тебе {age} лет!</h1>
    )
}

export default Hi