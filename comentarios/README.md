# Comentários

### São um mal necessário
- Nossa incapacidade de nos expressarmos através de código
- Fracassamos ao expressar o nosso pensamento através de código por isso recorremos aos comentários

### Comentários podem ser enganadores
- Comentários velhos e distantes do proposito real do código são enganadores
- Realisticamente programadores estão mais focados em atualizar o código do que atualizar os comentários
- O código evolui, e os comentários vão ficando cada vez mais desatualizados

### Não somente o código, os comentários também
- Desenvolvedores deveriam ser disciplinados para materem os comentários aualizados e precisos
- O ideal seria que esses esfoço fosse canalizado na escrita de um código claro
- Comentários enganosos são piores do que a falta de comentários
- Muito ajuda quem não atrapalha
- O código te diz exatamente o que ele faz, ou pelo menos deveria

### Código expressivo gera menos comentários
- Por trás de um comentário muito detalhado pode ter um código ruim

### Explique-se no código
- Refatorar o if em saveEntry



### Dicas
- Evite usar comentários a torto e a direita
- Quando escrever um comentário pense duas vezes se não da pra se expressar melhor no seu código












Pergunta de um seguidor

Comentários nos códigos: sempre penso em comentar, mas vejo que o código já fala por si mesmo e acho redundante a maioria dos comentários. Como posso saber qual seria o ideal? - Arlei Lissoni



Seguindo as recomendações do Uncle Bob, que não gosta de comentários.



Por que evitar comentar?

Se eu conseguir expressar bem minha intenção através do código, não preciso de comentários
O código muda com frequência e não vale a pena perder tempo atualizando os comentários. Depois de um tempo, o código mudou tanto que o comentário perde o sentido.
Comentários imprecisos "enganam e iludem"
Criam expectativas que não serão cumpridas
Citam regras desnecessárias
Só o código em si pode dizer a verdade.
Não gaste tempo criando comentários para explicar a bagunça que você fez, gaste tempo limpando o código
 

Quando comentar?

Legais - Informações legais e obrigatórias, quando for exigido
Explicação da intenção - Explicar a intenção que justifica uma decisão
Esclarecimento - Esclarecer o significado de alguns parâmetros que parecem obscuros
Alerta sobre consequências
TODO - Indicar tarefas que precisam ser feitas em momento oportuno. Procure-os regularmente e elimine-os assim que puder.
Destaque - Destacar algo muito importante que parece irrelevante
 

O que não comentar?

Reclamações - que só fazem sentido para quem escreveu, deixa uma série de dúvidas e obriga a fazer uma leitura de várias partes do código para entender o que o desenvolvedor quis dizer. Ou, comentários de um programador que simplesmente estava exausto e estressado. Comentário não é local para desabafo.
"Troque a tentação para criar ruídos pela determinação para limpar seu código. Você perceberá que isso lhe tornará um programador melhor e mais feliz."
Redundâncias - Se o código já é auto-explicativo, não precisa comentar. É como um vendedor de carros mal intencionado que não quer que você dê uma boa olhada no carro. Alguns são tão irrelevantes que nossos olhos aprendem a ignorá-los. Conforme o código muda, os comentários começam a mentir.
Enganadores - Muito parecido com o redundante. Ele diz que o código faz algo que na verdade não faz. Então o programador despreocupado faria o que o comentário recomenda, não chegaria no resultado esperado e perderia horas tentando entender o que houve de errado.
Longos - Antes, era comum adicionar comentários no início do código a cada novo módulo, com as ações realizadas. Atualmente isso não faz o menor sentido, já que temos sistemas de controle de versões.
Substituíveis por uma função - **exemplo**
Marcadores - Em muitos casos, faz sentido indicar o local onde há muitas funções juntas, mas deve ser feito de forma esporádica. Se você usá-los com frequência, eles não vão mais chamar atenção, perderão o sentido, serão ignorados e se tornarão ruído.
Ao lado de chaves de fechamento - Muitas vezes, ao fim de uma longa função com estruturas muito aninhadas, nesses casos o comentário faz sentido. No entanto, seria muito melhor reduzir as funções, tornando-as menores e encapsuladas. Dessa forma, não precisa amontoar o código com comentários.
Créditos e autoria - Totalmente dispensável graças aos sistemas de controle de código.
Códigos - Quem ver o código vai achar que o comentário está lá por um motivo importante demais para ser apagado, então ficarão eternamente acumulados. Mais uma vez, graças aos sistemas de controle de código, você não precisa se preocupar em perder aquele trecho de código, porque todas as versões estarão a salvo. Simplesmente exclua, você não perderá.
Informações excessivas - Evite incluir informações históricas e descrições longas e irrelevantes. Foque apenas nas informações essenciais.
Conexões não óbivas - O comentário deve ter total relação com o código que busca explicar. **o exemplo explica melhor**
Cabeçalhos de funções - Funções curtas não precisam de muita explicação, um bom nome é melhor do que um comentário.
 

 

 