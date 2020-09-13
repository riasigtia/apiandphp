document.getElementById("register1").onclick = function() {

    document.getElementById("home").style.display = "none";
    document.getElementById("myform").style.display = "block";
    document.getElementById("data").style.display = "none";
    
    }
    document.getElementById("current").onclick = function() {
    
    document.getElementById("home").style.display = "block";
    document.getElementById("myform").style.display = "none";
    document.getElementById("data").style.display = "none";
    }
    document.getElementById("table").onclick = function() {

        document.getElementById("home").style.display = "none";
        document.getElementById("myform").style.display = "none";
        document.getElementById("data").style.display = "block";
        }
document.querySelector('#regform').addEventListener('submit',e =>{
          e.preventDefault();
          let form= document.querySelector('#regform');
          const data = new URLSearchParams();
          for(const p of new FormData(form)){
              data.append(p[0],p[1]);
          }
         fetch('main.php',{
              method: 'POST',
              body: data
          }).then(response => response.text()).then(response =>{
                 document.querySelector('#reg').innerHTML = response;
          }).catch(error => console.log(error));
    });
    fetch('data.php').then((res) => res.json())
.then(response =>{
     // console.log(response[0].NAME);
      let output='';
      for(let i in response){
         output += '<tr><td>'+ response[i].S_NO +'</td><td>'+ response[i].NAME +'</td><td>'+ response[i].EMAIL +'</td><td>'+ response[i].PASSWORD +'</td><td>'+ response[i].DATE +'</td><td>';
      }

      document.querySelector('.tbody').innerHTML = output;
}).catch(error=> console.log(error));


function checkmail(str2)
{  var pos1= str2.indexOf("@");
   var pos2= str2.indexOf(".");
  if(pos1!= -1 && pos2!= -1)
  {
    if(pos1>= 1 && (pos2-pos1) >= 2    && (str2.length-1-pos2) >= 2 )
  {
    return true;

  }
  else 
  {
    return false;
  }

  }
  else{
    return false;
  }
}

function checkPword(str1)
  {
      var n1=0;
      var n2=0;
      var n3=0;
      for(i=0; i<str1.length; i++){
          if (str1[i]>='a' && str1[i]<='z') 
                n1++;
          else if (str1[i]>='A' && str1[i]<='Z') 
                n2++;
          else if (str1[i]>='0' && str1[i]<='9') 
                n3++;
      }
      if(n1>0 && n2>0 && n3>0){
          return true;
      }
      else{
          return false;
}
}

function validateForm() {
  var nam = document.myform.name.value;
  var password = document.myform.password.value;
  var email = document.myform.email.value;
  var x= document.myform.gender;

  if (nam === "" || nam === null) {
    document.getElementById("nam1").innerHTML =
      "Name should not be empty";
    return false;
  }
  else if (password === "" || password === null) {
    document.getElementById("pword").innerHTML =
      "Password should not be empty";
    return false;
  }
  else if (password.length<4) {
    document.getElementById("pword").innerHTML =
      "Password should be of minimum 4 characters";
    return false;
  }
  else if (!checkPword(password)) {
    document.getElementById("pword").innerHTML =
      "Password should have 1 digit, 1 lowercase and 1 uppercase character";
    return false;
  }
  else if (email === "" || email === null) {
    document.getElementById("mail").innerHTML =
      "Email should not be empty";
    return false;
  }
  else if (!checkmail(email)) {
    document.getElementById("mail").innerHTML =
      "Email should be valid";
    return false;
  }
  return true;
}
