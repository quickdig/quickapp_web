
"use client"
import Footer from '@/components/Footer'
import React from 'react'
import Header from '@/components/Header'
import useFetch from '@/customHooks/useFetch'
import Loader from '@/components/Loader'

const Main = ({ children }) => {
  const { data, loading } = useFetch("service-categories")

  // if (loading) return <Loader />;
  return (
    <>

      <Header />
      <main className="indexPag">{children}</main>
      <Footer />
    </>
  )
}

export default Main