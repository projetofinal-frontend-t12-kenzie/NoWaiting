import { useContext } from "react";
import { ContainerNavbar } from "./Navbar.style";
import api from "../../../services/api";
import { Contexts } from "../../../contexts/provider";
import { useState } from "react";

const Navbar = () => {
  const { setMenu } = useContext(Contexts);

  async function showMenu() {
    const response = await api.get("/menu");
    setMenu(response.data);
  }

  async function fastfoodFilter() {
    const response = await api.get("/menu");
    const filtrado = response.data.filter((item) => item.type === "Fast Food");
    setMenu(filtrado);
  }

  async function pastasFilter() {
    const response = await api.get("/menu");
    const filtrado = response.data.filter((item) => item.type === "Pasta");
    setMenu(filtrado);
  }

  async function veggieFilter() {
    const response = await api.get("/menu");
    const filtrado = response.data.filter((item) => item.type === "Veggi");
    setMenu(filtrado);
  }

  async function bebidasFilter() {
    const response = await api.get("/menu");
    const filtrado = response.data.filter((item) => item.type === "Bebidas");
    setMenu(filtrado);
  }

  async function sobremesasFilter() {
    const response = await api.get("/menu");
    const filtrado = response.data.filter((item) => item.type === "Sobremesas");
    setMenu(filtrado);
  }

  return (
    <ContainerNavbar>
      <div className="buttons">
        <button onClick={() => showMenu()}>Todos</button>
        <button onClick={() => fastfoodFilter()}>Fast food</button>
        <button onClick={() => pastasFilter()}>Pastas</button>
        <button onClick={() => veggieFilter()}>Veggie</button>
        <button onClick={() => bebidasFilter()}>Bebidas</button>
        <button onClick={() => sobremesasFilter()}>Sobremesas</button>
      </div>
    </ContainerNavbar>
  );
};

export default Navbar;
