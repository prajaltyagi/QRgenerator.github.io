
        
let imgbox=document.getElementById("imgbox")
let qrimage=document.getElementById("qrimage")
let entertext=document.getElementById("entertext")
let string=" "
function GenerateQR(){
    qrimage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"+entertext.value
        }
      function  RefreshQR(){
        qrimage.src = string
        entertext.value=string
      }
    