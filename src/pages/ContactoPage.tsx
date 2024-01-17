
const ContactoPage = () => {
  return (
    <>
      <div className="text-center mt-8  p-6 font-bold bg-blue-900 text-white">
        <p className="text-2xl">Contactanos</p>
        <p>Obtene mas información acerca de nuestros productos</p>
      </div>

      <section className="p-10">

        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-14">

          <div className="md:w-1/2">
            <img className="shadow-2xl rounded-lg filter " src="./women2.webp" alt="women" />
          </div>

          <div className="md:w-1/2 w-full flex justify-center flex-col items-center">
            <form className="w-full shadow-xl p-12 rounded-xl">
              <div className="p-4 flex flex-col">
                <label htmlFor="nombre" className="text-lg font-extrabold uppercase">Nombre:</label>
                <input type="text" name="nombre" id="nombre" className="p-3 w-full rounded border-2" placeholder="ej. John Doe" />
              </div>

              <div className="p-4 flex flex-col">
                <label htmlFor="email" className="text-lg font-extrabold uppercase">Email:</label>
                <input type="text" name="email" id="email" className="p-3 w-full rounded border-2" placeholder="ej. ejemplo@ejemplo.com" />
              </div>

              <div className="p-4 flex flex-col">
                <label htmlFor="asunto" className="text-lg font-extrabold uppercase">Asunto:</label>
                <textarea rows={8} className="p-3 w-full rounded border-2" name="asunto" id="asunto"></textarea>
              </div>


              <button className="font-bold uppercase px-4 py-3 bg-blue-800 text-white rounded shadow hover:bg-blue-900 focus:outline-none focus:shadow-outline transition-all transition-duration:150ms w-full">
                Contactar
              </button>
            </form>

          </div>
        </div>

      </section>
    </>

  )
}

export default ContactoPage