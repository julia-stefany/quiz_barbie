import Apresentacao from "./Apresentacao";



const Final = (props) => {

    require ("./Final.css")

    const alteraTela = props.alteraTela;



    return (

        <div className="final">

            <h1 className="h1"> Parabéns </h1>

            <p> Ebaaa :) Você participaria do filme... </p>

            <button className="botao" onClick={()=> alteraTela(<Apresentacao alteraTela={alteraTela}/>)}> Recomeçar </button>

        </div>

     );

}

export default Final;