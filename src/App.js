import React, { useState } from 'react';
import Apresentacao from "./Apresentacao.js";


//import Quiz from "./Quiz.js";


function App() {
  const [ tela, alteraTela ] = React.useState( null );
  //altera_tela( <Quiz/> )

  if( tela == null ){

    alteraTela( <Apresentacao alteraTela={alteraTela} /> )

  }

  return (

    <div>

      { tela }

    </div>

  );
}
export default App;