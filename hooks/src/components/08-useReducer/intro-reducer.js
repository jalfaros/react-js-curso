

const initialState = [{
    id: '1',
    toDo: 'Comprar pan',
    done: false
}];



const todoReducer = ( state = initialState, { type, payload } ) => { 
    
    //el reducer no cambia el state, solo retorna uno nuevo, recibe state y action

    switch ( type ) {

        case 'add':

            return [...state, payload];

        default:
            return state;
    };

};

let todos = initialState;

const newTodo = { 
    id: '2',
    toDo: 'Comprar cereal',
    done: false
};


const action = {
    type: 'add',
    payload: newTodo
};

todos = todoReducer( todos, action )


console.log(todos);

