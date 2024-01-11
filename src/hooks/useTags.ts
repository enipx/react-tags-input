import {
  useState,
  KeyboardEvent,
  useEffect,
  ChangeEvent,
  ClipboardEvent,
  FocusEvent,
} from 'react';

import { getTagsHandler } from '@/helpers/base';
import { TagsInputProps } from '@/input/input.type';

// @types
type UseTagsOptions = TagsInputProps;

export const useTags = (options: UseTagsOptions) => {
  const {
    value,
    onRemove,
    onChange,
    separator = ',',
    onKeyUp,
    placeholder: defaultPlaceholder,
  } = options;

  const separatorKeys = [separator, 'Enter'];

  const [tags, setTags] = useState(value || []);

  const [placeholder, setPlaceholder] = useState(defaultPlaceholder || '');

  const [inputValue, setInputValue] = useState('');

  const updateTabs = (_value: string) => {
    const newTags = getTagsHandler({
      ...options,
      value: _value,
      tags,
      separator,
    });
    setTags(newTags);

    setInputValue('');
  };

  const onPasteHandler = (_e: ClipboardEvent<HTMLInputElement>) => {
    const _inputValue = _e.clipboardData.getData('text');
    updateTabs(_inputValue);

    // clear after timeout
    setTimeout(() => {
      setInputValue('');
    }, 0);
  };

  const onChangeHandler = (_e: ChangeEvent<HTMLInputElement>) => {
    const { value: _inputValue } = _e.target;

    setInputValue(_inputValue);
  };

  const onKeyUpHandler = (_e: KeyboardEvent<HTMLInputElement>) => {
    const { value: _inputValue } = _e.target as HTMLInputElement;

    onKeyUp?.(_e);

    if (separatorKeys.includes(_e.key)) {
      updateTabs(_inputValue);
      setInputValue('');
    }
  };

  const onRemoveHandler = (text: string) => {
    // ...
    setTags(tags.filter((tag) => tag !== text));
    onRemove?.(text);
  };

  const onBlurHandler = (_e: FocusEvent<HTMLInputElement, Element>) => {
    const { value: _inputValue } = _e.target as HTMLInputElement;

    updateTabs(_inputValue);
    setInputValue('');
  };

  useEffect(() => {
    onChange?.(tags);

    if (tags.length === 0) {
      setPlaceholder(defaultPlaceholder || '');
    } else {
      setPlaceholder('');
    }
  }, [tags]);

  useEffect(() => {
    setTags(value || []);
  }, [value]);

  return {
    inputValue,
    tags,
    onChangeHandler,
    onKeyUpHandler,
    onRemoveHandler,
    onPasteHandler,
    onBlurHandler,
    placeholder,
  };
};
