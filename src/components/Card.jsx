function Card({ nombre }) {
  return (
    <article className="bg-white border border-gray-100 rounded-lg shadow-sm flex flex-col items-center justify-end p-4 aspect-square">
      <h5 className="text-sm text-gray-500 mt-auto">{nombre}</h5>
    </article>
  )
}
export default Card