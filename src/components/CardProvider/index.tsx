import Image from 'next/image'
import ReservaImg from '../../assets/images/reserva.png'

const CardProvider = () => {
   return (
      <div className="w-full h-auto flex flex-col gap-3 card shadow-lg items-center p-5">
         <Image
            src={ReservaImg}
            width={150}
            height={33}
            alt="reserva image"
         ></Image>
         <p>Consolidadora</p>
      </div>
   )
}

export default CardProvider
