import { ContainerNavbar } from "./Navbar.style";

const Navbar = () => {
  return (
    <ContainerNavbar>
      <div className="buttons">
        <button>Fast food</button>
        <button>Pastas</button>
        <button>Veggie</button>
        <button>Bebidas</button>
        <button>Sobremesas</button>
      </div>
    </ContainerNavbar>
  );
};

export default Navbar;
