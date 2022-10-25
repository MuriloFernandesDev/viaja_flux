import LogoImg from '../../assets/images/logo.png'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = ({ onColor }: { onColor: boolean }) => {
   return (
      <>
         <div
            className={
               'navbar p-0 fixed w-full text-primary z-50 transition-all duration-200 ' +
               (!onColor ? 'bg-transparent' : 'bg-base-100 shadow')
            }
         >
            <div className="w-full max-w-7xl mx-auto">
               <div className="navbar-start">
                  <Link href={'/'} passHref>
                     <Image
                        src={LogoImg}
                        width={150}
                        height={65}
                        layout="fixed"
                        className="cursor-pointer"
                     />
                  </Link>
               </div>
               <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal p-0">
                     <li>
                        <Link href={'/business'} passHref>
                           <a>Como funciona</a>
                        </Link>
                     </li>
                     <li>
                        <Link href={'/products'} passHref>
                           <a>Diferenciais</a>
                        </Link>
                     </li>

                     <li>
                        <Link href={'/services'} passHref>
                           <a>Contato</a>
                        </Link>
                     </li>
                     <li>
                        <Link href={'/treatment'} passHref>
                           <a>Vender milhas</a>
                        </Link>
                     </li>
                     <li>
                        <Link href={'/work-with-us'} passHref>
                           <a>Blog</a>
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="navbar-end flex gap-3">
                  <button className="btn btn-primary normal-case bg-transparent text-primary">
                     Entrar
                  </button>
                  <button className="btn btn-primary normal-case text-base-100">
                     Criar agência
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

export default NavBar
