'use client'

import Banner from "./Banner"
import Section2 from "./Section2";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Stories from "./Stories";
import Contact from "./Contact";
import Dublicate from "./Dublicate";
import Dublicate2 from "./Dublicate2";
// import Testing from "./Testing";
// import Loader from "../Loader"
const HomePage = () => {
  // const { data, loading } = useFetch("home_content")

  // if (loading) return <Loader/>;
  return (
    <>
      <Banner  />
      <Section3/>
      <Dublicate/>
      <Section4/>
      <Dublicate2/>
      <Section1/>
      <Section2/>
      <Stories/>
      <Contact/>
      {/* <Testing/> */}
    </>
  )
}

export default HomePage;