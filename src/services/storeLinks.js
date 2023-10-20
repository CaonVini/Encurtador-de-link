// Buscar os links encurtados//

export async function getLinksSave(key){
    const myLinks = await localStorage.getItem('key')

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;

}

//Salva um link no localStorage//

export async function saveLinks(key, newLink){
    let linksStored = await getLinksSave(key);

    // verificar ja tem link com KEY igual //

    const hasLink = linksStored.some( link => link.id === newLink.id )

    if(hasLink){
        console.log("Este link ja existe na sua lista de links!")
        return;
    }

    // adicionar item //

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log("Link salvo no localStorage com sucesso")

}


//Deletar link do storage//


