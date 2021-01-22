# Seletores & Especificidade


### O que é especificidade? 
> **Especificidade**
> * s.f qualidade daquilo que é específico; 
> * particularidade;
> * qualidade própria, peculiar, de uma espécie. 

No contexto do CSS, a definição de especificidade não passa tão longe assim. Especificidade o que define o quão especifico um seletor CSS é e quanto mais específico, maior prioridade ele possui sob os outros.

### Como calcular a especificidade?
Antes de falarmos de calculo de especificidade, temos que falar sobre quais são os **seletores mais especificos**. A lista abaixo está ordenada do seletor mais específico para o menos específico.

1. Ids `#id { ... }`
1. Classes, atributos e pseudo-classes `.classe { ... }`
1. Elementos e pseudo-elementos `div { ... }`

> ⚠️ **Observação**
> Nessa publicação não estaremos cobrindo o uso de atributos, pseudo-classes e pseudo-elementos.   

O calculo  de especificidade é uma combinação desses três tipos de seletores. O que gera algo mais ou menos assim:
```css
(0, 0, 0)
```
Esses numeros, separademente, representam a quantidade de ids, classes e elementos, respectivamente, utilizados na formação de um seletor CSS. O digito a esquerda sempre possuirá maior peso (ou prioridade) que o digito a direita. Ou seja, a primeira posição é a que possui maior peso, enquanto a terceira posição é a que possui menos peso. Então será feita uma comparação de numero a numero, para decidir qual seletor possui maior especificidade(ou peso/prioridade).


#### Exemplo de calculo de especificidade
Para ficar mais visiível esse calculo, observe o trecho HTML abaixo: 

```HTML
<p id="id" class="classe">Hello World!</p>
```

E dado o seguinte trecho CSS: 

```css

/*  Especificidade (1, 0, 0) */
#id {
    color: blue;
}

/*  Especificidade (0, 1, 0) */
.classe {
    color: red;
}

/*  Especificidade (0, 0, 1) */
p {
    color: green;
}
```
Antes de ver a resposta, tente descobrir qual será a cor aplicada ao elemento p. Qual o seletor que terá maior prioridade? O id, a classe ou o elemento? 

A resposta certa é **o id**! Pois o digito mais a esquerda possui maior peso que o digito a direita!

Agora vamos aumentar o nível! Dado o trecho HTML abaixo: 

```HTML
<p id="id" class="classe1 classe2">Hello World!</p>
```
E agora, o seguinte trecho CSS:

```css

/*  Especificidade (1, 0, 0) */
#id {
    color: blue;
}

/*  Especificidade (0, 2, 0) */
.classe1 .classe2 {
    color: red;
}

/*  Especificidade (0, 0, 1) */
p {
    color: green;
}
```

E agora? Quem possui maior especificidade? O id, a classe ou o elemento?

Mais uma vez, **o id**! Pelo mesmo motivo dito acima. Os digitos mais a esquerda possuem maior peso do que os digitos a direita. Ou seja, o 1 na primeira posição, possui muito mais peso do que o 2 na segunda posição! 


```js
(1, 0, 0) > (0, 2, 0)
```

O seletor de id sempre terá maior prioridade! A única forma de superar um seletor de id, é criando outro seletor de id mais específico. Como? Com o auxílio das outras duas posições. Veja: 

```css
/* (1, 0, 0) */
#id {
    color: blue;
}

/* (1, 2, 0)*/
#id.classe1.classe2 {
    color: red;
}
```

Logo:

```js
(1, 2, 0) > (1, 0, 0)
``` 

E seguindo a mesma regra:

```css
/* (1, 2, 0) */
#id.classe1.classe2 {
    color: blue;
}

/* (1, 2, 1)*/
#id.classe1.classe2 p {
    color: red;
}
```

Podemos ver que:

```js
(1, 2, 1) > (1, 2, 0)
``` 
Veja mais alguns exemplos de calculos de especificidade: 

```js
(0, 2, 0) > (0, 0, 20)
(1, 7, 0) > (0, 5, 0)
(1, 7, 0) > (1, 5, 3)
(1, 7, 3) > (1, 7, 0)
```

> ⚠️ **Observação**
> Atributos, pseudo-classes e pseudo-elementos apenas adicionam mais peso em suas respectivas posições, assim como adicionar uma classe ou um elemento ao seletor.

Então, quanto relevante for o peso adicionado ao seletor, ou seja, numeros adicionados as casas mais a esquerda, mais específico o seletor será. 

### Cascata & Especificidade

Um outro fator que definirá qual estilo será aplicado, é o comportamento de cascata do CSS. A ordem e o local onde o estilo for declarado pode influenciar na estilização. Um exemplo bem simples disso: 

```css
p {
    color: blue;
}

p {
    color: white;
}
```
O comportamento de cascata faz com que a cor do paragrafo seja branco, visto que foi declarado por ultimo. O mesmo vale para seletores mais complexos. Se a especificidade do elemento for o mesmo, a ordem em que foram definidos definirá quem será aplicado.

Como dito anteriormente, o local onde o css é definido também tem um papel muito importante na hora de definir quem terá a precedência. Segue uma lista em ordem decrescente dos locais com maior precedência. Quem possui maior prioridade está no topo.

1. Inline CSS 
    ```HTML
    <p style="color: white">Hello World!</p>
    ```
1. *CSS Embutido/CSS Externo
    ```HTML
    <style> p { color: white } </style>
    ```
    ```HTML
    <link rel="stylesheet" href="style.css">
    ```
1. Inline Attributes
    ```HTML
    <p color="white">Hello World!</p>
    ```
1. Herança
    ```HTML
    <div color="red">
        <p>Hello World!</p>
    </div>
    ```
Algo que deve ser mencionado sobre o CSS Embutido/ CSS Externo é que dependendo de quem for declarado por ultimo terá maior prioridade, mas respeitando os aspectos de especificidade do seletor. Veja: 

`style.css`
```css
p {
    color: red;
}
```

`index.html`
```HTML
    <link rel="stylesheet" href="style.css">
    <style> p { color: white } </style>
```

No exemplo acima, criamos um arquivo css chamado **style.css** e o importamos no nosso **index.html**.
No entato, o import do arquvo está ocorrendo **antes da declaração do CSS embutido**, logo, o paragrafo será branco. Porém, se mudarmos a ordem, como feito abaixo: 

`index.html`
```HTML
    <style> p { color: white } </style>
    <link rel="stylesheet" href="style.css">
```
Como agora estamos importando o arquivo style.css **por ultimo**, o paragrafo será vermelho. Imagine como se estivéssemos apenas concatenando o arquivo style.css no index.html. Resultando em algo mais ou menos assim: 
 
```css 
p {
    color: green;
}

p {
    color: red;
}
```

### !important demais é veneno
O CSS disponibiliza uma forma de "burlar" os niveis de especificidade através da palavra-chave `!important`.

```css
p {
    color: red!important;
}
```

O estilo que for marcado jutamente com essa palavra-chave terá prioridade acima dos outros seletores. No entanto, respeitando o comportamento de cascata mencionado anteriormente. Então, muito cuidado usando. 

### Dicas e Conclusão
Eu particularmente desconheço as boas práticas oficialmente estabelecidas pela documentação ou pela comunidade, então não tenho propriedade para ditar regras. O que eu posso falar com propriedade e sobre minha experiência de desenvolvimento e as dicas/ferramentas que me ajudaram.

1. Evite usar a palavra-chave !important
1. Tente aderir a alguma metodologia como a Block Element Modifier(BEM)
1. Alguns editores de texto auxiliam na hora de calcular a especificidade do seu seletor. O VSCode, por exemplo, no seu arquivo CSS, basta colocar o mouse sob o seu seletor e você verá o calculo de especificidade

Espero que tenham gostado e que essa publicação tenha esclarecido esses conceitos. Caso você tenha mais dicas para passar, ou gostaria de adicionar algo a discussão, junte-se a nós nos comentários, será um prazer interagir com você! 

Até a próxima!