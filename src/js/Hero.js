export class Hero {  

    create(heroObject) {    
        const template = document.createElement('div');
        template.insertAdjacentHTML('beforeend', `
            <div class="card">
                <h2 class="card__title"></h2>
                <p class="card__description">Год рождения: <span class="card__description-birth-year"></span></p> 
                <p class="card__description">Рост: <span class="card__description-height"></span></p> 
                <p class="card__description">Цвет глаз: <span class="card__description-eye-color"></span></p>                 
                <p class="card__description">Цвет волос: <span class="card__description-hair-color"></span></p>
                <p class="card__description">Вес: <span class="card__description-mass"></span></p>
                <p class="card__description">Цвет кожи: <span class="card__description-skin-color"></span></p>
                <p class="card__description">Пол: <span class="card__description-gender"></span></p> 
                <p class="card__description">Количество транспортных средств: <span class="card__description-vehicles"></span></p>     
                <p class="card__description">Количество фильмов: <span class="card__description-films "></span></p>             
            </div>`);

        const hero = template.firstElementChild;        
       
        hero.querySelector('.card__title').textContent = heroObject.name;
        hero.querySelector('.card__description-birth-year').textContent = heroObject.birth_year;
        hero.querySelector('.card__description-height').textContent = heroObject.height;      
        hero.querySelector('.card__description-eye-color').textContent = heroObject.eye_color;  
        hero.querySelector('.card__description-hair-color').textContent = heroObject.hair_color;        
        hero.querySelector('.card__description-mass').textContent = heroObject.mass;  
        hero.querySelector('.card__description-skin-color').textContent = heroObject.skin_color;  
        hero.querySelector('.card__description-gender').textContent = heroObject.gender; 
        hero.querySelector('.card__description-vehicles').textContent = heroObject.vehicles.length; 
        hero.querySelector('.card__description-films').textContent = heroObject.films.length; 

        hero.setAttribute('data-name', heroObject.name);
        return hero;
    }
}