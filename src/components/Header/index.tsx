import styles from './style.module.css';
import logo from '../../assets/powered.png';

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logomarca" />
        </header>
    )
}

export default Header