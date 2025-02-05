// export const API_URL = "http://api.mayapril.com/api"
export const API_URL = "http://localhost:5000/api"
export const CATEGORY = "kategoria"
export const FAVOURITES = "ulubione"
export const ALL = "wszystkie"
export const SORT = "sortuj"
export const NEWEST = "najnowsze"
export const OLDEST = "najstarsze"
export const VALID_SORT_VALUES = [NEWEST, OLDEST];
export const categories = [
  {
    "id": "1",
    "name": "Wiedza",
    "slug": "wiedza",
    "image": 'knowledge.png',
    "icon": 'icon-knowledge.svg',
    "color": '#444E8D',
    "textColor": '#ffffff'
  },
  {
    "id": "2",
    "name": "Inspiracje",
    "slug": "inspiracje",
    "image": "inspirations.png",
    "icon": "icon-inspirations.svg",
    "color": '#FFBF42',
    "textColor": '#414042'
  },
  {
    "id": "3",
    "name": "Interpretacje",
    "slug": "interpretacje",
    "image": 'interpretations.png',
    "icon": 'icon-interpretations.svg',
    "color": '#D94F4F',
    "textColor": '#ffffff'
  },
  {
    "id": "4",
    "name": "Dostępne",
    "slug": "dostepne",
    "image": 'accessible.png',
    "icon": 'icon-accessible.svg',
    "color": '#82E49A',
    "textColor": '#3F3A54'
  }
]