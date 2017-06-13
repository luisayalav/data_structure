var  assert = require('assert');


// pilas

function Node(data) {
    this.data = data;
    this.next = null;
}
function Pila() {
    this._length = 0;
    this.head = null;
}

Pila.prototype.push = function(valor){
  var nuevoNode = new Node(valor)
  nuevoNode.next = this.head
  this.head = nuevoNode
  this._length++

}

Pila.prototype.pop = function(valor){
  var nodeSaliente = this.head
  this.head = this.head.next
  this._length--
  return nodeSaliente
}
Pila.prototype.getAll= function (valor) {
  current = this.head
  if (!current){
    console.log("lista vacia")
  }
	while(current){
		current = current.next;
    n++
	}
	return current
}
Pila.prototype.len = function (valor) {
  for(var i =0 ; i< Pila.length; i++){
    Pila[i]
  }
  return
}


var stack = new Pila()

stack.push("valor")
console.log(stack)

stack.push("asd")
console.log(stack)
