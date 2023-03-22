import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/esm/Badge';
import { ToastContainer } from 'react-toastify';
import { FaShoppingCart } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import HomeScreen1 from './screens/HomeScreen1';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';

function App() {
  //AddToCart Handler, it is a function to add item to a cart
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  //Signout handler hook
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        {/* Beautify alerts using toastify  */}
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="success" varient="success" expand="lg">
            {/* <h1>KrishiMitra</h1> */}
            <LinkContainer to="/home">
              <Navbar.Brand className="text-light fs-3  fw-bolder p">
                <h3 className="text-light fs-3  cursor-pointer fw-bolder">
                  KrishiMitra
                </h3>
              </Navbar.Brand>
            </LinkContainer>
            <Container className="container">
              <LinkContainer to="/home">
                <Navbar.Brand className="text-light fs-3  fw-bolder">
                  Home
                </Navbar.Brand>
              </LinkContainer>

              <LinkContainer to="/community">
                <Navbar.Brand className="text-light fs-3  fw-bolder">
                  Community
                </Navbar.Brand>
              </LinkContainer>

              <LinkContainer to="/">
                <Navbar.Brand className="text-light fs-3  fw-bolder">
                  Shop
                </Navbar.Brand>
              </LinkContainer>

              <Navbar.Toggle aria-controls="basic-navbar-nav " />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end ">
                  <Link to="/cart" className="nav-link">
                    <FaShoppingCart /> Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>

                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  )}

                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/productlist">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orderlist">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/userlist">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* simple navbar is converted into bootstarp navbar or header above  */}
          {/* <Link to="/"> SHOP </Link> root link to app itself   */}
        </header>

        {/* <main>list products</main> */}
        <main>
          <Container className="mt-2">
            {/* bootstarp Container  */}
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />

              <Route path="/cart" element={<CartScreen />} />

              <Route path="/home" element={<HomeScreen1 />} />

              <Route path="/signin" element={<SigninScreen />} />

              <Route path="/signup" element={<SignupScreen />} />

              {/* <Route path="/profile" element={<ProfileScreen />} /> */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>

              <Route path="/payment" element={<PaymentMethodScreen />}></Route>

              <Route path="/placeorder" element={<PlaceOrderScreen />} />

              {/* <Route path="/order/:id" element={<OrderScreen />}></Route> */}
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>

              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>
            </Routes>
          </Container>
        </main>

        {/* Footer starts */}
        <footer className="text-center bg-success text-white">
          <div>All rights reserved @2023</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
