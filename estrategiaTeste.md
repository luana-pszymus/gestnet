# GestNet – Gerenciador de Kitnets

---

## Funcionalidades Principais (atuais)

1. Consulta de Inquilinos
2. Consulta de Kitnets
3. Consulta de Contratos

---

## 1. Consulta de Inquilinos

### Regras de Negócio

- O sistema deve listar todos os inquilinos cadastrados.

### Casos de Teste

**Caso de Teste 1 (Positivo)**

- **Descrição:** Buscar inquilino pelo nome existente
- **Entrada:** Nome válido cadastrado
- **Resultado Esperado:** Retornar os dados do inquilino
- **Tipo de Teste:** Integração

**Caso de Teste 2 (Negativo)**

- **Descrição:** Buscar inquilino com CPF inválido
- **Entrada:** CPF com formato incorreto (ex: "123")
- **Resultado Esperado:** Retornar erro ou mensagem de validação
- **Tipo de Teste:** Unitário

---

## 2. Consulta de Kitnets

### Regras de Negócio

- O sistema deve listar todas as kitnets cadastradas.
- Não deve exibir registros inexistentes.
- A consulta deve retornar dados atualizados do banco.

### Casos de Teste

**Caso de Teste 3 (Positivo)**

- **Descrição:** Listar kitnets disponíveis
- **Entrada:** Filtro "livre"
- **Resultado Esperado:** Retornar apenas kitnets livres
- **Tipo de Teste:** Integração

**Caso de Teste 4 (Negativo)**

- **Descrição:** Buscar kitnet com ID inexistente
- **Entrada:** ID que não existe no banco
- **Resultado Esperado:** Retornar lista vazia ou mensagem de erro
- **Tipo de Teste:** Unitário

---

## 3. Consulta de Contratos

### Regras de Negócio

- O sistema deve listar contratos cadastrados.
- Deve permitir busca por ID do contrato ou ID do inquilino.
- Deve garantir que os dados estejam corretamente vinculados (inquilino e kitnet).
- Não deve retornar contratos inexistentes.

### Casos de Teste

**Caso de Teste 5 (Positivo)**

- **Descrição:** Buscar contrato por ID válido
- **Entrada:** ID existente
- **Resultado Esperado:** Retornar dados do contrato com inquilino e kitnet vinculados
- **Tipo de Teste:** E2E

**Caso de Teste 6 (Negativo)**

- **Descrição:** Buscar contrato com ID inexistente
- **Entrada:** ID inválido
- **Resultado Esperado:** Retornar erro ou resultado vazio
- **Tipo de Teste:** Integração

---
