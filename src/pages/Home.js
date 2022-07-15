import Header from "components/layout/header";
import HomeComponent from "components/Home";
import MainComponent from "components/element/MainComponent";
import {useState} from "react";

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
