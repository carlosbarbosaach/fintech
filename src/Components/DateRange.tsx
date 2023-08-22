import DateInput from './DateInput'
import { useData } from '../Context/DataContext'

const DateRange = () => {
  const { inicio, final, setInicio, setFinal } = useData();

  return (
    <form className='box flex' onSubmit={(event) => event.preventDefault()}>
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)} />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)} />
    </form>
  )
}

export default DateRange
