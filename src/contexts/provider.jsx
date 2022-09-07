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
  const [orders, setOrder] = useState([]);

  const [token, setToken] = useState(null);
  const [filtered, setFiltered] = useState("");
  const [loading, setLoading] = useState(true);

  const [currentAmout, setCurrent] = useState(invoice);

  // useEffect(()=>{
  //   async function loadUser() {
  //     if(token){
  //       try{
  //         api.defaults.headers.authorization = `Bearer ${token}`;
  //         const { data } = await api.get('/profile');
  //         setUser(data);
  //       }
  //       catch(err){console.log(err)}
  //     }
  //     setLoading(false)
  //   }
  //   loadUser()
  // },[token])

  useEffect(() => {
    async function showMenu() {
      const response = await api.get("/menu");
      setMenu(response.data);
    }
    showMenu();
    calculatingTotalValue();
  }, [orders]);

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
        registerUser,
        loading,
        menu,
        setMenu,
        orders,
        setOrder,
        filtered,
        setFiltered,
        currentAmout,
        setCurrent,
        calculatingTotalValue,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default ContextsProvider;
