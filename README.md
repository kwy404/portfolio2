# Portfolio

## Sobre

Projeto de portfolio desenvolvido sob mentoria com finalidade de analisar e aprimorar a qualidade de código. Deve ser utilizado como base/inspiração o seguinte site:

https://brittanychiang.com/

## Fluxo de trabalho

As tarefas serão criadas pelo mentor no Trello e serão executadas uma de cada vez. Fluxo no Trello:

1. **To-do:** tarefa que ainda não foi iniciada
2. **Blocked:** tarefa que já foi iniciada mas encontrou um impeditivo no meio do caminho (dependência com outra tarefa, problema externo, etc.)
3. **Fix:** tarefa que foram encontrados problemas durante o QA e devem ser resolvidos para prosseguir com a mesma
4. **Doing:** tarefa que está ativamente sendo desenvolvida/executada
5. **Code Review:** tarefa que está com PR aberta e aguardando revisão de código do mentor
6. **Waiting for QA:** tarefa que já teve a aprovação durante a etapa de code review e está aguardando o QA
7. **QA in Progress:** tarefa que está sendo testada pelo QA
8. **QA Approved:** tarefa que já foi testada pelo QA e foi devidamente aprovada quanto ao seu funcionamento
9. **Done/deployed:** tarefa que já foi concluída, isto é, mergeada e feito o deploy

Qualquer dúvida deve ser perguntada ao mentor para maiores esclarecimentos.

## Guidelines

### Idioma

Todo o código deve ser escrito em inglês, isso inclui: variáveis, nomes de função, comentários, nome de arquivos, mensagem de commit, nome de branch, etc.

A única exceção é documentação e obviamente os textos do site.

### Mensagem de commit

Todo commit deve seguir o padrão `type: subject` e não deve ser muito longo. Por exemplo:

```
feat: menu items
fix: font size on footer
refactor: move projects to a component
chore: install icons package
```

Mais informações em: http://udacity.github.io/git-styleguide/

### Nome de branch

Toda branch deve seguir o padrão `type/task-description`, onde `type` é o tipo (como no commit) e `task-description` é uma descrição pequena do que será desenvolvido na branch. A única exceção de nome, é o `feat` que vira `feature`, sem ser abreviado. Exemplos:

```
feature/menu
fix/mobile-responsive
feature/projects-section
```

### Style Guide

Utilizar o do `airbnb` como base:

https://github.com/airbnb/javascript

Se possível, configurar no projeto o `eslint` usando o padrão do `airbnb`