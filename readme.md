# Documentação da Biblioteca de Componentes Codificar

Bem-vindo à documentação da nossa biblioteca de componentes React Native, projetada para oferecer uma ampla gama de componentes de UI reutilizáveis e customizáveis para acelerar o desenvolvimento de aplicativos móveis. Esta biblioteca abrange desde inputs básicos até seletores complexos e componentes de data, cada um com suas próprias opções de personalização para se adequar às necessidades de sua aplicação.

# Pré-requisitos para Utilizar o Componente

Para garantir que o componente funcione corretamente em seu projeto, é essencial que certas bibliotecas estejam instaladas e devidamente configuradas. Essas bibliotecas são necessárias devido às suas funcionalidades específicas, que o componente depende para operar sem problemas.

Siga as instruções específicas de configuração de cada uma, disponíveis em suas respectivas documentações. Isso pode incluir etapas adicionais, como vinculação de bibliotecas nativas ou configuração de arquivos específicos do projeto.

Garantir que essas bibliotecas estejam corretamente instaladas e configuradas é fundamental para o funcionamento adequado do componente no seu projeto. Em caso de dúvidas ou problemas, consulte a documentação de cada biblioteca para obter orientações detalhadas e soluções de problemas comuns.

## Bibliotecas necessárias para todos os componentes

| Nome                    | Versão            | Descrição                                             | Documentação                                                                                                                                        |
| ----------------------- | ----------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `react-native`          | `>=0.68.1`        | [DOC](https://reactnative.dev/docs/environment-setup) | O framework base para o desenvolvimento do aplicativo. Certifique-se de que sua versão seja compatível para evitar conflitos. RN                    |
| `react-native-elements` | `>=3.0.0-alpha.1` | [DOC](https://reactnativeelements.com/docs)           | Oferece uma variedade de componentes de interface pré-construídos e personalizáveis, melhorando significativamente a eficiência do desenvolvimento. |
| `styled-components`     | `5.3.6`           | [DOC](https://styled-components.com/)                 | Primitivas visuais para a idade dos componentes. Use o que há de melhor em ES6 e CSS para estilizar seus aplicativos sem estresse                   |

## Bibliotecas para o [**INPUT DE TELEFONE**](./src/inputs/Phone/readme.phone.md)

| Nome                                     | Versão    | Descrição                                                               | Documentação                                                                                                                           |
| ---------------------------------------- | --------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `react-native-modal-selector-searchable` | `>=2.1.6` | [DOC](https://github.com/hepter/react-native-modal-selector-searchable) | Um componente seletor de plataforma cruzada (iOS/Android) para React Native que é altamente personalizável e oferece suporte a seções. |

## Bibliotecas para o [**INPUT DE DATA**](./src/inputs/DatePicker/readme.datePicker.md)

| Nome                       | Versão    | Descrição                                                      | Documentação                                                                                                                                                                                                                                                                                          |
| -------------------------- | --------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `date-fns`                 | `>=3.6.0` | [DOC](https://date-fns.org/)                                   | date-fns fornece o conjunto de ferramentas mais abrangente, porém simples e consistente para manipular datas JavaScript                                                                                                                                                                               |
| `react-native-date-picker` | `>=4.4.2` | [DOC](https://github.com/henninghall/react-native-date-picker) | React Native Date Picker é um seletor de data e hora para Android e iOS. Inclui modos de seleção de data, hora e data e hora. O selecionador de data é personalizável e oferece suporte a diferentes idiomas. Ele foi escrito com código nativo para obter a melhor aparência e desempenho possíveis. |

## Componentes Disponíveis

Para cada componente, você encontrará detalhes sobre como implementá-lo, opções de personalização disponíveis, propriedades esperadas, e exemplos de código para ajudar na sua integração

Abaixo, você encontrará links para a documentação de cada componente disponível na biblioteca:

- [**INPUT DE TELEFONE**](./src/inputs/Phone/readme.phone.md): Permite a entrada de números de telefone com formatação automática para diferentes padrões internacionais.
- [**INPUT DE DATA**](./src/inputs/DatePicker/readme.datePicker.md): Um seletor de data que facilita a escolha de datas específicas.

[//]: - "Input Simples - Fornece um campo de entrada básico com opções de personalização para cor, borda, etc."
[//]: - "Selected - Um componente de seleção que oferece uma lista de opções a partir das quais os usuários podem escolher."
[//]: - "Mais Componentes - Conforme novos componentes são adicionados à biblioteca, suas documentações serão listadas aqui."
