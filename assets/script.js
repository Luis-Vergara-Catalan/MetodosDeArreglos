const btninput = document.getElementById('botonInput')
let total = document.getElementById('totalLi')
const realizadas = document.getElementById('realizadasLi')
const listado = document.getElementById('listadoTa')

let nuevaTarea = [{id: 1, nombre:"Prender computadora", estado:false},
    {id: 2, nombre:"Ingresar usuario", estado: false},
    {id: 3, nombre:"Abrir navegador",estado: false }]
let id = 3


btninput.addEventListener("click", () => {
    const tarea = document.getElementById('inputNuevaTarea').value // toma el valor que se introduce en el input
        if ( tarea != ''){
            id++ //le suma 1 al valor de id

            const tareaObj = {id: id, nombre: tarea, estado: false} //crea un nuevo objeto
            nuevaTarea.push(tareaObj) //agrega al final un objeto
            Listar(nuevaTarea)
            document.getElementById('inputNuevaTarea').value = ""  //reemplaza dejando vacio el input
        } else{
            document.getElementById('inputNuevaTarea').value = ""
        }
})

const Listar = (array) =>{
    total.innerHTML = array.length
    realizadas.innerHTML = " " // limpiar el valor de realizada
    let contar = 0
    let html = ''

    for(const arrays of array){
        html +=`
        <tr>
        <td ${arrays.estado ? "style= text-decoration: line-through" : ""}> ${arrays.id}</td>
        <td ${arrays.estado ? "style= text-decoration: line-through" : ""}> ${arrays.nombre}</td>
        <td ${arrays.estado ? "" : ""}>
        <input type="checkbox" onclick="cambiarEstado(${arrays.id})" ${arrays.estado ? 'checked' : ''}>
        </td>
        <td>
            <button id="elimnar" type="button" onclick="eliminar(${arrays.id})" style="background-color: red"> X </button> 
        </td>
        </tr>        
        `
        if(arrays.estado){contar ++}
    }
    realizadas.innerHTML = contar;
    listado.innerHTML = html

}
const eliminar = (id) => {
    nuevaTarea = nuevaTarea.filter((elemento) => elemento.id != id)
    Listar(nuevaTarea)
}

const cambiarEstado = (id) => {
    nuevaTarea.map((elemento) =>{
        if (elemento.id == id) elemento.estado = !elemento.estado
    })
    Listar(nuevaTarea)
}


