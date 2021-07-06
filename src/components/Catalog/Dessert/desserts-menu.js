import catupiry from "../../../assets/Food/Pizza/Catupiry.png"
import American from "../../../assets/Food/Pizza/American.png"
import HouseSpecial from "../../../assets/Food/Pizza/HouseSpecial.png"
import Italian from "../../../assets/Food/Pizza/Italian.png"
import Peperonni from "../../../assets/Food/Pizza/PepperoniOnions.png"
import double from "../../../assets/Food/Pizza/Combo2x1.png" 
import shrooms from "../../../assets/Food/Pizza/shroom.png"
import cheesetomatoes from "../../../assets/Food/Pizza/TomatosAndcheese.png"


const desserts = [
    {
        image: catupiry,
        name: 'Catupiry',
        description: 'Delicious Pizza made with Catupiry, suculent chicken and love!',
        price:' $58.99',
    },
    {
        image: American,
        name: 'American',
        description: 'Incredible recipe from one of the most famous chefs in America!',
        price:'$58.99',
    },
    {
        image: HouseSpecial,
        name: 'House Special',
        description: 'Our proud special recipe, everything you could ever want in a pizza!',
        price:'$65.99',
    },
    {
        image: Italian,
        name: 'Italian',
        description: 'Marvelous Italian cheese and tomatoes, crispy crust and low price!',
        price:'$47.99',
    },
    {
        image: Peperonni,
        name: 'Pepperoni',
        description: 'The classic Pepperoni with delicious onions, garanteed crowd pleaser!',
        price:'$62.99',
    },
    {
        image: double,
        name: 'Two for One combo',
        description: 'Two incredible pizzas made with love! Only the best for the whole family!',
        price:'$62.99',
    },
    {
        image: shrooms,
        name: 'Mushrooms',
        description: 'Amazing Cheese, tomatoes, European mooshrooms and more',
        price:'$62.99',
    },
    {
        image: cheesetomatoes,
        name: 'Cheese and tomatoes',
        description: 'Wonderful tomatoes slices covered in the best cheese can offer!',
        price:'$62.99',
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
  

