// Modules
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { Platform, Modal, View, Button } from "react-native";
import { ptBR, es } from "date-fns/locale";
import { Icon } from "react-native-elements";
import {
  format,
  isValid as isValidDate,
  subYears,
  isBefore,
  isEqual,
} from "date-fns";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from 'moment';

// Locales
import { getTranslate } from "../../locales";

// Types
import { IPropsDatePicker } from "../../Types";
import { IDatePickerRef } from "../../Types/DatePicker";

// Utils
import { getStyles } from "../../utils";
import { defaultProps } from "../../utils/constants/props/datePicker";

// Styles
import {
  Container,
  TextLabel,
  ContainerInput,
  TextInput,
  TextError,
  TextPlaceHolder,
} from "./styles";

const DatePicker: React.ForwardRefRenderFunction<
  IDatePickerRef,
  IPropsDatePicker
> = (
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
    purposeOfUse = undefined,
    ...rest
  },
  ref
) => {
    const [themes] = useState(getStyles(theme));
    const [translate] = useState(getTranslate(language));

    const [isFocused, setIsFocus] = useState<undefined | string>();
    const [errorMessage, setError] = useState<string>("");

    const [dateValue, setDateValue] = useState<undefined | Date>(undefined);
    const [defaultValue] = useState<Date>(rest.maximumDate || new Date());

    const [openDatePicker, setOpenDatePicker] = useState(false);

    const handleChangeValue = useCallback((event: any, value?: Date) => {
      if (Platform.OS === 'android') {
        if (value === undefined) return handleOpenModal(false);
        setDateValue(value);
        setOpenDatePicker(false);
        setIsFocus("");
        setError("");
        onSubmitEditing && onSubmitEditing();
      } else {
        if (event.type === 'set') {
          setDateValue(value);
          setIsFocus("");
          setError("");
          onSubmitEditing && onSubmitEditing();
        } else {
          setOpenDatePicker(false);
        }
      }
    }, []);

    const handleOpenModal = useCallback((state: boolean) => {
      setOpenDatePicker(state);
      setIsFocus(state ? themes.colors.primary : "");
    }, []);

    const getLocaleDate = useCallback(() => {
      const defaultReturn = { pattern: "dd/MM/yyyy", locale: ptBR };

      if (language === "es-py") {
        defaultReturn.locale = es;
      }

      return defaultReturn;
    }, []);

    useImperativeHandle(ref, () => ({
      setValueDate: (value) => {
        if (!(value instanceof Date))
          return setError(translate.datePicker.error.dateInvalid);
        setDateValue(value);
      },
      getValueDate: () => {
        return { dateValue: dateValue ? format(dateValue, "yyyy-MM-dd") : null };
      },
      setErrorDate: (error: string) => setError(error),
      isValid: () => {
        return isValidDate(dateValue);
      },
      isValidMinAge: (minAge: number) => {
        if (!dateValue || !isValidDate(dateValue)) return false;

        const yearsAgo = subYears(new Date(), minAge);
        return isBefore(dateValue, yearsAgo) || isEqual(dateValue, yearsAgo);
      },
      clear: () => {
        setError("");
        setIsFocus("");
        setDateValue(undefined);
      },
      focus: () => {
        setIsFocus(theme?.colors?.primary);
        setOpenDatePicker(true);
      },
    }));

    return (
      <Container>
        <TextLabel
          focus={isFocused}
          theme={
            !!errorMessage.length
              ? { ...themes.font?.label, color: themes.font?.error.color }
              : themes.font?.label
          }
        >
          {label || translate.datePicker.label}

        </TextLabel>
        <ContainerInput
          focus={isFocused}
          disabled={disabled}
          outline={!!theme?.outline}
          onPress={() => handleOpenModal(true)}
          disable={disabled ? themes?.colors?.disabled : ""}
          error={!!errorMessage.length ? themes?.font?.error?.color : ""}
        >
          {openDatePicker && Platform.OS === 'ios' && (
            <Modal
              transparent={true}
              animationType="slide"
              visible={openDatePicker}
              onRequestClose={() => setOpenDatePicker(false)}

            >
              <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={{ backgroundColor: '#fff', margin: 20 }}>
                  <DateTimePicker
                    {...rest}
                    display="spinner"
                    mode="date"
                    value={dateValue || defaultValue}
                    onChange={handleChangeValue}
                    style={{ backgroundColor: 'white' }}
                    {...(purposeOfUse === 'birth'
                      ? { maximumDate: new Date(moment().year(), moment().month(), 31) }
                      : { minimumDate: new Date(moment().year(), moment().month(), 31) })}
                  />
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 15 }}>
                    <Button title={cancelText || "cancel"} onPress={() => setOpenDatePicker(false)} />
                    <Button title={confirmText || "OK"} onPress={() => setOpenDatePicker(false)} />
                  </View>
                </View>
              </View>
            </Modal>
          )}

          {openDatePicker && Platform.OS === 'android' && (
            <DateTimePicker
              {...rest}
              display="spinner"
              mode="date"
              value={dateValue || defaultValue}
              onChange={handleChangeValue}
              {...(purposeOfUse === 'birth'
                ? { maximumDate: new Date(moment().year(), moment().month(), 31) }
                : { minimumDate: new Date(moment().year(), moment().month(), 31) })}
            />
          )}

          {dateValue ? (
            <TextInput>
              {format(dateValue, getLocaleDate().pattern, {
                locale: getLocaleDate().locale,
              })}
            </TextInput>
          ) : (
            <TextPlaceHolder>
              {placeholder || translate.datePicker.placeholder}
            </TextPlaceHolder>
          )}

          {showIcon && (
            <Icon
              size={25}
              type="feather"
              name="calendar"
              color={isFocused || "#ccc"}
            />
          )}
        </ContainerInput>

        <TextError theme={themes?.font?.error}>{errorMessage}</TextError>
      </Container>
    );
  };

export default forwardRef(DatePicker);