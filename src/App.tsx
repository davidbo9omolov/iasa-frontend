import { LinkRoutes } from '@/constants/constants'

import { Routes, Route } from 'react-router-dom'
import { CommonLayout } from '../layouts/commonLayout.tsx'
import { PageNotFoundLayout } from '../layouts/errorPageLayout.tsx'

import HomePage from 'pages/HomePage.tsx'
// import AnalystShop from 'pages/AnalystShop.tsx'
// import Contacts from 'pages/Contacts.tsx'
// import Applicant from 'pages/Applicant.tsx'
// import Articles from 'pages/Articles.tsx'
// import ForStudents from 'pages/ForStudents.tsx'
import ErrorPage from 'pages/ErrorPage.tsx'

import SadEmoji from '@/assets/sadEmoji.tsx'

import './App.css'
import TechnicalProblems from '@/assets/technicalProblems.tsx'

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
            <PageNotFoundLayout>
              <ErrorPage
                icon={<TechnicalProblems />}
                errorMessage={'Сторінка знаходиться в розробці.'}
                errorType={'Проводяться технічні роботи'}
              />
              {/*<Applicant />*/}
            </PageNotFoundLayout>
          }
        />
        <Route
          path={LinkRoutes.ForStudent}
          element={
            <PageNotFoundLayout>
              <ErrorPage
                icon={<TechnicalProblems />}
                errorMessage={'Сторінка знаходиться в розробці.'}
                errorType={'Проводяться технічні роботи'}
              />
              {/*<ForStudents />*/}
            </PageNotFoundLayout>
          }
        />
        <Route
          path={LinkRoutes.Articles}
          element={
            <PageNotFoundLayout>
              <ErrorPage
                icon={<TechnicalProblems />}
                errorMessage={'Сторінка знаходиться в розробці.'}
                errorType={'Проводяться технічні роботи'}
              />
              {/*<Articles />*/}
            </PageNotFoundLayout>
          }
        />
        <Route
          path={LinkRoutes.AnalystShop}
          element={
            <PageNotFoundLayout>
              <ErrorPage
                icon={<TechnicalProblems />}
                errorMessage={'Сторінка знаходиться в розробці.'}
                errorType={'Проводяться технічні роботи'}
              />
              {/*<AnalystShop />*/}
            </PageNotFoundLayout>
          }
        />
        <Route
          path={LinkRoutes.Contacts}
          element={
            <PageNotFoundLayout>
              <ErrorPage
                icon={<TechnicalProblems />}
                errorMessage={'Сторінка знаходиться в розробці.'}
                errorType={'Проводяться технічні роботи'}
              />
              {/*<Contacts />*/}
            </PageNotFoundLayout>
          }
        />
        <Route
          path={'*'}
          element={
            <PageNotFoundLayout>
              <ErrorPage
                icon={<SadEmoji />}
                errorMessage={'Сторінки, яку ви шукаєте, не існує.'}
                errorType={'Помилка 404'}
              />
            </PageNotFoundLayout>
          }
        />
      </Routes>
    </div>
  )
}

export default App
