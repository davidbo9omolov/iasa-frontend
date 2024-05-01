import { LinkRoutes } from '@/constants/constants'

import { Routes, Route } from 'react-router-dom'
import { CommonLayout } from '../layouts/commonLayout.tsx'
import { PageNotFoundLayout } from '../layouts/errorPageLayout.tsx'

import HomePage from 'pages/HomePage.tsx'
import AnalystShop from 'pages/AnalystShop.tsx'
import Contacts from 'pages/Contacts.tsx'
import Applicant from 'pages/Applicant.tsx'
import Articles from 'pages/Articles.tsx'
import ForStudents from 'pages/ForStudents.tsx'
import ErrorPage from 'pages/ErrorPage.tsx'

import './App.css'

function App() {
  return (
    <div className={'min-h-screen relative'}>
      <Routes>
        <Route
          path={LinkRoutes.Home}
          element={
            <CommonLayout>
              <HomePage />
            </CommonLayout>
          }
        />
        <Route
          path={LinkRoutes.Applicant}
          element={
            <CommonLayout>
              <Applicant />
            </CommonLayout>
          }
        />
        <Route
          path={LinkRoutes.ForStudent}
          element={
            <CommonLayout>
              <ForStudents />
            </CommonLayout>
          }
        />
        <Route
          path={LinkRoutes.Articles}
          element={
            <CommonLayout>
              <Articles />
            </CommonLayout>
          }
        />
        <Route
          path={LinkRoutes.AnalystShop}
          element={
            <CommonLayout>
              <AnalystShop />
            </CommonLayout>
          }
        />
        <Route
          path={LinkRoutes.Contacts}
          element={
            <CommonLayout>
              <Contacts />
            </CommonLayout>
          }
        />
        <Route
          path={'*'}
          element={
            <PageNotFoundLayout>
              <ErrorPage />
            </PageNotFoundLayout>
          }
        />
      </Routes>
    </div>
  )
}

export default App
