class Todo {
  id: number;
  text: string;

  constructor(todoText: string) {
    this.id = this.generateId();
    this.text = todoText;
  }

  private generateId() {
    return Math.floor((1 + Math.random()) * 0x10000);
  }
}

export default Todo;
