import React from 'react';
import Header from './components/Header';
import styles from './index.module.scss';

function Wrapper({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default Wrapper;