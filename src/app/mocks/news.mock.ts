import { News } from "../models/news.model";

export class NewsMock {

    constructor() { }

    get news1(): News {
        return {
            "status": "ok",
            "totalResults": 10,
            "articles": [
                {
                    "source": {
                        "id": "google-news-br",
                        "name": "Google News (Brasil)"
                    },
                    "author": null,
                    "title": "Chuva em SC: veja quem são os mortos",
                    "description": "Foram onze vítimas em Presidente Getúlio e uma em Ibirama. Segundo Defesa Civil, nove pessoas seguem desaparecidas.",
                    "url": "https://g1.globo.com/sc/santa-catarina/noticia/2020/12/18/chuva-em-sc-veja-quem-sao-os-mortos.ghtml",
                    "urlToImage": "https://s2.glbimg.com/y0T_JaPH58TNT8Z9mgxVYoyoml8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/W/o/8jcdWIRGAXxrVLfPlELQ/presidente-getulio-resgate.jpg",
                    "publishedAt": "2020-12-18T10:23:00+00:00",
                    "content": "Onze pessoas que morreram durante o temporal que atingiu o Vale do Itajaí entre a noite de quarta-feira (16) e a manhã de quinta-feira (17) foram identificadas pelo Instituto Geral de Perícias (IGP).… [+3163 chars]"
                }
            ]
        }
    }

    get news2(): News {
        return {
            "status": "ok",
            "totalResults": 10,
            "articles": [
                {
                    "source": {
                        "id": "google-news-br",
                        "name": "Google News (Brasil)"
                    },
                    "author": null,
                    "title": "Chuva em SC: veja quem são os mortos",
                    "description": "Foram onze vítimas em Presidente Getúlio e uma em Ibirama. Segundo Defesa Civil, nove pessoas seguem desaparecidas.",
                    "url": "https://g1.globo.com/sc/santa-catarina/noticia/2020/12/18/chuva-em-sc-veja-quem-sao-os-mortos.ghtml",
                    "urlToImage": "https://s2.glbimg.com/y0T_JaPH58TNT8Z9mgxVYoyoml8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/W/o/8jcdWIRGAXxrVLfPlELQ/presidente-getulio-resgate.jpg",
                    "publishedAt": "2020-12-18T10:23:00+00:00",
                    "content": "Onze pessoas que morreram durante o temporal que atingiu o Vale do Itajaí entre a noite de quarta-feira (16) e a manhã de quinta-feira (17) foram identificadas pelo Instituto Geral de Perícias (IGP).… [+3163 chars]"
                },
                {
                    "source": {
                        "id": "google-news-br",
                        "name": "Google News (Brasil)"
                    },
                    "author": null,
                    "title": "Reinaldo Azevedo: A Abin, o GSI e a falta de vergonha na cara como norte",
                    "description": "O diretor-geral da Agência Brasileira de Inteligência (Abin), Alexandre Ramagem, admitiu que fez uma reunião com a defesa do senador Flávio Bolsonaro, mas ne...",
                    "url": "https://www.youtube.com/watch?v=DZNkaSL2oBA",
                    "urlToImage": "https://i.ytimg.com/vi/DZNkaSL2oBA/maxresdefault.jpg",
                    "publishedAt": "2020-12-17T01:58:13+00:00",
                    "content": "O diretor-geral da Agência Brasileira de Inteligência (Abin), Alexandre Ramagem, admitiu que fez uma reunião com a defesa do senador Flávio Bolsonaro, mas ne..."
                }
            ]
        }
    }

    get emptyArticles(): News {
        return {
            "status": "ok",
            "totalResults": 10,
            "articles": []
        }
    }
}