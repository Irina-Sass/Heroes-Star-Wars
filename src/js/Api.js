export class Api {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;          
    }
  
    getHeroes() {
      const resource = 'people';
      const url = `${this.baseUrl}${resource}/`;      
      return fetch(url, { method: 'GET' })
      .then((res) => {        
        if (res.ok) {            
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        console.log(err);
    }) 
    }
  }