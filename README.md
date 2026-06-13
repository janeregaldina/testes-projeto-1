# 🧮 Projeto Calculadora com Testes Automatizados (Vitest)

Este projeto é uma calculadora simples desenvolvida em JavaScript, com estrutura modular e testes automatizados utilizando o framework **Vitest**.

---

## 📁 Estrutura do Projeto

```text
src/
├── sum.js
├── sub.js
├── mul.js
├── div.js
└── calculadora.js

tests/
├── sum.test.js
├── sub.test.js
├── mul.test.js
├── div.test.js
└── calculadora.test.js


---

## ⚙️ Funcionalidades

- Soma de dois números
- Subtração de dois números
- Multiplicação de dois números
- Divisão de dois números
- Módulo calculadora que agrupa todas as operações

---

## 🧪 Testes

Os testes foram feitos com o **Vitest**, garantindo que todas as funções funcionem corretamente.

### Exemplo de teste:

```js
expect(calculadora.soma(2, 3)).toBe(5);
```

### Executar os testes

```bash
npx vitest
```

---

## 🚀 Tecnologias Utilizadas

- JavaScript
- Node.js
- Vitest
- Git e GitHub

