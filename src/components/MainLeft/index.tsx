import { useState } from 'react';
import styles from './style.module.css';

type Props = {
  receberResultado: Function
}

function MainLeft({receberResultado}: Props) {
  
    const [altura, setAltura] = useState<number>(0);
    const [peso, setPeso]     = useState<number>(0);

    const calcularIMC = () => {

        if(altura > 0 && peso > 0) {
          const alturaEmMetros = altura / 100;
          const calcIMC = peso / (alturaEmMetros * alturaEmMetros);
          receberResultado(calcIMC)
        }
    }
    return (
        <div className={styles.mainLeft}>
          <h1>Calcule seu IMC</h1>
          <p>
            Também conhecido como Índice de Massa Corporal, o IMC é uma fórmula utilizada por vários profissionais
            de saúde, incluindo médicos, enfermeiros e nutricionistas, para saber, de uma forma rápida,
            se a pessoa precisa ganhar ou perder peso.
          </p>
          <div className={styles.form}>
            <input type="number" name="altura" id="altura" placeholder="Digite sua altura em cm. Ex: 180" onChange={e => setAltura(parseFloat(e.target.value))} />
            <input type="number" name="peso" id="peso" placeholder="Digite seu peso em kg. Ex: 70" onChange={(e) => setPeso(parseFloat(e.target.value))} />
            <button onClick={calcularIMC}>Calcular</button>
          </div>
        </div>
    )
}

export default MainLeft