import React from 'react'
import Input from '../components/Input';
import Check from '../components/Check';
import '../styles/Home.css';

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
    const onChange = (e) => {
        setValue(e.target.value);
    }
  return (
    <div className='Home'>
        <header>
            <Input placeholder='Search...' value={value} onchange={onChange} />
            <Check label=' les produits stockers' id='stocked'value={isStocked} onchange={onChange} />
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
                    {PRODUCTS.}
                </tbody>
            </table>
        </section>
    </div>
  )
}
