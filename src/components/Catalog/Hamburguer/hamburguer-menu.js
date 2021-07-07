import Barbecue from "../../../assets/Food/Burguer/BarbecueBurguer.png"
import CheddarSpecial from "../../../assets/Food/Burguer//CheddarSpecial.png"
import comboFries from "../../../assets/Food/Burguer/comboFries.png"
import DoubleBurguer from "../../../assets/Food/Burguer/DoubleBurguer.png"
import extraBacon from "../../../assets/Food/Burguer/extraBacon.png"
import twoforone from "../../../assets/Food/Burguer/twoforOne.png"
import VeganBurguer from "../../../assets/Food/Burguer/VeganBurguer.png"
import xBacon from "../../../assets/Food/Burguer/Xbacon.png"

const burguers = [
    {
        image: Barbecue,
        name: 'Barbecue Special',
        description: 'Two floors of pure deliciousness with layers of barbecue!',
        price:' $38.99',
    },
    {
        image: CheddarSpecial,
        name: 'American',
        description: 'The best cheddar a burguer can offer! Strips of onions and lots of bacon!',
        price:'$30.99',
    },
    {
        image: comboFries,
        name: 'Burguer+Fries combo',
        description: 'Incredible combo! A burguer accompanied of fries and one refreshing drink!',
        price:'$52.99',
    },
    {
        image: DoubleBurguer,
        name: 'Double burguer',
        description: 'TWO floors of massive burguers! The best meal of the week!',
        price:'$40.99',
    },
    {
        image: extraBacon,
        name: 'Bacon Colossus',
        description: 'Our biggest burguer! Tons of bacon on top of our largest burguers!',
        price:'$43.50',
    },
    {
        image: twoforone,
        name: 'Two for One combo',
        description: 'Two incredible burguers for the price of one!',
        price:'$55.50',
    },
    {
        image: VeganBurguer,
        name: 'Vegan Delight',
        description: '100% Vegan burguer. The healthiest option for the lowest price!',
        price:'$38.00',
    },
    {
        image: xBacon,
        name: 'Le Burguer',
        description: 'A lighter option for your kids! Topped with Cheddar and Bacon!',
        price:'$32.99',
    },
    
]

function generateBurgerId() {
    let random  =  Math.random().toString(36).substring(7);
    let id = random+'_burguer'
    return id
}

export default function burguerCatalog(){

burguers.map(obj=> obj['id']=generateBurgerId())

return burguers
}