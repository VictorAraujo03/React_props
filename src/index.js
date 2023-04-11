import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'
import Cartao from './Cartao'

const App = () => {
  return (
    // container principal
    <div className="container border rounded mt-2">
      <div className="row border-bottom m-2">
        <div className="col-12">
          <h1 className="display-5 text-center">Seus pedidos</h1>
        </div>
      </div>      
      <div className="row">
    {/* controle de colunas para responsividade*/}
    <div className="col-12 col-lg-6 col-xxl-4 my-2">
    <Cartao cabecalho="22/04/2021">
    <Pedido icone="fas fa-hdd fa-shake fa-2x" titulo="SSD"
        descricao="SSD Kingston A400 - SATA"/>
        </Cartao>
    </div>
    </div>
      <div className="row">
  {/* controle de colunas para responsividade*/}
    <div className="col-12 col-lg-6 col-xxl-4 my-2">
      <Cartao cabecalho="20/04/2021">
    <Pedido icone="fas fa-book fa-shake fa-2x" titulo="Livro"
      descricao="Concrete Mathematics - Donald Knuth" />
      </Cartao>
  </div>
 </div>
      <div className="row">
  {/* controle de colunas para responsividade*/}
    <div className="col-12 col-lg-6 col-xxl-4 my-2">
      <Cartao cabecalho="21/01/2021">
    <Pedido icone="fas fa-laptop fa-shake fa-2x" titulo="Notebook"
      descricao="Notebook Dell - 8Gb - i5" />
      </Cartao>
  </div>

 </div>
</div>
  ) 
}
 

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)