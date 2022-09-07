import { Pesquisa } from "./BoxPesquisa.style";
import { useContext } from "react";
import { Contexts } from "../../../contexts/provider";
import { RiHomeLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

const BoxPesquisa = () => {
  const { setFiltered, handleApp } = useContext(Contexts);

  const productsFiltered = (e) => {
    e.preventDefault();
  };

  return (
    <Pesquisa id="Search">
      <div className="nav">
        <div className="inputSearch">
          <button>
            <AiOutlineSearch size={25} />
          </button>
          <input
            onSubmit={productsFiltered}
            type="text"
            placeholder="Pesquise aqui..."
            onChange={(e) => setFiltered(e.target.value)}
          />
        </div>
        <button onClick={() => handleApp()}>
          <RiHomeLine size={30} />
        </button>
      </div>
    </Pesquisa>
  );
};

export default BoxPesquisa;
