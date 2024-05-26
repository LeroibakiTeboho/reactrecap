import { useState } from 'react';
import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';

function App() {
 

  //  || useState Hook for items
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('ShoppingList')));

  // || useState Hook for new items
  const [newItem, setNewItem] = useState('');

  // || useState Hook for search items
  const [search, setSearch] = useState();





  //  || set and save items to localStorage
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('ShoppingList', JSON.stringify(newItems));
 }

  //  || Add new item to list
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
   }

  //  || handleCheck event
  const handleCheck = (id) =>{
  const listItems = items.map((item) => item.id === id? {...item, checked: !item.checked} : item);
  setAndSaveItems(listItems);
      
  }

  //  || handleDelete event
  const handleDelete = (id) =>{
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);

  }

  //  || handleSubmit event
  const handleSubmit = (e) =>{

    // || Prevent reloading after submit
    e.preventDefault();
    
    if(!newItem) return;

    addItem(newItem);
    setNewItem('');
  }





  return (
    <div className="App">   
      {/* || Header  */}
       <Header title='Groceries List' />

      {/* || Add items */}
       <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}          
        />

      {/* || Search item */}
        <SearchItem
          search={search}
          setSearch={setSearch}          
        />        

      {/* || Content */}
       <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}      
        handleCheck={handleCheck}
        handleDelete={handleDelete} 
       />

      {/* || Footer */}
       <Footer length={items.length}/>    
    </div>
  );
}

export default App;
