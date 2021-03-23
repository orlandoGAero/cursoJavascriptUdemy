class Cliente {
    // hacer privado un atributo
    #nombre
    
    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

}

const cliente1 = new Cliente();
cliente1.setNombre('Orlando');
console.log(cliente1.getNombre());

