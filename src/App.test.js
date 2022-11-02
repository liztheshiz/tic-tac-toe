import { render, screen } from '@testing-library/react';
import App from './App';

// Unit tests
describe('<App /> component', () => {
    beforeEach(() => {
        render(<App />);
    });

    test('render title', () => {
        const title = screen.getByTestId('main-title');
        expect(title).toBeInTheDocument;
    });

    test('render two start buttons', () => {
        const buttons = screen.getAllByTestId('start-button');
        expect(buttons).toHaveLength(2);
    });

    test('start buttons open game view', () => {
        const buttons = screen.getAllByTestId('start-button');
        const button = buttons[0];

        userEvent.click(button);
        const GameView = screen.getByTestId('game-view');
        expect(GameView).toBeInTheDocument;
    });
});
