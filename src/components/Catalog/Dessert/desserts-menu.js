import BlkBerrydessert from "../../../assets/Food/Desserts/blackberry.png"
import chocoCake from "../../../assets/Food/Desserts/chocoCake.png"
import cookie from "../../../assets/Food/Desserts/cookie.png"
import iceCream from "../../../assets/Food/Desserts/iceCream.png"
import specialCake from "../../../assets/Food/Desserts/specialCake.png"
import strawberryCake from "../../../assets/Food/Desserts/strawberryCake.png"
import SweetCakePlus from "../../../assets/Food/Desserts/SweetCakePlus.png"
import sweetCombo from "../../../assets/Food/Desserts/sweetCombo.png"


const desserts = [
    {
        image: BlkBerrydessert,
        name: 'Cupcakes',
        description: 'Incredible cupcakes!',
        price:' $18.99',
    },
    {
        image: chocoCake,
        name: 'Chocolate Cake',
        description: 'Incredible recipe from one of the most famous chefs in America!',
        price:'$15.99',
    },
    {
        image: cookie,
        name: 'Cookies',
        description: 'Housemade cookies with drops of chocolate',
        price:'$4.99',
    },
    {
        image: iceCream,
        name: 'Ice Cream',
        description: 'Delicious frozen sweets!',
        price:'$12.50',
    },
    {
        image: specialCake,
        name: 'Special Cake',
        description: 'The best cake in town! Marvelous black and white chocolate!',
        price:'$20.00',
    },
    {
        image: strawberryCake,
        name: 'Strawberry Cake',
        description: 'Wonderful strawberry and blaberry cake!',
        price:'$12.99',
    },
    {
        image: SweetCakePlus,
        name: 'Sweet Cake PLUS',
        description: 'Party-sized sweet with chocolate and strawberry!',
        price:'$13.50',
    },
    {
        image: sweetCombo,
        name: 'Mega Sweet Combo',
        description: 'MASSIVE combo of sweet treats! Chocolate, ice-crem, strawbrry and MORE!',
        price:'$32.99',
    },
    
]

function generateDessertsId() {
    let random  =  Math.random().toString(36).substring(7);
    let id = random+'_desserts'
    return id
}

export default function dessertCatalog(){

    desserts.map(obj=> obj['id']=generateDessertsId())

return desserts
}
  

