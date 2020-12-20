import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.production.min";

export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US', {
        style:'currency',
        currency: 'USD'
    }).format(number)
    return newNumber
}

export const getUniqueValues = (data,type) => {
    let unique = data.games?.map((item) => item[type])
    return['all', ...new Set(unique)]
}