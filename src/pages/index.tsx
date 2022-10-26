import type { NextPage } from 'next'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import VideoImg from '../assets/images/video.png'
import MidiaImg from '../assets/images/bannerMidia.png'
import { useEffect, useRef, useState } from 'react'
import CardProvider from '../components/CardProvider'
import CardMoney from '../components/CardMoney'
import Banner3Img from '../assets/images/banner3.png'
import PeopleImg from '../assets/images/people.png'
import AccordionComponent from '../components/AccordionComponent'
import GlobalImg from '../assets/images/globalimg.png'
import Footer from '../components/Footer'

const Home: NextPage = () => {
   const [navbar, setNavbar] = useState(false)
   const [isContainerOne, setIsContainerOne] = useState(false)
   const [isContainerDiff, setIsContainerDiff] = useState(false)
   const boxRef = useRef<HTMLDivElement | null>(null)
   const boxRefDiff = useRef<HTMLDivElement | null>(null)

   const changeBackground = () => {
      const posX = boxRef.current?.getBoundingClientRect().height
      if (posX !== undefined) {
         if (window.scrollY >= posX - 20) {
            setNavbar(true)
         } else {
            setNavbar(false)
         }
      }
   }

   const changeContainerDiff = async () => {
      const postHeight = boxRefDiff.current?.getBoundingClientRect().height
      if (postHeight !== undefined) {
         if (window.scrollY > postHeight - postHeight / 2) {
            setIsContainerDiff(true)
         }
      }
   }

   useEffect(() => {
      const EffectContainerOne = async () => {
         await new Promise((resolve) => setTimeout(resolve, 200))
         setIsContainerOne(true)
      }
      EffectContainerOne()
   }, [])

   useEffect(() => {
      window.addEventListener('scroll', changeBackground)
      window.addEventListener('scroll', changeContainerDiff)
   }, [])

   return (
      <>
         <NavBar onColor={navbar} />
         <div className="bg-[url(../../src/assets/images/banner1.png)] bg-no-repeat bg-center bg-cover max-w-[1600px] mx-auto">
            <div
               className={
                  'flex justify-start items-center w-full h-screen max-w-7xl mx-auto transition-all duration-500 ' +
                  (isContainerOne ? 'ml-0' : '-ml-[1500px]')
               }
            >
               <div className="flex flex-col px-4 md:items-start md:text-start items-center text-center md:w-1/2 gap-6">
                  <div ref={boxRef}>
                     <h1 className="text-xl md:text-5xl text-primary">
                        A plataforma completa para criar do zero a sua
                     </h1>
                     <h2 className="text-xl md:text-5xl text-[#DAB06F]">
                        Agência home office
                     </h2>
                  </div>
                  <span className="text-base md:text-lg text-[#555555] normal-case">
                     A solução completa para empreender no formato home office e
                     conseguir escala de faturamento com a liberdade de um
                     negócio online.
                  </span>
                  <button className="btn btn-primary w-40 text-base-100">
                     Criar agência
                  </button>
               </div>
            </div>
         </div>
         <div
            id="meet"
            className="flex py-14 flex-col text-center justify-center items-center bg-base-100"
         >
            <h1 className="text-4xl text-primary-content mb-2">
               Conheça o Viaja Flux
            </h1>
            <span className="text-[#808080]">
               Entenda melhor a solução completa que temos a oferecer!
            </span>
            <div className="w-full flex justify-center mx-auto mt-10 px-4">
               <Image
                  src={VideoImg}
                  quality={100}
                  width={950}
                  height={520}
                  alt="banner"
               />
            </div>
            <button className="btn btn-primary mt-10 text-base-100 normal-case w-64">
               Falar com um consultor
            </button>
         </div>

         <div ref={boxRefDiff} id="differential" className="bg-base-200">
            <div className="w-full flex flex-col md:flex-row justify-between p-4 max-w-7xl mx-auto px-4 py-10 md:py-28">
               <div
                  className={
                     'flex flex-col justify-center col-span-1 md:w-1/3 transition-all duration-500 ' +
                     (isContainerDiff ? 'ml-0' : '-ml-[1600px]')
                  }
               >
                  <h1 className="text-4xl text-primary">
                     Conheça nossos diferenciais
                  </h1>
                  <span className="text-primary-content text-xl">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nisl ut pharetra sit in sit fermentum. Facilisi cras enim,
                     massa lectus. Bibendum eget at cursus.
                  </span>
               </div>
               <div className="flex flex-col gap-6 items-center col-span-3 md:w-2/3">
                  <div
                     className={
                        'flex w-full justify-end md:mr-10 transition-all duration-500 ' +
                        (isContainerDiff ? 'ml-0' : '-ml-[3400px]')
                     }
                  >
                     <CardMoney />
                  </div>
                  <div
                     className={
                        'flex w-full justify-center md:ml-10 transition-all duration-500 ' +
                        (isContainerDiff ? 'ml-0' : 'mr-[3400px]')
                     }
                  >
                     <CardMoney position="left-0" />
                  </div>
                  <div
                     className={
                        'flex w-full justify-start md:justify-end md:ml-10 transition-all duration-500 ' +
                        (isContainerDiff ? 'ml-0' : 'mr-[3400px]')
                     }
                  >
                     <CardMoney position="right-0" />
                  </div>
               </div>
            </div>
            <div className="max-w-7xl mx-auto px-4">
               <div className="max-w-7xl mx-auto mt-10 px-4">
                  <Image src={MidiaImg} quality={100} alt="midia" />
               </div>
               <h1 className="text-2xl md:text-4xl text-center max-w-3xl mx-auto mt-24 text-primary">
                  Tenha acesso aos melhores fornecedores com taxas muito abaixo
                  do mercado!
               </h1>
               <div className="grid md:grid-cols-4 grid-cols-2 gap-3 text-primary py-10 md:py-20">
                  <CardProvider />
                  <CardProvider />
                  <CardProvider />
                  <CardProvider />
                  <CardProvider />
                  <CardProvider />
                  <CardProvider />
                  <CardProvider />
               </div>
            </div>
            <div className="bg-[url(../../src/assets/images/bannerdivider.png)] bg-no-repeat bg-auto bg-top">
               <div className="max-w-7xl mx-auto px-4 py-10 md:py-32">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                     <div className="flex flex-col items-center text-center md:text-start md:items-start gap-8">
                        <h1 className="text-4xl text-primary">
                           Explore novas maneiras de vender pela internet
                        </h1>
                        <span className="text-[#555555] text-xl">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Nisl ut pharetra sit in sit fermentum. Facilisi
                           cras enim, massa lectus. Bibendum eget at cursus.
                        </span>
                        <ul>
                           <li>Lorem ipsum dolor sit amet, ds</li>
                           <li>Lorem ipsum dolor sit amet, ds</li>
                           <li>Lorem ipsum dolor sit amet, ds</li>
                           <li>Lorem ipsum dolor sit amet, ds</li>
                        </ul>
                        <button className="btn btn-primary max-w-md text-base-100">
                           Criar agência
                        </button>
                     </div>
                     <div className="w-full mt-10 md:mt-0">
                        <Image src={Banner3Img} alt="banner img" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="w-full bg-primary">
            <div className="flex flex-col md:flex-row max-w-7xl w-full mx-auto justify-between">
               <div className="flex flex-col md:w-1/2 items-center md:items-start text-center mt-10 md:mt-0 md:text-start px-4 justify-center gap-7">
                  <h1 className="text-[#DAB06F] text-4xl">
                     Ganhe dinheiro vendendo suas milhas com segurança
                  </h1>
                  <span className="text-white text-2xl">
                     Nós intermediamos a negociação de suas milhas com
                     segurança, rapidez e tranquilidade em todo processo.
                  </span>
                  <button className="btn btn-primary bg-[#DAB06F] text-primary">
                     Anunciar milhas
                  </button>
               </div>
               <div className="md:w-[30%] w-1/2 mx-auto md:mx-0">
                  <Image src={PeopleImg} quality={100} alt="people image" />
               </div>
            </div>
         </div>
         <div className="w-full bg-base-100">
            <div className="max-w-7xl px-4 mx-auto flex flex-col py-16">
               <h1 className="text-4xl">Dúvidas frequentes</h1>
               <AccordionComponent />
               <div className="w-full relative">
                  <Image
                     src={GlobalImg}
                     alt="globo img"
                     className="rounded-xl"
                  />
                  <div className="absolute top-0 md:top-10 md:left-4 md:ml-4">
                     <div className="flex h-full md:max-w-md rounded-xl items-center text-primary text-xs p-4 md:text-xl justify-center bg-base-100/60">
                        <span>
                           Participe do ecossistema que te conecta com as
                           melhores oportunidades do mercado!
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Home
