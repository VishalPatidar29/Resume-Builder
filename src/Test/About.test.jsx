import { describe, expect, test } from 'vitest';
import About from '../pages/About';
import { render, screen } from '@testing-library/react';

test("Should load About us Component", () => {

    render(<About />);

    // Querying
    const heading = screen.getAllByRole("heading");

    // Assertion
    expect(heading.length).toBeGreaterThan(0);

});

/* group of test cases */
describe("About Us Page Test Case", () => {

    test("Should load all Heading in  About us Component", () => {

        render(<About />);

        // Querying
        const heading = screen.getAllByRole("heading");

        // Assertion
        expect(heading.length).toBe(2);
        expect(heading.length).not.toBe(3);

    }); 

    /* it and test both are same */
    it("Should load Image inside About us Component", () => {

        render(<About />);

        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();

    });
});