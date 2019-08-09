import React from 'react';
import { render } from '@testing-library/react'
import Users from './Form'

describe('<Users />', () => {
    it('Must be render without crashing', () => {
        render (<Users />)
    })
})