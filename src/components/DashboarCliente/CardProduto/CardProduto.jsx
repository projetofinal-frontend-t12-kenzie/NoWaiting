import { CardProdutos, ContainerProdutos } from "./CardProduto.style";
import { BsCart2 } from "react-icons/bs";

const Produtos = () => {
  return (
    <ContainerProdutos>
      <CardProdutos>
        <div>
          <h3>Panqueca</h3>
          <p>Os hamburguesrs são uma boa opçao para o lanche</p>
          <span className="categoria">Fast food</span>
          <span>R$ 10.00</span>
          <button>
            <BsCart2 size={15} />
          </button>
        </div>
      </CardProdutos>
      <CardProdutos>
        <div>
          <h3>Panqueca</h3>
          <p>Os hamburguesrs são uma boa opçao para o lanche</p>
          <span className="categoria">Fast food</span>
          <span>R$ 10.00</span>
          <button>
            <BsCart2 />
          </button>
        </div>
      </CardProdutos>
      <CardProdutos>
        <div>
          <h3>Panqueca</h3>
          <p>Os hamburguesrs são uma boa opçao para o lanche</p>
          <span className="categoria">Fast food</span>
          <span>R$ 10.00</span>
          <button>
            <BsCart2 />
          </button>
        </div>
      </CardProdutos>
      <CardProdutos>
        <div>
          <h3>Panqueca</h3>
          <p>Os hamburguesrs são uma boa opçao para o lanche</p>
          <span className="categoria">Fast food</span>
          <span>R$ 10.00</span>
          <button>
            <BsCart2 />
          </button>
        </div>
      </CardProdutos>{" "}
      <CardProdutos>
        <div>
          <h3>Panqueca</h3>
          <p>Os hamburguesrs são uma boa opçao para o lanche</p>
          <span className="categoria">Fast food</span>
          <span>R$ 10.00</span>
          <button>
            <BsCart2 />
          </button>
        </div>
      </CardProdutos>{" "}
      <CardProdutos>
        <div>
          <h3>Panqueca</h3>
          <p>Os hamburguesrs são uma boa opçao para o lanche</p>
          <span className="categoria">Fast food</span>
          <span>R$ 10.00</span>
          <button>
            <BsCart2 />
          </button>
        </div>
      </CardProdutos>{" "}
      <CardProdutos>
        <div>
          <h3>Panqueca</h3>
          <p>Os hamburguesrs são uma boa opçao para o lanche</p>
          <span className="categoria">Fast food</span>
          <span>R$ 10.00</span>
          <button>
            <BsCart2 />
          </button>
        </div>
      </CardProdutos>{" "}
      <CardProdutos>
        <div>
          <h3>Panqueca</h3>
          <p>Os hamburguesrs são uma boa opçao para o lanche</p>
          <span className="categoria">Fast food</span>
          <span>R$ 10.00</span>
          <button>
            <BsCart2 />
          </button>
        </div>
      </CardProdutos>
    </ContainerProdutos>
  );
};

export default Produtos;
