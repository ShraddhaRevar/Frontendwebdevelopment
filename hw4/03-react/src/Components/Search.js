import React from "react";
import './Search.css';


function Searchbar() {


  const url = 'https://thronesapi.com/api/v2/Characters';
  var id = document.getElementById('input').value;

  function fetchData(url){

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
          
            data.forEach((character) =>{

            if(character.id === id){
                    const item = document.createElement('div');
                    item.classList.add('item');
                    console.log(
                    item.innerHTML=` <a href='#'>
                        <img width="200px" height="200px" src = "${character.imageUrl}" alt ="${character.fullName}" >
                        <h4>${character.fullName}</h4>
                        <h5>${character.title}</h5>
                        </a>`,
                    );
                    this.pic.appendChild(item);

                    }
           
            });
                
            })
                    
        .catch((error) => console.error(error));
};
fetchData(url);

   
  return (
    <div>
      <div className="control"> 
      <h3> Search for you favorite character! </h3>
        <input
          id= "input"
          className="input"
          type="text"
          placeholder="Search for your favorite character by ID"
          onClick={fetchData}
        />
        <input type="button" class="click" name="Check" value="Search"  onClick={fetchData()} />
      </div>
    </div>
  );
}

export default Searchbar;