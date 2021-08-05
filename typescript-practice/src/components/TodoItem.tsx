import Todo from "../models/Todo";

interface IProps {
  item: Todo;
}

const TodoItem: React.FC<IProps> = (props) => {
  return <li>{props.item.text}</li>;
};

export default TodoItem;
