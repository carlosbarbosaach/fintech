import MesButton from './MesButton'

const Meses = () => {
  return (
    <div className='flex'>
      <MesButton n={-3} />
      <MesButton n={-2} />
      <MesButton n={-1} />
      <MesButton n={0} />
    </div>
  )
}

export default Meses
