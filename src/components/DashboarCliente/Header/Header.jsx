import { BarraPesquisa, HeaderConteiner } from "./Header.style";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <HeaderConteiner>
      <button className="atalho">
        <AiOutlineMenu size={20} />
      </button>
      <img src="logo.png" alt="" />
      <button className="atalho">
        <BsCart2 size={20} />
      </button>

      <BarraPesquisa>
        <button className="lupa">
          <BiSearchAlt size={20} />
        </button>
        <input type="text" placeholder="Pesquise aqui..." />
      </BarraPesquisa>
    </HeaderConteiner>
  );
};

export default Header;
