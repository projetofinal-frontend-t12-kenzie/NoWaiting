import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";

const invoice = {
  total: 0,
  subTotal: 0,
  descount: 0,
  tax: 0,
};

export const Contexts = createContext({});

const ContextsProvider = ({ children }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const [menu, setMenu] = useState([]);
  const [user, setUser] = useState(null);
  const [filtered, setFiltered] = useState("");

  const [orders, setOrders] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [currentAmout, setCurrent] = useState(invoice);
  const [concludedOrders, setConcludedOrders] = useState([]);

  useEffect(() => {
    async function showMenu() {
      const response = await api.get("/menu");
      setMenu(response.data);
    }
    showMenu();
    calculatingTotalValue();
  }, [orders]);

  useEffect(() => {
    api
      .get("/order")
      .then((response) => setOrders(response.data))
      .catch((err) => console.log(err));
  }, []);

  function check(order) {
    api
      .delete("/order", order.id)
      .then((response) => {
        console.log(response);
        setOrders(response.data);
        setConcludedOrders([...concludedOrders, order]);
      })
      .catch((err) => console.log(err));
  }

  async function loginUser(data) {
    const response = await api
      .post("/login", data)
      .catch((error) => console.log(error));
    const { accessToken, user } = response.data;

    setUser(user);
    const idUser = user.id;
    api.defaults.headers.authorization = `Bearer ${accessToken}`;

    const toNavigate = location.state?.from?.pathname || `/dashboard/${idUser}`;

    if (accessToken !== null) {
      localStorage.setItem("@nowaiting:token", accessToken);
      if (localStorage.getItem("@nowaiting:token") !== null) {
        navigate(toNavigate, { replace: true });
      }
    }
  }
  function logOut() {
    setUser(false);
    localStorage.clear();
    navigate("/login");
  }

  async function registerUser(data) {
    await api.post("/users", data);
    navigate("/login", { replace: true });
  }

  const calculatingTotalValue = () => {
    let total = orders.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.amount,
      0
    );
    const subTotal = total;
    const descount = total * 0.2;
    const tax = Number((total * 0.02).toFixed(2));

    total = Number(total) - descount;
    total = Number(total) + tax;

    const currentPrice = {
      total,
      subTotal,
      descount,
      tax,
    };
    setCurrent(currentPrice);
  };

  return (
    <Contexts.Provider
      value={{
        // colocar funções aqui
        loginUser,
        registerUser,
        menu,
        setMenu,
        orders,
        currentAmout,
        setCurrent,
        calculatingTotalValue,
        user,
        setOrders,
        concludedOrders,
        setConcludedOrders,
        check,
        totalPrice,
        setTotalPrice,
        logOut,
        filtered,
        setFiltered,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default ContextsProvider;
