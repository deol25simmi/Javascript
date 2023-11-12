let buttons = document.querySelectorAll('.button')

let body = document.querySelector('body')

buttons.forEach(function (button)
{
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    const id = e.target.id
    console.log(id)
    if(id === 'green')
    {
      body.style.backgroundColor= id
    }
    else if(id=='red')
    {
      body.style.backgroundColor = id
    }
    else if(id=='blue')
    {
      body.style.backgroundColor = id
    }
    else if(id=='yellow')
    {
      body.style.backgroundColor = id
    }

  }
)})
