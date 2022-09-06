import { BarraPesquisa, HeaderConteiner } from "./Header.style";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { useContext } from "react";
import { Contexts } from "../../../contexts/provider";

const Header = () => {
  const { setFiltered } = useContext(Contexts);

  const productsFiltered = (e) => {
    e.preventDefault();
  };

  return (
    <HeaderConteiner>
      <button className="atalho">
        <AiOutlineMenu size={20} />
      </button>
      {/* <img src="logo.png" alt="" /> */}
      <h1>NoWaiting</h1>

      <button className="atalho">
        <BsCart2 size={20} />
      </button>

      <BarraPesquisa>
        <button className="lupa">
          <BiSearchAlt size={20} />
        </button>
        <form onSubmit={productsFiltered}>
          <input
            type="text"
            placeholder="Pesquise aqui..."
            onChange={(e) => setFiltered(e.target.value)}
          />
        </form>
      </BarraPesquisa>
    </HeaderConteiner>
  );
};

export default Header;
