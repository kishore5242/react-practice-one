import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

interface IProps {
  items: Todo[];
}


// function TodoList(props: IProps) {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <TodoItem key={item.id} item={item} />
//       ))}
//     </ul>
//   );
// } 


const TodoList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoList;
