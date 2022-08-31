import {
  Cliente,
  Geral,
  Restaurante,
} from "../../components/SelectPage/SelectPage.style";

const SelectPage = () => {
  return (
    <Geral>
      <Restaurante>
        <button>Restaurante</button>
      </Restaurante>
      <Cliente>
        <button>Cliente</button>
      </Cliente>
    </Geral>
  );
};
export default SelectPage;
