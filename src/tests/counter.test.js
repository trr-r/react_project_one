import { sum } from "../functions"
import {render, fireEvent, screen} from '@testing-library/react'
import Counter from "../components/Counter"
import "@testing-library/jest-dom"
import App from '../App'


// test('Проверка', function(){
//     expect(2+2).toBe(4)
// })

// test('Проверка суммы', function(){
//     expect(sum(4,6)).toBe(10)
// })

// test('Проверка counter', function(){
//     render(<Counter/>)
//     expect(screen.getByText("+")).toBeInTheDocument()
//     expect(screen.getByText("0")).toBeInTheDocument()

//     const btn_plus = screen.getByTestId("plus")
//     const btn_minus = screen.getByTestId("minus")

//     expect(btn_plus).toBeInTheDocument()

//     fireEvent.click(btn_plus)
//     fireEvent.click(btn_plus)
//     expect(screen.getByText("2")).toBeInTheDocument()


//     expect(btn_minus).toBeInTheDocument()

//     fireEvent.click(btn_minus)
//     expect(screen.getByText("1")).toBeInTheDocument()

//     fireEvent.click(btn_plus)
//     fireEvent.click(btn_plus)
//     fireEvent.click(btn_plus)
//     fireEvent.click(btn_plus)
//     fireEvent.click(btn_minus)
//     expect(screen.getByText("4")).toBeInTheDocument()
// })

test("Проверка App", ()=>{
    render(<App/>)
    expect(screen.getByText("Загрузить котов")).toBeInTheDocument()
    fireEvent.click(screen.getByText("Загрузить котов"))
    expect(screen.getByText("Идет загрузка...")).toBeInTheDocument()
}) 
