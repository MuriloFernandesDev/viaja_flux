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
      <div className="bg-base-200">
         <footer className="footer p-10 max-w-7xl mx-auto text-base-content">
            <div>
               <Image
                  src={LogoImg}
                  width={150}
                  height={65}
                  alt="logo"
                  className="cursor-pointer"
               />
            </div>
            <div className="flex flex-col h-full justify-between gap-5">
               <ul className="flex w-full flex-wrap gap-10 text-primary text-base">
                  <li>Como funciona</li>
                  <li>Diferenciais</li>
                  <li>Contato</li>
                  <li>Vender milhas</li>
                  <li>Blogs</li>
               </ul>
               <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1">
                     <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                     (18) 9 9699-9999
                  </div>
                  <div className="flex items-center gap-1">
                     <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                     (18) 9 9699-9999
                  </div>
               </div>
            </div>

            <div className="flex flex-col justify-between h-full">
               <div>
                  <h1 className="text-base">Nossas redes</h1>
                  <div className="flex gap-2">
                     <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                     <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                     <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />
                     <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                  </div>
               </div>
               <p>® 2022 - Viaja Flux | Todos os direitos reservados</p>
            </div>
         </footer>
      </div>
   )
}

export default Footer
