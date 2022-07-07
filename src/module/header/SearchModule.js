import styles from "../../components/layout/header/index.module.css";
import {ImSearch} from "react-icons/im";

function SearchModule(props) {
    let active = props.active
    const searchClick = (ev) => {
        active = ev
        return active;
    }

    return (
        <div className={`${styles.headerSearch} ${searchClick(active) && styles.searchActive}`} onClick={() => searchClick(active)}>
            <ImSearch/>
        </div>
    );
}

export default SearchModule;
