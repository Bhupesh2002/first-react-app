import React, { useState } from 'react'
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const Content = () => {

  let [items,setItems] = useState( [
    { id:1, label:"HTML and CSS", checked:false },
    { id:2, label:"Javascript", checked:false },
    { id:3, label:"React", checked:false },
  ] );

  let [newitem,setnewitem] = useState("");
  let [isedit,setIsEditing] = useState( false );
  let [currentId,setCurrentId] = useState(0);


  let handleChange = (id) =>{ 
    let newhandlechange = items.map((item)=>{ 
        return item.id === id ? { ...item, checked: !item.checked }: item;  
    });
    setItems(newhandlechange);
   }

   let handleEdit = (id) =>{
    let listItems = items.find( item => item.id === id );
    setnewitem(listItems.label);
    setIsEditing(true);
    setCurrentId(id);
   }

   let handleAddOrSaveItem = ()=>{

    if(isedit){
      let newListItems = items.map( (item)=>{
        return item.id === currentId ? { ...item, label: newitem } :item;
      });
      setItems(newListItems);
      setCurrentId(null);
      setnewitem("");
      setIsEditing(false);

    }
    else{
      setItems( [ ...items, { id:items.length+1, label: newitem, checked:false }] );
      setnewitem("");
    }

   }

   let handleDelete = (id)=>{
    let deleteItems = items.filter( (item) =>item.id !== id)
    .map((item,index) =>{ return { ...item, id:index+1} });
    setItems(deleteItems);

   };

  return (
    <div className='content'>
        <div className='adding-container'>
            <input type="text" 
            value={ newitem } 
            placeholder='Add the item'
            onChange={  (e)=>{ setnewitem(e.target.value) }  } 
            />
            <button onClick={ handleAddOrSaveItem }> { isedit ? "Save" : "Add" }   </button>
        </div>
        <div className='checkbox-container'>
        <ul>
            { items.map((item)=>{ 
                return(
                    <li key={ item.id } className='item'>
                        <input type="checkbox"
                        checked = { item.checked }
                        onChange={ () => handleChange(item.id) }
                        />
                        <label> {item.label}</label>
                        <FaEdit role='button' tabIndex={ 0 } className='edit-color' onClick={ ()=> handleEdit(item.id) }/>
                        <RiDeleteBin4Fill role="button" tabIndex={ 0 } onClick = { ()=>  handleDelete(item.id) }/>
                    </li>
                )
            } ) }
        </ul>
        </div>
        

    </div>
  )
}

export default Content