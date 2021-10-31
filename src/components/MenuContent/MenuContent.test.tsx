import { render, screen } from '@testing-library/react';
import { MenuContent } from '.';

describe('<MenuContent /> Component', () => {
  it('should render', () => {
    render(<MenuContent />);

    expect(screen.getByText('This is a menu content')).toBeInTheDocument();
  });
});
