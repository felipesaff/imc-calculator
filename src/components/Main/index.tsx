import { useState } from 'react';
import styles from './style.module.css';
import MainLeft from '../MainLeft';
import MainRight from '../MainRight';

function Main() {
    const [imc, setIMC] = useState<number>(0);
    function alterarResultado(imc: number) {
        setIMC(imc);
    }
    return (
        <div className={styles.main}>
            <MainLeft receberResultado={alterarResultado} />
            <MainRight resultado={imc} />
        </div>
    )
}

export default Main