import styles from "../../components/layout/header/index.module.css";
import {ImSearch} from "react-icons/im";

function SearchModule({searchToggle, setSearchToggle}) {
    let active = searchToggle
    const searchClick = () => {
        active = !searchToggle
        setSearchToggle(active)
    }

    return (
        <div id={"bt"} className={`${styles.headerSearch} ${active && styles.searchActive}`}
             onClick={() => searchClick()}>
            <ImSearch/>
        </div>
    );
}

export default SearchModule;
