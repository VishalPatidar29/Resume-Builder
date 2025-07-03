import { fireEvent, render, screen } from "@testing-library/react";
import Header from '../Components/Header/Header';
import { expect, test } from "vitest";
import { ThemeProvider } from "../context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

test("Should header load", () => {

    render(
        <BrowserRouter>
            <ThemeProvider>
                <Header />
            </ThemeProvider>
        </BrowserRouter>

    )
    const Home = screen.getByRole("button", { name: /Home/i });
    const About = screen.getByRole("button", { name: /About/i });

    expect(Home).toBeInTheDocument();
    expect(About).toBeInTheDocument();

});

test("Check click of light and Dark theme", () => {

    render(
        <BrowserRouter>
            <ThemeProvider>
                <Header />
            </ThemeProvider>
        </BrowserRouter>

    )
    const themeToggleButton = screen.getAllByRole('button')[2]; // third button is theme

    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    fireEvent.click(themeToggleButton)

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    fireEvent.click(themeToggleButton)

    expect(document.documentElement.getAttribute('data-theme')).toBe('light');


});