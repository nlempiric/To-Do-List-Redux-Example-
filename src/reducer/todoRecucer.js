const initialState=
{
    list:[]
}
const todoReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "ADDITEM":
            const {id,data}=action.payload;
            return(
            {
                 list:[...state.list,{id:id, data:data}]
            } 
            )
        case "DELITEM":
            // const newList=state.list.filter((elem)=>elem.id!=action.id)
            console.log(action.id);
            // console.log(elem.id);
            const newList=state.list.filter((elem)=>
                elem.id != action.id
            )  
            console.log("sdfsfsfefd",newList);
            return(
            {       
                ...state,
                 list:newList
            } 
            )

        case "CLRITEM":
            return(
            {
                list:[]    
            }
            )
        default :return state
    }
}
export default todoReducer;