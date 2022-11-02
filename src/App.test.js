import { render, rerender, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './components/app/App';

// Unit tests
// App/Home component
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
});

// GameView component
describe('<GameView /> component', () => {
    beforeAll(() => {
        render(<App />);
        const buttons = screen.getAllByTestId('start-button');
        const button = buttons[0];

        userEvent.click(button);
    });

    test('render game board', () => {
        expect(screen.getByTestId('game-board')).toBeInTheDocument;
    })
});

// Integration tests
describe('<App /> integration', () => {
    beforeEach(() => {
        render(<App />);
    });

    test('start buttons open game view', () => {
        const buttons = screen.getAllByTestId('start-button');
        const button = buttons[0];

        userEvent.click(button);
        const GameView = screen.getByTestId('game-view');
        expect(GameView).toBeInTheDocument;
    });
});
