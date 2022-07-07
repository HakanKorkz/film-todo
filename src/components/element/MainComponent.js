import styles from './MainComponet.module.css'
function MainComponent(props) {
    return (
        <main>
            {props.children}
        </main>
    );
}

export default MainComponent;
