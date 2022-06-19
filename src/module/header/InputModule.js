import styles from "../../components/layout/header/index.module.css";

function InputModule(props) {
    let active = props.active

    const ActiveStyle = {
        display: 'block',
    };
    const PassiveStyle = {
        display: 'none',
    };
    const InputActive = active ? ActiveStyle : PassiveStyle ;
    console.log(InputActive)
    return (
        <div className={`${styles.headerInputArea} ${active && styles.AreaActive}`}>
            <input type="text" style={InputActive} placeholder="arama yap"/>
        </div>
    );
}

export default InputModule;
