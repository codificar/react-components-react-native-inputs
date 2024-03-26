// Modules
import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { ptBR, es } from 'date-fns/locale';
import { Icon } from "react-native-elements";
import { format, isValid as isValidDate, subYears, isBefore, isEqual } from 'date-fns';
import RNDatePicker from 'react-native-date-picker'

// Locales
import { getTranslate } from '../../locales';

// Types
import { IPropsDatePicker } from '../../Types';
import { IDatePickerRef } from '../../Types/DatePicker';

// Utils
import { getStyles } from '../../utils';
import { defaultProps } from '../../utils/constants/props/datePicker';

// Styles
import { Container, TextLabel, ContainerInput, TextInput, TextError, TextPlaceHolder } from './styles';

const DatePicker: React.ForwardRefRenderFunction<IDatePickerRef, IPropsDatePicker> = (
  {
    title,
    cancelText,
    confirmText,
    showIcon = true,
    disabled = false,
    label = undefined,
    placeholder = undefined,
    theme = defaultProps.theme,
    onSubmitEditing = undefined,
    language = defaultProps.language,
  },
  ref
) => {
  const [themes] = useState(getStyles(theme))
  const [translate] = useState(getTranslate(language))

  const [isFocused, setIsFocus] = useState<undefined | string>()
  const [errorMessage, setError] = useState<string>('')

  const [valueDate, setValue] = useState<undefined | Date>(undefined)
  const [openDatePicker, setOpenDatePicker] = useState(false)

  const handleChangeValue = useCallback((value: Date) => {
    setValue(value)
    setOpenDatePicker(false)
    setIsFocus('')
    setError('')
    onSubmitEditing && onSubmitEditing()
  }, [])

  const handleOpenModal = useCallback((state: boolean) => {
    setOpenDatePicker(state)
    setIsFocus(state ? themes.colors.primary : '')
  }, [])

  const getLocaleDate = useCallback(() => {
    const defaultReturn = { pattern: 'dd/MM/yyyy', locale: ptBR }

    if (language === 'es-py') {
      defaultReturn.locale = es;
    }

    return defaultReturn
  }, [])

  useImperativeHandle(ref, () => ({
    setValueDate: (value) => {
      if (!(value instanceof Date)) return setError(translate.datePicker.error.dateInvalid)
      setValue(value)
    },
    getValueDate: () => {
      if (valueDate) return { valueDate: format(valueDate, 'yyyy-MM-dd') }
    },
    setErrorDate: (error: string) => setError(error),
    isValid: () => {
      return isValidDate(valueDate)
    },
    isValidMinAge: (minAge: number) => {
      if (!valueDate || !isValidDate(valueDate)) return false

      const yearsAgo = subYears(new Date(), minAge);
      return isBefore(valueDate, yearsAgo) || isEqual(valueDate, yearsAgo);
    },
    clear: () => {
      setError('')
      setIsFocus('')
      setValue(undefined)
    },
    focus: () => {
      setIsFocus(theme?.colors?.primary)
      setOpenDatePicker(true)
    },
  }));

  return (
    <Container>
      <TextLabel
        focus={isFocused}
        theme={!!errorMessage.length ? {...themes.font?.label, color: themes.font?.error.color} : themes.font?.label}
      >
        {label || translate.datePicker.label}
      </TextLabel>
      <ContainerInput
        onPress={() => handleOpenModal(true)}
        focus={isFocused}
        error={!!errorMessage.length ? themes?.font?.error?.color : ""}
        outline={!!theme?.outline}
        disable={disabled ? themes?.colors?.disabled : ''}
      >
        <RNDatePicker
          modal
          mode='date'
          open={openDatePicker}
          date={valueDate || new Date()}
          onConfirm={handleChangeValue}
          onCancel={() => handleOpenModal(false)}
          title={title || translate.datePicker.title}
          cancelText={cancelText || translate.datePicker.cancelText}
          confirmText={confirmText || translate.datePicker.confirmText}
        />

        {valueDate
          ? <TextInput>{format(valueDate, getLocaleDate().pattern, {locale: getLocaleDate().locale})}</TextInput>
          : <TextPlaceHolder>{placeholder || translate.datePicker.placeholder}</TextPlaceHolder>
        }

        {showIcon &&
          <Icon
            size={25}
            type="material-community"
            color={isFocused || "#999"}
            name={!!isFocused ? "calendar" : "calendar-blank"}
          />
        }
      </ContainerInput>

      <TextError>{errorMessage}</TextError>
    </Container>
  );
};

export default forwardRef(DatePicker)