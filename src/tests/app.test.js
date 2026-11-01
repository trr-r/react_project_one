import { sum } from "../functions"
import {render, fireEvent, screen} from '@testing-library/react'
import Counter from "../components/Counter"
import "@testing-library/jest-dom"


test('Проверка', function(){
    expect(2+2).toBe(4)
})

test('Проверка суммы', function(){
    expect(sum(4,6)).toBe(10)
})

test('Проверка counter', function(){
    render(<Counter/>)
    expect(screen.getByText("+")).toBeInTheDocument()
})
