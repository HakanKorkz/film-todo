import styles from './index.module.css'
import SearchModule from "../../../module/header/SearchModule";
import InputModule from "../../../module/header/InputModule";

function Header({searchToggle,setSearchToggle}) {
    return (
        <header className={styles.header}>
           <SearchModule searchToggle={searchToggle} setSearchToggle={setSearchToggle} />
            <InputModule active={searchToggle} />
        </header>
    );
}

export default Header;
