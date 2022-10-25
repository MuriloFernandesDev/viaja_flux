import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import VideoImg from '../assets/images/video.png'
import MidiaImg from '../assets/images/bannerMidia.png'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Home: NextPage = () => {
   const [navbar, setNavbar] = useState(false)
   const boxRef = useRef<HTMLDivElement | null>(null)

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

   useEffect(() => {
      window.addEventListener('scroll', changeBackground)
   }, [])

   return (
      <>
         <NavBar onColor={navbar} />
         <div className="bg-[url(../../src/assets/images/banner1.png)] bg-no-repeat bg-center bg-cover max-w-[1600px] mx-auto">
            <div className="flex justify-start items-center w-full h-screen max-w-7xl mx-auto">
               <div className="flex flex-col w-1/2 gap-6">
                  <div ref={boxRef}>
                     <h1 className="text-5xl text-primary">
                        A plataforma completa para criar do zero a sua
                     </h1>
                     <h2 className="text-[#DAB06F] text-5xl">
                        Agência home office
                     </h2>
                  </div>
                  <span className="text-lg text-[#555555] normal-case">
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
         <div className="flex py-14 flex-col text-center justify-center items-center bg-base-100">
            <h1 className="text-5xl text-primary-content mb-2">
               Conheça o Viaja Flux
            </h1>
            <span className="text-[#808080]">
               Entenda melhor a solução completa que temos a oferecer!
            </span>
            <div className="max-w-5xl mx-auto mt-10">
               <Image src={VideoImg} quality={100} layout="fixed" />
            </div>
            <button className="btn btn-primary mt-10 text-base-100 normal-case w-64">
               Falar com um consultor
            </button>
         </div>

         <div className="bg-base-200">
            <div className="w-full flex justify-between p-4 max-w-7xl mx-auto px-4 py-28">
               <div className="flex flex-col justify-center col-span-1 w-1/3">
                  <h1 className="text-5xl text-primary">
                     Conheça nossos diferenciais
                  </h1>
                  <span className="text-primary-content text-xl">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nisl ut pharetra sit in sit fermentum. Facilisi cras enim,
                     massa lectus. Bibendum eget at cursus.
                  </span>
               </div>
               <div className="flex flex-col gap-6 items-center col-span-3  w-2/3">
                  <div className="flex w-full justify-end mr-10">
                     <div className="card bg-base-100 shadow-lg max-w-lg">
                        <div className="card-body flex-row items-center">
                           <div className="flex w-20 h-20 items-center justify-center text-primary bg-[#DAB06F] rounded-2xl">
                              <FontAwesomeIcon
                                 icon={faDollarSign}
                                 className="w-16 h-16"
                              />
                           </div>
                           <span className="text-2xl">
                              Lorem ipsum dolor sit amet, consectetur Lorem
                              ipsum dolor sit{' '}
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="flex w-full justify-center ml-10">
                     <div className="card bg-base-100 shadow-lg max-w-lg left-0">
                        <div className="card-body flex-row items-center">
                           <div className="flex w-20 h-20 items-center justify-center text-primary bg-[#DAB06F] rounded-2xl">
                              <FontAwesomeIcon
                                 icon={faDollarSign}
                                 className="w-16 h-16"
                              />
                           </div>
                           <span className="text-2xl">
                              Lorem ipsum dolor sit amet, consectetur Lorem
                              ipsum dolor sit{' '}
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="flex w-full justify-end ml-10">
                     <div className="card bg-base-100 shadow-lg max-w-lg right-0">
                        <div className="card-body flex-row items-center">
                           <div className="flex w-20 h-20 items-center justify-center text-primary bg-[#DAB06F] rounded-2xl">
                              <FontAwesomeIcon
                                 icon={faDollarSign}
                                 className="w-16 h-16"
                              />
                           </div>
                           <span className="text-2xl">
                              Lorem ipsum dolor sit amet, consectetur Lorem
                              ipsum dolor sit{' '}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="max-w-7xl mx-auto">
               <div className="max-w-7xl mx-auto mt-10">
                  <Image src={MidiaImg} quality={100} layout="responsive" />
               </div>
               <h1 className="text-4xl text-center max-w-3xl mx-auto mt-24 text-primary">
                  Tenha acesso aos melhores fornecedores com taxas muito abaixo
                  do mercado!
               </h1>
               <div className="grid grid-cols-4"></div>
            </div>
         </div>
      </>
   )
}

export default Home
