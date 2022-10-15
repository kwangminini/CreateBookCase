import styles from "./Layout.module.css";

const Layout:React.FC<any> = ({children}) => (<div className={styles.layout}>{children}</div>)

export default Layout;