import React from "react";


function zoom_in_images(){
    const imageLviv = document.getElementById('image_Lviv')
    imageLviv.style.width = '660px' 
}

function diminish_images(){
    const imageLviv = document.getElementById('image_Lviv')
    imageLviv.style.width = '550px' 
}

function deleteImage(){
    const imageLviv = document.getElementById('image_Lviv')
    imageLviv.style.display = 'none';
}

function addImage(){
    const imageLviv = document.getElementById('image_Lviv')
    imageLviv.style.display = 'block';
}

function Image(props) {
  return (
    <div>
      <section>
        <div>
          <a href="https://www.032.ua/" target="_blank">
            <img
              id="image_Lviv"
              src="https://ukasko.ua/storage/articles/jak-organizuvati-podorozh-do-lvova-samomu.jpg"
              width="550px"
              alt="img"
            />
          </a>
        </div>
      </section>
      <button id="add" onClick={addImage}>
        Додати
      </button>
      <button id="diminish" onClick={diminish_images}>
        Зменшити
      </button>
      <button id="zoom_in" onClick={zoom_in_images}>
        Збільшити
      </button>
      <button id="delete" onClick={deleteImage}>
        Видалити
      </button>
    </div>
  );
}

export default Image;
