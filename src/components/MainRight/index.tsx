import styles from './style.module.css';
import thumbDown from '../../assets/down.png';
import thumbUp from '../../assets/up.png';
import leftarrow from '../../assets/leftarrow.png'

type Props = {
  resultado: number;
}

function MainRight(props: Props) {

  if(props.resultado > 0 && props.resultado < 18.5) {
    return (
        <div className={`${styles.magreza} ${styles.resultado}`}>
          <div className={styles.imgBG}>
            <img src={thumbDown} alt="Joinha negativo" className={styles.imgTitle} />
          </div>
          <h2>Magreza</h2>
          <span>Seu IMC é de {props.resultado.toFixed(2)} </span>
          <p>IMC abaixo de 18.5</p>
        </div>
    )
  } else if(props.resultado >= 18.5 && props.resultado <= 24.9) {
    return (
      <div className={`${styles.normal} ${styles.resultado}`}>
        <div className={styles.imgBG}>
          <img src={thumbUp} alt="Joinha positivo" className={styles.imgTitle} />
        </div>
        <h2>Normal</h2>
        <span>Seu IMC é de {props.resultado.toFixed(2)} </span>
        <p>IMC entre 18.5 e 24.9</p>
      </div>
    )
  } else if(props.resultado >= 25 && props.resultado <= 30) {
    return (
        <div className={`${styles.sobrepeso} ${styles.resultado}`}>
          <div className={styles.imgBG}>
            <img src={thumbDown} alt="Joinha negativo" className={styles.imgTitle} />
          </div>
          <h2>Sobrepeso</h2>
          <span>Seu IMC é de {props.resultado.toFixed(2)} </span>
          <p>IMC entre 25 e 30</p>
        </div>
    )
  } else if(props.resultado > 30) {
    return (
        <div className={`${styles.obesidade} ${styles.resultado}`}>
          <div className={styles.imgBG}>
            <img src={thumbDown} alt="Joinha negativo" className={styles.imgTitle} />
          </div>
          <h2>Obesidade</h2>
          <span>Seu IMC é de {props.resultado.toFixed(2)} </span>
          <p>IMC acima de 30</p>
        </div>
    )
  } else {
    return (
      <div className={`${styles.MainRight} ${styles.initial}`}>

        <div className={styles.magreza}>
          <div className={styles.imgBG}>
            <img src={thumbDown} alt="Joinha negativo" className={styles.imgTitle} />
          </div>
          <h2>Magreza</h2>
          <p>IMC abaixo de 18.5</p>
        </div>

        <div className={styles.normal}>
          <div className={styles.imgBG}>
            <img src={thumbUp} alt="Joinha positivo" className={styles.imgTitle} />
          </div>
          <h2>Normal</h2>
          <p>IMC entre 18.5 e 24.9</p>
        </div>

        <div className={styles.sobrepeso}>
          <div className={styles.imgBG}>
            <img src={thumbDown} alt="Joinha negativo" className={styles.imgTitle} />
          </div>
          <h2>Sobrepeso</h2>
          <p>IMC entre 25 e 30</p>
        </div>

        <div className={styles.obesidade}>
          <div className={styles.imgBG}>
            <img src={thumbDown} alt="Joinha negativo" className={styles.imgTitle} />
          </div>
          <h2>Obesidade</h2>
          <p>IMC acima de 30</p>
        </div>

      </div>
    )
  }
}

export default MainRight