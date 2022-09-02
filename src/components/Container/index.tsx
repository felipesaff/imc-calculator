import styles from './style.module.css'
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}
function Container(props: Props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default Container