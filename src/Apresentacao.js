import Quiz from "./Quiz";


const Apresentacao = (props) => {

    require ("./Apresentacao.css")

    const alteraTela = props.alteraTela;


    return (

        <div className="TelaP">

            <h1 className="h1">

                Bem-vindo ao Quiz da Barbie

            </h1>

     

            <p>

                Você está pronto para começar?

            </p>

            <button className="botao" onClick={()=> alteraTela(<Quiz alteraTela={alteraTela}/>) }> Começar </button>

        </div>

     );

};
export default Apresentacao;
        