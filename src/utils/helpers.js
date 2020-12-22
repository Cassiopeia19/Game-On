import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.production.min";

export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US', {
        style:'currency',
        currency: 'USD'
    }).format(number)
    return newNumber
}

export const getUniqueValues = (data,type) => {
  if (!data.games?.length) {
    return [];
  }
  let unique = data
    .games.map((item) => item[type])
    .sort((a, b) => a - b);
  return['All', ...new Set(unique)];
}

// for localhost
  // "scripts": {
  //   "start": "react-scripts start",
  //   "build": "react-scripts build",
  //   "test": "react-scripts test",
  //   "eject": "react-scripts eject"
  // },
  
//for live app
//   "scripts": {
//   "start": "set PORT=4200 && react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject",
//   "predeploy": "npm run build",
//   "deploy": "gh-pages -d build"
// },