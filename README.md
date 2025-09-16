# Licitacao Londrina

Este projeto automatiza testes de interface para o portal de licitações de Londrina utilizando Playwright.

## Estrutura do Projeto
- `tests/`: Contém os testes automatizados (exemplo: `example.spec.js`).
- `screenshots/`: Armazena capturas de tela dos testes.
- `playwright-report/`: Relatórios gerados após a execução dos testes.
- `test-results/`: Resultados dos testes.
- `playwright.config.js`: Configuração do Playwright.
- `package.json`: Dependências e scripts do projeto.

## Pré-requisitos
- Node.js instalado
- Playwright instalado

## Instalação

```bash
npm install
```

## Executando os Testes

```bash
npx playwright test
```

## Gerando Relatórios
Após rodar os testes, acesse o relatório em `playwright-report/index.html`.

## Capturas de Tela
As capturas de tela dos testes ficam em `screenshots/`.

## Contribuição
Pull requests são bem-vindos. Para grandes mudanças, abra uma issue primeiro para discutir o que deseja modificar.

## Licença
Este projeto está sob a licença MIT.
