import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardMoney = ({
   position,
   title,
   icon,
}: {
   position?: string
   title: string
   icon: IconProp
}) => {
   return (
      <div
         className={
            'card bg-base-100 border transition-all duration-300 hover:scale-105 ' +
            position
         }
      >
         <div className="card-body flex-col text-center gap-6 items-center">
            <FontAwesomeIcon icon={icon} className="w-16 h-16" />

            <div className="flex flex-col">
               <span className="text-2xl ">{title}</span>
            </div>
         </div>
      </div>
   )
}

export default CardMoney
