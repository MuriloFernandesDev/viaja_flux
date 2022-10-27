import LogoImg from '../../assets/images/logo.png'
import Image from 'next/image'
import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Link from 'next/link'

const NavBar = ({ onColor }: { onColor: boolean }) => {
   const [openDrawer, setOpenDrawer] = useState(false)

   const toggleDrawer = () => {
      setOpenDrawer((prevState) => !prevState)
   }
   return (
      <>
         <div
            className={
               'navbar p-0 fixed w-full text-primary z-50 transition-all duration-200 ' +
               (!onColor ? 'bg-transparent' : 'bg-base-100 shadow')
            }
         >
            <div className="w-full max-w-7xl mx-auto px-4">
               <div className="navbar-start">
                  <Image
                     src={LogoImg}
                     width={150}
                     height={65}
                     alt="logo"
                     className="cursor-pointer"
                  />
               </div>
               <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal p-0">
                     <li>
                        <a href="#meet">Como funciona</a>
                     </li>
                     <li>
                        <a href="#differential">Diferenciais</a>
                     </li>

                     <li>
                        <a>Contato</a>
                     </li>
                     <li>
                        <a>Vender milhas</a>
                     </li>
                     <li>
                        <a>Blog</a>
                     </li>
                  </ul>
               </div>
               <div className="navbar-end flex gap-3">
                  <Link href="https://e62c-45-227-251-74.sa.ngrok.io/login">
                     <button className="btn btn-primary normal-case bg-transparent text-primary hidden md:inline-flex">
                        Entrar
                     </button>
                  </Link>
                  <button className="btn btn-primary normal-case text-base-100 hidden md:inline-flex">
                     Criar agência
                  </button>
                  <button className="block md:hidden" onClick={toggleDrawer}>
                     <svg
                        className={
                           'swap-off fill-current ' +
                           (!onColor ? 'text-white' : 'text-primary')
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512"
                     >
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                     </svg>
                  </button>
               </div>
            </div>
         </div>

         <Drawer
            open={openDrawer}
            onClose={toggleDrawer}
            direction="right"
            duration={400}
            className="w-2/3"
         >
            <ul className="menu w-full px-4">
               <li>
                  <a>Como funciona</a>
               </li>
               <li>
                  <a>Diferenciais</a>
               </li>

               <li>
                  <a>Contato</a>
               </li>
               <li>
                  <a>Vender milhas</a>
               </li>
               <li>
                  <a>Blog</a>
               </li>
               <button className="btn btn-primary normal-case bg-transparent text-primary">
                  Entrar
               </button>
               <button className="btn btn-primary normal-case text-base-100">
                  Criar agência
               </button>
            </ul>
         </Drawer>
      </>
   )
}

export default NavBar
