import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";

export const Contexts = createContext({});

const ContextsProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [filtered, setFiltered] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  const [concludedOrders, setConcludedOrders] = useState([]);

  useEffect(() => {
    async function showMenu() {
      const response = await api.get("/menu");
      setMenu(response.data);
    }
    showMenu();
  }, []);

  async function loginUser(data) {
    console.log(data);
    const response = await api
      .post("/login", data)
      .catch((error) => console.log(error));
    console.log(response.data);
    const { accessToken, user } = response.data;
    console.log(accessToken);
    console.log(user);

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

  async function registerUser(data) {
    console.log(data);
    const response = await api.post("/users", data);
    console.log(response);
    navigate("/login", { replace: true });
  }

  return (
    <Contexts.Provider
      value={{
        // colocar funções aqui
        loginUser,
        registerUser,
        menu,
        setMenu,
        filtered,
        setFiltered,
        user,
        orders,
        setOrders,
        concludedOrders,
        setConcludedOrders,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default ContextsProvider;
