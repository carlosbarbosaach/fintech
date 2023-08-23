import { DataContextProvider } from "./Context/DataContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Sidenav from "./Components/Sidenav"
import Resumo from "./Pages/Resumo"
import Vendas from "./Pages/Vendas"
import Venda from "./Pages/Venda"
import "./Style.css"

const App = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
