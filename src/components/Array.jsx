import React from 'react'

const Array = () => {
    let nums = []
    if(nums.length > 0){
        return <div>В массиве {nums.length} чисел</div>
    }
    else return <div>Массив пустой</div>
}

export default Array