import closeIcon from "../../../../public/Close_round.svg";
import addIcon from "../../../../public/Folder_add.svg";
import delIcon from "../../../../public/Folder_del.svg";
import Image from "next/image";

export default function ChangeCard() {
    return (
        <div className="bg-neutral-400 w-96 h-64 rounded p-3">
            <div className="flex justify-end">
                <Image src={closeIcon} alt="Icone de fechar"></Image>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <p>Titulo</p>
                </div>

                <input type="text" />

                <div className="flex justify-center">
                    <p>Descrição</p>
                </div>

                <input className="bg-white overflow-auto" type="text" />
                <div className="flex justify-around mt-10">
                    <button className="flex itens-center justify-center">
                        <Image src={delIcon} alt="Icone de delete"></Image>
                    </button>
                    <button className="flex itens-center justify-center">
                        <Image src={addIcon} alt="Icone de adicionar"></Image>
                    </button>
                </div>
            </div>
        </div>
    );
}
