import { expect, test } from 'vitest';
import About from '../pages/About';
import { render, screen } from '@testing-library/react';

test("Should load About us Component", () => {

    render(<About />);

});