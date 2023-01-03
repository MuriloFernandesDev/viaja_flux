import type { NextPage } from 'next'
import Image from 'next/image'
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
import dynamic from 'next/dynamic'
import {
   faBullhorn,
   faDollar,
   faGraduationCap,
   faPlaneDeparture,
   faWallet,
} from '@fortawesome/free-solid-svg-icons'
const NavBar = dynamic(() => import('../components/NavBar'), { ssr: false })

const Home: NextPage = () => {
   const [navbar, setNavbar] = useState(false)
   const [isContainerOne, setIsContainerOne] = useState(false)
   const [isContainerDiff, setIsContainerDiff] = useState(false)
   const [isContainerFornec, SetIsContainerFornec] = useState(false)
   const boxRef = useRef<HTMLDivElement | null>(null)
   const boxRefDiff = useRef<HTMLDivElement | null>(null)
   const boxRefFornec = useRef<HTMLDivElement | null>(null)

   const changeBackground = () => {
      const posX = boxRef.current?.offsetTop
      if (posX !== undefined) {
         if (window.scrollY >= posX - 100) {
            setNavbar(true)
         } else {
            setNavbar(false)
         }
      }
   }

   const changeContainerDiff = async () => {
      const postHeight = boxRefDiff.current?.offsetTop
      if (postHeight !== undefined) {
         if (window.scrollY >= postHeight - 100) {
            setIsContainerDiff(true)
         }
      }
   }

   const changeContainerFornec = async () => {
      const postHeight = boxRefFornec.current?.offsetTop
      if (postHeight !== undefined) {
         if (window.scrollY >= postHeight + 100) {
            SetIsContainerFornec(true)
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
      window.addEventListener('scroll', changeContainerFornec)
   }, [])

   return (
      <>
         <NavBar onColor={navbar} />
         <div className="bg-[url(../../src/assets/images/banner1.png)] bg-no-repeat bg-center bg-cover md:max-w-[1600px] mx-auto">
            <div
               className={
                  'flex items-center md:h-screen justify-between p-4 max-w-7xl mx-auto px-4 py-24 md:py-28 '
               }
            >
               <div ref={boxRef} className="flex flex-col gap-12 max-w-xl">
                  <div>
                     <h1
                        className={
                           'font-semibold text-primary transition-all duration-300 title ' +
                           (isContainerOne ? 'ml-0' : '-ml-[1500px]')
                        }
                     >
                        A plataforma para escalar suas vendas e{' '}
                        <span className="text-[#DAB06F]">
                           aumentar seus lucros.
                        </span>
                     </h1>
                     {/* <p
                        className={
                           'text-[#DAB06F] transition-all duration-500 subtitle ' +
                           (isContainerOne ? 'ml-0' : '-ml-[1500px]')
                        }
                     >
                        no seu negócio digital no ramo do turismo.
                     </p> */}
                  </div>

                  <p
                     className={
                        'text-base md:text-xl text-[#555555] normal-case transition-all duration-700 max-w-3xl ' +
                        (isContainerOne ? 'ml-0' : '-ml-[1500px]')
                     }
                  >
                     A única com modelo de programa de fidelidade próprio que
                     você lucra sem vender passagens e pacotes.
                  </p>
                  <button
                     className={
                        'btn btn-primary btn-lg w-fit normal-case text-base-100 transition-all duration-1000 ' +
                        (isContainerOne ? 'ml-0' : '-ml-[1500px]')
                     }
                  >
                     Criar agência
                  </button>
               </div>
            </div>
         </div>
         <div
            id="como-funciona"
            className="flex py-14 flex-col text-center justify-center items-center bg-base-100"
         >
            <h1 className="text-4xl text-primary font-semibold mb-2">
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

         <div ref={boxRefDiff} id="diferencial" className="bg-base-200">
            <div className="w-full flex flex-col gap-20 max-w-7xl mx-auto px-4 py-10 md:py-20">
               <div className="flex justify-center max-w-xl text-center mx-auto gap-4 w-full">
                  <h3 className="text-4xl text-primary font-semibold">
                     Os melhores preços e acordos comerciais do Brasil
                  </h3>
               </div>
               <div
                  className={
                     'grid lg:grid-cols-5 gap-6 transition-all duration-500 ' +
                     (!isContainerDiff ? 'opacity-0' : 'opacity-100')
                  }
               >
                  <div className={'flex w-full'}>
                     <CardMoney
                        title="Passagens em Milhas."
                        icon={faPlaneDeparture}
                     />
                  </div>
                  <div className={'flex w-full'}>
                     <CardMoney
                        title="Programa de Fidelidade Próprio."
                        icon={faWallet}
                     />
                  </div>
                  <div className={'flex w-full'}>
                     <CardMoney
                        title="Maior margem de lucro."
                        icon={faDollar}
                     />
                  </div>
                  <div className={'flex w-full'}>
                     <CardMoney
                        title="Marketing Digital para Agências."
                        icon={faBullhorn}
                     />
                  </div>
                  <div className={'flex w-full'}>
                     <CardMoney
                        title="Formação em Turismo, Milhas e Vendas."
                        icon={faGraduationCap}
                     />
                  </div>
               </div>
            </div>
            <div className="max-w-7xl mx-auto px-4">
               <div ref={boxRefFornec} className="max-w-7xl mx-auto mt-10 px-4">
                  <a href="https://viajamilhas.com.br" target={'_blank'}>
                     <Image src={MidiaImg} quality={100} alt="midia" />
                  </a>
               </div>
               <h1 className="text-2xl md:text-4xl text-center max-w-3xl mx-auto font-semibold mt-24 text-primary">
                  Tenha acesso aos melhores fornecedores com taxas muito abaixo
                  do mercado!
               </h1>
               <div
                  className={
                     'grid md:grid-cols-4 grid-cols-2 gap-3 text-primary py-10 md:py-20 transition-all duration-500 ' +
                     (isContainerFornec ? 'opacity-100' : 'opacity-0')
                  }
               >
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
            {/* <div className="bg-[url(../../src/assets/images/bannerdivider.png)] bg-no-repeat bg-auto bg-top">
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
            </div> */}
         </div>
         <div className="w-full bg-primary" id="vender-milhas">
            <div className="flex flex-col md:flex-row max-w-7xl w-full mx-auto justify-between">
               <div className="flex flex-col md:w-1/2 items-center md:items-start text-center mt-10 md:mt-0 md:text-start px-4 justify-center gap-7">
                  <h1 className="text-[#DAB06F] text-4xl font-semibold">
                     Ganhe dinheiro vendendo suas milhas com segurança
                  </h1>
                  <span className="text-white text-2xl">
                     Temos um grupo exclusivo para os membros negociarem suas
                     milhas com rapidez e tranquilidade.
                  </span>
                  <button className="btn btn-primary normal-case bg-[#DAB06F] text-primary">
                     Me cadastrar
                  </button>
               </div>
               <div className="md:w-[30%] w-1/2 mx-auto md:mx-0">
                  <Image src={PeopleImg} quality={100} alt="people image" />
               </div>
            </div>
         </div>
         <div className="w-full bg-base-100">
            <div className="max-w-7xl px-4 mx-auto flex flex-col py-16">
               {/* <h1 className="text-4xl">Dúvidas frequentes</h1>
               <AccordionComponent /> */}
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
