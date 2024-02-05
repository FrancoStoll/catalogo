import Gallery from "../components/Gallery/Gallery"


const AboutPage = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-center md:min-h-[calc(100vh-10rem)] items-center gap-5">

      <div className="md:w-1/2 flex-1 animate__animated animate__fadeInLeft">
        <Gallery />
      </div>



      <div className="md:w-1/2 flex-1 py-8 px-6 md:py-5 lg:0 md:px-0">
        <h1 className="text-4xl font-bold py-3 rounded bg-blue-900 text-white text-center  animate__animated animate__fadeInLeft">Acerca de nosotros</h1>

        <p className="text-gray-700 leading-6 my-4 animate__animated animate__fadeInRight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat, repellat possimus incidunt, debitis doloribus natus aliquid ea est voluptas, non eaque in laboriosam magni laborum accusamus sed! Iure eum, delectus veniam voluptates quos praesentium animi ullam enim aperiam sit.</p>
        <p className="text-gray-700 leading-6 mb-4 animate__animated animate__fadeInRight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat, repellat possimus incidunt, debitis doloribus natus aliquid ea est voluptas, non eaque in laboriosam magni laborum accusamus sed! Iure eum, delectus veniam voluptates quos praesentium animi ullam enim aperiam sit.</p>
        <p className="text-gray-700 leading-6 mb-4 animate__animated animate__fadeInRight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat, repellat possimus incidunt, debitis doloribus natus aliquid ea est voluptas, non eaque in laboriosam magni laborum accusamus sed! Iure eum, delectus veniam voluptates quos praesentium animi ullam enim aperiam sit.</p>
        <p className="text-gray-700 leading-6 mb-4 animate__animated animate__fadeInRight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat, repellat possimus incidunt, debitis doloribus natus aliquid ea est voluptas, non eaque in laboriosam magni laborum accusamus sed! Iure eum, delectus veniam voluptates quos praesentium animi ullam enim aperiam sit.</p>
        <p className="text-gray-700 leading-6 animate__animated animate__fadeInRight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat, repellat possimus incidunt, debitis doloribus natus aliquid ea est voluptas, non eaque in laboriosam magni laborum accusamus sed! Iure eum, delectus veniam voluptates quos praesentium animi ullam enim aperiam sit.</p>
      </div>
    </section>


  )
}

export default AboutPage