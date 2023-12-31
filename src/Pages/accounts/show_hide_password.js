let show_hide_password = (state,setpasswordState) =>{
    let button = document.getElementById('show-hide-password')
    let input = document.getElementById('password')
    if (state === 'hide') {
      setpasswordState('show')
      button.classList.replace('fa-eye-slash', 'fa-eye')
      input.type = 'text'
    } else if (state === 'show') {
      setpasswordState('hide')
      input.type = 'password'
      button.classList.replace('fa-eye', 'fa-eye-slash')
    }
  } 
export default show_hide_password