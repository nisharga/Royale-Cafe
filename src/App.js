import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
// import { Route, Routes } from "react-router-dom";

import Footer from "./Shared/Footer/Footer";
import Nav from "./Shared/Nav/Nav";
import Home from "./Pages/Home/Home";
import MenuPage from "./Pages/MenuPage/MenuPage";
import { Route, Routes } from "react-router-dom";
function App() {
  // / font awesome global declear
  const iconList = Object.keys(Icons)
    .filter((key) => key !== "fas" && key !== "prefix")
    .map((icon) => Icons[icon]);
  library.add(...iconList);
  // font awesome global declear

  return (
    <div>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

// const [user] = useAuthState(auth);
//   const logout = () => {
//     signOut(auth);
//   };
{
  /* <li className="nav-item">
                      {!user && (
                        <CustomLink to="/signup" className="nav-link">
                          Sign Up
                        </CustomLink>
                      )}
                    </li>
                    <li className="nav-item">
                      {user && (
                        <CustomLink to="/dashboard" className="nav-link">
                          Dashboard
                        </CustomLink>
                      )}
                    </li>
                    <li className="nav-item">
                      {user && (
                        <button onClick={logout} className="logout">
                          LogOut<i className="fa fa-sign-out"></i>
                        </button>
                      )}
                    </li> */
}

{
  /* <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/forgotpass" element={<ForgotPass></ForgotPass>} />
        <Route path="/login" element={<Signin></Signin>} />
        <Route path="/addproduct" element={<AddProduct></AddProduct>} />
        <Route
          path="/manageallorder"
          element={<ManageAllOrder></ManageAllOrder>}
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="purchase/:id"
          element={
            <RequireAuth redirectTo="/login">
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard/myorders/payment/:id/:pid"
          element={
            <RequireAuth redirectTo="/login">
              <Payment></Payment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth redirectTo="/login">
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard/myorders"
          element={
            <RequireAuth redirectTo="/login">
              <Myorders></Myorders>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard/addareview"
          element={
            <RequireAuth redirectTo="/login">
              <Addareview></Addareview>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard/myprofile"
          element={
            <RequireAuth redirectTo="/login">
              <Myprofile></Myprofile>
            </RequireAuth>
          }
        ></Route>
      </Routes> */
}
