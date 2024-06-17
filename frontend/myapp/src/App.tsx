import React, { lazy } from 'react';
import "./index.css"
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AuthenticationWrapper from './pages/authenticationPages/authentication';
const HomePageExport = lazy(() => import("./pages/homePage/home-page"))
const SignUpPageExport = lazy(() => import("./pages/authenticationPages/registerPage/signUp"))
const SignInPageExport = lazy(() => import("./pages/authenticationPages/loginPage/login"))

const NotFound = (()=> <Navigate to="./" replace />)
const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route  path='/' element={<Navbar />}>
      <Route index  element={<HomePageExport />} />
    </Route>
    <Route path="*" element={<NotFound />} />
    <Route  element={<AuthenticationWrapper/>}>
      <Route path='login' element={<React.Suspense fallback="Loading.."><SignInPageExport/></React.Suspense>} />
      <Route path="signup" element={<React.Suspense fallback="Loading..."><SignUpPageExport /></React.Suspense>} />
    </Route>
  </Route>
))
function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
