
# CineInfo

Um aplicativo de listagem de filmes

### Descrição técnica
Aplicativo criado utilizando React Native, Expo e Typescript, além de outras bibliotecas.

## Bibliotecas utilizadas
 - [React Native]()
 - [React Navigation]()
 - [Expo]()
 - [Redux]()
 - [Redux-Toolkit]()
 - [React-Query]()
 - [Axios]()
 - [AsyncStorage]()
 - [Reanimated]()
 - [Styled Components]()
 - [Zod]()
 - [i18next]()
 
## Instalação
Para rodar o app localmente em sua máquina, você devera seguir os seguintes passos:

Primeiramente, você precisará criar uma conta na TMDB e obter a sua Api Key, ela será importante para obter acesso aos filmes.
- [Acesse o site da TMDB aqui!](https://www.themoviedb.org/?language=pt-BR)

Agora, na sua maquina, você precisara ter as últimas versões desses gerenciadores de pacote:
 - [NPM]()
 - [Yarn]()

Recomenda-se seguir o guia de instalação do Expo para poder seguir com os próximos passos.
- [Guia de instalação Expo](https://docs.expo.dev/get-started/installation/)

O App está disponível para celulares IOS e Android. Para rodar no seu celular em modo de desenvolvimento, também será necessário a instalação desse app no dispositivo móvel que será utilizado.
 - [Expo Go]()

Pronto, agora, clone o projeto e depois que abrir ele na sua IDE de preferência, renomeie o arquivo .env.example para somente .env e dentro dele você deverá trocar o valor de YOUR_API_KEY pela sua Api Key do TMDB. Seu arquivo .env deverá ficar nesse formato:
```
    API_KEY = "000000"
```

Agora, basta abrir o terminal no projeto clonado e rodar essas duas linhas, uma para a instalação dos pacotes de depêndecia do projeto, e a seguinte para rodar o projeto e gerar um QRCode onde você deverá apontar a câmera do seu celular com o Expo Go instalado.
```bash
  $ yarn
  $ npx expo start
```
Após seguir esses passos, você terá acesso ao CineInfo. Nele, você poderá visualizar informações de uma extensa lista de filmes! Também é possível ativar o modo escuro e alternar entre os idiomas Português e Inglês nas configurações.
