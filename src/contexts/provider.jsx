import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";

export const Contexts = createContext({});

const ContextsProvider = ({ children }) => {
  const navigate = useNavigate();

  const InicialInvoice = {
    total: 0,
    subTotal: 0,
    descount: 0,
    tax: 0,
  };

  const location = useLocation();
  const [menu, setMenu] = useState([]);
  const [user, setUser] = useState(null);
  const [filtered, setFiltered] = useState("");

  const [orders, setOrders] = useState([]);
  const [request, setRequest] = useState([]);

  const [invoice, setInvoice] = useState(false);
  const [ordering, setOrderList] = useState(true);
  const [registerOrder, setRegisterOrder] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);
  const [currentAmout, setCurrent] = useState(InicialInvoice);
  const [concludedOrders, setConcludedOrders] = useState([]);

  const [order, setOrder] = useState([]);
  const findOrders = () => {
    api
      .get("/order")
      .then((response) => setOrder(response.data))
      .catch((err) => console.log(err));
    const res = [];
    for (const keys of order) {
      keys.pedido.forEach((element) => res.push(element));
    }
    setOrders(res);
    return res;
  };

  useEffect(() => {
    async function showMenu() {
      const response = await api.get("/menu");
      setMenu(response.data);
    }
    showMenu();
    calculatingTotalValue();
  }, [request]);

  useEffect(() => {
    findOrders();
  }, []);

  function check(order) {
    api
      .delete("/order", order.id)
      .then((response) => {
        setOrder(response.data);
        setConcludedOrders([...concludedOrders, order]);
      })
      .catch((err) => console.log(err));
    findOrders();
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
    if (request.length > 0) {
      let total = request.reduce(
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
    } else {
      setCurrent(InicialInvoice);
    }
  };

  async function sendRequest(data) {
    await api.post("/order", data);
  }

  const handleOpenCart = () => {
    setOrderList(true);
    const cart = document.getElementById("orders");
    cart.style.display = "block";
  };

  const handleApp = () => {
    if (invoice === true) {
      setInvoice(false);
      setOrderList(false);
      setRegisterOrder(false);
    }
    if (ordering === true) {
      setOrderList(false);
      setRegisterOrder(false);
    }
    if (registerOrder === true) {
      setRegisterOrder(false);
    }
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
        setRequest,
        request,
        concludedOrders,
        setConcludedOrders,
        check,
        totalPrice,
        setTotalPrice,
        logOut,
        filtered,
        setFiltered,
        sendRequest,
        handleOpenCart,
        handleApp,
        findOrders,
        invoice,
        setInvoice,
        ordering,
        setOrderList,
        registerOrder,
        setRegisterOrder,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default ContextsProvider;
