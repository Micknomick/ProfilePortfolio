import { Button } from "@/components/ui/button";
import React from "react";

interface CompleteTodosProps {
  todos: string[];
  onClickBack: (index: number) => void;
}

export const CompleteTodos: React.FC<CompleteTodosProps> = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div>
      <p className="w-full justify-center flex">Complete</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="w-full justify-center list-row flex items-center space-x-2 mb-2">
              <p className="todo-item">{todo}</p>
              <Button onClick={() => onClickBack(index)}>戻す</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
