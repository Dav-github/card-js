import search from "../../../../public/Search.svg";
import addIcon from "../../../../public/Add_round.svg";
import Image from "next/image";
import "./styles.css";

export default function SearchBar() {
    return (
        <div className="flex">
            <form>
                <div className="flex css-div">
                    <input className="bg-neutral-400 rounded-md" type="text" />
                    <Image
                        className="css-img"
                        src={search}
                        alt="lupa de busca"
                    ></Image>
                </div>
            </form>
            <div className="bg-neutral-400 rounded-full ml-2">
                <Image src={addIcon} alt="Icone add"></Image>
            </div>
        </div>
    );
}
