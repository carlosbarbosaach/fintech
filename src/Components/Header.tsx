import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import DateRange from './DateRange'
import Meses from './Meses'

const Header = () => {
  const [title, setTitle] = useState("Resumo");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setTitle("Resumo");
      document.title = "FinTECH | Resumo"
    } else if (location.pathname === '/vendas') {
      setTitle("Vendas")
      document.title = "FinTECH | Vendas"
    }
  }, [location])

  return (
    <header className='mb'>
      <div className='daterange mb'>
        <DateRange />
        <h1 className='box bg-3 color-title'>{title}</h1>
      </div>
      <Meses />
    </header>
  )
}

export default Header
