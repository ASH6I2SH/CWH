const insert = document.getElementById("insert");

let sentence=document.createElement('div');

let spanE=document.createElement('span')

document.addEventListener("keydown", function (e) {

  console.log(e.key);

  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
  </table>
    </div>`;

    spanE.innerHTML=e.key;
    console.log(sentence);
    console.log(sentence.appendChild(spanE))

    let newChild;

    if(e.key=='Backspace'){
      
      sentence.removeChild(spanE);
      // console.log(newChild);
      // document.querySelector('.words').append(newChild);
        
    }
    else{
      document.querySelector('.words').append(sentence);
    }

});
