import { Pesquisa } from "./BoxPesquisa.style";
import { BiSearchAlt } from "react-icons/bi";
import { TbHome2 } from "react-icons/tb";

const BoxPesquisa = () => {
  return (
    <Pesquisa>
      <div className="inputPesquisa">
        <button>
          <BiSearchAlt size={25} />
        </button>
        <input type="text" placeholder="Pesquise aqui..." />
      </div>

      <button>
        <TbHome2 size={30} />
      </button>
    </Pesquisa>
  );
};

export default BoxPesquisa;
