
const form = document.querySelector("form")

form.addEventListener ("submit", function(e) {
    e.preventDefault()

    const totalc= Number (document.getElementById ("totalc").value);
    const propina= Number (document.getElementById ("propina").value);
    console.log(totalc,propina)
    calcular (totalc,propina)

    function contenido (totalc,porcentaje,Totalpago) { 
        const contenido = document.querySelector (`#TOTAL`)
        contenido.innerHTML= ` <ul><div>Valor total de la cuenta: ${totalc}</div>
        <div>Valor propina: ${porcentaje}</div><div>Total a pagar:  ${Totalpago}</ul></div>`  } 
      

    function calcular (totalc,propina) {
        const porcentaje = totalc * propina/100
        const Totalpago = totalc + porcentaje
        console.log (porcentaje,Totalpago)
        contenido (totalc,porcentaje,Totalpago)
    }
    
   
   
} )
   
    



