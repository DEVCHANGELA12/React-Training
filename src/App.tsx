import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomHookComp from "./Components/HooksUsages/CustomHookComp";
import AboutUs from "./Components/AboutUs";
import PageNotFound from "./Components/PageNotFound";
import Home from "./Components/Home";
import MemoHookComp from "./Components/HooksUsages/MemoHookComp";
import CallBackComp from "./Components/HooksUsages/CallBackComp";
import LayoutEffectComp from "./Components/HooksUsages/LayoutEffectComp";
import InsertionEffectComp from "./Components/HooksUsages/InsertionEffectComp";
import UserList from "./Pages/UserCrud/UserList";
import UserEdit from "./Pages/UserCrud/UserEdit";
import UserAdd from "./Pages/UserCrud/UserAdd";

function App() {
  // const navigate = useNavigate();
  // const buttonClickHandler = () => {
  //   console.log("button clicked");
  //   navigate("/custom-hook");
  // };
  return (
    <>
      {/* <nav
        style={{
          padding: "20px",
          background: "#868f43",
          display: "flex",
          gap: 10,
        }}
      >
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about-us">
          <button> AboutUs</button>
        </Link>
        <button type="button" onClick={buttonClickHandler}>
          CustomHook
        </button>
        <Link to="/hooks/use-memo">
          <button> Use Memo</button>
        </Link>
        <Link to="/hooks/use-callback">
          <button> Use CallBack</button>
        </Link>
        <Link to="/hooks/use-layout-effect">
          <button> Use LayoutEffect</button>
        </Link>
        <Link to="/hooks/use-insertion-effect">
          <button> Use InsertionEffect</button>
        </Link>
        <Link to={"/users"}>
          <Button>Users Crud</Button>
        </Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/custom-hook" element={<CustomHookComp />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/users" element={<UserList />}></Route>
        <Route path="/user/:id" element={<UserEdit />}></Route>
        <Route path="/user/add" element={<UserAdd />}></Route>
        <Route path="/hooks">
          <Route path="use-memo" element={<MemoHookComp />} />
          <Route path="use-callback" element={<CallBackComp />} />
          <Route path="use-layout-effect" element={<LayoutEffectComp />} />
          <Route
            path="use-insertion-effect"
            element={<InsertionEffectComp />}
          />
        </Route>
        <Route path="/not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />}></Route>
      </Routes>
    </>
  );
}

export default App;
