import axios from 'axios';

export class ApiNmdb {
  constructor() {
    this.url = 'https://api.themoviedb.org/3/';
    this.key = '91ae85947dca7203ec2b4d7841a3c73b';
    this.film = 'King';
    this.year = 2001;
    this.ganre = 'Action';
    this.country = '';
    this.page = 1;
    this.region = 'USA';
    //Specify a ISO 3166-1 code to filter release dates. Must be uppercase.
  }

  async fetchFilmList() {
    const url = `${this.url}search/movie?api_key=${this.key}&query=${this.film}&primary_release_year=${this.year}&page=${this.page}&region=${this.region}`;
    let { data } = await axios.get(url);
    return data.results;
  }
}
// export class ApiPixabay {
//   constructor() {
//     this.url = 'https://pixabay.com/api';
//     this.key = '35785441-a207f2b150a26c5e7bb8ad037';
//     this.page = 1;
//     this.searchImg = '';
//     this.totalHits = 0;
//   }

// async ganreList() {
//   const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.key}&language=en-US`;
//   let { data } = await axios.get(url);
//   console.log(data);
// }

// async countryList() {
//   const url = `https://api.themoviedb.org/3/configuration/countries?api_key=${this.key}`;
//   let { data } = await axios.get(url);
//   console.log(data);
// }

//   async fetchImg() {
//     const url = `${this.url}/?key=${this.key}&q=${this.searchImg}&page=${this.page}`; `${this.url}/search/${this.film}?api_key=<<${this.key}>>&${this.page}`
//     const config = {
//       params: {
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//         per_page: 40,
//       },
//     };
//     const { data } = await axios.get(url, config);
//     this.totalHits = data.totalHits;
//     return data.hits;
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get serchLabel() {
//     return this.searchImg;
//   }

//   set serchLabel(label) {
//     this.searchImg = label;
//   }

//   get getNumeOfPage() {
//     return this.page;
//   }

//   set setNumOfPage(numpage) {
//     this.page = numpage;
//   }

//   get getTotalHits() {
//     return this.totalHits;
//   }

//   set setTotalHits(totalhit) {
//     this.totalHits = totalhit;
//   }
// }
