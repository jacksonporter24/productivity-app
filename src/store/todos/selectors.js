export const selectTodos = (state) =>
  state.todos.todos.filter((todo) => todo.userId === state.users.userId);
