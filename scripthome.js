
function atualizarClima(estado) {
    let climaTexto = "";
    let imagemSrc = "";
    let informacoesAdicionais = "";

    switch (estado) {
        case "AM":
            climaTexto = "Amazonas: Temperatura média de 26°C, clima quente e úmido.";
            imagemSrc = "img/estados/amazonas.png";
            break;
        case "PB":
            climaTexto = "Paraíba: Temperatura média de 26°C, clima tropical com chuvas no inverno.";
            imagemSrc = "img/estados/paraiba.png";
             informacoesAdicionais = "Características: A Paraíba é conhecida por suas paisagens variadas, que vão desde o litoral até o sertão. As temperaturas variam de acordo com a região, sendo mais amenas nas áreas serranas.";
            informacoesAdicionais += " História e Cultura: A cultura paraibana é rica, com influências indígenas, africanas e europeias, refletidas na música, dança e culinária.";
            break;
        case "RJ":
            climaTexto = "Rio de Janeiro: Temperatura média de 28°C, clima tropical e úmido.";
            imagemSrc = "img/estados/riodejaneiro.png";
            break;
        case "MG":
            climaTexto = "Minas Gerais: Temperatura média de 24°C, clima variado com estações bem definidas.";
            imagemSrc = "img/estados/minasgerais.png";
            break;
        case "RS":
            climaTexto = "Rio Grande do Sul: Temperatura média de 20°C, clima temperado e frio no inverno.";
            imagemSrc = "img/estados/riograndedosul.png";
            break;
        case "BA":
            climaTexto = "Bahia: Temperatura média de 27°C, clima tropical e ensolarado.";
            imagemSrc = "img/estados/bahia.png";
            break;
        case "SP":
            climaTexto = "São Paulo: Temperatura média de 22°C, clima temperado.";
            imagemSrc = "img/estados/saopaulo.png";
            break;
        case "PR":
            climaTexto = "Paraná: Temperatura média de 23°C, clima subtropical com invernos frios.";
            imagemSrc = "img/estados/parana.png";
            break;
        case "AC":
            climaTexto = "Acre: Temperatura média de 25°C, clima quente e úmido.";
            imagemSrc = "img/estados/acre.png";
            break;
        case "AL":
            climaTexto = "Alagoas: Temperatura média de 26°C, clima tropical e ensolarado.";
            imagemSrc = "img/estados/alagoas.png";
            break;
        case "AP":
            climaTexto = "Amapá: Temperatura média de 27°C, clima equatorial e úmido.";
            imagemSrc = "img/estados/Amapa.png";
            break;
        case "CE":
            climaTexto = "Ceará: Temperatura média de 28°C, clima tropical semiárido.";
            imagemSrc = "img/estados/ceara.png";
            break;
        case "DF":
            climaTexto = "Distrito Federal: Temperatura média de 24°C, clima tropical de altitude.";
            imagemSrc = "img/estados/df.png";
            break;
        case "ES":
            climaTexto = "Espírito Santo: Temperatura média de 25°C, clima tropical e úmido.";
            imagemSrc = "img/estados/espirito santo.png";
            break;
        case "GO":
            climaTexto = "Goiás: Temperatura média de 25°C, clima tropical e seco.";
            imagemSrc = "img/estados/goias.png";
            break;
        case "MA":
            climaTexto = "Maranhão: Temperatura média de 27°C, clima tropical e úmido.";
            imagemSrc = "img/estados/maranhão.png";
            break;
        case "MT":
            climaTexto = "Mato Grosso: Temperatura média de 25°C, clima tropical e úmido.";
            imagemSrc = "img/estados/matogrosso.png";
            break;
        
        case "MS":
            climaTexto = "Mato Grosso do Sul: Temperatura média de 26°C, clima tropical com chuvas no verão.";
            imagemSrc = "img/estados/matogrossodosul.png";
            break;
        
        case "PI":
            climaTexto = "Piauí: Temperatura média de 28°C, clima semiárido.";
            imagemSrc = "img/estados/piaui.png";
            break;
        
        case "RO":
            climaTexto = "Rondônia: Temperatura média de 26°C, clima tropical e úmido.";
            imagemSrc = "img/estados/rondonia.png";
            break;
        
        case "RR":
            climaTexto = "Roraima: Temperatura média de 25°C, clima equatorial, com alta umidade.";
            imagemSrc = "img/estados/roraima.png";
            break;
        
        case "SC":
            climaTexto = "Santa Catarina: Temperatura média de 20°C, clima temperado.";
            imagemSrc = "img/estados/santacatarina.png";
            break;
        
        case "SE":
            climaTexto = "Sergipe: Temperatura média de 27°C, clima tropical e quente.";
            imagemSrc = "img/estados/sergipe.png";
            break;
        
        case "TO":
            climaTexto = "Tocantins: Temperatura média de 26°C, clima tropical com estações bem definidas.";
            imagemSrc = "img/estados/tocantins.png";
            break;
        case "PE":
            climaTexto = "Pernambuco: Temperatura média de 27°C, clima tropical com períodos de chuva.";
            imagemSrc = "img/estados/pernambuco.png"; 
            break;
        case "PA":
            climaTexto = "Pará: Temperatura média de 28°C, clima equatorial com altas chuvas e umidade.";
            imagemSrc = "img/estados/pará.png"; 
            break;
        case "RN":
            climaTexto = "Rio Grande do Norte: Temperatura média de 28°C, clima tropical com estações secas e chuvosas.";
            imagemSrc = "img/estados/Rio Grande do Norte.png"; 
            break;
            
            
            

            
    }

    document.getElementById("estado-clima").innerText = climaTexto;
    let imagemElement = document.getElementById("estado-imagem");

    if (imagemSrc) {
        imagemElement.src = imagemSrc;
        imagemElement.style.display = "block";
    } else {
        imagemElement.style.display = "none";
    }
}


    document.querySelectorAll('path').forEach(function(element) {
        element.onclick = function() {
            let estadoId = this.id; 
            atualizarClima(estadoId); 
        };
    });


    let informacoesElement = document.getElementById("informacoes-adicionais");
    
    if (informacoesAdicionais) {
        informacoesElement.innerText = informacoesAdicionais;
        informacoesElement.style.display = "block";
    } else {
        informacoesElement.style.display = "none";
    }
