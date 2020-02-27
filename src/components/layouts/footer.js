import React from 'react';
import { Footer } from '../layouts/basecss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faHeart } from '@fortawesome/free-solid-svg-icons';

export default () => (
    <Footer>
        <small style={{
            display: 'inline-block',
            padding: '20px 0',
            lineHeight: '1.5'
            }}>
            Made with <FontAwesomeIcon icon={faBrain} color="#ff3399" alt="Brain" /> & <FontAwesomeIcon icon={faHeart} color='red' alt="Love" /><br />
            JavaScript Designer © Copyright 2018
        </small>
    </Footer>
);