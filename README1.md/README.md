# Projeto Nova-Web — Especificações de UI/UX (Tela de Login)

Neste documento apresento os conceitos de usabilidade, design de componentes e padrões de acessibilidade aplicados ao desenvolvimento da tela de login do projeto Nova-Web.

---

## 1. Usabilidade em Formulários

### Labels vs. Placeholders
Substituir a *label* (rótulo) pelo *placeholder* é um erro comum de UX. Optamos por manter as labels sempre visíveis pelos seguintes motivos:
* **Perda de contexto:** O placeholder desaparece assim que o utilizador começa a digitar, o que faz com que ele perca a referência do que aquele campo pede.
* **Acessibilidade:** Leitores de ecrã não lidam bem com placeholders como substitutos de labels, e o contraste dessas marcas de água costuma ser muito baixo.
* **Confusão:** Um placeholder pode ser interpretado como um campo que já foi preenchido.

> **Regra adotada:** A label fica sempre fixa acima do campo. O placeholder é usado apenas para mostrar um exemplo de formato (ex: `nome@empresa.com`).

---

### Hierarquia Visual nos Botões
Para guiar o utilizador de forma intuitiva até à ação principal sem gerar dúvidas:

* **Botão Principal (Primary - ex: "Entrar"):** Tem o maior peso visual da ecrã, usando cor sólida de alto contraste (azul). É a chamada de ação principal (CTA).
* **Ações Secundárias (Secondary - ex: "Criar conta", "Esqueci a senha"):** Utilizam estilos mais discretos (apenas contorno ou visual de link/texto) para não competir com o botão principal.

---

## 2. Estados de Validação dos Inputs

Os campos de texto respondem visualmente às interações do utilizador para dar um feedback claro:

* **Default (Padrão):** Borda neutra em tom cinza claro e label bem legível.
* **Focus (Foco):** Borda em destaque (azul) com um anel de foco quando o campo é selecionado via clique ou tecla Tab.
* **Error (Erro):** Borda vermelha acompanhada por um ícone de alerta e uma mensagem explicativa logo abaixo do campo (ex: *"E-mail ou senha incorretos"*).
* **Success (Sucesso):** Borda verde com ícone de *check* confirmando que o preenchimento está correto.
* **Disabled (Desabilitado):** Fundo cinza suave e texto com contraste reduzido para mostrar que o campo está indisponível.

---

## 3. Padrões de Acessibilidade (WCAG)

* **Contraste de cor:** Todos os textos principais seguem o rácio mínimo de 4.5:1 da WCAG 2.1 AA para garantir uma leitura confortável.
* **Navegação por Teclado:** A ordem da tecla `Tab` segue uma sequência lógica (Label -> Input -> Checkbox -> Botão -> Links), mantendo o indicador de foco sempre visível.
* **Leitores de Ecrã:** Estrutura semântica correta com associação entre a label e o input correspondente, além de alertas de erro legíveis por tecnologias assistivas.