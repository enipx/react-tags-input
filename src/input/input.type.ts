type ValueType = string[];

interface InputDefaultProps {
  value?: ValueType;
  tagStyle?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
  focusStyle?: React.CSSProperties;
  disableStyle?: React.CSSProperties;
  containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;
  onChange?: (arg: ValueType) => void;
  onAdd?: (value: string) => void;
  onRemove?: (value: string) => void;
  onExist?: (value: string) => void;
  separator?: string;
  removeIcon?: React.ReactNode;
}

export interface TagsInputProps
  extends InputDefaultProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      keyof InputDefaultProps
    > {}
