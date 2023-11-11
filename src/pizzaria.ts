class Pizza{
  preparar(): void{
    console.log('Preparando a pizza...')
  }

  assar(): void{
    console.log('Assando a pizza...')
  }

  cortar(): void{
    console.log('Cortando a pizza...')
  }

  empacotar(): void{
    console.log('Empacotando a pizza..')
  }
}

class PizzaDeQueijo extends Pizza{
  preparar(): void {
      console.log('Preparando pizza de queijo...')
  }

  assar(): void {
      console.log('Assando pizza de queijo...')
  }

  cortar(): void {
      console.log('Cortando pizza de queijo...')
  }

  empacotar(): void {
      console.log('Empacotando pizza de queijo...')
  }
}

class PizzaGrega extends Pizza{
  preparar(): void {
      console.log('Preparando pizza grega...')
  }
  assar(): void {
      console.log('Assando pizza grega...')
  }
  cortar(): void {
      console.log('Cortando pizza grega...')
  }
  empacotar(): void {
      console.log('Empacotando pizza grega...')
  }
}

class PizzaDePepperoni extends Pizza{
  preparar(): void {
      console.log('Preparando pizza de pepperoni...')
  }
  assar(): void {
      console.log('Assando pizza de pepperoni...')
  }
  cortar(): void {
      console.log('Cortando pizza de pepperoni...')
  }
  empacotar(): void {
      console.log('Empacotando pizza de pepperoni...')
  }
}

class PizzaDeMolusco extends Pizza{
  preparar(): void {
      console.log('Preparando pizza de molusco...')
  }
  assar(): void {
      console.log('Assando pizza de molusco...')
  }
  cortar(): void {
      console.log('Cortando pizza de molusco...')
  }
  empacotar(): void {
      console.log('Empacotando pizza de molusco...')
  }
}

class PizzaVegetariana extends Pizza{
  preparar(): void {
      console.log('Preparando pizza vegetariana...')
  }
  assar(): void {
      console.log('Assando pizza vegetariana...')
  }
  cortar(): void {
      console.log('Cortando pizza vegetariana...')
  }
  empacotar(): void {
      console.log('Empacotando pizza vegetariana...')
  }
}



class SimplePizzaFactory{
  criarPizza(tipo: string): Pizza | null{
    let pizza: Pizza | null = null
    tipo = tipo.toLowerCase()
    if(tipo === 'queijo'){
      pizza = new PizzaDeQueijo()
    }
    // }else if(tipo === 'grega'){
      //   pizza = new PizzaGrega()
      // }
      else if(tipo === 'pepperoni'){
        pizza = new PizzaDePepperoni()
      }
      else if(tipo === 'molusco'){
        pizza = new PizzaDeMolusco()
      }
      else if(tipo === 'vegetariana'){
        pizza = new PizzaVegetariana()
      }
      return pizza
    }
  }
  
  class PizzaStore{
    // private simplePizzaFactory: SimplePizzaFactory
    constructor(private simplePizzaFactory: SimplePizzaFactory){
      // this.simplePizzaFactory = simplePizzaFactory
    }
    pedirPizza = (tipo: string): Pizza | null => {
      let pizza: Pizza | null = this.simplePizzaFactory.criarPizza(tipo)
      pizza?.preparar()
      pizza?.assar()
      pizza?.cortar()
      pizza?.empacotar()
      return pizza
    }
    
  }
let pizzaStore: PizzaStore = new PizzaStore(new SimplePizzaFactory())
console.log(pizzaStore.pedirPizza('queijo'))
// let pizza: Pizza | null = pedirPizza('molusco')
