import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "../App"
import axios from "axios"

jest.mock("axios", () => {
  return {
    __esModule: true,
    default: {
      get: jest.fn(),
    },
  }
})

describe("Тестирование запросов", () => {
  beforeEach(()=>{
    jest.clearAllMocks()
  })
  test("Проверка App", async () => {
    const cats = [
      { id: 1, name: "Сиамский" },
      { id: 2, name: "Британский" },
    ]
    axios.get.mockResolvedValueOnce({
      data: cats,
    })
    render(<App />)
    // expect(screen.getByText("Загрузить котов")).toBeInTheDocument()
    // fireEvent.click(screen.getByText("Загрузить котов"))
    // expect(screen.getByText("Идет загрузка...")).toBeInTheDocument()

    const btn_getData = screen.getByText("Загрузить котов")
    fireEvent.click(btn_getData)
    expect(await screen.findByText("Порода: Сиамский")).toBeInTheDocument()
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining("/v1/cats"),
      expect.anything()
    )
  })

  test("Проверка ошибки запроса", async () => {
    axios.get.mockRejectedValueOnce(new Error("Network Error"))
    render(<App />)
    fireEvent.click(screen.getByText("Загрузить котов"))
    expect(await screen.findByText("Произошла ошибка")).toBeInTheDocument()
    expect(await screen.queryByText("Порода: Сиамский")).not.toBeInTheDocument()
  })

  test("Проверка состояния загрузки котов", () => {
    axios.get.mockImplementation(() => new Promise(() => {}))
    render(<App />)
    fireEvent.click(screen.getByText("Загрузить котов"))
    expect(screen.getByText("Идет загрузка...")).toBeInTheDocument()
  })

  test("Количество вызовов функций", () => {
    render(<App />)
    fireEvent.click(screen.getByText("Загрузить котов"))
    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})

