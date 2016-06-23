/**
 * Created by wx on 6/23/16.
 */

var ListStore = {
  state: {
    items: []
  },
  newItem: function(text, status, label) {
    this.state.items.unshift({ text: text, status: status, label: label, isEditing: true });
  },
  load: function() {
    var dataString = window.localStorage.getItem('todo-list');
    if(dataString) {
      this.state.items = JSON.parse(dataString);
    }
    return true;
  },
  push: function() {
    window.localStorage.setItem('todo-list', JSON.stringify(this.state.items));
  }
}



export default ListStore;
