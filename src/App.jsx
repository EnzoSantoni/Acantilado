import { Route, Routes } from 'react-router'
import './App.css'
import MainLayout from './layout/MainLayout'
import NovelPage from './page/NovelPage'


function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<NovelPage />}/>
          <Route path='/capitulo/:numero' element={<NovelPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

