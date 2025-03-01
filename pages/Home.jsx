import React from 'react'
import Input from '../components/Input';
import Check from '../components/Check';
import '../styles/Home.css';
// import Body from '../components/ProductRow';
import ProductRow from '../components/ProductRow';

export default function Home() {
    const PRODUCTS = [  
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
    ];
    const [value, setValue] = React.useState('');
    const [isStocked, setIsStocked] = React.useState(false);
    const affiche = [];
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onCheck = (e) => {
        setIsStocked(e.target.checked);
    }
    let lastCategory = null;
    const visible = PRODUCTS.filter((product) => {
        if(isStocked && !product.stocked){
            return false;
        }
        if(value && product.name.toLowerCase().indexOf(value.toLowerCase()) === -1){
            return false;
        }
        return true;
    });
    visible.forEach((product) => {
        if(affiche !== product.category){
            affiche.push(<ProductRow key={product.name} liste={product} />);
        }

        lastCategory = product.category;
    })
  return (
    <div className='Home'>
        <header>
            <Input placeholder='Search...' value={value} onchange={onChange} />
            <Check label=' les produits stockers' id='stocked'value={isStocked} onchange={onCheck} />
        </header>
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {affiche}
                </tbody>
            </table>
        </section>
    </div>
  )
}
