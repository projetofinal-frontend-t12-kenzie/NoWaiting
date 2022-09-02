import { Localizacao } from "./localizacao.style";
import { TiLocationOutline } from "react-icons/ti";

const ContainerLocalizacao = () => {
  return (
    <Localizacao>
      <h5>
        <TiLocationOutline />
        Localização
      </h5>
      <p>CodingFood, BRA</p>
    </Localizacao>
  );
};

export default ContainerLocalizacao;
