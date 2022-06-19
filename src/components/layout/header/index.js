import styles from './index.module.css'
import SearchModule from "../../../module/header/SearchModule";
import InputModule from "../../../module/header/InputModule";

let active = false;

function Header() {
    return (
        <header className={styles.header}>
           <SearchModule active={active} />
            <InputModule active={active} />
        </header>
    );
}

export default Header;
