import drinkBlueberry from "../../../assets/Food/Beverages/blueberry.png"
import doubleDrink from "../../../assets/Food/Beverages/doubleDrink.png"
import lemoncoke from "../../../assets/Food/Beverages/lemonCoke.png"
import limeDrink from "../../../assets/Food/Beverages/lime.png"
import NaturalDrink from "../../../assets/Food/Beverages/NaturalDrink.png"
import pureLemon from "../../../assets/Food/Beverages/pureLemon.png"
import drinkStrawberry from "../../../assets/Food/Beverages/strawbeery.png"
import redDrink from "../../../assets/Food/Beverages/redDrink.png"

const beverages = [
    {
        image: drinkBlueberry,
        name: 'Blueberry',
        description: '',
        price:' $8.99',
    }, 
    {
        image: doubleDrink,
        name: 'Two for One',
        description: '',
        price:'$16.99',
    },
    {
        image: lemoncoke,
        name: 'Coke',
        description: '',
        price:'$7.50',
    },
    {
        image: limeDrink,
        name: 'Lime',
        description: '',
        price:'$9.99',
    },
    {
        image: NaturalDrink,
        name: 'Natural',
        description: '',
        price:'$10.50',
    },
    {
        image: pureLemon,
        name: 'Lemon',
        description: '',
        price:'$8.99',
    },
    {
        image: drinkStrawberry,
        name: 'Strawberry',
        description: '',
        price:'$12.99',
    },
    {
        image: redDrink,
        name: 'Red fruits',
        description: '',
        price:'$8.99',
    },
    
]

function generateBeverageId() {
    let random  =  Math.random().toString(36).substring(7);
    let id = random+'_beverages'
    return id
}

export default function beverageCatalog(){

    beverages.map(obj=> obj['id']=generateBeverageId())

return beverages
}
  

