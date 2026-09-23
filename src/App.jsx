import { Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout'
import NovelPage from './pages/NovelPage'


function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<NovelPage />}/>
          <Route path='/capitulo/:numero' element={<NovelPage />}/>
          <Route path='*' element={<NovelPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

