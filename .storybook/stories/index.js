import React from 'react';

import CustomButton from '../../src/index';
import { storiesOf } from '@storybook/react';

storiesOf('Custom Button', module).addWithJSX("simple", () => <CustomButton />);