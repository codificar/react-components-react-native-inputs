# Documentação do Componente Phone

## Visão Geral

O componente DatePicker permite ao usuário selecionar uma data específica por meio de uma interface amigável e adaptável. Ele integra funcionalidades como temas personalizados e validação de datas.

## Recursos

- Suporte para múltiplos idiomas e formatos de data.
- Personalização completa através de temas.
- Validação integrada de datas.
- Ícone opcional de calendário com estado de foco.

## Propriedades

| Propriedade       | Tipo      | Obrigatório | Padrão                  | Descrição                                                                                            |
| ----------------- | --------- | ----------- | ----------------------- | ---------------------------------------------------------------------------------------------------- |
| **`language`**    | `string`  | Sim         | `"pt-br"`               | Especifica o idioma para o componente, afetando rótulos e regras de formatação.                      |
| **`disabled`**    | `boolean` | Não         | `false`                 | Se definido como `true`, desabilita o campo de entrada, prevenindo interação do usuário.             |
| **`theme`**       | `IThemes` | Não         | `undefined`             | Permite a personalização do estilo do componente Phone para combinar com o design do seu aplicativo. |
| **`label`**       | `string`  | Não         | `"Telefone"`            | Exibe um rótulo acima do campo de entrada do telefone.                                               |
| **`placeholder`** | `string`  | Não         | `"Insira seu telefone"` | Exibe um texto de placeholder dentro do campo de entrada quando está vazio.                          |
| **`confirmText`** | `string`  | Não         | `"Confirmar"`           | Texto do botão para confirmar a seleção.                                                             |
| **`cancelText`**  | `string`  | Não         | `"Cancelar"`            | Texto do botão para cancelar a seleção.                                                              |
| **`title`**       | `string`  | Não         | `"Insira seu telefone"` | Título exibido no modal de seleção de data.                                                          |
| **`showIcon`**    | `boolean` | Não         | `true`                  | Exibe ou oculta o ícone do calendário.                                                               |

## Exemplo de Uso

Aqui está um exemplo de como utilizar o componente DatePicker dentro de um formulário:

```tsx
import React from "react";
import DatePicker, { IDatePickerRef } from "./DatePicker"; // Ajuste o caminho de importação conforme sua configuração

const MyForm = () => {
  const refDatePicker = useRef<IDatePickerRef>(null);

  // Função para definir uma nova data
  const handleSetDate = () => {
    refDatePicker.current.setValueDate(new Date());
  };

  // Função para obter a data selecionada
  const handleGetDate = () => {
    const date = refDatePicker.current.getValueDate();
    console.log(date); // Exibe a data no formato 'yyyy-MM-dd'
  };

  // Função para definir um erro personalizado
  const handleSetError = () => {
    refDatePicker.current.setErrorDate("Data inválida");
  };

  // Função para verificar se a data é válida
  const handleValidateDate = () => {
    const isValid = refDatePicker.current.isValid();
    console.log(isValid); // true ou false
  };

  // Função para focar no componente
  const handleFocus = () => {
    refDatePicker.current.focus();
  };

  return (
    <View>
      <DatePicker
        ref={refDatePicker}
        label="Data de Nascimento"
        placeholder="Selecione sua data de nascimento"
        language="pt-br"
      />
    </View>
  );
};

export default MyForm;
```

## Tipagem

> IThemes - Para personalização UI

```ts
{
  outline?: boolean,
  colors?: {
    background?: `#${string}` | string,
    primary?: `#${string}` | string,
    secondary?: `#${string}` | string,
    disabled?: `#${string}` | string,
  },
  font?: {
    label?: {
      size?: number,
      color?: `#${string}` | string,
    },
    placeholder?: {
      size?: number,
      color?: `#${string}` | string,
    },
    error?: {
      size?: number,
      color?: `#${string}` | string,
    },
  }
}
```
