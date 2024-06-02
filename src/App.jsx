import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./Contexts/CitiesContext";
import { AuthProvider } from "./Contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
// import AppLayout from "./pages/AppLayout";
// this how you set the react router
function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Homepage />} /> */}
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route
                index
                // element={<CityList cities={cities} isLoading={isLoading} />}
                element={<Navigate to="cities" replace />}
              />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            {/*for all the  invalids route */}
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
