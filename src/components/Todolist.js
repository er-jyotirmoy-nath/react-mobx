inject('store')
@observer
class Todolist extends React.Component {
  completeTodo(todo){
      todo.completed = !todo.completed;
  }
    render() {
      let todoli = store.filteredtodos.map((item) => {
        
        return <li><input type="checkbox" value={item.completed} checked={item.completed} onChange={this.completeTodo.bind(this,item)} />{item.text}</li>
      });
        return (
          <ul>{todoli}</ul>
        );
    }
}
