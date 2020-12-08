export class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  // получить информацию по запросу
  getInfo(url) {
    if (url.includes('http:')) {
      url = url.replace('http:', 'https:');
    }
    return fetch(url, { method: 'GET' })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // получить список всех героев
  getHeroes() {
    const resource = 'people';
    const url = `${this.baseUrl}${resource}/`;    
    return this.getInfo(url);  
  }
}
