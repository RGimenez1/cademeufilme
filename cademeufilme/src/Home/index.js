import React from "react";

const Home = () => {

    const [filme, setFilme] = React.useState(false);

    const buscaFilme = () => {
        var idFilme = document.getElementById("input").value;
        fetch(`https://apis.justwatch.com/content/titles/movie/${idFilme}/locale/pt_BR?language=pt`)
            .then(response => response.json())
            .then(data => {
                setFilme(data);
            });
    };

    console.log(filme);

    var notaImdb;

    if (!filme) {console.log('!filme p não quebrar render')}

    else {notaImdb = filme.scoring.filter(data=>data.provider_type  === 'imdb:score')};
    
    return(
<div>

    <input type="text" id="input"/> 
    <button onClick={buscaFilme}>
        Buscar
    </button>

<h1 class='Titulo'>{filme.title} </h1>
<h2 class='Descrição'>{filme.short_description}</h2>
<h3 class='NotaImdb'>
    {
    notaImdb.length > 0 ?
    notaImdb.map(data=>{
        return(
            <div>
                <h4>{data.value}</h4>
            </div>
        )
    }):"Nota imdB não encontrada"}

</h3>

</div>

)}

export default Home;