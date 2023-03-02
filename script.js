//your code here
var todovalue = document.getElementById("newTodoInput");
var btn = document.getElementById("addBtn");
var ol = document.getElementById("todoList");

fuction addtodo ()
  { alert(todovalue);

if(todovalue.value){
	var li = document.creatElement('li');
 li.textContent = todovalue.value;
ol.appendchild(li);
todovalue.vlaue = "";

}
}

 btn.addEventListner('click',addTodo);



