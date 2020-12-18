# news-br-theo

O projeto foi desenvolvido em angular 9, e foram seguidos os seguintes passos.

Inicialmente acessei o repositório https://github.com/salesforce-ux/theo, li a documentação e observei os exemplos. Tive alguns problemas com a interpretação dos arquivos .yml, decidi então converte-los para .json, pois tenho maior familiaridade. Descobri que o nome das "props" dos tokens estavam "errados" (ou com incompatibilidade de versão):

como estava:

	{
	  "global": {
	    "type": "size",
	    "category": "border"
	  },
	  "props": {
		{
		  "name": "border-style-default"
		     "value": "solid",
	  "meta": {
		"friendlyName": "Border Style Default"
	  },
	   "category": "border-style"
	    }
	  }
	}

alterei para:

	{
	  "global": {
	    "type": "size",
	    "category": "border"
	  },
	  "props": {
	    "border-style-default": {
	      "value": "solid",
	      "meta": {
		"friendlyName": "Border Style Default"
	      },
	      "category": "border-style"
	    }
	  }
	}

Estudei mais um pouco para entender como funciona o gulp e o theo. Criei então o arquivo "gulpfile.js" e configurei para que o gulp fosse executado antes de executar o projeto, pois o css do projeto depende do valor das variáveis que estarão no arquivo gerado pelo theo utilizando o gulp.

A seguinte linha foi adicionada no package.json:

"start": "gulp design-tokens && ng serve"

Para que seja possível gerar as variáveis para os arquivos .scss e executar o projeto com o comando "npm run start".

Criei os testes unitários para simular como seria importante a implementação prática.

Acredito que para manter um código de qualidade é necessário utilizar as boas práticas de "clean code", e utilizar uma arquitetura para auxiliar na separação das responsabilidades e na diminuição do acoplamento. Reuniões de code review e mecanismos de pull-request também ajudam muito, assim como implementações de testes unitários e e2e. 
Para garantir a confiabilidade dos testes é necessário ter um fluxo de ci/cd com um pipeline que recebe os pull-requests executa todos os testes e afere a taxa de cobertura. Dessa forma acredito que os impactos das implementações são mitigados e a qualidade do código garantida.
