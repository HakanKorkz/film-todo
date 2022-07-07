import Header from "../components/layout/header";
import HomeComponent from "../components/Home";
import MainComponent from "../components/element/MainComponent";

function Home() {
    return (
        <MainComponent>
            <Header/>
            <HomeComponent/>
        </MainComponent>
    );
}

export default Home;
