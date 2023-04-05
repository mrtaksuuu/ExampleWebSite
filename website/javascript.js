var kullanicilar=[
    {email:"mail1@gmail.com", sifre:1234},
    {email:"mail2@gmail.com", sifre:4567},
    {email:"mail5@gmail.com", sifre:45678},
  ]
  var mesajlar=[
    {email:"mail1@gmail.com",mesaj:"HERKESE GÜZEL BİR GÜN DİLİYORUM"},
    {email:"mail2@gmail.com",mesaj:"HAYIRLI SABAHLAR"},
    {email:"mail@gmail.com",mesaj:"günaydın"},
    {email:"mail2@gmail.com",mesaj:"selam2ar"},
  ]
  
  var uname=prompt("email adresiniz?")
  var psw=prompt("şifreniz?")
  
  function kullaniciVarmi(uname, psw){
    for(i=0;i<kullanicilar.length;i++){
      if(kullanicilar[i].email==email && kullanicilar[i].psw==psw){
        return true
      }
    }
    return false;
  }
  
  function giris(){
    if(kullaniciVarmi(uname,psw)){
      
      console.log(mesajlar)
  
    } else{
      console.log("Yanlış kullanıcı adı veya şifresi girdiniz")
  
    }
  
  }
  
  giris()