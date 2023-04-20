export const addItems=(data)=>
{
    return(
        {
            type:"ADDITEM",
            payload:
            {
                id:new Date().getTime().toString(),
                data:data
            }
        }
    )
}
export const delItems=(id)=>
{
    return(
        {
            type:"DELITEM",
            id:id
        }
    )
}
export const clrItems=()=>
{
    return(
        {
            type:"CLRITEM"
        }
    )
}