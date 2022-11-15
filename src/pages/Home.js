import {useState} from "react";
import Header from "../components/layout/header";
import MainComponent from "../components/element/MainComponent";
import HomeComponent from "../components/Home";

function Home() {
   const [searchToggle,setSearchToggle] = useState(false)
    return (
        <MainComponent>
            <Header searchToggle={searchToggle} setSearchToggle={setSearchToggle} />
            <HomeComponent/>
        </MainComponent>
    );
}

export default Home;
