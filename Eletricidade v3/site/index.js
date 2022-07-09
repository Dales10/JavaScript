//Irá colocar as imagens com as fórmulas mostrando como elas são
function formulas() {
    const selecionarImagem = document.querySelector("#formula").value
    var divImg = document.querySelector("#formulasImagens")
    const paginas = ["formula01.html", "formula02.html", "formula03.html", "formula04.html", "formula05.html", "formula06.html","formula07.html", "formula08.html"]

    divImg.innerHTML = ""
    var img = document.createElement("img")
    img.setAttribute("id", "img")
    if (selecionarImagem == "equacao01") {
        img.setAttribute("src", "../imagens/formula01.jpeg")
        divImg.appendChild(img)
        selecionar(paginas[0])
    } else if (selecionarImagem == "equacao02") {
        img.setAttribute("src", "../imagens/formula02.jpeg")
        divImg.appendChild(img)
        selecionar(paginas[1])
    } else if (selecionarImagem == "equacao03") {
        img.setAttribute("src", "../imagens/formula03.jpeg")
        divImg.appendChild(img)
        selecionar(paginas[2])
    } else if (selecionarImagem == "equacao04") {
        img.setAttribute("src", "../imagens/formula04.jpeg")
        divImg.appendChild(img)
        selecionar(paginas[3])
    } else if (selecionarImagem == "equacao05") {
        img.setAttribute("src", "../imagens/formula05.jpeg")
        divImg.appendChild(img)
        selecionar(paginas[4])
    } else if (selecionarImagem == "equacao06") {
        img.setAttribute("src", "../imagens/formula06.jpeg")
        divImg.appendChild(img)
        selecionar(paginas[5])
    } else if (selecionarImagem == "equacao07") {
        img.setAttribute("src", "../imagens/formula07.jpeg")
        divImg.appendChild(img)
        selecionar(paginas[6])
    } else {
        img.setAttribute("src", "../imagens/formula08.jpeg")
        divImg.appendChild(img)
        selecionar(paginas[7])
    }

}

function selecionar(url) {
    const bnt = document.querySelector("#selecionar")
    
    function openInNewTab(url) {
        const win = window.open(url, "_self")
        win.focus()
    }
    bnt.addEventListener("click", () => {
        openInNewTab(url)
    })
}

function iniciar(a) {
    var resultado = document.querySelector("#resultado")
    //Cria a div que será usada no CSS da parte de 'resultado'
    var resposta = document.createElement("div")
    resposta.setAttribute("class", "resposta")

    if (a == 0) {
        const Fe = document.querySelector("#Fe").value.replace(",", ".")
        const K = document.querySelector("#K").value.replace(",", ".")
        const Q = document.querySelector("#Q").value.replace(",", ".")
        const q = document.querySelector("#q").value.replace(",", ".")
        const d = document.querySelector("#d").value.replace(",", ".")
        const k = K

        const potenciaFe = document.querySelector("#Fe-Potencia").value
        const potenciaK = document.querySelector("#K-Potencia").value
        const potenciasub0 = Number(document .querySelector("#submultiplos0").value)
        const potenciasub1 = Number(document.querySelector("#submultiplos1").value)
        const potenciaComprimento = Number(document.querySelector("#distancia").value)
        var potencia = ""

        //Se não for digitado um valor para K, será atribuído o valor 9 para ele e 9 para a sua potência
        if(K.length == 0) {
            K = 9
            potenciaK = 9
        }

        //Caso a carga de prova seja negativa, deixa o valor digitado positivo
        if (Number(Q) < 0) {
            Q = - Number(Q)
        }

        //Caso a carga de prova seja negativa, deixa o valor digitado positivo
        if (Number(q) < 0) {
            q = - Number(q)
        }

        //Parte resposánvel pelos cálculos com base nos dados coletados
        if (Fe.length == 0 && Q.length != 0 && Q.length != 0 && d.length != 0) {
            potencia = ` • 10^(${potenciaK + potenciasub0 + potenciasub1 - potenciaComprimento* 2})`
            valor = Number(K) * Number(Q) * Number(q)/ Number(d)**2
            if (potenciaK + potenciasub0 + potenciasub1 - potenciaComprimento == 0) {
                potencia = ""
            }
            equacaoResultado = `Fe = ${valor} ${potencia} <i>N</i>`
        } else if (Q.length == 0 && d.length != 0 && Fe.length != 0 && q.length != 0) {
            potencia = ` • 10^(${potenciaComprimento* 2 + potenciaFe - potenciasub1 - potenciaK})`
            valor = Number(d)** 2 * Number(Fe)/ Number(q)/ Number(K)
            if (potenciaComprimento* 2 + potenciaFe - potenciasub1 - potenciaK == 0) {
                potencia = ""
            }
            equacaoResultado = `Q = ${valor} ${potencia} <i>C</i>`

        } else if (k.length == 0 && d.length != 0 && Fe.length != 0 && q.length != 0 && Q.length != 0) {
            potencia = ` • 10^(${potenciaComprimento* 2 + potenciaFe - potenciasub1 - potenciasub0})`
            valor = Number(d)** 2 * Number(Fe)/ Number(q)/ Number(Q)
            if (potenciaComprimento + potenciaFe - potenciasub1 - potenciasub0 == 0) {
                potencia = ""
            }
            equacaoResultado = `K = ${valor} ${potencia} <i>N • m²/C²</i>`

        } else if (q.length == 0 && d.length != 0 && Fe.length != 0 && Q.length != 0) {
            potencia = ` • 10^(${potenciaComprimento* 2 + potenciaFe - potenciaK - potenciasub0})`
            valor = Number(d)** 2 * Number(Fe)/ Number(K)/ Number(Q)
            if (potenciaComprimento* 2 + potenciaFe - potenciaK - potenciasub0 == 0) {
                potencia = ""
            }
            equacaoResultado = `q = ${valor} ${potencia} <i>C</i>`

        } else if (d.length == 0 && Q.length != 0 && q.length != 0 && Fe.length != 0) {
            potencia = ` • 10^(${potenciaK + potenciasub0 + potenciasub1 - potenciaFe})`
            valor = Number(K) * Number(Q) * Number(q)/ Number(Fe)
            var valorRaiz = Math.sqrt(valor)
            var potenciaRaiz = ` • 10^(${(potenciaK + potenciasub0 + potenciasub1 - potenciaFe)/ 2})`
            if (potenciaK + potenciasub0 + potenciasub1 - potenciaFe == 0) {
                potencia = ""
                potenciaRaiz = ""
            }
            equacaoResultado = `d² = ${valor} ${potencia} <i>m²</i><br>d = ${valorRaiz} ${potenciaRaiz} <i>m</i>`

        }
        resultado.innerHTML = ""
        final(resposta, resultado, equacaoResultado)

    } else if (a == 1) {
        const E = document.querySelector("#E").value.replace(",", ".")
        const Fe = document.querySelector("#Fe").value.replace(",", ".")
        const q = document.querySelector("#q").value.replace(",", ".")

        const potenciaE = document.querySelector("#E-Potencia").value
        const potenciaFe = document.querySelector("#Fe-Potencia").value
        const potenciasub1 = Number(document.querySelector("#submultiplos1").value)

        //Caso a carga de prova seja negativa, deixa o valor digitado positivo
        if (Number(q) < 0) {
            q = - Number(q)
        }

        //Parte resposánvel pelos cálculos com base nos dados coletados
        if (E.length == 0 && Fe.length != 0 && q.length != 0) {
            potencia = ` • 10^(${potenciaFe - potenciasub1})`
            valor = Number(Fe)/ Number(q)
            if (potenciaFe - potenciasub1 == 0) {
                potencia = ""
            }
            equacaoResultado = `E = ${valor} ${potencia} <i>N/C</i>`
            
        } else if (Fe.length == 0 && q.length != 0 && E.length != 0) {
            potencia = ` • 10^(${potenciaE + potenciasub1})`
            valor = Number(q) * Number(E)
            if (potenciaE + potenciasub1 == 0) {
                potencia = ""
            }
            equacaoResultado = `Fe = ${valor} ${potencia} <i>N</i>`

        } else if (q.length == 0 && Fe.length != 0 && E.length != 0) {
            potencia = ` • 10^(${potenciaFe - potenciaE})`
            valor = Number(Fe)/ Number(E)
            if (potenciaFe - potenciaE == 0) {
                potencia = ""
            }
            equacaoResultado = `q = ${valor} ${potencia} <i>C</i>`

        }
        resultado.innerHTML = ""
        final(resposta, resultado, equacaoResultado).replace(".", ",")

    } else if (a == 2) {
        const E = document.querySelector("#E").value.replace(",", ".")
        const K = document.querySelector("#K").value.replace(",", ".")
        const Q = document.querySelector("#Q").value.replace(",", ".")
        const d = document.querySelector("#d").value.replace(",", ".")
        const k = K

        const potenciaE = document.querySelector("#E-Potencia").value
        const potenciaK = document.querySelector("#K-Potencia").value
        const potenciasub0 = Number(document .querySelector("#submultiplos0").value)
        const potenciaComprimento = Number(document.querySelector("#distancia").value)

        //Se não for digitado um valor para K, será atribuído o valor 9 para ele e 9 para a sua potência
        if(K.length == 0) {
            K = 9
            potenciaFe = 9
        }

        //Caso a carga fonte seja negativa, deixa o valor digitado positivo
        if (Number(Q) < 0) {
            Q = - Number(Q)
        }

        if (E.length == 0 && Q.length != 0 && d.length != 0) {
            potenciaResultado = ` • 10^(${potenciaFe + potenciasub0 - potenciaComprimento * 2})`
            valor = Number(K) * Number(Q)/ (Number(d)** 2)
            if (potenciaFe + potenciasub0 - (potenciaComprimento * 2) == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `E = ${valor} ${potenciaResultado} <i>N/C</i>`

        } else if (k.length == 0 && d.length != 0 && E.length != 0 && Q.length != 0) {
            potencia = ` • 10^(${potenciaComprimento * 2 + potenciaE - potenciasub0})`
            valor = d** 2 * Number(E)/ Q
            if (potenciaComprimento * 2 + potenciaE - potenciasub0 == 0) {
                potencia = ""
            }
            equacaoResultado = `K = ${valor} ${potencia} <i>N • m²/C²</i>`

        } else if (Q.length == 0 && d.length != 0 && E.length != 0) {
            potencia = ` • 10^(${potenciaComprimento* 2 + potenciaE - potenciaFe})`
            valor = d** 2 * Number(E)/ Number(K)
            if (potenciaComprimento + potenciaE - potenciaFe == 0) {
                potencia = ""
            }
            equacaoResultado = `Q = ${valor} ${potencia} <i>C</i>`

        } else if (d.length == 0 && Q.length != 0 && E.length != 0) {
            potencia = ` • 10^(${potenciasub0 + potenciaFe - potenciaE})`
            valor = Number(K) * Number(Q)/ Number(E)
            var valorRaiz = Math.sqrt(valor)
            var potenciaRaiz = ` • 10^(${(potenciasub0 + potenciaFe - potenciaE)/ 2})`
            if (potenciasub0 + potenciaFe - potenciaE == 0) {
                potencia = ""
                potenciaRaiz = ""
            }
            equacaoResultado = `d² = ${valor} ${potencia} <i>m²</i><br>d = ${valorRaiz} ${potenciaRaiz} <i>m</i>`

        }
        final(resposta, resultado, equacaoResultado)

    } else if (a == 3) {
        const V = document.querySelector("#V").value.replace(",", ".")
        const Epe = document.querySelector("#Epe").value.replace(",", ".")
        const q = document.querySelector("#q").value.replace(",", ".")

        const potenciaV = document.querySelector("#V-Potencia").value
        const potenciaEpe = document.querySelector("#Epe-Potencia").value
        const potenciasub1 = Number(document.querySelector("#submultiplos1").value)

        //Parte resposánvel pelos cálculos com base nos dados coletados
        if (V.length == 0 && Epe.length != 0 && q.length != 0) {
            potenciaResultado = ` • 10^(${potenciaFe - potenciasub0})`
            valor = Number(Epe) / Number(q)
            if (potenciaFe - potenciasub0 == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `V = ${valor} ${potenciaResultado} <i>V</i>`
            
        } else if (Epe.length == 0 && V.length != 0 && q.length != 0) {
            potenciaResultado = ` • 10^(${potenciaE + potenciasub0})`
            valor = Number(V) * Number(q)
            if (potenciaE + potenciasub0 == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `Epe = ${valor} ${potenciaResultado} <i>J</i>`

        } else if (q.length == 0 && Epe.length != 0 && V.length != 0) {
            potenciaResultado = ` • 10^(${potenciaFe - potenciaE})`
            valor = Number(Epe) / Number(V)
            if (potenciaFe - potenciaE == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `q = ${valor} ${potenciaResultado} <i>C</i>`

        }
        final(resposta, resultado, equacaoResultado)

    } else if (a == 4) {
        const V = document.querySelector("#V").value.replace(",", ".")
        const K = document.querySelector("#K").value.replace(",", ".")
        const Q = document.querySelector("#Q").value.replace(",", ".")
        const d = document.querySelector("#d").value.replace(",", ".")

        const potenciaV = document.querySelector("#V-Potencia").value
        const potenciaK = document.querySelector("#K-Potencia").value
        const potenciasub0 = Number(document .querySelector("#submultiplos0").value)
        const potenciaComprimento = Number(document.querySelector("#distancia").value)

        //Se não for digitado um valor para K, será atribuído o valor 9 para ele e 9 para a sua potência
        if(K.length == 0) {
            K = 9
            potenciaFe = 9
        }

        //Parte resposánvel pelos cálculos com base nos dados coletados
        if (V.length == 0 && Q.length != 0 && d.length != 0) {
            potenciaResultado = ` • 10^(${potenciaFe + potenciasub0 - potenciaComprimento})`
            valor = Number(K) * Number(Q) / Number(d)
            if (potenciaFe + potenciasub0 - potenciaComprimento == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `V = ${valor} ${potenciaResultado} <i>V</i>`

        } else if (k.length == 0 && V.length != 0 && d.length != 0 && Q.length != 0) {
            potenciaResultado = ` • 10^(${Number(potenciaE) + potenciaComprimento - Number(potenciasub0)})`
            valor = Number(V) * Number(d) / Number(Q)
            if (Number(potenciaE) + potenciaComprimento - Number(potenciasub0) == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `K = ${valor} ${potenciaResultado} <i>N • m²/C²</i>`

        } else if (Q.length == 0 && V.length != 0 && d.length != 0) {
            potenciaResultado = ` • 10^(${potenciaE + potenciaComprimento - potenciaFe})`
            valor = Number(V) * Number(d) / Number(K)
            if (potenciaE + potenciaComprimento - potenciaFe == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `Q = ${valor} ${potenciaResultado} <i>C</i>`

        } else if (d.length == 0 && Q.length != 0 && V.length != 0) {
            potenciaResultado = ` • 10^(${potenciaFe + potenciasub0 - potenciaE})`
            valor = Number(K) * Number(Q) / Number(V)
            if (potenciaFe + potenciasub0 - potenciaE == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `d = ${valor} ${potenciaResultado} <i>m</i>`

        }
        final(resposta, resultado, equacaoResultado)

    } else if (a == 5) {
        const Epe = document.querySelector("#Epe").value.replace(",", ".")
        const K = document.querySelector("#K").value.replace(",", ".")
        const Q = document.querySelector("#Q").value.replace(",", ".")
        const q = document.querySelector("#q").value.replace(",", ".")
        const d = document.querySelector("#d").value.replace(",", ".")

        const potenciaEpe = document.querySelector("#Epe-Potencia").value
        const potenciaK = document.querySelector("#K-Potencia").value
        const potenciasub0 = Number(document .querySelector("#submultiplos0").value)
        const potenciasub1 = Number(document.querySelector("#submultiplos1").value)
        const potenciaComprimento = Number(document.querySelector("#distancia").value)

        //Se não for digitado um valor para K, será atribuído o valor 9 para ele e 9 para a sua potência
        if(K.length == 0) {
            K = 9
            potenciaFe = 9
        }
        
        //Parte resposánvel pelos cálculos com base nos dados coletados
        if (Epe.length == 0 && Q.length != 0 && q.length != 0 && d.length != 0) {
            potenciaResultado = ` • 10^(${potenciaFe + potenciasub0 + potenciasub1 - potenciaComprimento})`
            valor = Number(K) * Number(Q) * Number(q) / Number(d)
            if (potenciaFe + potenciasub0 + potenciasub1 - potenciaComprimento == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `Epe = ${valor} ${potenciaResultado} <i>J</i>`

        } else if (k.length == 0 && d.length != 0 && Epe.length != 0 && q.length != 0 && Q.length != 0) {
            potenciaResultado = ` • 10^(${potenciaComprimento + potenciaE - potenciasub1 - potenciasub0})`
            valor = Number(d) * Number(Epe) / Number(q) / Number(Q)
            if (potenciaComprimento + potenciaE - potenciasub1 - potenciasub0 == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `K = ${valor} ${potenciaResultado} <i>N • m²/C²</i>`

        } else if (Q.length == 0 && d.length != 0 && Epe.length != 0 && q.length != 0) {
            potenciaResultado = ` • 10^(${potenciaComprimento + potenciaE - potenciasub1 - potenciaFe})`
            valor = Number(d) * Number(Epe) / Number(q) / Number(K)
            if (potenciaComprimento + Number(potenciaE) - potenciasub1 - Number(potenciaFe) == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `Q = ${valor} ${potenciaResultado} <i>C</i>`

        } else if (q.length == 0 && d.length != 0 && Epe.length != 0 && Q.length != 0) {
            potenciaResultado = ` • 10^(${potenciaComprimento + potenciaE - potenciaFe - potenciasub0})`
            valor = Number(d) * Number(Epe) / Number(K) / Number(Q)
            if (potenciaComprimento + potenciaE - potenciaFe - potenciasub0 == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `q = ${valor} ${potenciaResultado} <i>C</i>`

        } else if (d.length == 0 && K.length != 0 && q.length != 0 && Q.length != 0 && Epe.length != 0) {
            potenciaResultado = ` • 10^(${potenciaFe + potenciasub1 + potenciasub0 - potenciaE})`
            valor = Number(K) * Number(q) * Number(Q) / Number(Epe)
            if (potenciaFe + potenciasub1 + potenciasub0 - potenciaE == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `d = ${valor} ${potenciaResultado} <i>m</i>`

        }
        final(resposta, resultado, equacaoResultado)

    } else if (a == 6) {
        const t = document.querySelector("#t").value.replace(",", ".")
        const q = document.querySelector("#q").value.replace(",", ".")
        const U = document.querySelector("#U").value.replace(",", ".")
        const Va = document.querySelector("#Va").value.replace(",", ".")
        const Vb = document.querySelector("#Vb").value.replace(",", ".")

        const potenciat = document.querySelector("#t-Potencia").value
        const potenciasub1 = Number(document.querySelector("#submultiplos1").value)
        const potenciaU = document.querySelector("#U-Potencia").value
        const potenciaVa = document.querySelector("#Va-Potencia").value
        const potenciaVb = document.querySelector("#Vb-Potencia").value

        //Se não tiver sido digitado um valor para Va e/ou Vb, Va recebe "NaN" para poder ser usado como parâmetro no "if" a seguir
        if (Va.length == 0 && Vb.length == 0) {
            Va = NaN
        }
        
        var verificacao = "yes"
        //Determina a diferença entre os dois potenciais A e B, caso U não tenha um valor
        if (U.length == 0) {
            U = Number(Va) * 10** potencia2 - Number(Vb) * 10** potencia3
            verificacao = "no"
            if (isNaN(U)) {
                U = 0
            } else if (U == 0) {
                U = 1
            }
        }

        //Parte resposánvel pelos cálculos com base nos dados coletados
        if ((t.length == 0 && q.length != 0 && U.length != 0) || (t.length == 0 && q.length != 0 && Va.length != 0 && Vb.length != 0)) {
            if (verificacao == "yes") {
                potenciaResultado = ` • 10^(${potenciasub0 + potenciaFe})`
                valor = q * U
                if (potenciasub0 + potenciaFe == 0) {
                    potenciaResultado = ""
                }
                equacaoResultado = `t = ${valor} ${potenciaResultado} <i>J</i>`
            } else {
                valor = Number(q) * U
                equacaoResultado = `t = ${valor} • 10^(${potenciasub0}) <i>J</i>`
            }
                

        } else if ((U == 0 && t.length != 0 && q.length != 0) || (Va.length == 0 && Vb.length == 0 && t.length != 0 && q.length != 0)) {
            potenciaResultado = ` • 10^(${potenciaE - potenciasub0})`
            valor = Number(t) / Number(q)
            if (potenciaE - potenciasub0 == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `U = ${valor} ${potenciaResultado} <i>V</i>`

        } else if ((q.length == 0 && t.length != 0 && U.length != 0) || (q.length == 0 && t.length != 0 && Va.length != 0 && Vb.length != 0)) {
            if (verificacao == "yes") {
                potenciaResultado = ` • 10^(${potenciaE - potenciaFe})`
                valor = t / U
                if (potenciaE - potenciaFe == 0) {
                    potenciaResultado = ""
                }
                equacaoResultado = `q = ${valor} ${potenciaResultado} <i>C</i>`
            } else {
                valor = Number(t) * 10** Number(potenciaE) / U
                equacaoResultado = `q = ${valor} <i>C</i>`
            }

        } else if (Va.length == 0 && t.length != 0 && q.length != 0 && Vb.length != 0) {
            valor = (Number(t) * 10** Number(potenciaE) + (Number(q) * 10** potenciasub0 * Number(Vb) * 10** Number(potencia3))) / Number(q)
            equacaoResultado = `Va = ${valor} • 10^(${- potenciasub0}) <i>V</i>`

        } else if (Vb.length == 0 && t.length != 0 && q.length != 0 && Va.length != 0) {
            valor = (Number(t) * 10** Number(potenciaE) - (Number(q) * 10** potenciasub0 * Number(Va) * 10** Number(potencia2))) / - Number(q)
            equacaoResultado = `Vb = ${valor} • 10^(${- potenciasub0}) <i>V</i>`

        }
        final(resposta, resultado, equacaoResultado)

    } else if (a == 7) {
        const E = document.querySelector("#E").value.replace(",", ".")
        const U = document.querySelector("#U").value.replace(",", ".")
        const Va = document.querySelector("#Va").value.replace(",", ".")
        const Vb = document.querySelector("#Vb").value.replace(",", ".")
        const d = document.querySelector("#d").value.replace(",", ".")

        const potenciaE = document.querySelector("#E-Potencia").value
        const potenciaU = document.querySelector("#U-Potencia").value
        const potenciaVa = document.querySelector("#Va-Potencia").value
        const potenciaVb = document.querySelector("#Vb-Potencia").value
        const potenciaComprimento = Number(document.querySelector("#distancia").value)

        //Se não tiver sido digitado um valor para Va e/ou Vb, Va recebe "NaN" para poder ser usado como parâmetro no "if" a seguir
        if (Va.length == 0 && Vb.length == 0) {
            Va = NaN
        }
       
        var verificacao = "yes"
        //Determina a diferença entre os dois potenciais A e B, caso U não tenha um valor
        if (U.length == 0) {
            U = Number(Va) * 10** potencia2 - Number(Vb) * 10** potencia3
            verificacao = "no"
            if (isNaN(U)) {
                U = 0
            } else if (U == 0) {
                U = 1
            }
        }

        //Parte resposánvel pelos cálculos com base nos dados coletados
        if ((E.length == 0 && U.length != 0 && d.length != 0) || (E.length == 0 && Va.length != 0 && Vb.length != 0 && d.length != 0)) {
            if (verificacao == "yes") {
                potenciaResultado = ` • 10^(${potenciaFe - potenciaComprimento})`
                valor = U / d
                if (potenciaFe - potenciaComprimento == 0) {
                    potenciaResultado = ""
                }
                equacaoResultado = `E = ${valor} ${potenciaResultado} <i>V/m</i>`
            } else {
                valor = U / (Number(d) * 10** potenciaComprimento)
                equacaoResultado = `E = ${valor} <i>V/m</i> `
            }

        } else if ((U == 0 && E.length != 0 && d.length != 0) || (Va.length == 0 && Vb.length == 0 && E.length != 0 && d.length != 0)) {
            potenciaResultado = ` • 10^(${potenciaE + potenciaComprimento})`
            valor = Number(E) * Number(d)
            if (potenciaE + potenciaComprimento == 0) {
                potenciaResultado = ""
            }
            equacaoResultado = `U = ${valor} ${potenciaResultado} <i>V</i>`

        } else if ((d.length == 0 && U.length != 0 && E.length != 0) || (d.length == 0 && Va.length != 0 && Vb.length != 0 && E.length != 0)) {
            if (verificacao == "yes") {
                potenciaResultado = ` • 10^(${potenciaFe - potenciaE})`
                valor = U / E
                if (potenciaFe - potenciaE == 0) {
                    potenciaResultado = ""
                }
                equacaoResultado = `d = ${valor} ${potenciaResultado} <i>m</i>`
            } else {
                valor = U / (Number(E) * 10** Number(potenciaE))
                equacaoResultado = `d = ${valor} <i>m</i>` 
            }
            

        } else if ( Va == 0 && E.length != 0 && d.length != 0 && Vb.length != 0) {
            valor = Number(E) * 10** Number(potenciaE) * Number(d) * 10** potenciaComprimento + Vb * 10** Number(potencia3)
            equacaoResultado = `Va = ${valor} <i>V</i>`

        } else if (Vb == 0 && E.length != 0 && d.length != 0 && Va.length != 0) {
            valor = (Number(E) * 10** Number(potenciaE) * Number(d) * 10** potenciaComprimento - Number(Va) * 10** Number(potencia2)) * (-1)
            equacaoResultado = `Vb = ${valor} <i>V</i>`

        }
        final(resposta, resultado, equacaoResultado)

    }

}

//Verifica se os dados necessários para os cálculos foram digitados, e caso tenham sido, troca o ponta pela vírgula
function final(resposta, resultado, equacaoResultado) {
    resposta.innerHTML = equacaoResultado
    resultado.appendChild(resposta)

}