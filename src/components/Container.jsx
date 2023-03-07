import { useState } from "react";
import Faq from "./Faq";
import  './styles.css'


export default function Container() {
  

    const contentFaqs=[{pregunta:'¿Cuáles son los tiempos de envío?',respuesta:'Para todos los pedidos locales, los tiempos de envío son de 2 a 3 días laborables desde que realizas tu pedido. Para los pedidos nacionales, los tiempos de envío son de 4 a 5 días laborables desde que realizas tu pedido. Para los pedidos internacionales, los tiempos de envío son de 5-7 días laborables, pero dependiendo de tu país podrás elegir los envíos exprés en los últimos pasos al finalizar tu pedido.'},{pregunta:'¿Cuánto cuestan los gastos de envío?',respuesta:'Los gastos de envío son de $97.00 mxn, para pedidos nacionales y son gratuitos a partir de $2,500.00 mxn. Estos gastos de envío te incluyen los cambios tanto de talla como de modelo. Para envíos internacionales los gastos de envío son de $12.00 doláres. '},{pregunta:'¿Qué formas de pago se aceptan?',respuesta:'Actualmente aceptamos como modos de pago: Visa, Mastercard, Paypal, Amazon Pay, y Bizum. También puedes pagar con Apple Pay, siempre que accedas desde el navegador de Safari.'}, {pregunta:'¿Cómo aplicar un código promocional o tarjeta de regalo?',respuesta:'Si tienes un código de descuento, podrás utilizarlo al finalizar el pedido (antes de terminar el pago). Te saldrá un desplegable con el resumen del pedido donde encontrarás un apartado para poner el código de descuento, siempre tendrás que marcar el botón “usar” para que se aplique correctamente.'}]

  const [active, setActive] = useState([]);
  const arrStates = [false, false, false, false];

  const setStates = (idActive) => { 
     for (let i = 0; i < arrStates.length; i++) {
      if (i === parseInt(idActive)) {
        arrStates[i]=!active[i]
      }
     else arrStates[i]=false
  } 
setActive(arrStates)
}
  return (
    <div className='container'>    
        <h2>FAQs &#128490;</h2>
      <Faq id='0' state={active[0]} faqActive={setStates} faqs={contentFaqs}></Faq>
      <Faq id='1' state={active[1]} faqActive={setStates} faqs={contentFaqs}></Faq>
      <Faq id='2' state={active[2]} faqActive={setStates} faqs={contentFaqs}></Faq>
      <Faq id='3' state={active[3]} faqActive={setStates} faqs={contentFaqs}></Faq>
    </div>
  )
}