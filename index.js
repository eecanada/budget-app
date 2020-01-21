const budgetController = (function(){
  const x = 23

  const add = function (a){
    return x + a
  }
  return {
    publicTest: function(b){
      return add(b) 
    }
  }
})()
budgetController.publicTest(5) //->28


const UIcontroller = (function(){

})()


const controller = (function(budgetCtrl, UICtrl){
  const z = budgetController.publicTest(5)
    return {
      anotherPublic: function (){
        console.log(z)
      }
    }
})(budgetController,UIcontroller )
