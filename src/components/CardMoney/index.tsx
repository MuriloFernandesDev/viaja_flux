import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardMoney = ({ position }: { position?: string }) => {
   return (
      <div className={'card bg-base-100 shadow-lg max-w-lg ' + position}>
         <div className="card-body flex-row items-center">
            <div className="flex w-20 h-20 items-center justify-center text-primary bg-[#DAB06F] rounded-2xl">
               <FontAwesomeIcon icon={faDollarSign} className="w-16 h-16" />
            </div>
            <span className="text-2xl">
               Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit{' '}
            </span>
         </div>
      </div>
   )
}

export default CardMoney
