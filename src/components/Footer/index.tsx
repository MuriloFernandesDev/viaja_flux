import LogoImg from '../../assets/images/logo.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import {
   faInstagram,
   faFacebook,
   faYoutube,
   faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
   return (
      <div className="bg-base-200 ">
         <footer className="footer py-10 max-w-7xl flex justify-between w-full mx-auto text-base-content px-4">
            {/* <div className="w-fit">
               <Image
                  src={LogoImg}
                  width={200}
                  height={65}
                  alt="logo"
                  className="cursor-pointer"
               />
            </div> */}
            <div className="flex flex-col h-full justify-between gap-5 w-full">
               <ul className="flex w-full flex-wrap gap-10 text-primary text-base">
                  <li>
                     <a className="active:text-warning" href="#como-funciona">
                        Como funciona
                     </a>
                  </li>
                  <li>
                     <a className="active:text-warning" href="#diferencial">
                        Diferenciais
                     </a>
                  </li>
                  <li>
                     <a className="active:text-warning" href="#vender-milhas">
                        Vender milhas
                     </a>
                  </li>
                  <li>
                     <a
                        className="active:text-warning"
                        target={'_blank'}
                        href="https://viajamilhas.com.br"
                     >
                        Blog
                     </a>
                  </li>
                  {/* <li>
                     <a className="active:text-warning">Contato</a>
                  </li> */}
               </ul>
               <div className="flex flex-col gap-3 justify-end">
                  {/* <div className="flex items-center gap-1">
                     <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                     (18) 9 9699-9999
                  </div> */}
                  <p>
                     {new Date().getFullYear()} - ViajaFlux® | Todos os direitos
                     reservados
                  </p>
               </div>
            </div>

            <div className="flex flex-col items-end h-full w-full">
               <div className="flex flex-col gap-3 items-end">
                  <h1 className="text-base">Onde nos encontrar:</h1>
                  <div className="flex gap-2">
                     <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                     <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                     <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
                     <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                     <a
                        className="flex items-center gap-1"
                        href="mailto:contato@viajaflux.com.br"
                     >
                        <FontAwesomeIcon
                           icon={faEnvelope}
                           className="w-6 h-6"
                        />
                     </a>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   )
}

export default Footer
