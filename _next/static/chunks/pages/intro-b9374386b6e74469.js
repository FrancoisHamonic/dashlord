(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{61411:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/intro",function(){return s(2298)}])},2298:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return w}});var t=s(85893),i=s(9008),r=s.n(i);s(67294);var a=s(41664),o=s.n(a),l=s(86258),c=s(74995),d=s(22692),u=s(68404),p=s(21798),b=s(40536),g=s(56167),m=s(86987),h=s(59455),v=JSON.parse('{"404":{"label":"Erreurs 404","tags":["standards-betagouv"],"description":"D\xe9tecte les erreurs 404 sur un site web.\\n","warning":"","info":""},"lighthouse":{"label":"Google LightHouse","url":"https://developers.google.com/web/tools/lighthouse","tags":["accessibility","best-practices","seo","performance"],"description":"Permet un audit automatique de page web :\\n- Performances de chargement\\n- Bonnes pratiques SEO (r\xe9f\xe9rencement)\\n- Bonnes pratiques accessibilit\xe9 (moteur Axe)\\n- Bonnes pratiques web\\n","warning":"Les mesures de performance sont un instantan\xe9, donc pas forc\xe9ment repr\xe9sentatives.\\n\\nLes mesures d\'accessibilit\xe9 n\'abordent pas du tout [le RGAA](https://accessibilite.numerique.gouv.fr/)\\n","info":"L\'audit complet avec les recommandations de correction est disponible pour chaque URL\\n"},"dependabot":{"label":"Dependabot","url":"https://dependabot.com","tags":["security"],"description":"Scan des vuln\xe9rabilit\xe9s des d\xe9pendances sur les d\xe9p\xf4ts de code GitHub\\n\\ncf https://docs.github.com/en/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies\\n","warning":"","info":"N\xe9cessite d\'avoir activ\xe9 Dependabot sur les repositories GitHub et indiqu\xe9 le champ `repositories` dans `dashlord.yaml`.\\n"},"codescan":{"label":"CodeQL","url":"https://docs.github.com/en/code-security/secure-coding/about-code-scanning","tags":["security"],"description":"Recense les potentielles vuln\xe9rabilit\xe9s dans le code source.\\n\\n - Analyse statique du code sur le d\xe9p\xf4t Github du code\\n - Possibilit\xe9 de configurer dans le repository\\n","warning":"","info":"N\xe9cessite d\'avoir activ\xe9 CodeQL sur les repository GitHub et indiqu\xe9 le champ `repositories` dans `dashlord.yaml`.\\n"},"nmap":{"label":"Nmap","url":"https://nmap.org","tags":["security"],"description":"Nmap scan les vuln\xe9rabilit\xe9s d\'une machine (IP) associ\xe9e \xe0 un domaine.\\n\\nScan des ports ouverts avec vuln\xe9rabilit\xe9s gr\xe2ce au script [vulners](https://nmap.org/nsedoc/scripts/vulners.html).\\n","warning":"Ce scanner peut exposer des vuln\xe9rabilit\xe9s exploitables.\\n","info":"N\xe9cessite d\'avoir activ\xe9 CodeQL sur les repository GitHub et indiqu\xe9 le champ `repositories` dans `dashlord.yaml`.\\n"},"zap":{"label":"OWASP Zed Attack Proxy","url":"https://www.zaproxy.org/docs/docker/baseline-scan/","tags":["security"],"description":"Scan de vuln\xe9rabilit\xe9s passif ZAP OWASP \\"baseline\\" qui permet de d\xe9tecter des risques de s\xe9curit\xe9 de base.\\n","warning":"","info":"L\'audit complet avec les recommandations de correction est disponible pour chaque URL\\n"},"testssl":{"label":"testssl.sh","url":"https://testssl.sh","tags":["security"],"description":"\xc9value le niveau de confiance d\'un certificat SSL\\n\\n- Bonnes pratiques de configuration\\n- Protocoles disponibles\\n- Compatibilit\xe9 navigateurs\\n- Solidit\xe9 des cl\xe9s de chiffrement\\n","warning":"","info":"L\'audit complet avec les recommandations de correction est disponible pour chaque URL\\n"},"http":{"label":"Mozilla HTTP observatory","url":"https://observatory.mozilla.org/","tags":["security"],"description":"\xc9value le niveau de qualit\xe9/s\xe9curit\xe9 de la page web et de son serveur\\n\\n- Bonnes pratiques de configuration\\n- Bonnes pratiques web\\n- Solidit\xe9 des cl\xe9s de chiffrement\\n\\nVoir la [m\xe9thodologie](https://github.com/mozilla/http-observatory/blob/master/httpobs/docs/scoring.md)\\n","warning":"","info":""},"upwdownio":{"label":"Updown.io","url":"https://updown.io","tags":["performance"],"description":"\xc9value la qualit\xe9 de service rendue par le serveur\\n\\n- Temps de r\xe9ponse\\n- Disponibilit\xe9\\n- Indice de performance : [APDEX](https://updown.uservoice.com/knowledgebase/articles/915588-what-is-apdex)\\n- Validit\xe9 des certificats TLS\\n","warning":"","info":"Vous devez disposer d\'un compte updown.io et d\'une cl\xe9 API\\n"},"nuclei":{"label":"Nucl\xe9i","url":"https://nuclei.projectdiscovery.io/","tags":["security"],"description":"D\xe9tecte plus de 700 erreurs de configuration courantes sur les\\n   applications webs.\\n \\n   - S\xe9curit\xe9\\n   - Bonnes pratiques web\\n","warning":"Ce teste peut prendre de 5 \xe0 10 minutes par URL\\n","info":""},"thirdparties":{"label":"Third-parties (scripts externes)","url":"https://github.com/SocialGouv/thirdparties","tags":["privacy"],"description":"Liste tous les scripts externes charg\xe9s par une URL et qui peuvent avoir un impact sur :\\n- Performances web\\n- S\xe9curit\xe9\\n- Vie priv\xe9e\\n","warning":"Certains script l\xe9gitimes peuvent apparaitre dans cette cat\xe9gorie s\'ils sont h\xe9berg\xe9s sur d\'autres serveurs\\n","info":""},"wappalyzer":{"label":"Wappalyzer","url":"https://www.wappalyzer.com/","tags":["technologies"],"description":"Wappalyzer reconnait +1500 technologies web, Javascript, CMS, outillage...\\n\\n- Stack technique\\n- Obsolescence\\n- Parc\\n","warning":"","info":""},"stats":{"label":"Statistiques","tags":["standards-betagouv"],"description":"V\xe9rifie si la page /stats existe\\n","warning":"","info":""},"page_budget":{"label":"Budget","tags":["standards-betagouv"],"description":"V\xe9rifie si la page /budget existe\\n","warning":"","info":""},"trivy":{"label":"Vuln\xe9rabilit\xe9s Trivy","url":"https://aquasecurity.github.io/trivy/","tags":["security"],"description":"Trivy permet de scanner les containers docker \xe0 la recherche de vuln\xe9rabilit\xe9s connues.\\n   \\nTrivy d\xe9tecte les vuln\xe9rabilit\xe9s niveau OS (Alpine, RHEL, CentOS, etc.) mais aussi niveau packages (Bundler, Composer, npm, yarn, etc.).\\n","warning":"","info":"Vous devez saisir les urls des images \xe0 scanner dans le champ `docker` de votre url dans `dashlord.yaml`.\\n"},"ecoindex":{"label":"Score eco-index","url":"https://www.ecoindex.fr/comment-ca-marche/","tags":["ecoconception"],"description":"EcoIndex green-it est un outil communautaire, gratuit et transparent qui, pour une URL donn\xe9e, permet d’\xe9valuer :\\n\\n- sa performance environnementale absolue \xe0 l’aide d’un score sur 100 (higher is better)\\n- sa performance environnementale relative \xe0 l’aide d’une note de A \xe0 G\\n- l’empreinte technique de la page (poids, complexit\xe9, etc.)\\n- l’empreinte environnementale associ\xe9e (gaz \xe0 effet de serre et eau)\\n\\nL’objectif d’EcoIndex est d’aider le plus grand nombre \xe0 prendre conscience de l’impact environnemental de l’internet.\\n","warning":"","info":""},"sonarcloud":{"label":"Score SonarCloud","url":"https://sonarcloud.io/","tags":["quality","security"],"description":"SonarCloud permet d&apos;analyser le code source des repositories et de d\xe9tecter des bugs, vuln\xe9rabilit\xe9s, duplications et autres indicateurs de qualit\xe9.\\n","warning":"","info":""},"dsfr":{"label":"D\xe9tection du syst\xe8me de design de l\'\xe9tat","url":"https://www.systeme-de-design.gouv.fr/","tags":["standards-betagouv"],"description":"D\xe9tection du [syst\xe8me de design de l\'\xe9tat](https://www.systeme-de-design.gouv.fr/) avec la balise `fr-header__brand`\\n","warning":"","info":""},"declaration-a11y":{"label":"D\xe9tection de la d\xe9claration d\'accessibilit\xe9","tags":["standards-betagouv"],"description":"D\xe9tection de la mention de d\xe9claration d\'accessibilit\xe9 et de la page li\xe9e.\\n","warning":"","info":""},"declaration-rgpd":{"label":"D\xe9tection des mentions RGPD","tags":["standards-betagouv"],"description":"D\xe9tection des pages de mentions l\xe9gales et politique de confidentialit\xe9\\n","warning":"","info":""}}');let f=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{children:h.TN||"DashLord"}),(0,t.jsxs)(d.Z,{className:"fr-mb-3w",children:[(0,t.jsx)("br",{}),"DashLord compile les donn\xe9es techniques issues de diff\xe9rents outils open-source.",(0,t.jsx)("br",{}),"Cette \xe9valuation ne remplace en aucun cas une expertise manuelle, et seule la page d'accueil du site est ici \xe9valu\xe9e.",(0,t.jsx)("br",{}),"Vous pouvez"," ",(0,t.jsx)("a",{href:"".concat("https://github.com/FrancoisHamonic/dashlord","/issues/new"),target:"_blank",rel:"noopener noreferrer",children:"soumettre de nouvelles URLs, proposer des corrections"})," ","ou"," ",(0,t.jsx)("a",{href:"https://github.com/orgs/SocialGouv/projects/13",target:"_blank",rel:"noopener noreferrer",children:"consulter la roadmap"}),".",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(l.Z,{children:(0,t.jsx)(o(),{href:"/",children:"Acc\xe9der au tableau de bord"})})]}),(0,t.jsx)("h2",{children:"Les outils utilis\xe9s dans DashLord"}),Object.entries(v).map(e=>{let[n,s]=e;return(0,g.y$)(n)&&(0,t.jsxs)(m.s,{titleAs:"h3",title:(0,t.jsxs)(t.Fragment,{children:[s.label,s.tags.map(e=>(0,t.jsx)(u.C,{severity:"success",className:b.fr.cx("fr-ml-1w"),children:e},e))]}),url:s.url,children:[(0,t.jsx)("br",{}),(0,t.jsx)(p.U,{children:s.description}),(0,t.jsx)("br",{}),s.warning&&(0,t.jsx)(c.ZP,{severity:"warning",title:"",description:(0,t.jsx)(p.U,{children:s.warning}),className:b.fr.cx("fr-mb-3w")}),s.info&&(0,t.jsx)(c.ZP,{severity:"info",title:"",description:(0,t.jsx)(p.U,{children:s.info}),className:b.fr.cx("fr-mb-3w")})]},n)})]});var w=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r(),{children:(0,t.jsxs)("title",{children:["Introduction - ",h.TN]})}),(0,t.jsx)(f,{})]})},86987:function(e,n,s){"use strict";s.d(n,{s:function(){return r}});var t=s(85893);s(67294);var i=s(22692);let r=e=>{let{title:n,children:s,url:r=null,urlText:a=null,titleAs:o="h2",target:l="_blank"}=e;return(0,t.jsx)(i.Z,{buttonProps:r&&{children:a||"En savoir plus",linkProps:{href:r,target:l}}||void 0,title:n,titleAs:o,children:s})}}},function(e){e.O(0,[447,888,774,179],function(){return e(e.s=61411)}),_N_E=e.O()}]);