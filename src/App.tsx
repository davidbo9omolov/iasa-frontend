import { LinkRoutes } from '@/constants/constants'

import { Routes, Route } from 'react-router-dom'
import Header from 'components/header/Header.tsx'
import Footer from 'components/footer/Footer.tsx'

import HomePage from 'pages/HomePage.tsx'
import AnalystShop from 'pages/AnalystShop.tsx'
import Contacts from 'pages/Contacts.tsx'
import Applicant from 'pages/Applicant.tsx'
import Articles from 'pages/Articles.tsx'
import ForStudents from 'pages/ForStudents.tsx'

import './App.css'

function App() {
  return (
    <div className={'min-h-screen'}>
      <Header />
      <main>
        <Routes>
          <Route path={LinkRoutes.Home} element={<HomePage />} />
          <Route path={LinkRoutes.Applicant} element={<Applicant />} />
          <Route path={LinkRoutes.ForStudent} element={<ForStudents />} />
          <Route path={LinkRoutes.Articles} element={<Articles />} />
          <Route path={LinkRoutes.AnalystShop} element={<AnalystShop />} />
          <Route path={LinkRoutes.Contacts} element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
