import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App /> Component', () => {
  it('should render a layout component', () => {
    render(<App />);
    const layoutElement = screen.getByTestId('test-layout');
    expect(layoutElement).toBeInTheDocument();
  });
});
