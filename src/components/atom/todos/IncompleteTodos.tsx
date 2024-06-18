import { Button } from "@/components/ui/button";
import React from "react";

interface IncompleteTodosProps {
  todos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
}

export const IncompleteTodos: React.FC<IncompleteTodosProps> = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="w-full justify-center flex">Incomplete</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="w-full justify-center list-row flex items-center space-x-2 mb-2">
              <p className="todo-item">{todo}</p>
              <Button onClick={() => onClickComplete(index)}>完了</Button>
              <Button onClick={() => onClickDelete(index)}>削除</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
