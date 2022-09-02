import React from "react";
import Logo from "./Logo.svg";
import hamburguer from "./hamburguer.png";
import usuario from "./usuario.png";
import { Container, Dashboard, Navbardir } from "./DashboardRestaurante.style";
import {
  AiOutlineAlert,
  AiOutlineCheck,
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineLineChart,
  AiOutlineSetting,
  AiOutlineCreditCard,
  AiOutlineUser,
} from "react-icons/ai";

import { FiArrowUpRight } from "react-icons/fi";

function DashboardRestaurante() {
  return (
    <Container>
      <div className="navbar-esquerda">
        <div className="logo">
          <figure>
            <img src={Logo} alt="Logo" />
          </figure>
        </div>
        <div className="menu">
          <button>
            <AiOutlineHome size={24} />
            <span>Visão geral</span>
          </button>
          <button>
            <AiOutlineLineChart size={24} />
            <span>Análise</span>
          </button>
          <button>
            <AiOutlineCreditCard size={24} />
            <span>Minha carteira</span>
          </button>
          <button>
            <AiOutlineUser size={24} />
            <span>Perfil</span>
          </button>
          <button>
            <AiOutlineSetting size={24} />
            <span>Configurações</span>
          </button>
        </div>
        <div className="sub-menu">
          <span>Ajuda</span>
          <span>Modo Escuro</span>
          <span>Sair</span>
        </div>
      </div>
      <Dashboard className="dashboard">
        <header>
          <h2>Visão geral</h2>
          <form action="#">
            <label htmlFor="search">
              <AiOutlineSearch size={24} />
            </label>
            <input type="text" id="search" placeholder="Buscar produto..." />
          </form>
        </header>
        <div className="cards">
          <div className="card">
            <span>Total acumulado</span>
            <strong>R$ 416,30</strong>
            <div className="porcentagem">
              <FiArrowUpRight />
              <h5>1.8%</h5>
            </div>
            <span>A MAIS QUE MÊS PASSADO</span>
          </div>
          <div className="card">
            <span>Total de pedidos</span>
            <strong>8</strong>
            <div className="porcentagem">
              <FiArrowUpRight />
              <h5>0.5%</h5>
            </div>
            <span>A MAIS QUE MÊS PASSADO</span>
          </div>
        </div>
        <h3>Pedidos</h3>
        <div className="pedidos">
          <form action="#">
            <select name="select">
              <option value="valor1">Valor 1</option>
              <option value="valor2" defaultValue>
                Valor 2
              </option>
              <option value="valor3">Valor 3</option>
            </select>
            <input type="submit" />
          </form>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
          <div className="pedido">
            <span>Set 1, 10:30</span>
            <img src={hamburguer} alt="hamburguer" />
            <strong>Hamburguer</strong>
            <span>Extras 0</span>
            <span>Mesa 10</span>
          </div>
        </div>
      </Dashboard>
      <Navbardir className="menu-lateral-direita">
        <div className="avatar">
          <button>
            <AiOutlineAlert size={30} />
          </button>
          <img src={usuario} alt="img restaurante" />
          <div>
            <h4>Kenzinho</h4>
            <h3>Restaurante - CODE</h3>
          </div>
        </div>
        <div className="cards">
          <h4>Histórico</h4>
          <div className="card">
            <img src={hamburguer} alt="img comida" />
            <div>
              <strong>Hamburguer</strong>
              <span>Mesa 10</span>
            </div>
            <AiOutlineCheck size={24} />
          </div>
        </div>
      </Navbardir>
    </Container>
  );
}

export default DashboardRestaurante;
