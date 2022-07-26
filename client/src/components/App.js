import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadProductPage from "./views/UploadProductPage/UploadProductPage.js";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import CartPage from './views/CartPage/CartPage';
import HistoryPage from './views/HistoryPage/HistoryPage';
import LandingPage_copy from "./views/LandingPage/LandingPage_copy.js";
import DetailProductPage_copy from "./views/DetailProductPage/DetailProductPage_copy.js"
import DeliveryPolicy_copy from './views/CartPage/DeliveryPolicy_copy';
import PaymentPage from './views/PaymentPage/PaymentPage';
import ProductListPage from './views/ProductListPage/ProductListPage';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>

        
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/2"component={Auth(LandingPage_copy, null)}/>
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage_copy, null)} /> {/* 제품 상세페이지로 연결 */}
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
          <Route exact paah="/detailproduct" component={Auth(DetailProductPage_copy, true)} />
          <Route exact path="/3" component={Auth(DeliveryPolicy_copy, true)} />
          {/* <Route exact path="/deliverypolicy" component={Auth(DeliveryPolicy_copy, true)} /> */}
          <Route exact path="/payment" component={Auth(PaymentPage, true)} />
          <Route exact path="/productlist" component={Auth(ProductListPage, true)} />



        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
