var  assert = require('assert');
// insertar un node en un arbol

function BinaryTree() {
  this._root = null;
}
  var node = {
    value: value,
    left: null,
    right: null
  }

 BinaryTree.prototype= {
   constructor:BinaryTree,

   insert:function(node,nodeActual){
     if(node.value < nodeActual.value){
       if(node.left === null){
         nodeActual.left= node;
       }else {
       this.insert(node, nodeActual.left);
     }else if (node.value > nodeActual.value) {
       if(node.right === null){
         nodeActual.right = node;
       }else {
         this.insert(node,nodeActual.right);
       }
     }

   },
// funcion principal
   add:function (value) {
     var node = {
       value:value,
       left:null,
       right:null
     }

     if (this._root === null){
       this._root = node;
     }else{
       this.insert(node, this._root);
     }
   },
 }

// remover un node de un arbol
//buscar el valor del node a eliminar
// funcion de busqueda

findValues: function(value, nodeActual, padre) {
   if (nodeActual === null) {
     return null;
   }

 if (value < nodeActual.value){
   return this.findValues(value , nodeActual.left , nodeActual );
 }else if (value > nodeActual.value){
   return this.findValues(value , nodeActual.right , nodeActual);
 }else{
   return {
     nodeActual,
     padre
   }
 }
}
// funcion de remover nodes
remove: function (value) {
  var replacement = null,
      replacementParent = null;

  var v = this.findValues(value, this._root, null);

  if (v !== null) {
    var childCount = (v.nodeActual.left !== null ? 1 : 0) + (v.nodeActual.right !== null ? 1 : 0);

    if (v.nodeActual === this._root) {

    } else {

    }
  }
},
if (v.nodeActual === this._root) {
        switch (childCount) {
          case 0:
            this._root = null;
            break;
          case 1:
            this._root = (v.nodeActual.right === null ? v.nodeActual.left : v.nodeActual.right)
            break;
