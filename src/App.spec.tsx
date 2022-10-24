import { render } from '@testing-library/react';

import App from './App';

describe('LocalMonitoring', () => {
  it('should render LocalMonitoring successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
