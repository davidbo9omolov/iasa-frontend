import { ReactRoutes, LinkRoutes } from '@/constants/constants'

import { Routes, Route, Navigate } from 'react-router-dom'
import { CommonLayout } from '../layouts/commonLayout.tsx'
import { BurgerMenuProvider } from 'components/burgerMenu/BurgerMenuProvider.tsx'
import { PageNotFoundLayout } from '../layouts/errorPageLayout.tsx'

import HomePage from 'pages/HomePage.tsx'
import ContactsPage from 'pages/ContactsPage.tsx'
import ErrorPage from 'pages/ErrorPage.tsx'
import SadEmoji from '@/assets/sadEmoji.tsx'

import './App.css'
import TechnicalProblems from '@/assets/technicalProblems.tsx'
import { useTranslation } from 'react-i18next'
import Header from 'components/header/Header.tsx'
import { Suspense } from 'react'
import Spinner from 'components/loader/Spinner.tsx'
import AboutUs from './pages/AboutUs.tsx'
import ScrollToTop from './components/scroll-to-top/ScrollToTop.tsx'

function App() {
  const { i18n } = useTranslation()
  return (
    <div className={'min-h-screen relative'}>
      <BurgerMenuProvider>
        <Header />
        <ScrollToTop />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Navigate to={`/${i18n.language}${LinkRoutes.Home}`} />} />
            <Route
              path={ReactRoutes.Home}
              element={
                <CommonLayout>
                  <HomePage />
                </CommonLayout>
              }
            />
            <Route
              path={ReactRoutes.Applicant}
              element={
                <PageNotFoundLayout>
                  <ErrorPage icon={<TechnicalProblems />} errorCode={'500'} />
                  {/*<Applicant />*/}
                </PageNotFoundLayout>
              }
            />
            <Route
              path={ReactRoutes.ForStudent}
              element={
                <PageNotFoundLayout>
                  <ErrorPage icon={<TechnicalProblems />} errorCode={'500'} />
                  {/*<ForStudents />*/}
                </PageNotFoundLayout>
              }
            />
            <Route
              path={ReactRoutes.Contacts}
              element={
                <CommonLayout>
                  <ContactsPage />
                </CommonLayout>
              }
            />
            <Route
              path={ReactRoutes.AboutUs}
              element={
                <CommonLayout>
                  <AboutUs />
                </CommonLayout>
              }
            />
            <Route
              path={ReactRoutes.Entry}
              element={
                <PageNotFoundLayout>
                  <ErrorPage icon={<TechnicalProblems />} errorCode={'500'} />
                  {/*<ContactsPage />*/}
                </PageNotFoundLayout>
              }
            />
            <Route
              path={ReactRoutes.Activities}
              element={
                <PageNotFoundLayout>
                  <ErrorPage icon={<TechnicalProblems />} errorCode={'500'} />
                  {/*<ContactsPage />*/}
                </PageNotFoundLayout>
              }
            />
            <Route
              path={ReactRoutes.Resources}
              element={
                <PageNotFoundLayout>
                  <ErrorPage icon={<TechnicalProblems />} errorCode={'500'} />
                  {/*<ContactsPage />*/}
                </PageNotFoundLayout>
              }
            />

            <Route
              path={'*'}
              element={
                <PageNotFoundLayout>
                  <ErrorPage icon={<SadEmoji />} errorCode={'404'} />
                </PageNotFoundLayout>
              }
            />
          </Routes>
        </Suspense>
      </BurgerMenuProvider>
    </div>
  )
}

export default App
