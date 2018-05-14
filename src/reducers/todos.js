let demo = [
  {
    id: 100,
    text: "demo",
    completed: false
  },
  {
    id: 101,
    text: "completed",
    completed: true
  },
  {
    id: 102,
    text: "in Progress",
    completed: false
  }
]

// state is initialized to demo for app dev
// in use, initialized to []
//this is es6 default params
const todos = (state = demo, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
