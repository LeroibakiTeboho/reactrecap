import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
 

  //    || useState Hook for items
  const [items, setItems] = useState(
    [
        {
            id: 1,
            checked: false,
            item: 'One half pound bag of Cocoa Covered Almonds Unsalted'
        },
        {
            id: 2,
            checked: false,
            item: 'Item 2'
        },
        {
            id: 3,
            checked: false,
            item: 'Item 3'
        }
    ]
   );


  //    || handleCheck event
  const handleCheck = (id) =>{
  const listItems = items.map((item) => item.id === id? {...item, checked: !item.checked} : item);
  setItems(listItems);
  localStorage.setItem('ShoppingList', JSON.stringify(listItems));
      
  }

  //   || handleDelete event
   const handleDelete = (id) =>{
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('ShoppingList', JSON.stringify(listItems));

    }



  return (
    <div className="App">   
      {/* || Header  */}
       <Header title='Groceries List' />

      {/* || Content */}
       <Content
        items={items}      
        handleCheck={handleCheck}
        handleDelete={handleDelete} 
       />

      {/* || Footer */}
       <Footer length={items.length}/>    
    </div>
  );
}

export default App;
