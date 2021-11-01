// ===============================================
//!פונקציה גלובלית
// async function GetApi(api) {
//     try{
//         return await fetch(api)
//         .then(response=>response.json())
//     }
//     catch(error){
//         return error
//     }
// }
// btn_input.onclick=()=>{
//     GetApi(url+search_input.value).then(res=>console.log(res))
// }
// ===============================================
function printDitels(object) {
        for (const key in object) {
div.innerHTML+=`${key} : ${object[key]} <br>`
console.log(`${key} : ${object[key]}`);
        }
    }  
// async function GoToApi(API) {
//   try {
//     return await fetch(API)
//       .then((res) => res.json())
      
//   } catch (error) {
//     return error;
//   }
// }
// btn_input.onclick=()=>{
// GoToApi("https://api.artic.edu/api/v1/artworks/"+search_input.value)
// .then((res) => printDitels(res.data));
// }
// 102472 id קיים במערכת
// ===============================================

function showGif() {
    sectionOfMovie.innerHTML='<img id="imgs" src="https://c.tenor.com/pI7xhu9bdSIAAAAM/one-piece.gif" width="100hv" height="100hv">' 
}

function hideGif() {
imgs.style.display = "none";
}

function print(obj) {
    obj.forEach(element => {
        sectionOfMovie.innerHTML+=` <div class=title>${element.title}<br>
        <div class="card">
        <img src="${element.image_url}"><br>
        ${element.score}<br>
        ${element.airing}<br>
        ${element.type}
        </div></div>`
    });
}
async function GoToApi(api) {
      try {
          showGif()
        return await fetch(api)
          .then((res) => res.json())    
      } catch (error) {
        return error;
      }
      finally{
        hideGif()   
      }
    }
    btn_input.onclick=()=>{
        
    GoToApi("https://api.jikan.moe/v3/search/anime?q="+search_input.value)
    .then((res) => print(res.results))
    // .finally(()=>hideGif())
    
    }
   