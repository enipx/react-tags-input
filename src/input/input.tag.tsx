'use-client';

import { TagsInputProps } from './input.type';

import {
  InputTagDefaultStyle,
  InputTagButtonDefaultStyle,
} from '@/helpers/style';

export const InputTag = (props: TagsInputProps) => {
  const { value, disabled, onRemove, removeIcon, tagStyle } = props;

  if (value && value.length > 0) {
    return (
      <>
        {value.map((text, index) => {
          const key = `tag-${index}`;

          const onClickHandler = () => {
            onRemove?.(text);
          };

          return (
            <span
              key={key}
              style={{ ...InputTagDefaultStyle, ...(tagStyle || {}) }}>
              {text}
              {!disabled ? (
                <span
                  onClick={onClickHandler}
                  style={InputTagButtonDefaultStyle}>
                  {removeIcon || <>&#10005;</>}
                </span>
              ) : null}
            </span>
          );
        })}
      </>
    );
  }

  return null;
};
