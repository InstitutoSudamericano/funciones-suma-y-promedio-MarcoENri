function verificarAprobacion(nota1,nota2,nota3){
    const promedio=(nota1 + nota2 +nota3)/3; 
    if(promedio> 70){
    return "aprobado";
    } else{
        return "reprobado";
    }
    }
    let nota1= 80;
    let nota2= 75;
    let nota3= 85;
    
    const resultado = verificarAprobacion(nota1, nota2, nota3);
    console.log(resultado);