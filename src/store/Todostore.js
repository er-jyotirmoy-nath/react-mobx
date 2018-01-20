class Todoitem {
	@observable text
	@observable id
	@observable completed
	constructor(value){
		this.text = value
		this.id = Date.now()
		this.completed = false
		}
}
class Todostore {
	@observable todos = []
	@observable filter = ''
	@computed get filteredtodos (){
		var matchfilter = new RegExp(this.filter,'i');
		return this.todos.filter(item => !this.filter || matchfilter.test(item.text));
	}

	createnewTodo(value){
		this.todos.push(new Todoitem(value));
	}

	removeComplted = ()=>{
		const notcomplted = this.todos.filter(item =>  !item.completed);
		this.todos.replace(notcomplted);
	}
}
var store = window.store = new Todostore;
