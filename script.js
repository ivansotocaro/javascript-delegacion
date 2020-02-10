
const body = document.querySelector('#body');

/* evento de agregarbotones */
$(document).on("click", "#obtener", (e)=>{
    e.preventDefault();
    $("#botones").append(`
    <button class="btn btn-primary">primary</button>
    <button class="btn btn-secondary">secondary</button>
    <button class="btn btn-success">success</button>
    <button class="btn btn-danger">danger</button>
    <button class="btn btn-warning">warning</button>
    <button class="btn btn-info">info</button>
    <button class="btn btn-light">light</button>  
    `);
   
    $('#obtener').attr("disabled", true);
});


$(document).on("click", "#botones", (e)=>{
    e.preventDefault();
    let btn = e.target.className;
    //console.log(e.target.className);

    switch(btn){

        case 'btn btn-primary':
           body.className = 'btn-primary';
           localStorage.setItem('colorcito', 'btn-primary');
          break;

        case 'btn btn-secondary':
           body.className = 'btn-secondary';
           localStorage.setItem('colorcito', 'btn-secondary');
          break;

        case 'btn btn-success':
           body.className = 'btn-success';
           localStorage.setItem('colorcito', 'btn-success');
          break;

        case 'btn btn-danger':
            body.className = 'btn-danger';
            localStorage.setItem('colorcito', 'btn-danger');
          break;

        case 'btn btn-warning':
            body.className = 'btn-warning';
            localStorage.setItem('colorcito', 'btn-warning');
          break;

        case 'btn btn-info':
            body.className = 'btn-info';
            localStorage.setItem('colorcito', 'btn-info');
          break;

        case 'btn btn-light':
            body.className = 'btn-light';
            localStorage.setItem('colorcito', 'btn-light');
          break;
          default:
              alert('Debe presionar un boton')
    }
});
        

    
(()=>{
  let color = localStorage.getItem('colorcito');
  if(color){
    body.className = color;
  }
})();


