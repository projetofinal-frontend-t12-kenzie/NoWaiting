import { BarraPesquisa, HeaderConteiner } from "./Header.style";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";
import { Contexts } from "../../../contexts/provider";

const Header = () => {
  const { request, handleOpenCart } = useContext(Contexts);

  return (
    <HeaderConteiner>
      <img src="logo.png" alt="" />
      <div className="shortcut">
        {request.length > 0 && (
          <>
            <span className="notification">{request.length}</span>
          </>
        )}
        <button className="cart" onClick={() => handleOpenCart()}>
          <RiShoppingCartLine size={25} />
        </button>
      </div>

      <BarraPesquisa>
        <button className="lupa">
          <AiOutlineSearch size={20} />
        </button>
        <input type="text" placeholder="Pesquise aqui..." />
      </BarraPesquisa>
    </HeaderConteiner>
  );
};

export default Header;
