@observer
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    createTodo(e){
      if(e.which == 13){
        this.props.store.createnewTodo(e.target.value);

      }
    }
    filter(e){
      this.props.store.filter = e.target.value;
    }
    completeTodo(todo){
        todo.completed = !todo.completed;
    }
    render() {

      let {todos,filter,filteredtodos,removeComplted} = this.props.store;
      let todoli = filteredtodos.map((item) => {
        console.log(item.text);
        return <li><input type="checkbox" value={item.completed} checked={item.completed} onChange={this.completeTodo.bind(this,item)} />{item.text}</li>
      });
        return (
          <div>

          <input type="text" onKeyPress={this.createTodo.bind(this)} />
          <input type="text" onChange={this.filter.bind(this)}  />
            <ul>{todoli}</ul>
            <button onClick={removeComplted} >Clear</button>
          </div>
        );
    }
}
