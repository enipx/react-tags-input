import { useState, useEffect, FocusEvent, MouseEvent } from 'react';

import { getInputStyleHandler } from '@/helpers/base';
import { InputControlDefaultStyle } from '@/helpers/style';
import { TagsInputProps } from '@/input/input.type';

// @types

type UseStyleOptions = TagsInputProps;

export const useStyle = (options: UseStyleOptions) => {
  const {
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    focusStyle,
    hoverStyle,
    disableStyle,
    disabled,
    style: defaultStyle,
  } = options;

  const [style, setStyle] = useState<React.CSSProperties | undefined>(
    getInputStyleHandler({
      style: defaultStyle,
    })
  );

  const [isFocused, setIsFocused] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const onFocusHandler = (e: FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const onMouseEnterHandler = (e: MouseEvent<HTMLInputElement, any>) => {
    setIsHovered(true);
    onMouseEnter?.(e);
  };

  const onMouseLeaveHandler = (e: MouseEvent<HTMLInputElement, any>) => {
    setIsHovered(false);
    onMouseLeave?.(e);
  };

  useEffect(() => {
    const _style = getInputStyleHandler({
      style: defaultStyle,
      focusStyle,
      hoverStyle,
      isFocused,
      isHovered,
      disableStyle,
      disabled,
    });

    setStyle(_style);
  }, [isFocused, isHovered]);

  return {
    controlStyle: InputControlDefaultStyle,
    style,
    isFocused,
    isHovered,
    onFocusHandler,
    onBlurHandler,
    onMouseEnterHandler,
    onMouseLeaveHandler,
  };
};
