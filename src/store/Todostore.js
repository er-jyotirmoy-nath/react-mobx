class Todostore {
	@observable todos = ['buy eggs','buy milk']
	@observable filter = ''
}
var store = new Todostore;
console.log(store);
