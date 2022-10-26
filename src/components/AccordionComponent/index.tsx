import {
   Accordion,
   AccordionItem,
   AccordionItemHeading,
   AccordionItemButton,
   AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

const AccordionComponent = () => {
   return (
      <Accordion className="bg-base-100 my-20" allowZeroExpanded={true}>
         <AccordionItem>
            <AccordionItemHeading>
               <AccordionItemButton>
                  Quanto tempo demora para vender minhas milhas ?
               </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
               <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
               </p>
            </AccordionItemPanel>
         </AccordionItem>
         <AccordionItem>
            <AccordionItemHeading>
               <AccordionItemButton>
                  A Viaja Flux compra as minhas milhas ?
               </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
               <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
               </p>
            </AccordionItemPanel>
         </AccordionItem>
         <AccordionItem>
            <AccordionItemHeading>
               <AccordionItemButton>
                  Quais programas de fidelidade posso vender no Viaja Milhas?
               </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
               <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
               </p>
            </AccordionItemPanel>
         </AccordionItem>
         <AccordionItem>
            <AccordionItemHeading>
               <AccordionItemButton>
                  Quanto tempo demora para vender minhas milhas?
               </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
               <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
               </p>
            </AccordionItemPanel>
         </AccordionItem>
      </Accordion>
   )
}

export default AccordionComponent
