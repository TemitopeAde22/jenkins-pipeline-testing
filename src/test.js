import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders the heading", () => {
    render(<App />)
    const headingElement = screen.getByText(/Hello, Jenkins!/i)
    expect(headingElement).toBeInTheDocument()
})

test("renders the paragraph", () => {
    render(<App />)
    const paragraphElement = screen.getByText(
        /This is a simple React component for testing purposes./i
    )
    expect(paragraphElement).toBeInTheDocument()
})
