import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { IVenda } from '../Context/DataContext';
import Loading from '../Components/Loading';

type VendaSemData = Omit<IVenda, "data">

const Venda = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading === true) return <Loading />
  if (data === null) return null;
  return (
    <div>
      <div className='box mb title-venda'>
        ID: {data.id}
      </div>
      <div className='box mb title-venda'>
        Nome: {data.nome}
      </div>
      <div className='box mb title-venda'>
        Preço: {data.preco.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}
      </div>
      <div className='box mb title-venda'>
        Status: {data.status}
      </div>
      <div className='box mb title-venda'>
        Pagamento: {data.pagamento}
      </div>
    </div>
  )
}

export default Venda
