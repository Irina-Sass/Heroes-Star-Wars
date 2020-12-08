export class Vehicle {  

    create(vehicleObject) {    
        const template = document.createElement('div');
        template.insertAdjacentHTML('beforeend', `
            <div class="vehicle">
                <h3 class="vehicle__title"></h3>
                <p class="vehicle__description">Размер команды: <span class="vehicle__description-crew"></span></p>                 
                <p class="vehicle__description">Максимальная скорость в атмосфере: <span class="vehicle__description-max-speed"></span></p> 
                <p class="vehicle__description">Модель: <span class="vehicle__description-model"></span></p>                 
                <p class="vehicle__description">Длина: <span class="vehicle__description-length"></span> метров</p>                            
            </div>`);

        const vehicle = template.firstElementChild;        
       
        vehicle.querySelector('.vehicle__title').textContent = vehicleObject.name;
        vehicle.querySelector('.vehicle__description-crew').textContent = vehicleObject.crew;
        vehicle.querySelector('.vehicle__description-max-speed').textContent = vehicleObject.max_atmosphering_speed;   
        vehicle.querySelector('.vehicle__description-model').textContent = vehicleObject.model;  
        vehicle.querySelector('.vehicle__description-length').textContent = vehicleObject.length;        
        
        return vehicle;
    }
}