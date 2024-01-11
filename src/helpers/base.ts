import { InputDefaultStyle } from './style';

import { TagsInputProps } from '@/input/input.type';

type GetInputStyleHandlerOptions = {
  style?: React.CSSProperties;
  focusStyle?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
  disableStyle?: React.CSSProperties;
  isFocused?: boolean;
  isHovered?: boolean;
  disabled?: boolean;
};

export const getInputStyleHandler = (options: GetInputStyleHandlerOptions) => {
  const {
    style,
    focusStyle,
    hoverStyle,
    disableStyle,
    isHovered,
    isFocused,
    disabled,
  } = options;

  const defaultStyle: React.CSSProperties = InputDefaultStyle;

  let res: React.CSSProperties = {
    ...defaultStyle,
    ...(style || {}),
  };

  if (isHovered) {
    res = {
      ...res,
      ...(hoverStyle || {}),
    };
  }

  if (isFocused) {
    res = {
      ...res,
      ...(focusStyle || {}),
    };
  }

  if (disabled) {
    res = {
      ...res,
      ...(disableStyle || {}),
    };
  }

  return res;
};

type GetTagsHandlerOptions = Omit<TagsInputProps, 'value'> & {
  value: string;
  tags: string[];
  separator: string;
};

export const getTagsHandler = (options: GetTagsHandlerOptions) => {
  const { value, tags, onExist, onAdd, separator } = options;

  const newTags = tags || [];

  const valueArray = value.split(separator);

  valueArray.forEach((currentValue) => {
    const _value = currentValue.trim();

    if (!_value) {
      return;
    }

    if (newTags.includes(_value)) {
      onExist?.(_value);
      return;
    }

    if (Array.isArray(newTags)) {
      newTags.push(_value);
      onAdd?.(_value);
    }
  });

  return newTags;
};
