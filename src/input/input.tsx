'use-client';

import { forwardRef } from 'react';

import { InputTag } from './input.tag';
import { TagsInputProps } from './input.type';

import { useStyle, useTags } from '@/hooks';

export const TagsInput = forwardRef((props: TagsInputProps, ref) => {
  const {
    // default props
    value,
    onAdd,
    onRemove,
    onExist,
    focusStyle,
    hoverStyle,
    disableStyle,
    tagStyle,
    style: defaultStyle,
    containerProps,
    separator,
    onChange,

    // inputs props
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    ...rest
  } = props;

  const {
    controlStyle,
    style,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onFocusHandler,
    onBlurHandler,
  } = useStyle(props);

  const {
    tags,
    inputValue,
    onChangeHandler,
    onKeyUpHandler,
    onRemoveHandler,
    onPasteHandler,
    onBlurHandler: onTagBlurHandler,
  } = useTags(props);

  return (
    <div
      {...containerProps}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      style={style}>
      <InputTag {...props} value={tags} onRemove={onRemoveHandler} />
      <input
        type="text"
        value={inputValue}
        onPaste={onPasteHandler}
        onFocus={onFocusHandler}
        onBlur={(e) => {
          onBlurHandler?.(e);
          onTagBlurHandler?.(e);
        }}
        onKeyUp={onKeyUpHandler}
        onChange={onChangeHandler}
        style={controlStyle}
        ref={ref as any}
        {...rest}
      />
    </div>
  );
});
