import appleSalad from "../../../assets/Food/Salads/appleSalad.png"
import beetrootSalad from "../../../assets/Food/Salads/beetrootSalad.png"
import fishSalad from "../../../assets/Food/Salads/fishSalad.png"
import SaladChicken from "../../../assets/Food/Salads/SaladChicken.png"
import Saladflower from "../../../assets/Food/Salads/SaladFlower.png"
import SaladPortion from "../../../assets/Food/Salads/saladPortion.png"
import SaladSpecial from "../../../assets/Food/Salads/Saladspecial.png"
import saladWithSauce from "../../../assets/Food/Salads/SaladWithSauce.png"

const salads = [
    {
        image: appleSalad,
        name: 'Apple Salad',
        description: 'Delicious and Healthy salad with a portion of apples',
        price:' $25.99',
    },
    {
        image: beetrootSalad,
        name: 'Beetroot Salad',
        description: 'The sweetness of beetroot within a salad portion!',
        price:'$26.99',
    },
    {
        image: fishSalad,
        name: 'Fishy Salad',
        description: 'Succulent salad with strips of italian fishes!',
        price:'$25.99',
    },
    {
        image: SaladChicken,
        name: 'Extra Salad',
        description: 'Family-sized portion! The healthiest option for the greatest feasts!',
        price:'$27.50',
    },
    {
        image: Saladflower,
        name: 'Salad Lotus',
        description: 'A gourmet flower-shaped salad, special sauce and seasoning',
        price:'$32.99',
    },
    {
        image: SaladPortion,
        name: 'Tomato Salad',
        description: 'A salad portion with this the best tomato!',
        price:'$22.99',
    },
    {
        image: SaladSpecial,
        name: 'Small portion',
        description: 'A more compact option for a lower, more accessible price',
        price:'$17.50',
    },
    {
        image: saladWithSauce,
        name: 'Special Salad',
        description: 'Our house special! Amazing salad with chicken cubes and awesome sauce!',
        price:'$36.00',
    },
    
]

function generateSaladId() {
    let random  =  Math.random().toString(36).substring(7);
    let id = random+'_salads'
    return id
}

export default function saladCatalog(){

    salads.map(obj=> obj['id']=generateSaladId())

return salads
}
  


