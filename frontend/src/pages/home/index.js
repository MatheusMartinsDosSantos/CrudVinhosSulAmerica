import './home.scss'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
<div>
<div className="TV">
          <div className="overlap-wrapper">
          <div className="group-2">
                <img className="group-3" src="img/group-7.png" />
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div style={{width: '135px', height: '210.77px', position: 'relative'}}>
                      <div style={{width: '135px', height: '210.77px', left: '0px', top: '0px', position: 'absolute'}}>
                        <div style={{width: '135px', height: '210.77px', left: '0px', top: '0px', position: 'absolute', background: '#D9D9D9'}} />
                        <img style={{width: '135px', height: '135px', left: '0px', top: '0px', position: 'absolute'}} src="img/image1.png" />
                      </div>
                      <div style={{left: '5px', top: '147px', position: 'absolute', color: '#140709', fontSize: '10px', fontFamily: 'Kadwa', fontWeight: 400, wordWrap: 'break-word'}}>Vinho Cabernet Sauvignon<br />Trapiche</div>
                      <div style={{left: '7px', top: '185px', position: 'absolute', color: '#722735', fontSize: '10px', fontFamily: 'Kadwa', fontWeight: 600, wordWrap: 'break-word'}}>R$52,99</div>
                      <img style={{width: '32px', height: '17px', left: '99px', top: '188px', position: 'absolute'}} src="img/arg.png" />
                    </div>
                  </div>
                </div>
                <div className="group-6" />
                <div className="group-7" />
                <div className="group-8" />
              </div>
            <div className="overlap">
              <img className="image" src="img/image-25.png" />
              <img className="img" src="img/image-20.png" />
              <div className="rectangle" />
              <div className="group">
                <div className="ellipse" />
                <div className="div" />
                <div className="ellipse-2" />
                <div className="ellipse-3" />
                <div className="ellipse-4" />
              </div>
              <div className="rectangle-2">
                <Link to='/signin'><img className="perfil" src="img/perfil-1.png" /></Link>
                <img className="carrinho-de-compras" src="img/carrinho-de-compras-1.png" />
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <form className='pesquisa' id="pesquisa" action method="post">
                    <input className='busca1' id="busca" placeholder="Buscar..." type="search" />
                  </form>
                </div>
              </div>

              <img className="image-2" src="img/image-24.png" />
            </div>
          </div>
        </div>
      </div>
  );
}


