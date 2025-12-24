import { Link } from "react-router";
import Header from "../components/header";
import MainSection from "../components/mainsection";

export default function Home() {

    return (
        <div>

            <Header />
            <MainSection />
            <Link to="/detail" > voir detail</Link>
        </div>
        
    )
}