import { render } from '@testing-library/react';

import List from './list'

describe('LocalMonitoring', () => {
    const testData = {
        name: 'string',
        stars: 1,
        forks: 213,
        link: 'string'
      }
  it('should render LocalMonitoring successfully', () => {
    const { baseElement } = render(<List {...testData}/>);
    expect(baseElement).toBeTruthy();
  });
});
