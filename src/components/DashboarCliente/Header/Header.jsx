import { HeaderConteiner } from "./Header.style";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <HeaderConteiner>
      <button>
        <AiOutlineMenu size={20} />
      </button>
      <h1>NoWaiting</h1>
      <button>
        <BsCart2 size={20} />
      </button>
    </HeaderConteiner>
  );
};

export default Header;
