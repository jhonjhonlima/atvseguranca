# 🛡️ Projeto de Extensão - Segurança em Projeto de Software (N693)

## 👥 Equipe
- Eleejohn Lima de Matos
-  (2213897)
 
---

## 🎯 Objetivo
Desenvolver uma aplicação segura que atenda às necessidades de um público-alvo específico (ex.: microempreendedores / comunidade acadêmica), utilizando metodologias e técnicas do ciclo de vida de desenvolvimento seguro de software (SDL, TDD, OWASP).

---

## 📌 Requisitos

### ✅ Requisitos Funcionais
1. Autenticação de usuários com senha criptografada.
2. Cadastro e gerenciamento de usuários.
3. Recuperação de senha via e-mail seguro.
4. Controle de permissões (admin / usuário).
5. Registro de logs de acesso e atividades críticas.

### 🔒 Requisitos Não Funcionais
- **Segurança:** uso de HTTPS, hashing de senhas (bcrypt), criptografia de dados sensíveis (AES).  
- **Performance:** resposta em até 2 segundos para operações críticas.  
- **Confiabilidade:** disponibilidade mínima de 99%.  
- **Compliance:** aderência à **LGPD**.  
- **Usabilidade:** interface intuitiva para usuários sem conhecimento técnico.  

---

## ⚠️ Análise de Riscos
- **Dados tratados:** nome, email, senha, telefone.  
- **Principais ameaças:**  
  - SQL Injection  
  - Cross-Site Scripting (XSS)  
  - Quebra de autenticação (senhas fracas, brute-force)  
  - Exposição de dados sensíveis em logs ou erros  
- **Medidas preventivas:**  
  - Uso de *prepared statements*  
  - Sanitização de entradas  
  - Políticas de senha forte  
  - Criptografia em repouso e em trânsito  

---

## 🏗️ Análise e Design

### 📊 Diagramas
1. **Caso de Uso**
   - Representando login, cadastro, recuperação de senha, gestão de usuários.
2. **Arquitetura**
   - Cliente → API → Banco de Dados (com criptografia e autenticação JWT).  
3. **Modelo de Ameaças (Threat Modeling - STRIDE)**
   - Identificação de vetores de ataque como Spoofing, Tampering, DoS, etc.  

---

## 💻 Implementação
- **Linguagem/Framework:** (Node.js, Django, Spring Boot, etc.)  
- **IDE utilizada:** (VS Code, IntelliJ, etc.)  
- **Práticas aplicadas:**  
  - Guidelines OWASP Secure Coding  
  - Revisões de código focadas em vulnerabilidades  
  - Análise estática (SAST) com ferramentas como SonarQube / CodeQL  

---

## 🧪 Testes
- **TDD:** testes unitários criados antes da implementação.  
- **DAST:** simulações de ataque com OWASP ZAP.  
- **Pentest:** manual em formulários e autenticação.  
- **SCA:** análise de dependências com `npm audit` / `pip-audit`.  
- **Conformidade:** validação contra requisitos de segurança definidos.  

---

## 📂 Gestão do Projeto
- **Ferramenta:** GitHub Projects (Kanban).  
- **Organização:** tarefas distribuídas entre os integrantes.  
- **Versionamento:** branches para features, merge requests com revisão de código.  

---

## 📷 Evidências da Ação de Extensão
- Reuniões com o público-alvo registradas (imagens/fotos).  
- Quantidade de participantes: X.  
- Feedback coletado por formulário (gráficos e análises estarão no relatório final).  


---

## ✅ Conclusão
O projeto permitiu aplicar técnicas de desenvolvimento seguro, atender às necessidades do público-alvo e demonstrar boas práticas em requisitos, modelagem, implementação e testes.
