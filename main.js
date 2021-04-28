function loadJSON(file,callback){
          var rawData=new XMLHttpRequest();
          rawData.overrideMimeType("application/json")
          rawData.open("GET",file,true);
          rawData.send(null)
          rawData.onreadystatechange= function (){
              if(rawData.readyState === 4 && rawData.status == "200")
              {
                  callback(this.responseText)
              }
          }
       
}

// function calling
loadJSON("data/data.json",function(text){
      let data=JSON.parse(text)
      console.log(data)
      profile(data.basics);
      info(data.careerobjective)
})

var parent=document.querySelector(".parent");
var left =document.querySelector('.left')
var right=document.querySelector('.right')


function profile(uprofile){

      var image=document.createElement('img');
         image.src="images/profile.jpg";
       left.appendChild(image);

      var name=document.createElement('h1');
      name.textContent=uprofile.name;
      left.appendChild(name);

      var designation=document.createElement('h2');
      designation.textContent=uprofile.designation;
      left.appendChild(designation);
      
    }
parent.appendChild(left);


function info(uinfo){
      var career=document.createElement('p');
      career.textContent=uinfo;
      right.appendChild(career);


}
parent.appendChild(right)



