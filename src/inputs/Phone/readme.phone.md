# Documentação do Componente Phone

## Visão Geral

O componente Phone é um componente React projetado para simplificar o processo de inserção de números de telefone em suas aplicações React Native. Ele suporta seleção de país personalizável, formatação automática de número de telefone de acordo com o país selecionado e integração com o gerenciamento de estado do seu formulário.

## Recursos

- Modal de filtro de país para selecionar o código do país desejado.
- Formatação automática do número de telefone baseada no país selecionado.
- Personalizável através de um conjunto abrangente de propriedades.
- Suporta temas padrão e personalizados para integração perfeita com o design do seu aplicativo.
- Label e placeholder opcionais para uma melhor experiência do usuário.
- Suporte ao estado desabilitado para cenários somente leitura.

## Propriedades

| Propriedade           | Tipo                     | Obrigatório | Descrição                                                                                                                                               |
| --------------------- | ------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`countries`**       | `allCountryCodes[]`      | Não         | Filtra os países que aparecem no modal. Use códigos de país como `['BR', 'US', 'ES']` para limitar a seleção.                                           |
| **`defaultSelected`** | `allCountryCodes`        | Não         | Define o país selecionado por padrão usando um código de país (ex.: 'BR', 'US'). Isso determina a seleção inicial e a formatação do número de telefone. |
| **`getValue`**        | `React.Dispatch<string>` | Não         | Uma função de callback que fornece o número de telefone formatado ao componente pai ou ao estado do formulário.                                         |
| **`defaultValue`**    | `string`                 | Não         | Define o valor padrão do campo de entrada do número de telefone.                                                                                        |
| **`language`**        | `string`                 | Não         | Especifica o idioma para o componente, afetando rótulos e regras de formatação.                                                                         |
| **`disabled`**        | `boolean`                | Não         | Se definido como `true`, desabilita o campo de entrada, prevenindo interação do usuário.                                                                |
| **`theme`**           | `IThemes`                | Não         | Permite a personalização do estilo do componente Phone para combinar com o design do seu aplicativo.                                                    |
| **`label`**           | `string`                 | Não         | Exibe um rótulo acima do campo de entrada do telefone.                                                                                                  |
| **`placeholder`**     | `string`                 | Não         | Exibe um texto de placeholder dentro do campo de entrada quando está vazio.                                                                             |

## Exemplo de Uso

Abaixo está um exemplo básico de uso do componente Phone dentro de um formulário:

```tsx
import React, { useState } from "react";
import { View } from "react-native";
import Phone from "./Phone"; // Ajuste o caminho de importação de acordo com sua configuração

const MyForm = () => {
  const refPhone = useRef(null);

  const functionTest = useCallback(() => {
    // Forma de como setar o valor
    refPhone.current.setValuePhone({
      valuePhone: "999999999",
      valueCountry: "BR",
    });

    // Forma de como setar somente o país
    refPhone.current.setValueCountry("BR");

    // Forma de pegar os valores, retorna {valuePhone: "999999999", valueCountry: "BR" }
    refPhone.current.getValuePhone();

    // Forma de passar um error personalizado
    refPhone.current.setErrorPhone("Telefone inválido");

    // Forma dar foco ao input
    refPhone.current.focus();
  }, []);

  return (
    <View>
      <Phone
        defaultValue=""
        language="pt-br"
        defaultSelected="BR"
        countries={["BR", "US", "ES"]}
        label="Número de Telefone"
        placeholder="Digite seu número de telefone"
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

> allCountryCodes - Todos os paises suportados

```
🇦🇩 🇦🇪 🇦🇫 🇦🇬 🇦🇮 🇦🇱 🇦🇲 🇦🇳 🇦🇴 🇦🇶 🇦🇷 🇦🇸 🇦🇹 🇦🇺 🇦🇼 🇦🇽 🇦🇿 🇧🇦 🇧🇧 🇧🇩 🇧🇪 🇧🇫 🇧🇬 🇧🇭 🇧🇮 🇧🇯 🇧🇱 🇧🇲 🇧🇳 🇧🇴 🇧🇷 🇧🇸 🇧🇹 🇧🇼 🇧🇾 🇧🇿 🇨🇦 🇨🇨 🇨🇩 🇨🇫 🇨🇬 🇨🇭 🇨🇮 🇨🇰 🇨🇱 🇨🇲 🇨🇳 🇨🇴 🇨🇷 🇨🇺 🇨🇻 🇨🇽 🇨🇾 🇨🇿 🇩🇪 🇩🇯 🇩🇰 🇩🇲 🇩🇴 🇩🇿 🇪🇨 🇪🇪 🇪🇬 🇪🇷 🇪🇸 🇪🇹 🇫🇮 🇫🇯 🇫🇰 🇫🇲 🇫🇴 🇫🇷 🇬🇦 🇬🇧 🇬🇩 🇬🇪 🇬🇫 🇬🇬 🇬🇭 🇬🇮 🇬🇱 🇬🇲 🇬🇳 🇬🇵 🇬🇶 🇬🇷 🇬🇸 🇬🇹 🇬🇺 🇬🇼 🇬🇾 🇭🇰 🇭🇳 🇭🇷 🇭🇹 🇭🇺 🇮🇩 🇮🇪 🇮🇱 🇮🇲 🇮🇳 🇮🇴 🇮🇶 🇮🇷 🇮🇸 🇮🇹 🇯🇪 🇯🇲 🇯🇴 🇯🇵 🇰🇪 🇰🇬 🇰🇭 🇰🇮 🇰🇲 🇰🇳 🇰🇵 🇰🇷 🇰🇼 🇰🇾 🇰🇿 🇱🇦 🇱🇧 🇱🇨 🇱🇮 🇱🇰 🇱🇷 🇱🇸 🇱🇹 🇱🇺 🇱🇻 🇱🇾 🇲🇦 🇲🇨 🇲🇩 🇲🇪 🇲🇫 🇲🇬 🇲🇭 🇲🇰 🇲🇱 🇲🇲 🇲🇳 🇲🇴 🇲🇵 🇲🇶 🇲🇷 🇲🇸 🇲🇹 🇲🇺 🇲🇻 🇲🇼 🇲🇽 🇲🇾 🇲🇿 🇳🇦 🇳🇨 🇳🇪 🇳🇫 🇳🇬 🇳🇮 🇳🇱 🇳🇴 🇳🇵 🇳🇷 🇳🇺 🇳🇿 🇴🇲 🇵🇦 🇵🇪 🇵🇫 🇵🇬 🇵🇭 🇵🇰 🇵🇱 🇵🇲 🇵🇳 🇵🇷 🇵🇸 🇵🇹 🇵🇼 🇵🇾 🇶🇦 🇷🇪 🇷🇴 🇷🇸 🇷🇺 🇷🇼 🇸🇦 🇸🇧 🇸🇨 🇸🇩 🇸🇪 🇸🇬 🇸🇭 🇸🇮 🇸🇯 🇸🇰 🇸🇱 🇸🇲 🇸🇳 🇸🇴 🇸🇷 🇸🇹 🇸🇻 🇸🇽 🇸🇾 🇸🇿 🇹🇨 🇹🇩 🇹🇬 🇹🇭 🇹🇯 🇹🇰 🇹🇱 🇹🇲 🇹🇳 🇹🇴 🇹🇷 🇹🇹 🇹🇻 🇹🇼 🇹🇿 🇺🇦 🇺🇬 🇺🇸 🇺🇾 🇺🇿 🇻🇦 🇻🇨 🇻🇪 🇻🇬 🇻🇮 🇻🇳 🇻🇺 🇼🇫 🇼🇸 🇾🇪 🇾🇹 🇿🇦 🇿🇲 🇿🇼
```

## Codigos de cada país

| Bandeira | Código | País                                  |
| -------- | ------ | ------------------------------------- |
| 🇦🇩       | AD     | Andorra                               |
| 🇦🇪       | AE     | Emiratos Árabes Unidos                |
| 🇦🇫       | AF     | Afeganistão                           |
| 🇦🇬       | AG     | Antiga e Barbuda                      |
| 🇦🇮       | AI     | Anguila                               |
| 🇦🇱       | AL     | Albânia                               |
| 🇦🇲       | AM     | Arménia                               |
| 🇦🇳     | AN     | Antilhas Neerlandesas                 |
| 🇦🇴       | AO     | Angola                                |
| 🇦🇶       | AQ     | Antarctica                            |
| 🇦🇷       | AR     | Argentina                             |
| 🇦🇸       | AS     | Samoa                                 |
| 🇦🇹       | AT     | Áustria                               |
| 🇦🇺       | AU     | Austrália                             |
| 🇦🇼       | AW     | Aruba                                 |
| 🇦🇽       | AX     | Ilhas Aland                           |
| 🇦🇿       | AZ     | Azerbaijão                            |
| 🇧🇦       | BA     | Bósnia e Herzegovina                  |
| 🇧🇧       | BB     | Barbados                              |
| 🇧🇩       | BD     | Bangladeche                           |
| 🇧🇪       | BE     | Bélgica                               |
| 🇧🇫       | BF     | Burquina Faso                         |
| 🇧🇬       | BG     | Bulgária                              |
| 🇧🇭       | BH     | Barém                                 |
| 🇧🇮       | BI     | Burúndi                               |
| 🇧🇯       | BJ     | Benim                                 |
| 🇧🇱       | BL     | São Bartolomeu                        |
| 🇧🇲       | BM     | Bermudas                              |
| 🇧🇳       | BN     | Brunei                                |
| 🇧🇴       | BO     | Bolívia                               |
| 🇧🇷       | BR     | Brasil                                |
| 🇧🇸       | BS     | Bahamas                               |
| 🇧🇹       | BT     | Butão                                 |
| 🇧🇼       | BW     | Botsuana                              |
| 🇧🇾       | BY     | Bielorrússia                          |
| 🇧🇿       | BZ     | Belize                                |
| 🇨🇦       | CA     | Canadá                                |
| 🇨🇨       | CC     | Ilhas dos Cocos                       |
| 🇨🇩       | CD     | Congo-Kinshasa                        |
| 🇨🇫       | CF     | República Centro-Africana             |
| 🇨🇬       | CG     | Congo-Brazzaville                     |
| 🇨🇭       | CH     | Suíça                                 |
| 🇨🇮       | CI     | Costa do Marfim                       |
| 🇨🇰       | CK     | Ilhas Cook                            |
| 🇨🇱       | CL     | Chile                                 |
| 🇨🇲       | CM     | Camarões                              |
| 🇨🇳       | CN     | China                                 |
| 🇨🇴       | CO     | Colômbia                              |
| 🇨🇷       | CR     | Costa Rica                            |
| 🇨🇺       | CU     | Cuba                                  |
| 🇨🇻       | CV     | Cabo Verde                            |
| 🇨🇽       | CX     | Ilha do Natal                         |
| 🇨🇾       | CY     | Chipre                                |
| 🇨🇿       | CZ     | República Checa                       |
| 🇩🇪       | DE     | Alemanha                              |
| 🇩🇯       | DJ     | Jibuti                                |
| 🇩🇰       | DK     | Dinamarca                             |
| 🇩🇲       | DM     | Domínica                              |
| 🇩🇴       | DO     | República Dominicana                  |
| 🇩🇿       | DZ     | Argélia                               |
| 🇪🇨       | EC     | Equador                               |
| 🇪🇪       | EE     | Estónia                               |
| 🇪🇬       | EG     | Egipto                                |
| 🇪🇷       | ER     | Eritreia                              |
| 🇪🇸       | ES     | Espanha                               |
| 🇪🇹       | ET     | Etiópia                               |
| 🇫🇮       | FI     | Finlândia                             |
| 🇫🇯       | FJ     | Fiji                                  |
| 🇫🇰       | FK     | Ilhas Falkland                        |
| 🇫🇲       | FM     | Micronésia                            |
| 🇫🇴       | FO     | Faroé                                 |
| 🇫🇷       | FR     | França                                |
| 🇬🇦       | GA     | Gabão                                 |
| 🇬🇧       | GB     | Reino Unido                           |
| 🇬🇩       | GD     | Granada                               |
| 🇬🇪       | GE     | Geórgia                               |
| 🇬🇫       | GF     | Guiana Francesa                       |
| 🇬🇬       | GG     | Guernsey                              |
| 🇬🇭       | GH     | Gana                                  |
| 🇬🇮       | GI     | Gibraltar                             |
| 🇬🇱       | GL     | Gronelândia                           |
| 🇬🇲       | GM     | Gâmbia                                |
| 🇬🇳       | GN     | Guiné                                 |
| 🇬🇵       | GP     | Guadalupe                             |
| 🇬🇶       | GQ     | Guiné Equatorial                      |
| 🇬🇷       | GR     | Grécia                                |
| 🇬🇸       | GS     | Geórgia do Sul e Sandwich do Sul      |
| 🇬🇹       | GT     | Guatemala                             |
| 🇬🇺       | GU     | Guame                                 |
| 🇬🇼       | GW     | Guiné-Bissau                          |
| 🇬🇾       | GY     | Guiana                                |
| 🇭🇰       | HK     | Hong Kong                             |
| 🇭🇳       | HN     | Honduras                              |
| 🇭🇷       | HR     | Croácia                               |
| 🇭🇹       | HT     | Haiti                                 |
| 🇭🇺       | HU     | Hungria                               |
| 🇮🇩       | ID     | Indonésia                             |
| 🇮🇪       | IE     | Irlanda                               |
| 🇮🇱       | IL     | Israel                                |
| 🇮🇲       | IM     | Ilha de Man                           |
| 🇮🇳       | IN     | Índia                                 |
| 🇮🇴       | IO     | Território Britânico do Oceano Índico |
| 🇮🇶       | IQ     | Iraque                                |
| 🇮🇷       | IR     | Irão                                  |
| 🇮🇸       | IS     | Islândia                              |
| 🇮🇹       | IT     | Itália                                |
| 🇯🇪       | JE     | Jersey                                |
| 🇯🇲       | JM     | Jamaica                               |
| 🇯🇴       | JO     | Jordânia                              |
| 🇯🇵       | JP     | Japão                                 |
| 🇰🇪       | KE     | Quénia                                |
| 🇰🇬       | KG     | Quirguizistão                         |
| 🇰🇭       | KH     | Camboja                               |
| 🇰🇮       | KI     | Quiribáti                             |
| 🇰🇲       | KM     | Comores                               |
| 🇰🇳       | KN     | São Cristóvão e Neves                 |
| 🇰🇵       | KP     | Coreia do Norte                       |
| 🇰🇷       | KR     | Coreia do Sul                         |
| 🇰🇼       | KW     | Kuwait                                |
| 🇰🇾       | KY     | Ilhas Caimão                          |
| 🇰🇿       | KZ     | Cazaquistão                           |
| 🇱🇦       | LA     | Laos                                  |
| 🇱🇧       | LB     | Líbano                                |
| 🇱🇨       | LC     | Santa Lúcia                           |
| 🇱🇮       | LI     | Listenstaine                          |
| 🇱🇰       | LK     | Sri Lanca                             |
| 🇱🇷       | LR     | Libéria                               |
| 🇱🇸       | LS     | Lesoto                                |
| 🇱🇹       | LT     | Lituânia                              |
| 🇱🇺       | LU     | Luxemburgo                            |
| 🇱🇻       | LV     | Letónia                               |
| 🇱🇾       | LY     | Líbia                                 |
| 🇲🇦       | MA     | Marrocos                              |
| 🇲🇨       | MC     | Mónaco                                |
| 🇲🇩       | MD     | Moldávia                              |
| 🇲🇪       | ME     | Montenegro                            |
| 🇲🇫       | MF     | São Martinho                          |
| 🇲🇬       | MG     | Madagáscar                            |
| 🇲🇭       | MH     | Ilhas Marshall                        |
| 🇲🇰       | MK     | Macedónia                             |
| 🇲🇱       | ML     | Mali                                  |
| 🇲🇲       | MM     | Birmânia                              |
| 🇲🇳       | MN     | Mongólia                              |
| 🇲🇴       | MO     | Macau                                 |
| 🇲🇵       | MP     | Marianas do Norte                     |
| 🇲🇶       | MQ     | Martinica                             |
| 🇲🇷       | MR     | Mauritânia                            |
| 🇲🇸       | MS     | Monserrate                            |
| 🇲🇹       | MT     | Malta                                 |
| 🇲🇺       | MU     | Maurícia                              |
| 🇲🇻       | MV     | Maldivas                              |
| 🇲🇼       | MW     | Malávi                                |
| 🇲🇽       | MX     | México                                |
| 🇲🇾       | MY     | Malásia                               |
| 🇲🇿       | MZ     | Moçambique                            |
| 🇳🇦       | NA     | Namíbia                               |
| 🇳🇨       | NC     | Nova Caledónia                        |
| 🇳🇪       | NE     | Níger                                 |
| 🇳🇫       | NF     | Ilha Norfolk                          |
| 🇳🇬       | NG     | Nigéria                               |
| 🇳🇮       | NI     | Nicarágua                             |
| 🇳🇱       | NL     | Países Baixos                         |
| 🇳🇴       | NO     | Noruega                               |
| 🇳🇵       | NP     | Nepal                                 |
| 🇳🇷       | NR     | Nauru                                 |
| 🇳🇺       | NU     | Niue                                  |
| 🇳🇿       | NZ     | Nova Zelândia                         |
| 🇴🇲       | OM     | Omã                                   |
| 🇵🇦       | PA     | Panamá                                |
| 🇵🇪       | PE     | Peru                                  |
| 🇵🇫       | PF     | Polinésia Francesa                    |
| 🇵🇬       | PG     | Papua-Nova Guiné                      |
| 🇵🇭       | PH     | Filipinas                             |
| 🇵🇰       | PK     | Paquistão                             |
| 🇵🇱       | PL     | Polónia                               |
| 🇵🇲       | PM     | São Pedro e Miquelon                  |
| 🇵🇳       | PN     | Pitcairn                              |
| 🇵🇷       | PR     | Porto Rico                            |
| 🇵🇸       | PS     | Território Palestino, Ocupado         |
| 🇵🇹       | PT     | Portugal                              |
| 🇵🇼       | PW     | Palau                                 |
| 🇵🇾       | PY     | Paraguai                              |
| 🇶🇦       | QA     | Catar                                 |
| 🇷🇪       | RE     | Reunião                               |
| 🇷🇴       | RO     | Roménia                               |
| 🇷🇸       | RS     | Sérvia                                |
| 🇷🇺       | RU     | Rússia                                |
| 🇷🇼       | RW     | Ruanda                                |
| 🇸🇦       | SA     | Arábia Saudita                        |
| 🇸🇧       | SB     | Ilhas Salomão                         |
| 🇸🇨       | SC     | Seicheles                             |
| 🇸🇩       | SD     | Sudão                                 |
| 🇸🇪       | SE     | Suécia                                |
| 🇸🇬       | SG     | Singapura                             |
| 🇸🇭       | SH     | Santa Helena                          |
| 🇸🇮       | SI     | Eslovénia                             |
| 🇸🇯       | SJ     | Svalbard e Jan Mayen                  |
| 🇸🇰       | SK     | Eslováquia                            |
| 🇸🇱       | SL     | Serra Leoa                            |
| 🇸🇲       | SM     | São Marinho                           |
| 🇸🇳       | SN     | Senegal                               |
| 🇸🇴       | SO     | Somália                               |
| 🇸🇷       | SR     | Suriname                              |
| 🇸🇹       | ST     | São Tomé e Príncipe                   |
| 🇸🇻       | SV     | Salvador                              |
| 🇸🇽       | SX     | São Martinho                          |
| 🇸🇾       | SY     | Síria                                 |
| 🇸🇿       | SZ     | Suazilândia                           |
| 🇹🇨       | TC     | Ilhas Turcas e Caicos                 |
| 🇹🇩       | TD     | Chade                                 |
| 🇹🇬       | TG     | Togo                                  |
| 🇹🇭       | TH     | Tailândia                             |
| 🇹🇯       | TJ     | Tajiquistão                           |
| 🇹🇰       | TK     | Tokelau                               |
| 🇹🇱       | TL     | Timor Leste                           |
| 🇹🇲       | TM     | Turquemenistão                        |
| 🇹🇳       | TN     | Tunísia                               |
| 🇹🇴       | TO     | Tonga                                 |
| 🇹🇷       | TR     | Turquia                               |
| 🇹🇹       | TT     | Trindade e Tobago                     |
| 🇹🇻       | TV     | Tuvalu                                |
| 🇹🇼       | TW     | Taiwan                                |
| 🇹🇿       | TZ     | Tanzânia                              |
| 🇺🇦       | UA     | Ucrânia                               |
| 🇺🇬       | UG     | Uganda                                |
| 🇺🇸       | US     | Estados Unidos                        |
| 🇺🇾       | UY     | Uruguai                               |
| 🇺🇿       | UZ     | Usbequistão                           |
| 🇻🇦       | VA     | Vaticano                              |
| 🇻🇨       | VC     | São Vicente e Granadinas              |
| 🇻🇪       | VE     | Venezuela                             |
| 🇻🇬       | VG     | Ilhas Virgens Britânicas              |
| 🇻🇮       | VI     | Ilhas Virgens Americanas              |
| 🇻🇳       | VN     | Vietname                              |
| 🇻🇺       | VU     | Vanuatu                               |
| 🇼🇫       | WF     | Wallis e Futuna                       |
| 🇼🇸       | WS     | Samoa                                 |
| 🇾🇪       | YE     | Iémen                                 |
| 🇾🇹       | YT     | Mayotte                               |
| 🇿🇦       | ZA     | África do Sul                         |
| 🇿🇲       | ZM     | Zâmbia                                |
| 🇿🇼       | ZW     | Zimbabué                              |
