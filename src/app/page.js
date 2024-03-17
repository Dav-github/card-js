import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import mok from "./components/Card/mok.json";

export default function Home() {
    return (
        <>
            <div className="flex items-center justify-center my-8">
                <SearchBar />
            </div>
            <div className="flex items-center justify-center">
                <Card />
            </div>
        </>
    );
}
