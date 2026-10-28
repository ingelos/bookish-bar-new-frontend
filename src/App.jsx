import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Navigation from './components/navigation/Navigation.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './pages/home/Home.jsx'
import SubjectOverview from './pages/subjectOverview/SubjectOverview.jsx'
import Subject from './pages/subject/Subject.jsx'
import SearchPage from './pages/searchPage/SearchPage.jsx'
import BookDetails from './pages/bookDetails/BookDetails.jsx'
import AuthorDetails from './pages/authorDetails/AuthorDetails.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/subjects" element={<SubjectOverview/>}/>
          <Route path="/subjects/:subject" element={<Subject/>}/>
          <Route path="/books/:bookId" element={<BookDetails/>}/>
          <Route path="/authors/:authorId" element={<AuthorDetails/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
