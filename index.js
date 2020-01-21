const budgetController = (function(){
  
})()



const UIcontroller = (function(){

})()


const controller = (function(budgetCtrl, UICtrl){
  
  const ctrlAddItem = function (){
    // 1. get the field input data 
    // 2. add item to the budget controller 
    // 3. add the time to the UI
    // 4. calculate the budget 
    // 5. Display the budget on the UI
    console.log('it works')
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem) 
  document.addEventListener('keypress', function(event){
    if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem()
    }
  })

})(budgetController,UIcontroller )
