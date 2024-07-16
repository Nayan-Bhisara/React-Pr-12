let initialState ={
    TodoList : [],
        err :null
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO" :
            return {
                ...state,
                TodoList : [...state.TodoList, action.payload],
                err : null
            }
         case 'VIEW_TODO' :
            return {
                ...state,
                TodoList : action.payload,
                err : null
            }
            case 'DELETE_TODO' :
                return {
                    ...state,
                    TodoList : state.TodoList.filter((todo) => todo.id !== action.payload),
                    err : null
                }
        default :
        return state;
    }
}
export default todoReducer;