inject('store')
@observer
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    createTodo(e){
      if(e.which == 13){
        store.createnewTodo(e.target.value);
        e.target.value="";
      }
    }
    filter(e){
      store.filter = e.target.value;
    }

    render() {
        return (
          <div>
          <input type="text" onKeyPress={this.createTodo.bind(this)} />
          <input type="text" onChange={this.filter.bind(this)}  />

              <Provider store={store}>
                <Todolist />
              </Provider>

            <button onClick={store.removeComplted} >Clear</button>
          </div>
        );
    }
}
