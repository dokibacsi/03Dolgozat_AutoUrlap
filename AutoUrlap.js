class AutoUrlap{

    #list = {}

    constructor(list, szuloElem){
        this.#list = list;
        this.szuloElem = szuloElem;
        this.#autoMegj();
        this.#elkuldes();
    }

    #autoMegj(){
        let txt = ""

        txt += "<label for='rendszam'>Rendszám:</label>"
        +"<input type='text' name='rendszam' id='rendszam' placeholder='rendszám'></input>";
        txt += "<label for='rendszam'>Típus:</label>"
        +"<input type='text' name='tipus' id='tipus' placeholder='típus'></input>";
        txt += "<button id='elkuld'>Elküld</button>"

        this.szuloElem.html(txt);
    }

    #elkuldes(){
        let rendInp = $("#rendszam");
        let tipInp = $("#tipus");
        let elkuldGomb = $("#elkuld");

        elkuldGomb.on("click", (event)=>{
            event.preventDefault()
            let rendAdat = rendInp.val()
            let tipAdat = tipInp.val()
            this.#list.push({rendszam: rendAdat, tipus: tipAdat})
            console.log(this.#list)
        })
    }
    
}

export default AutoUrlap