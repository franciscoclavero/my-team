import { render } from '@testing-library/react';
import React from 'react';

import MenuArea from '.';

describe("MenuArea Component ", () => {
  it("- Render", () => {
    const { container } = render(<MenuArea />); 

    const menuAreaNode = container.getElementsByTagName('div');

    expect(menuAreaNode.length).toBe(1);
  });
});