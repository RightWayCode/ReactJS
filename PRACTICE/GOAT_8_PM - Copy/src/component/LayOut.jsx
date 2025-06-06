import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router'

export const LayOut = () => {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}
