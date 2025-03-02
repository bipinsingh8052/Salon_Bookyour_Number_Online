import React from 'react'
import Tonavbar from './components/Tonavbar'
import Tofooter from './components/Tofooter'
import {Outlet} from 'react-router-dom'
import Caulsor from './pages/Caulsor'
export default function Layout() {
  return (
    <>
      <Tonavbar/>
      <main >
        <Outlet/>
      </main>
      <Tofooter/>
    </>
  )
}
