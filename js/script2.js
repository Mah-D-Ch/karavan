const item = document.getElementById('item-6');
const selected_customer=document.getElementById('selected-customer');
const customers=document.querySelector('.scrollable-section');


item.addEventListener('mouseenter',()=>{
    console.log("enter")
    customers.style.display='none';
    selected_customer.style.display="block"
  })

  selected_customer.addEventListener('mouseleave',() =>{
    customers.style.display='block';
    selected_customer.style.display="none" 
  
  });
