import React ,{useState}from 'react';
import { addItems ,delItems,clrItems} from '../actions';
import { useDispatch ,useSelector} from 'react-redux';
import './Todo.css'

const Todo = () => {
  const [inputData, setinputData] = useState('');
  const todoList=useSelector((state)=>state.todoReducer.list)
  const dispatch=useDispatch();
  return (
    <>
   
     <div className='main-div'>
      <div className='child-div'>
          <figure>
            <figcaption>Add your List Here</figcaption>
          </figure>
          <div className='addItems'>
            <input type="text" placeholder='Add Items...' value={inputData} onChange={(event)=>setinputData(event.target.value)}/>
            <i className='fa fa-plus add-btn' onClick={()=>dispatch(addItems(inputData),setinputData(''))}></i>
          </div>

         
          <div className="showItems">
          {
              todoList.map((elem)=>{
                return(
                <div className="eachItem" key={elem.id}>
                <h3>{elem.data}</h3>
                <i className='fa fa-trash-alt ' title='Delete' onClick={()=>dispatch(delItems(elem.id))}></i>
              </div>
                )
              
            })
          }
 
        </div>
        <button className='clrButoon' data-sm-link-text='Remove All' onClick={()=>dispatch(clrItems())}>
          <span>Clear List</span> 
        </button>

          
      </div>

     </div>
   
    </>
  )
}

export default Todo;