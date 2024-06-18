import { Button } from "@/components/ui/button";
import React, { ChangeEvent, MouseEventHandler } from "react";

interface InputTodoProps {
  todoText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export const InputTodo: React.FC<InputTodoProps> = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div className="w-full justify-center input-area flex items-center space-x-2 p-4 rounded-lg">
      <input
        className="text-black"
        disabled={disabled}
        placeholder="Input Task"
        value={todoText}
        onChange={onChange}
      />
      <Button disabled={disabled} onClick={onClick}>追加</Button>
    </div>
  );
};
