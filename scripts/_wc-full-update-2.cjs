/**
 * Word counter content update — Part 2: FR, PT, IT, NL locales
 */
const fs = require('fs');
const path = require('path');

const L = {
  fr: {
    metaTitle: 'Compteur de mots avec lisibilité Flesch-Kincaid et outils texte',
    metaDesc: 'Compteur gratuit de mots, caractères et syllabes avec score Flesch-Kincaid, temps de lecture, temps de parole et 10 outils de formatage. Sans inscription.',
    heroTitle: 'Comptez mots, caractères et lisibilité \u2013 score Flesch-Kincaid, temps de lecture et outils texte',
    heroDesc:
      'Collez votre texte et l\u2019outil comptera les mots, caractères, syllabes, phrases, paragraphes, mots uniques, temps de lecture, temps de parole et calculera le score de lisibilité Flesch-Kincaid. Changez la casse, supprimez les doublons ou triez les lignes en un clic.',
    schemaName: 'Compteur de mots avec lisibilité Flesch-Kincaid et outils texte',
    schemaAltNames: [
      'Compteur de mots en ligne',
      'Compteur de caractères avec et sans espaces',
      'Outil de comptage de mots pour rédacteurs',
      'Calculateur de temps de lecture',
      'Vérificateur de lisibilité Flesch-Kincaid',
      'Compteur de syllabes en ligne',
      'Calculateur de temps de parole',
      'Convertisseur de casse en ligne',
      'Outil de lisibilité de texte',
      'Supprimer les lignes en double',
    ],
    schemaDesc:
      'Compteur gratuit de mots et caractères avec score de lisibilité Flesch-Kincaid (formule Kandel-Moles pour le français), comptage de syllabes, estimation du temps de lecture et de parole, et 10 outils de formatage. Traitement local dans le navigateur.',
    schemaFeatures: [
      'Comptage de mots',
      'Comptage de caractères avec et sans espaces',
      'Comptage de phrases et paragraphes',
      'Comptage de mots uniques',
      'Longueur moyenne des mots',
      'Temps de lecture estimé',
      'Temps de parole estimé',
      'Comptage de syllabes',
      'Score de lisibilité Flesch-Kincaid (Kandel-Moles pour le français)',
      'Formules de lisibilité adaptées (16 langues)',
      'Convertir en majuscules ou minuscules',
      'Convertir en style phrase ou titre',
      'Inverser la casse',
      'Supprimer les espaces superflus',
      'Supprimer les lignes vides et doublons',
      'Trier les lignes A\u2013Z et Z\u2013A',
      'Copier le texte dans le presse-papiers',
    ],
    howToDesc: 'Comptez mots, caractères, syllabes et phrases. Vérifiez la lisibilité Flesch-Kincaid, le temps de lecture et le temps de parole. Formatez le texte avec 10 outils.',
    howToStep2:
      'Dans le panneau gauche vous verrez 11 métriques : mots, caractères avec et sans espaces, phrases, paragraphes, mots uniques, longueur moyenne, temps de lecture, temps de parole, syllabes et score Flesch-Kincaid.',
    sectionBasicHtml:
      '<p class="text-mid">Cet outil combine un compteur de mots et caractères avec une analyse de lisibilité Flesch-Kincaid et des fonctions de formatage de texte. Collez votre texte pour voir le nombre de mots, caractères, syllabes, phrases, paragraphes, mots uniques, temps de lecture, temps de parole et un score de lisibilité coloré.</p><p class="text-mid mt-3">Le <strong>score Flesch-Kincaid</strong> (0\u2013100) indique la facilité de lecture de votre texte. Pour les textes en français, l\u2019outil utilise la <strong>formule Kandel-Moles</strong> adaptée aux spécificités de la langue française. Un score supérieur à 70 indique un texte facile ; inférieur à 30, un niveau académique.</p><p class="text-mid mt-3">Sous le champ de texte, vous trouverez 10 outils : conversion de casse (MAJUSCULES, minuscules, Phrase, Titre), suppression des espaces superflus, lignes vides et doublons, et tri alphabétique. Tout le traitement se fait localement dans votre navigateur.</p>',
    metricsTitle: '11 métriques de texte \u2013 que mesure le compteur',
    metricsDesc: 'Le compteur analyse votre texte selon onze indicateurs :',
    metricItems: [
      { icon: 'RiText', title: 'Mots', description: 'Nombre total de mots. L\u2019indicateur principal de longueur du texte, utile pour la création de contenu, articles et descriptions.' },
      {
        icon: 'RiSpaceShipLine',
        title: 'Caractères (avec espaces)',
        description: 'Tous les caractères y compris les espaces. Utile quand une plateforme a une limite de caractères (Amazon, méta-descriptions).',
      },
      { icon: 'RiHashtag', title: 'Caractères (sans espaces)', description: 'Uniquement lettres, chiffres et ponctuation. L\u2019unité standard de facturation pour les traductions et imprimeries.' },
      {
        icon: 'RiChatQuoteLine',
        title: 'Phrases',
        description: 'Nombre de phrases dans le texte. Aide à évaluer la complexité et la lisibilité \u2013 les phrases courtes sont plus faciles à assimiler.',
      },
      { icon: 'RiParagraph', title: 'Paragraphes', description: 'Blocs de texte séparés par des lignes vides. Des paragraphes bien structurés améliorent la lisibilité sur écran.' },
      { icon: 'RiStarLine', title: 'Mots uniques', description: 'Nombre de mots non répétés. Un ratio élevé de mots uniques indique un vocabulaire plus riche.' },
      { icon: 'RiRulerLine', title: 'Longueur moyenne des mots', description: 'Nombre moyen de caractères par mot. Indicateur de complexité \u2013 les textes techniques ont des mots plus longs.' },
      { icon: 'RiTimeLine', title: 'Temps de lecture', description: 'Temps estimé de lecture à 200 mots par minute. Valeur approximative pour un texte standard.' },
      { icon: 'RiMicLine', title: 'Temps de parole', description: 'Temps estimé pour prononcer le texte à 130 mots par minute. Utile pour les discours, présentations et scripts vidéo.' },
      {
        icon: 'RiInputMethodLine',
        title: 'Syllabes',
        description: 'Total des syllabes avec heuristiques adaptées au français. Reconnaît les diphtongues (ou, ai, oi, eau) et les lettres muettes. Paramètre clé des formules de lisibilité.',
      },
      {
        icon: 'RiSpeedLine',
        title: 'Lisibilité (Flesch-Kincaid)',
        description: 'Score de 0\u2013100 indiquant la facilité de lecture. Plus de 70 = facile, 50\u201370 = modéré, moins de 30 = académique. Codé par couleur pour une évaluation rapide.',
      },
    ],
    toolItems: [
      { icon: 'RiArrowUpLine', title: 'MAJUSCULES', description: 'Convertit tout le texte en majuscules. Utile pour les titres, acronymes et mise en valeur.' },
      { icon: 'RiArrowDownLine', title: 'minuscules', description: 'Convertit tout le texte en minuscules. Utile pour normaliser du texte de sources différentes.' },
      { icon: 'RiEditLine', title: 'Phrase', description: 'Première lettre de chaque phrase en majuscule, le reste en minuscule. Format standard pour le texte courant.' },
      { icon: 'RiHeading', title: 'Titre', description: 'Chaque mot commence par une majuscule. Idéal pour les titres, en-têtes et noms propres.' },
      { icon: 'RiArrowLeftRightLine', title: 'iNVERSER', description: 'Intervertit majuscules et minuscules. Utile quand le texte a été tapé avec Verr Maj activé.' },
      { icon: 'RiSpace', title: 'Supprimer les espaces', description: 'Réduit les espaces multiples à un seul et supprime les espaces en début et fin de ligne.' },
      { icon: 'RiDeleteRow', title: 'Supprimer les lignes vides', description: 'Supprime les lignes vides et redondantes. Utile pour nettoyer du texte copié de sites web.' },
      { icon: 'RiFilterLine', title: 'Supprimer les doublons', description: 'Conserve uniquement les lignes uniques en supprimant les répétitions. Utile pour nettoyer des listes.' },
      { icon: 'RiSortAsc', title: 'Trier A\u2192Z', description: 'Trie les lignes alphabétiquement par ordre croissant. Utile pour organiser listes et données.' },
      { icon: 'RiSortDesc', title: 'Trier Z\u2192A', description: 'Trie les lignes alphabétiquement par ordre décroissant. Ordre inverse.' },
    ],
    whoTitle: 'À qui s\u2019adresse le compteur de mots ?',
    whoDesc: 'L\u2019outil est utile pour toute personne travaillant avec du texte :',
    whoItems: [
      {
        icon: 'RiEditLine',
        title: 'Rédacteurs et éditeurs',
        description: 'Compter mots et caractères, vérifier les limites des plateformes, changer la casse et nettoyer le texte avant publication.',
      },
      {
        icon: 'RiBloggerLine',
        title: 'Blogueurs et créateurs de contenu',
        description: 'Contrôler la longueur des publications, vérifier la lisibilité et le temps de lecture, supprimer les doublons.',
      },
      { icon: 'RiShoppingBagLine', title: 'Propriétaires de boutiques', description: 'Vérifier les descriptions produits par rapport aux limites de caractères (Amazon, Cdiscount, Fnac).' },
      { icon: 'RiSearchLine', title: 'Spécialistes SEO', description: 'Analyser la longueur du contenu, score Flesch-Kincaid, compter les mots uniques et évaluer la complexité du texte.' },
      { icon: 'RiGraduationCapLine', title: 'Étudiants et universitaires', description: 'Vérifier les limites de mots ou caractères dans les dissertations et mémoires. Évaluer la lisibilité.' },
      { icon: 'RiTranslate2', title: 'Traducteurs', description: 'Compter les caractères sans espaces pour les devis (l\u2019unité standard de facturation en traduction).' },
    ],
    specialTitle: 'Qu\u2019est-ce qui rend ce compteur de mots spécial ?',
    specialItems: [
      {
        icon: 'RiBarChartLine',
        title: '11 métriques + score de lisibilité',
        description: 'Mots, caractères, syllabes, phrases, paragraphes, mots uniques, temps de lecture, temps de parole et Flesch-Kincaid \u2013 tout dans un panneau.',
      },
      { icon: 'RiTextWrap', title: '10 outils de formatage', description: 'Conversion de casse, suppression d\u2019espaces, lignes vides, doublons et tri \u2013 sans installer de logiciel.' },
      {
        icon: 'RiUserLine',
        title: 'Traitement local dans le navigateur',
        description: 'Votre texte n\u2019est jamais envoyé à un serveur. Analyse et transformation se font localement sur votre appareil.',
      },
      { icon: 'RiFileCopyLine', title: 'Copier et effacer le texte', description: 'Copiez le texte modifié dans le presse-papiers en un clic ou effacez le champ pour recommencer.' },
      { icon: 'RiTimerLine', title: 'Résultats instantanés', description: 'Les statistiques se mettent à jour en temps réel pendant la saisie ou le collage. Pas d\u2019attente.' },
      { icon: 'RiLockLine', title: 'Sans inscription ni limites', description: 'L\u2019outil est entièrement gratuit. Aucune inscription, connexion ou donnée personnelle requise.' },
    ],
    faqItems: [
      {
        question: 'Comment le temps de lecture est-il calculé ?',
        answer:
          'L\u2019outil divise le nombre de mots par 200 \u2013 la vitesse de lecture moyenne pour un texte standard. Les textes techniques sont lus plus lentement, les articles légers plus vite.',
        answerSchemaText: 'L\u2019outil assume 200 mots par minute comme vitesse de lecture moyenne.',
      },
      {
        question: 'Quelle est la différence entre caractères avec et sans espaces ?',
        answer:
          'Caractères avec espaces inclut tous les caractères y compris espaces et tabulations. Caractères sans espaces inclut uniquement lettres, chiffres et ponctuation. Les agences de traduction facturent en caractères sans espaces.',
        answerSchemaText: 'Avec espaces inclut tout ; sans espaces uniquement lettres et chiffres.',
      },
      {
        question: 'Mon texte est-il en sécurité ?',
        answer: 'Oui. Toute l\u2019analyse et le traitement se font exclusivement dans votre navigateur \u2013 le texte n\u2019est jamais envoyé à un serveur. L\u2019outil ne sauvegarde rien.',
        answerSchemaText: 'Oui. Le texte est traité localement et jamais envoyé à un serveur.',
      },
      {
        question: 'Qu\u2019est-ce que le score Flesch-Kincaid ?',
        answer:
          'Le Flesch Reading Ease est un nombre de 0 à 100 indiquant la facilité de lecture. Pour le français, l\u2019outil utilise la formule Kandel-Moles adaptée aux spécificités françaises (lettres muettes, liaisons). Un score de 90\u2013100 signifie très facile, 70\u201389 facile, 50\u201369 modéré, 30\u201349 difficile et 0\u201329 très difficile.',
        answerSchemaText: 'Le Flesch Reading Ease (0\u2013100) mesure la lisibilité. Pour le français, la formule Kandel-Moles est utilisée.',
      },
      {
        question: 'Comment le temps de parole est-il calculé ?',
        answer:
          'Le temps de parole est estimé en divisant le nombre de mots par 130 \u2013 la vitesse moyenne lors de présentations. C\u2019est plus lent que les 200 mots/minute de lecture car la parole inclut des pauses naturelles.',
        answerSchemaText: 'Le temps de parole est calculé à 130 mots par minute.',
      },
      {
        question: 'Le compteur de syllabes est-il précis ?',
        answer:
          'L\u2019outil utilise des heuristiques spécifiques au français qui reconnaissent les diphtongues (ou, ai, oi, eau), les lettres muettes et les règles de syllabification française. Le comptage est approximatif mais suffisant pour l\u2019analyse de lisibilité.',
        answerSchemaText: 'Le compteur utilise des heuristiques françaises reconnaissant diphtongues et lettres muettes.',
      },
    ],
  },

  pt: {
    metaTitle: 'Contador de palavras com legibilidade Flesch-Kincaid e ferramentas de texto',
    metaDesc: 'Contador gratuito de palavras, caracteres e sílabas com pontuação Flesch-Kincaid, tempo de leitura, tempo de fala e 10 ferramentas de formatação. Sem registo.',
    heroTitle: 'Conte palavras, caracteres e legibilidade \u2013 Flesch-Kincaid, tempo de leitura e ferramentas de texto',
    heroDesc:
      'Cole o seu texto e a ferramenta contará palavras, caracteres, sílabas, frases, parágrafos, palavras únicas, tempo de leitura, tempo de fala e calculará a pontuação de legibilidade Flesch-Kincaid.',
    schemaName: 'Contador de palavras com legibilidade Flesch-Kincaid e ferramentas de texto',
    schemaAltNames: [
      'Contador de palavras online',
      'Contador de caracteres com e sem espaços',
      'Ferramenta de contagem para redatores',
      'Calculadora de tempo de leitura',
      'Verificador de legibilidade Flesch-Kincaid',
      'Contador de sílabas online',
      'Calculadora de tempo de fala',
      'Conversor de maiúsculas e minúsculas',
      'Ferramenta de legibilidade de texto',
      'Remover linhas duplicadas',
    ],
    schemaDesc:
      'Contador gratuito de palavras com pontuação Flesch-Kincaid (fórmula Fernández-Huerta para português), contagem de sílabas, tempo de leitura e fala, e 10 ferramentas de formatação. Processamento local no navegador.',
    schemaFeatures: [
      'Contagem de palavras',
      'Contagem de caracteres com e sem espaços',
      'Contagem de frases e parágrafos',
      'Contagem de palavras únicas',
      'Comprimento médio de palavra',
      'Tempo de leitura estimado',
      'Tempo de fala estimado',
      'Contagem de sílabas',
      'Pontuação Flesch-Kincaid (Fernández-Huerta para português)',
      'Fórmulas de legibilidade adaptadas (16 idiomas)',
      'Converter para maiúsculas ou minúsculas',
      'Converter para formato de frase ou título',
      'Inverter maiúsculas/minúsculas',
      'Remover espaços extra',
      'Remover linhas vazias e duplicadas',
      'Ordenar linhas A\u2013Z e Z\u2013A',
      'Copiar texto para a área de transferência',
    ],
    howToDesc: 'Conte palavras, caracteres, sílabas e frases. Verifique a legibilidade Flesch-Kincaid, o tempo de leitura e o tempo de fala.',
    howToStep2:
      'No painel esquerdo verá 11 métricas: palavras, caracteres com e sem espaços, frases, parágrafos, palavras únicas, comprimento médio, tempo de leitura, tempo de fala, sílabas e pontuação Flesch-Kincaid.',
    sectionBasicHtml:
      '<p class="text-mid">Esta ferramenta combina um contador de palavras e caracteres com análise de legibilidade Flesch-Kincaid e funções de formatação. Cole o seu texto para ver palavras, caracteres, sílabas, frases, parágrafos, palavras únicas, tempo de leitura, tempo de fala e uma pontuação de legibilidade colorida.</p><p class="text-mid mt-3">A <strong>pontuação Flesch-Kincaid</strong> (0\u2013100) indica a facilidade de leitura. Para textos em português é usada a <strong>fórmula Fernández-Huerta</strong>, adaptada às línguas românicas. Pontuações acima de 70 indicam leitura fácil; abaixo de 30 indicam nível académico. No Brasil, a ferramenta é particularmente útil para avaliar textos segundo os princípios da Linguagem Simples.</p><p class="text-mid mt-3">Abaixo do campo de texto encontrará 10 ferramentas: conversão de maiúsculas/minúsculas, remoção de espaços, linhas vazias, duplicados e ordenação. Todo o processamento ocorre localmente no navegador.</p>',
    metricsTitle: '11 métricas de texto \u2013 o que o contador mede',
    metricsDesc: 'O contador analisa o seu texto com onze indicadores:',
    metricItems: [
      { icon: 'RiText', title: 'Palavras', description: 'Total de palavras. O principal indicador de comprimento do texto, útil para artigos, descrições e criação de conteúdo.' },
      { icon: 'RiSpaceShipLine', title: 'Caracteres (com espaços)', description: 'Todos os caracteres incluindo espaços. Útil quando uma plataforma tem limite (Amazon, meta descriptions).' },
      { icon: 'RiHashtag', title: 'Caracteres (sem espaços)', description: 'Apenas letras, dígitos e pontuação. Unidade padrão de faturação em traduções e gráficas.' },
      { icon: 'RiChatQuoteLine', title: 'Frases', description: 'Número de frases. Ajuda a avaliar a complexidade \u2013 frases mais curtas são mais fáceis de absorver.' },
      { icon: 'RiParagraph', title: 'Parágrafos', description: 'Blocos de texto separados por linhas em branco. Parágrafos bem estruturados melhoram a leitura em ecrãs.' },
      { icon: 'RiStarLine', title: 'Palavras únicas', description: 'Número de palavras não repetidas. Uma proporção maior indica vocabulário mais rico.' },
      { icon: 'RiRulerLine', title: 'Comprimento médio', description: 'Média de caracteres por palavra. Indicador de complexidade \u2013 textos técnicos têm palavras mais longas.' },
      { icon: 'RiTimeLine', title: 'Tempo de leitura', description: 'Tempo estimado de leitura a 200 palavras por minuto. Valor aproximado para texto típico.' },
      { icon: 'RiMicLine', title: 'Tempo de fala', description: 'Tempo estimado para falar o texto a 130 palavras por minuto. Útil para discursos e apresentações.' },
      {
        icon: 'RiInputMethodLine',
        title: 'Sílabas',
        description: 'Total de sílabas com heurísticas adaptadas ao português. Reconhece ditongos e hiatos. Parâmetro chave para fórmulas de legibilidade.',
      },
      { icon: 'RiSpeedLine', title: 'Legibilidade (Flesch-Kincaid)', description: 'Pontuação 0\u2013100. Acima de 70 = fácil, 50\u201370 = moderado, abaixo de 30 = académico. Com código de cores.' },
    ],
    toolItems: [
      { icon: 'RiArrowUpLine', title: 'MAIÚSCULAS', description: 'Converte todo o texto em maiúsculas. Útil para títulos e acrónimos.' },
      { icon: 'RiArrowDownLine', title: 'minúsculas', description: 'Converte todo o texto em minúsculas. Útil para normalizar texto de diferentes fontes.' },
      { icon: 'RiEditLine', title: 'Frase', description: 'Primeira letra de cada frase em maiúscula, o resto em minúscula.' },
      { icon: 'RiHeading', title: 'Título', description: 'Cada palavra começa com maiúscula. Ideal para títulos e nomes.' },
      { icon: 'RiArrowLeftRightLine', title: 'iNVERTER', description: 'Troca maiúsculas por minúsculas e vice-versa.' },
      { icon: 'RiSpace', title: 'Remover espaços', description: 'Reduz espaços múltiplos a um e remove espaços no início e fim de cada linha.' },
      { icon: 'RiDeleteRow', title: 'Remover linhas vazias', description: 'Remove linhas vazias e redundantes do texto.' },
      { icon: 'RiFilterLine', title: 'Remover duplicados', description: 'Mantém apenas linhas únicas, removendo repetições.' },
      { icon: 'RiSortAsc', title: 'Ordenar A\u2192Z', description: 'Ordena linhas alfabeticamente em ordem crescente.' },
      { icon: 'RiSortDesc', title: 'Ordenar Z\u2192A', description: 'Ordena linhas alfabeticamente em ordem decrescente.' },
    ],
    whoTitle: 'Para quem é o contador de palavras?',
    whoDesc: 'A ferramenta é útil para qualquer pessoa que trabalhe com texto:',
    whoItems: [
      { icon: 'RiEditLine', title: 'Redatores e editores', description: 'Contar palavras e caracteres, verificar limites de plataformas, mudar maiúsculas e limpar texto.' },
      { icon: 'RiBloggerLine', title: 'Bloggers e criadores de conteúdo', description: 'Controlar comprimento de publicações, verificar legibilidade e tempo de leitura.' },
      { icon: 'RiShoppingBagLine', title: 'Proprietários de lojas', description: 'Verificar descrições de produtos contra limites (Amazon, OLX, KuantoKusta).' },
      { icon: 'RiSearchLine', title: 'Especialistas SEO', description: 'Analisar comprimento do conteúdo, pontuação Flesch-Kincaid e complexidade do texto.' },
      { icon: 'RiGraduationCapLine', title: 'Estudantes e académicos', description: 'Verificar limites de palavras em dissertações e teses. Avaliar legibilidade.' },
      { icon: 'RiTranslate2', title: 'Tradutores', description: 'Contar caracteres sem espaços para orçamentos de tradução.' },
    ],
    specialTitle: 'O que torna este contador especial?',
    specialItems: [
      {
        icon: 'RiBarChartLine',
        title: '11 métricas + pontuação de legibilidade',
        description: 'Palavras, caracteres, sílabas, frases, parágrafos, palavras únicas, tempo de leitura, tempo de fala e Flesch-Kincaid \u2013 tudo num painel.',
      },
      { icon: 'RiTextWrap', title: '10 ferramentas de formatação', description: 'Conversão de maiúsculas, remoção de espaços, linhas vazias, duplicados e ordenação \u2013 sem instalar software.' },
      { icon: 'RiUserLine', title: 'Processamento local no navegador', description: 'O seu texto nunca é enviado a um servidor. Análise e transformação ocorrem localmente.' },
      { icon: 'RiFileCopyLine', title: 'Copiar e limpar texto', description: 'Copie o texto para a área de transferência com um clique ou limpe o campo.' },
      { icon: 'RiTimerLine', title: 'Resultados instantâneos', description: 'As estatísticas atualizam-se em tempo real. Sem espera de processamento.' },
      { icon: 'RiLockLine', title: 'Sem registo nem limites', description: 'A ferramenta é gratuita. Sem registo, login ou dados pessoais.' },
    ],
    faqItems: [
      {
        question: 'Como é calculado o tempo de leitura?',
        answer: 'A ferramenta divide o número de palavras por 200 \u2013 a velocidade média de leitura. Textos técnicos são lidos mais devagar, artigos leves mais depressa.',
        answerSchemaText: 'A ferramenta assume 200 palavras por minuto.',
      },
      {
        question: 'O meu texto está seguro?',
        answer: 'Sim. Todo o processamento ocorre no navegador. O texto nunca é enviado a um servidor nem armazenado.',
        answerSchemaText: 'Sim. Processamento local, sem envio a servidores.',
      },
      {
        question: 'O que é a pontuação Flesch-Kincaid?',
        answer:
          'O Flesch Reading Ease é um número de 0 a 100. Para português é usada a fórmula Fernández-Huerta. 90\u2013100 = muito fácil, 70\u201389 = fácil, 50\u201369 = moderado, 30\u201349 = difícil, 0\u201329 = muito difícil.',
        answerSchemaText: 'O Flesch Reading Ease (0\u2013100) mede a legibilidade. Para português usa-se Fernández-Huerta.',
      },
      {
        question: 'Como é calculado o tempo de fala?',
        answer: 'O tempo de fala divide o número de palavras por 130 \u2013 a velocidade média em apresentações. É mais lento que a leitura porque a fala inclui pausas e respiração.',
        answerSchemaText: 'Calculado a 130 palavras por minuto.',
      },
      {
        question: 'O contador de sílabas é preciso?',
        answer: 'A ferramenta usa heurísticas adaptadas ao português que reconhecem ditongos, hiatos e regras de silabificação. O resultado é aproximado mas suficiente para análise de legibilidade.',
        answerSchemaText: 'Usa heurísticas do português com reconhecimento de ditongos e hiatos.',
      },
    ],
  },

  it: {
    metaTitle: 'Contatore di parole con leggibilità Flesch-Kincaid e strumenti testo',
    metaDesc: 'Contatore gratuito di parole, caratteri e sillabe con punteggio Flesch-Kincaid (Gulpease), tempo di lettura, tempo di parlato e 10 strumenti di formattazione.',
    heroTitle: 'Conta parole, caratteri e leggibilità \u2013 indice Gulpease, tempo di lettura e strumenti testo',
    heroDesc:
      'Incolla il tuo testo e lo strumento conterà parole, caratteri, sillabe, frasi, paragrafi, parole uniche, tempo di lettura, tempo di parlato e calcolerà il punteggio di leggibilità. Cambia maiuscole/minuscole, rimuovi duplicati o ordina le righe.',
    schemaName: 'Contatore di parole con leggibilità Flesch-Kincaid (Gulpease) e strumenti testo',
    schemaAltNames: [
      'Contatore di parole online',
      'Contatore di caratteri con e senza spazi',
      'Strumento conteggio parole per copywriter',
      'Calcolatore tempo di lettura',
      'Indice di leggibilità Gulpease',
      'Contatore di sillabe online',
      'Calcolatore tempo di parlato',
      'Convertitore maiuscole minuscole',
      'Strumento leggibilità testo',
      'Rimuovi righe duplicate',
    ],
    schemaDesc:
      'Contatore gratuito di parole con indice di leggibilità Gulpease (specifico per l\u2019italiano), conteggio sillabe, stima tempo di lettura e parlato, e 10 strumenti di formattazione. Elaborazione locale nel browser.',
    schemaFeatures: [
      'Conteggio parole',
      'Conteggio caratteri con e senza spazi',
      'Conteggio frasi e paragrafi',
      'Conteggio parole uniche',
      'Lunghezza media parola',
      'Tempo di lettura stimato',
      'Tempo di parlato stimato',
      'Conteggio sillabe',
      'Indice Gulpease (specifico per l\u2019italiano)',
      'Formule di leggibilità adattate (16 lingue)',
      'Convertire in maiuscolo o minuscolo',
      'Convertire in formato frase o titolo',
      'Invertire maiuscole/minuscole',
      'Rimuovere spazi extra',
      'Rimuovere righe vuote e duplicati',
      'Ordinare righe A\u2013Z e Z\u2013A',
      'Copiare testo negli appunti',
    ],
    howToDesc: 'Conta parole, caratteri, sillabe e frasi. Verifica la leggibilità Gulpease, il tempo di lettura e il tempo di parlato.',
    howToStep2:
      'Nel pannello sinistro vedrai 11 metriche: parole, caratteri con e senza spazi, frasi, paragrafi, parole uniche, lunghezza media, tempo di lettura, tempo di parlato, sillabe e indice di leggibilità.',
    sectionBasicHtml:
      '<p class="text-mid">Questo strumento combina un contatore di parole e caratteri con analisi di leggibilità e funzioni di formattazione testo. Incolla il tuo testo per vedere parole, caratteri, sillabe, frasi, paragrafi, parole uniche, tempo di lettura, tempo di parlato e un punteggio di leggibilità colorato.</p><p class="text-mid mt-3">Per i testi in italiano lo strumento utilizza l\u2019<strong>indice Gulpease</strong>: 89 + (300 \u00d7 frasi \u2212 10 \u00d7 caratteri) / parole. A differenza del Flesch-Kincaid standard, il Gulpease è stato sviluppato specificamente per la lingua italiana. Un punteggio superiore a 80 indica un testo facile per chi ha la licenza elementare; inferiore a 40 è leggibile solo per laureati.</p><p class="text-mid mt-3">Sotto il campo di testo troverai 10 strumenti: conversione maiuscole/minuscole, rimozione spazi, righe vuote, duplicati e ordinamento. Tutto avviene localmente nel browser.</p>',
    metricsTitle: '11 metriche di testo \u2013 cosa misura il contatore',
    metricsDesc: 'Il contatore analizza il tuo testo con undici indicatori:',
    metricItems: [
      { icon: 'RiText', title: 'Parole', description: 'Totale delle parole. L\u2019indicatore principale della lunghezza del testo.' },
      { icon: 'RiSpaceShipLine', title: 'Caratteri (con spazi)', description: 'Tutti i caratteri inclusi gli spazi. Utile per limiti di piattaforme (Amazon, meta description).' },
      { icon: 'RiHashtag', title: 'Caratteri (senza spazi)', description: 'Solo lettere, cifre e punteggiatura. Unità standard di fatturazione per traduzioni e tipografie.' },
      { icon: 'RiChatQuoteLine', title: 'Frasi', description: 'Numero di frasi. Le frasi più brevi migliorano la leggibilità.' },
      { icon: 'RiParagraph', title: 'Paragrafi', description: 'Blocchi di testo separati da righe vuote. Paragrafi ben strutturati migliorano la leggibilità su schermo.' },
      { icon: 'RiStarLine', title: 'Parole uniche', description: 'Numero di parole non ripetute. Un rapporto più alto indica un vocabolario più ricco.' },
      { icon: 'RiRulerLine', title: 'Lunghezza media parola', description: 'Media di caratteri per parola. Indicatore di complessità del testo.' },
      { icon: 'RiTimeLine', title: 'Tempo di lettura', description: 'Tempo stimato di lettura a 200 parole al minuto.' },
      { icon: 'RiMicLine', title: 'Tempo di parlato', description: 'Tempo stimato a 130 parole al minuto. Utile per discorsi, presentazioni e video.' },
      {
        icon: 'RiInputMethodLine',
        title: 'Sillabe',
        description: 'Totale sillabe con euristiche italiane. L\u2019indice Gulpease utilizza il conteggio dei caratteri anziché delle sillabe, ma il dato è utile per confronti interlinguistici.',
      },
      {
        icon: 'RiSpeedLine',
        title: 'Leggibilità (Gulpease)',
        description:
          'Punteggio 0\u2013100. Sopra 80 = facile (licenza elementare), 60\u201380 = medio (licenza media), sotto 40 = difficile (diploma universitario). Codice colore per valutazione rapida.',
      },
    ],
    toolItems: [
      { icon: 'RiArrowUpLine', title: 'MAIUSCOLE', description: 'Converte tutto in maiuscolo. Utile per intestazioni e acronimi.' },
      { icon: 'RiArrowDownLine', title: 'minuscole', description: 'Converte tutto in minuscolo. Per normalizzare testo da fonti diverse.' },
      { icon: 'RiEditLine', title: 'Frase', description: 'Prima lettera di ogni frase maiuscola, il resto minuscolo.' },
      { icon: 'RiHeading', title: 'Titolo', description: 'Ogni parola inizia con maiuscola. Per titoli e nomi propri.' },
      { icon: 'RiArrowLeftRightLine', title: 'iNVERTI', description: 'Scambia maiuscole e minuscole.' },
      { icon: 'RiSpace', title: 'Rimuovi spazi extra', description: 'Riduce spazi multipli a uno solo.' },
      { icon: 'RiDeleteRow', title: 'Rimuovi righe vuote', description: 'Elimina righe vuote e ridondanti.' },
      { icon: 'RiFilterLine', title: 'Rimuovi duplicati', description: 'Mantiene solo righe uniche.' },
      { icon: 'RiSortAsc', title: 'Ordina A\u2192Z', description: 'Ordina le righe in ordine alfabetico crescente.' },
      { icon: 'RiSortDesc', title: 'Ordina Z\u2192A', description: 'Ordina le righe in ordine alfabetico decrescente.' },
    ],
    whoTitle: 'A chi si rivolge il contatore di parole?',
    whoDesc: 'Lo strumento è utile per chiunque lavori con il testo:',
    whoItems: [
      { icon: 'RiEditLine', title: 'Copywriter e redattori', description: 'Contare parole e caratteri, verificare limiti piattaforme, cambiare maiuscole e pulire il testo.' },
      { icon: 'RiBloggerLine', title: 'Blogger e content creator', description: 'Controllare la lunghezza dei post, verificare leggibilità e tempo di lettura.' },
      { icon: 'RiShoppingBagLine', title: 'Proprietari di negozi', description: 'Verificare le descrizioni prodotti rispetto ai limiti (Amazon, eBay).' },
      { icon: 'RiSearchLine', title: 'Specialisti SEO', description: 'Analizzare lunghezza contenuti, indice Gulpease e complessità del testo.' },
      { icon: 'RiGraduationCapLine', title: 'Studenti e accademici', description: 'Verificare limiti di parole in tesi e articoli. Valutare la leggibilità.' },
      { icon: 'RiTranslate2', title: 'Traduttori', description: 'Contare caratteri senza spazi per preventivi di traduzione.' },
    ],
    specialTitle: 'Cosa rende speciale questo contatore?',
    specialItems: [
      {
        icon: 'RiBarChartLine',
        title: '11 metriche + indice Gulpease',
        description: 'Parole, caratteri, sillabe, frasi, paragrafi, parole uniche, tempo di lettura, tempo di parlato e leggibilità \u2013 tutto in un pannello.',
      },
      { icon: 'RiTextWrap', title: '10 strumenti di formattazione', description: 'Conversione maiuscole, rimozione spazi, righe vuote, duplicati e ordinamento \u2013 senza software aggiuntivo.' },
      { icon: 'RiUserLine', title: 'Elaborazione locale nel browser', description: 'Il tuo testo non viene mai inviato a un server. Analisi e trasformazione avvengono localmente.' },
      { icon: 'RiFileCopyLine', title: 'Copia e cancella', description: 'Copia il testo negli appunti con un clic o cancella il campo.' },
      { icon: 'RiTimerLine', title: 'Risultati istantanei', description: 'Le statistiche si aggiornano in tempo reale. Nessuna attesa.' },
      { icon: 'RiLockLine', title: 'Senza registrazione', description: 'Lo strumento è completamente gratuito. Nessuna registrazione richiesta.' },
    ],
    faqItems: [
      {
        question: 'Come viene calcolato il tempo di lettura?',
        answer: 'Lo strumento divide il numero di parole per 200 \u2013 la velocità media di lettura. Testi tecnici vengono letti più lentamente.',
        answerSchemaText: 'Lo strumento assume 200 parole al minuto.',
      },
      {
        question: 'Il mio testo è al sicuro?',
        answer: 'Sì. Tutta l\u2019analisi avviene nel browser. Il testo non viene mai inviato a un server.',
        answerSchemaText: 'Sì. Elaborazione locale, nessun invio a server.',
      },
      {
        question: 'Cos\u2019è l\u2019indice Gulpease?',
        answer:
          'L\u2019indice Gulpease è una formula di leggibilità sviluppata specificamente per la lingua italiana. La formula è: 89 + (300 \u00d7 frasi \u2212 10 \u00d7 caratteri) / parole. A differenza del Flesch-Kincaid, usa il conteggio dei caratteri invece delle sillabe. Punteggi sopra 80 indicano testo facile per la licenza elementare, 60\u201380 per la licenza media, sotto 40 richiede un diploma universitario.',
        answerSchemaText: 'L\u2019indice Gulpease (0\u2013100) è specifico per l\u2019italiano. Usa caratteri anziché sillabe.',
      },
      {
        question: 'Come viene calcolato il tempo di parlato?',
        answer: 'Il tempo di parlato divide le parole per 130 \u2013 la velocità media nelle presentazioni.',
        answerSchemaText: 'Calcolato a 130 parole al minuto.',
      },
      {
        question: 'Il contatore di sillabe è preciso?',
        answer: 'Lo strumento usa euristiche italiane che riconoscono dittonghi, iati e regole di sillabificazione. Il risultato è approssimativo ma sufficiente per l\u2019analisi.',
        answerSchemaText: 'Usa euristiche italiane con dittonghi e iati.',
      },
    ],
  },

  nl: {
    metaTitle: 'Woordteller met Flesch-Kincaid leesbaarheid & teksttools',
    metaDesc: 'Gratis woord-, teken- en lettergreepteller met Flesch-Kincaid score, leestijd, spreektijd en 10 opmaaktools. Zonder registratie.',
    heroTitle: 'Tel woorden, tekens en leesbaarheid \u2013 Flesch-Douma, leestijd en teksttools',
    heroDesc: 'Plak je tekst en de tool telt woorden, tekens, lettergrepen, zinnen, alinea\u2019s, unieke woorden, leestijd, spreektijd en berekent de Flesch-Douma leesbaarheidsscore.',
    schemaName: 'Woordteller met Flesch-Kincaid leesbaarheid & teksttools',
    schemaAltNames: [
      'Online woordteller',
      'Tekenteller met en zonder spaties',
      'Woordteller voor copywriters',
      'Leestijdcalculator',
      'Flesch-Douma leesbaarheidschecker',
      'Lettergreepteller online',
      'Spreektijdcalculator',
      'Hoofdletterconverter',
      'Leesbaarheidstool',
      'Dubbele regels verwijderen',
    ],
    schemaDesc:
      'Gratis woordteller met Flesch-Douma leesbaarheidsscore (specifiek voor Nederlands), lettergreeptelling, lees- en spreektijdschatting en 10 opmaaktools. Lokale verwerking in de browser.',
    schemaFeatures: [
      'Woorden tellen',
      'Tekens met en zonder spaties',
      'Zinnen en alinea\u2019s tellen',
      'Unieke woorden tellen',
      'Gemiddelde woordlengte',
      'Geschatte leestijd',
      'Geschatte spreektijd',
      'Lettergreeptelling',
      'Flesch-Douma leesbaarheidsscore',
      'Taalspecifieke formules (16 talen)',
      'Naar hoofdletters of kleine letters',
      'Zinsstijl of titelstijl',
      'Hoofdletters omdraaien',
      'Extra spaties verwijderen',
      'Lege regels en duplicaten verwijderen',
      'Regels A\u2013Z en Z\u2013A sorteren',
      'Tekst kopiëren naar klembord',
    ],
    howToDesc: 'Tel woorden, tekens, lettergrepen en zinnen. Check Flesch-Douma leesbaarheid, leestijd en spreektijd.',
    howToStep2:
      'In het linkerpaneel zie je 11 statistieken: woorden, tekens met en zonder spaties, zinnen, alinea\u2019s, unieke woorden, gemiddelde woordlengte, leestijd, spreektijd, lettergrepen en Flesch-Douma leesbaarheidsscore.',
    sectionBasicHtml:
      '<p class="text-mid">Deze tool combineert een woord- en tekenteller met Flesch-Douma leesbaarheidanalyse en tekstopmaakfuncties. Plak je tekst en bekijk woorden, tekens, lettergrepen, zinnen, alinea\u2019s, unieke woorden, leestijd, spreektijd en een kleurgecodeerde leesbaarheidsscore.</p><p class="text-mid mt-3">De <strong>Flesch-Douma leesbaarheidsscore</strong> (0\u2013100) is specifiek ontwikkeld voor het Nederlands: 206,835 \u2212 0,93 \u00d7 ASL \u2212 77 \u00d7 ASW. Scores boven 70 duiden op makkelijk leesbare tekst, onder 30 op academisch niveau. De tool past zich automatisch aan de taal aan.</p><p class="text-mid mt-3">Onder het tekstveld vind je 10 tools: hoofdletterconversie, spaties, lege regels en duplicaten verwijderen en sorteren. Alles draait lokaal in je browser.</p>',
    metricsTitle: '11 tekststatistieken \u2013 wat de teller meet',
    metricsDesc: 'De teller analyseert je tekst op elf indicatoren:',
    metricItems: [
      { icon: 'RiText', title: 'Woorden', description: 'Totaal aantal woorden. De belangrijkste indicator voor tekstlengte.' },
      { icon: 'RiSpaceShipLine', title: 'Tekens (met spaties)', description: 'Alle tekens inclusief spaties. Nuttig bij tekenlimieten op platforms.' },
      { icon: 'RiHashtag', title: 'Tekens (zonder spaties)', description: 'Alleen letters, cijfers en leestekens. De standaard factureringseenheid bij vertaalbureaus.' },
      { icon: 'RiChatQuoteLine', title: 'Zinnen', description: 'Aantal zinnen. Kortere zinnen verbeteren de leesbaarheid.' },
      { icon: 'RiParagraph', title: 'Alinea\u2019s', description: 'Tekstblokken gescheiden door lege regels.' },
      { icon: 'RiStarLine', title: 'Unieke woorden', description: 'Aantal niet-herhalende woorden. Een hogere ratio duidt op rijkere woordenschat.' },
      { icon: 'RiRulerLine', title: 'Gemiddelde woordlengte', description: 'Gemiddeld aantal tekens per woord. Nederlandse samenstellingen verhogen dit gemiddelde.' },
      { icon: 'RiTimeLine', title: 'Leestijd', description: 'Geschatte leestijd bij 200 woorden per minuut.' },
      { icon: 'RiMicLine', title: 'Spreektijd', description: 'Geschatte spreektijd bij 130 woorden per minuut. Voor presentaties en speeches.' },
      {
        icon: 'RiInputMethodLine',
        title: 'Lettergrepen',
        description: 'Totaal lettergrepen met Nederlandse heuristieken. Herkent tweeklanken (ei, au, eu, ij, ou, oe). Sleutelparameter voor leesbaarheidformules.',
      },
      { icon: 'RiSpeedLine', title: 'Leesbaarheid (Flesch-Douma)', description: 'Score 0\u2013100. Boven 70 = makkelijk, 50\u201370 = gemiddeld, onder 30 = academisch. Kleurgecodeerd.' },
    ],
    toolItems: [
      { icon: 'RiArrowUpLine', title: 'HOOFDLETTERS', description: 'Zet alle tekst om naar hoofdletters.' },
      { icon: 'RiArrowDownLine', title: 'kleine letters', description: 'Zet alle tekst om naar kleine letters.' },
      { icon: 'RiEditLine', title: 'Zinsstijl', description: 'Eerste letter van elke zin als hoofdletter, rest klein.' },
      { icon: 'RiHeading', title: 'Titelstijl', description: 'Elk woord begint met een hoofdletter.' },
      { icon: 'RiArrowLeftRightLine', title: 'oMDRAAIEN', description: 'Wisselt hoofdletters en kleine letters om.' },
      { icon: 'RiSpace', title: 'Extra spaties verwijderen', description: 'Reduceert meerdere spaties tot één.' },
      { icon: 'RiDeleteRow', title: 'Lege regels verwijderen', description: 'Verwijdert lege en overbodige regels.' },
      { icon: 'RiFilterLine', title: 'Duplicaten verwijderen', description: 'Behoudt alleen unieke regels.' },
      { icon: 'RiSortAsc', title: 'Sorteren A\u2192Z', description: 'Sorteert regels alfabetisch oplopend.' },
      { icon: 'RiSortDesc', title: 'Sorteren Z\u2192A', description: 'Sorteert regels alfabetisch aflopend.' },
    ],
    whoTitle: 'Voor wie is de woordteller?',
    whoDesc: 'De tool is nuttig voor iedereen die met tekst werkt:',
    whoItems: [
      { icon: 'RiEditLine', title: 'Copywriters en redacteuren', description: 'Woorden en tekens tellen, platformlimieten controleren, hoofdletters wijzigen en tekst opschonen.' },
      { icon: 'RiBloggerLine', title: 'Bloggers en contentmakers', description: 'Berichtlengte controleren, leesbaarheid en leestijd checken.' },
      { icon: 'RiShoppingBagLine', title: 'Winkeleigenaren', description: 'Productomschrijvingen controleren op tekenlimieten (Amazon, Bol.com, Marktplaats).' },
      { icon: 'RiSearchLine', title: 'SEO-specialisten', description: 'Contentlengte analyseren, Flesch-Douma score en tekstcomplexiteit beoordelen.' },
      { icon: 'RiGraduationCapLine', title: 'Studenten en wetenschappers', description: 'Woord- of tekenlimieten in scripties controleren. Leesbaarheid beoordelen.' },
      { icon: 'RiTranslate2', title: 'Vertalers', description: 'Tekens zonder spaties tellen voor offertes.' },
    ],
    specialTitle: 'Wat maakt deze woordteller bijzonder?',
    specialItems: [
      {
        icon: 'RiBarChartLine',
        title: '11 statistieken + leesbaarheidsscore',
        description: 'Woorden, tekens, lettergrepen, zinnen, alinea\u2019s, unieke woorden, leestijd, spreektijd en Flesch-Douma \u2013 alles in één paneel.',
      },
      { icon: 'RiTextWrap', title: '10 opmaaktools', description: 'Hoofdletterconversie, spaties, lege regels, duplicaten en sorteren \u2013 zonder extra software.' },
      { icon: 'RiUserLine', title: 'Lokale verwerking', description: 'Je tekst wordt nooit naar een server gestuurd. Alles draait lokaal in je browser.' },
      { icon: 'RiFileCopyLine', title: 'Kopiëren en wissen', description: 'Kopieer tekst naar het klembord met één klik of wis het veld.' },
      { icon: 'RiTimerLine', title: 'Directe resultaten', description: 'Statistieken updaten real-time terwijl je typt of plakt.' },
      { icon: 'RiLockLine', title: 'Zonder registratie', description: 'Volledig gratis. Geen registratie, login of persoonlijke gegevens nodig.' },
    ],
    faqItems: [
      {
        question: 'Hoe werkt de leestijdcalculator?',
        answer: 'De tool deelt het aantal woorden door 200 \u2013 de gemiddelde leessnelheid. Technische teksten worden langzamer gelezen.',
        answerSchemaText: 'De tool gaat uit van 200 woorden per minuut.',
      },
      {
        question: 'Is mijn tekst veilig?',
        answer: 'Ja. Alle analyse en verwerking gebeurt lokaal in je browser. De tekst wordt nooit naar een server gestuurd.',
        answerSchemaText: 'Ja. Lokale verwerking, geen data naar servers.',
      },
      {
        question: 'Wat is de Flesch-Douma score?',
        answer:
          'De Flesch-Douma formule is de Nederlandse aanpassing van de Flesch Reading Ease: 206,835 \u2212 0,93 \u00d7 ASL \u2212 77 \u00d7 ASW. De aangepaste coëfficiënten houden rekening met de specifieke eigenschappen van het Nederlands, zoals samenstellingen. Scores boven 70 zijn makkelijk leesbaar, onder 30 academisch.',
        answerSchemaText: 'De Flesch-Douma (0\u2013100) is de Nederlandse variant van Flesch Reading Ease met aangepaste coëfficiënten.',
      },
      {
        question: 'Hoe wordt de spreektijd berekend?',
        answer: 'De spreektijd deelt het aantal woorden door 130 \u2013 de gemiddelde spreeksnelheid bij presentaties.',
        answerSchemaText: 'Berekend op 130 woorden per minuut.',
      },
      {
        question: 'Hoe nauwkeurig is de lettergreepteller?',
        answer:
          'De tool gebruikt Nederlandse heuristieken die tweeklanken herkennen (ei, au, eu, ij, ou, oe) en rekening houden met samenstellingen. Het resultaat is een benadering die voldoende nauwkeurig is voor leesbaarheidanalyse.',
        answerSchemaText: 'Gebruikt Nederlandse heuristieken met tweeklanken en samenstellingen.',
      },
    ],
  },
};

// Apply updates
const ALL = Object.keys(L);
for (const loc of ALL) {
  const fp = path.join('data', loc, 'tools', 'word-counter.json');
  if (!fs.existsSync(fp)) {
    console.log('SKIP:', fp);
    continue;
  }
  const t = L[loc];
  const data = JSON.parse(fs.readFileSync(fp, 'utf8'));

  data.metadata.title = t.metaTitle;
  data.metadata.description = t.metaDesc;
  data.hero.title = t.heroTitle;
  data.hero.description = t.heroDesc;
  data.schemas.software.name = t.schemaName;
  data.schemas.software.alternateName = t.schemaAltNames;
  data.schemas.software.description = t.schemaDesc;
  data.schemas.software.featureList = t.schemaFeatures;
  data.schemas.howTo.description = t.howToDesc;
  if (data.schemas.howTo.steps && data.schemas.howTo.steps.length >= 2) {
    data.schemas.howTo.steps[1].text = t.howToStep2;
  }

  for (let i = 0; i < data.contentBlocks.length; i++) {
    const block = data.contentBlocks[i];
    if (block.type === 'sectionBasic' && block.html) block.html = t.sectionBasicHtml;
    if (block.type === 'sectionSteps' && block.items && block.items.length >= 7 && block.items.length <= 11 && block.items[0] && block.items[0].icon === 'RiText') {
      block.title = t.metricsTitle;
      block.description = t.metricsDesc;
      block.items = t.metricItems;
    }
    if (block.type === 'sectionSteps' && block.items && block.items.length === 10 && block.items[0] && block.items[0].icon === 'RiArrowUpLine') {
      block.items = t.toolItems;
    }
    if (
      block.type === 'sectionSteps' &&
      block.items &&
      block.items.length === 6 &&
      block.items[0] &&
      block.items[0].icon === 'RiEditLine' &&
      block.items[1] &&
      block.items[1].icon === 'RiBloggerLine'
    ) {
      block.title = t.whoTitle;
      block.description = t.whoDesc;
      block.items = t.whoItems;
    }
    if (block.type === 'sectionSteps' && block.items && block.items.length === 6 && block.items[0] && block.items[0].icon === 'RiBarChartLine') {
      block.title = t.specialTitle;
      block.items = t.specialItems;
    }
    if (block.type === 'faq' && block.items) block.items = t.faqItems;
    if (block.type === 'sectionSteps' && block.grid === 'four' && block.items && block.items.length === 4 && block.items[0] && block.items[0].icon === 'RiFileTextLine') {
      block.items[1].description = t.howToStep2;
    }
  }

  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log('Updated:', fp);
}
console.log('Done:', ALL.join(', '));
