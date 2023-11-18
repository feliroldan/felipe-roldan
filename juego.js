class juego {
  constructor(cantenemigos) {
    this.cantidadenemigos=cantenemigos
      this.crearpersonaje()                       //objetos
      this.crearenemigos()
      
  }
  inicar() {
  }

  dibujar() {

    this.personaje.dibujar()

      for (let i=0; i< this.cantidadenemigos; i++) {
      this.enemigos[i].dibujar()
      this.enemigos[i].movizq()
    }
    
    for (let i = 0; i < objuego.cantidadenemigos; i++) {
    if (colision(objuego.personaje, objuego.enemigos[i])) {
      objuego.personaje.vida = false;
    }
  }
    
  }
  crearenemigos() {
    this.enemigos=[]

      for (let i=0; i< this.cantidadenemigos; i++) {
      this.enemigos[i]= new enemigo(800, 300)
    
  }
  }
  
  
  
  crearpersonaje() {
    this.personaje =new personaje(10, 300,50,50)
  }
  estadojuego() {
  }
  
  
  
   
  

  teclapres(keyCode) {
    this.personaje.teclapres(keyCode)
  }
}
