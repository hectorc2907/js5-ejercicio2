class persona{
    constructor(nombre,edad,DNI,sexo,peso,altura,anio){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anio = anio;
    }
    mostrarGeneracion(){
        if(this.anio>=1930 && this.anio<=1948){
            document.write('La Generación es: Silent Generation<br>');
            document.write('Su Rasgo Característico es: Austeridad<br>');
        }else if(this.anio>=1949 && this.anio<=1968){
            document.write('La Generacion es: Baby Boom<br>');
            document.write('Su Rasgo Característico es: Ambición<br>');
        }else if(this.anio>=1969 && this.anio<=1980){
            document.write('La Generación es: Generación X<br>');
            document.write('Su Rasgo Caracteristico es: Obsesión por el Exito<br>');
        }else if(this.anio>=1981 && this.anio<=1993){
            document.write('La Generacion es: Generacion Y<br>');
            document.write('Su Rasgo Caracteristico es: Frustración<br>');
        }else if(this.anio>=1994 && this.anio<=2010){
            document.write('La Generacion es: Generacion Z<br>');
            document.write('Su Rasgo Caracteristico es: Irreverencia<br>');
        }
    }
    mayorDeEdad(){
        if(this.edad>=18){
            document.write(`El usuario tiene ${this.edad} y es mayor de edad<br>`);
        }else{
            document.write(`El usuario tiene ${this.edad} y es menor de edad<br>`);
        }
    }
    mostrarDatos(){
        document.write(`El nombre del usuario es ${this.nombre}, su edad es ${this.edad}, su dni es ${this.DNI}, su genero es ${this.sexo}, su peso es ${this.peso}, su altura es ${this.altura}, su fecha de nacimiento es ${this.anio}<br>`)
    }
    generarDNI(){
        let dni = Math.floor(Math.random()*(99999999-1000000)+1000000);
        document.write(`DNI random generado ${dni}`);
    }
}

document.querySelector('#btnDatos').onclick = function(){
    
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let dni = document.getElementById('dni').value;
    let sexo = function(){if(document.getElementById('sexo1') = true){
        return 'sexo1';
    }else if(document.getElementById('sexo2').checked){
        return 'sexo2';
    }};
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let anio = document.getElementById('anio').value;


    const datos = new persona(nombre,edad,dni,sexo(),peso,altura,anio);
    

    datos.mayorDeEdad();
    datos.mostrarGeneracion();
    datos.mostrarDatos();
    datos.generarDNI();
}