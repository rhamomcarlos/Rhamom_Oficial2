# Pesquisa: Python, Flask e Frameworks Web

## 1. Python

Python é uma linguagem de programação conhecida por sua sintaxe simples e legível. É utilizada no desenvolvimento web, na automação, na análise de dados e na inteligência artificial.

No desenvolvimento web, Python pode ser usado no servidor para processar informações e enviar respostas ao navegador.

## 2. Flask

Flask é um microframework web para Python. Ele permite criar aplicações web de maneira simples, utilizando rotas para associar endereços a funções Python.

Uma rota pode ser, por exemplo, `/`, que representa a página inicial de uma aplicação.

## 3. Frameworks para desenvolvimento web

Frameworks web oferecem ferramentas que facilitam a criação de aplicações.

- Flask: microframework leve e flexível.
- Django: framework completo que oferece recursos integrados para aplicações web.
- FastAPI: framework utilizado principalmente para desenvolver APIs.

A escolha depende das necessidades e do tamanho do projeto.

## 4. Template engines

Template engines permitem gerar páginas HTML dinâmicas utilizando modelos e informações fornecidas pela aplicação.

O Flask utiliza o Jinja por padrão. Os arquivos HTML normalmente ficam na pasta `templates`.

Exemplo:

```html
<h1>Olá, {{ nome }}!</h1>
```

O Flask pode preencher a variável `nome` utilizando a função `render_template()`.

## 5. Conclusão

Python permite desenvolver a lógica do servidor, enquanto Flask facilita a criação de aplicações web. O Jinja permite criar páginas HTML dinâmicas. Django e FastAPI são outras opções para desenvolvimento web com Python.

## Referências

- Documentação Python: https://www.python.org/doc/
- Documentação Flask: https://flask.palletsprojects.com/
- Documentação Jinja: https://jinja.palletsprojects.com/
- Documentação Django: https://docs.djangoproject.com/
- Documentação FastAPI: https://fastapi.tiangolo.com/