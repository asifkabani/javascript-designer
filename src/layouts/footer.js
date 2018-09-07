import React from 'react';
import { Footer, PinkBar } from '../layouts/basecss';

export default () => (
    <Footer>
        <PinkBar footer />
        <small style={{ display: 'inline-block', padding: '20px 0' }}>
            JavaScript Designer<br />© Copyright 2018. All Rights Reserved.
        </small>
    </Footer>
);