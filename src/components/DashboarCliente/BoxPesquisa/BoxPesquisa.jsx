import { Pesquisa } from "./BoxPesquisa.style";
import { BiSearchAlt } from "react-icons/bi";
import { TbHome2 } from "react-icons/tb";
import { useContext } from "react";
import { Contexts } from "../../../contexts/provider";

const BoxPesquisa = () => {
  const { setFiltered } = useContext(Contexts);

  const productsFiltered = (e) => {
    e.preventDefault();
  };

  return (
    <Pesquisa>
      <div className="inputPesquisa">
        <form>
          <button>
            <BiSearchAlt size={25} />
          </button>
          <input
            onSubmit={productsFiltered}
            type="text"
            placeholder="Pesquise aqui..."
            onChange={(e) => setFiltered(e.target.value)}
          />
        </form>
        <button>
          <TbHome2 size={30} />
        </button>
      </div>
    </Pesquisa>
  );
};

export default BoxPesquisa;
