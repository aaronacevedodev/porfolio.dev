import { render } from "@react-email/render";
import SampleEmail from "../emails/SampleEmail";
import React, { useState, useRef  } from "react";
import Send from '../icons/Send.astro'

const FormularioEmail = () => {
    const [isFormSubmitted, setFormSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const { asuntoText, email, mensajeText } = Object.fromEntries(formData);
  
      const finalHtml = render(
        <SampleEmail
          asuntoCorreo={asuntoText as string}
          mensaje={mensajeText as string}
          correo={email as string}
        />,
        {
          pretty: true,
        }
      );
  
      const finalText = render(
        <SampleEmail
          asuntoCorreo={asuntoText as string}
          mensaje={mensajeText as string}
          correo={email as string}
        />,
        {
          plainText: true,
        }
      );
  
      try {
        const response = await fetch("/api/sendEmail.json", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev',
            to: 'aaronacevedo94@gmail.com',
            subject: `${asuntoText}`,
            html: finalHtml,
            text: finalText,
          }),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
  
        // Establecer el estado de envío exitoso
        setFormSubmitted(true);
  
        // Reiniciar el formulario después de 2 segundos (puedes ajustar el tiempo)
        setTimeout(() => {
          setFormSubmitted(false);
          // Acceder al formulario a través de la referencia y restablecerlo
          if (formRef.current) {
            formRef.current.reset();
          }
        }, 2000);
      } catch (e) {
        console.error(e);
      }
    };

    return (
        <section>

            <h3 className="text-2xl font-semibold text-yellow-200 mb-2">¡Escríbeme!</h3>
            <p className="mb-8 lg:mb-12 font-light text-lg text-white/80">
                Estoy aquí para colaborar y resolver cualquier duda.
            </p>

            <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-8 flex flex-col items-start"
            >
                
                <div className="w-full">
                    <label 
                        className="block mb-2 text-sm font-medium text-sky-200/80"
                    >
                        Correo electrónico
                    </label>

                    <input 
                        type="email" 
                        name="email" 
                        placeholder="tucorreo@gmail.com"
                        className="shadow-sm text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white/10 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                        required
                    />
                </div>

                <div className="w-full">
                    <label 
                        className="block mb-2 text-sm font-medium text-sky-200/80"
                    >
                        Asunto
                    </label>

                    <input 
                        type="text" 
                        name="asuntoText" 
                        placeholder="Dime en qué puedo ayudarte."
                        className="shadow-sm text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white/10 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                        required
                    />
                </div>

                <div className="w-full">
                    <label 
                        className="block mb-2 text-sm font-medium text-sky-200/80"
                    >
                        Mensaje
                    </label>

                    <textarea 
                        name="mensajeText"
                        className="block p-2.5 w-full text-sm   rounded-lg shadow-sm  focus:ring-primary-500 focus:border-primary-500 bg-white/10 border-gray-600 placeholder-gray-400 text-white/80 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Si deseas, cuéntame más detalles sobre el tema."
                        rows={4}
                    >
                    </textarea>
                </div>

                {/* Mensaje de alerta */}
                {isFormSubmitted && (
                    <div className="text-green-500 mb-4">
                    ¡El formulario se ha enviado correctamente!
                    </div>
                )}

                <button 
                    type="submit"
                    className="
                        bg-white/5
                        border dark:border-white/10 border-gray-300
                        rounded-full
                        inline-flex justify-center items-center gap-x-2
                        py-1 px-2 md:py-2 md:px-4
                        text-xs md:text-base
                        transition
                        hover:scale-110 hover:bg-white/10
                    "
                >
                    <svg 
                        width="24" height="24" 
                        viewBox="0 0 24 24" 
                        stroke-width="2" 
                        stroke="currentColor" 
                        fill="none" 
                        stroke-linecap="round" 
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 14l11 -11" />
                        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                    </svg>
                    <input type="submit" value="Enviar" />
                </button>
                
            </form>
        </section>
    )
    
    
};
export default FormularioEmail;