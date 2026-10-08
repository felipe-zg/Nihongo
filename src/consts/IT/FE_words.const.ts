export const FE_words = [
  {
    id: 1,
    wordRuby: "特{とく}徴{ちょう}",
    meaning: "characteristic・feature",
    exampleSentence: "このシステムの特徴は、大量のデータを短時間で処理できる点にある",
    extraVocabulary: [
      { wordRuby: "処{しょ}理{り}", meaning: "processing・handling・disposal・treatment" },
    ],
  },
  {
    id: 2,
    wordRuby: "踏{ふ}まえる",
    meaning: "take into account・consider・base something on",
    exampleSentence: "過去の障害事例を踏まえて、システムの設計を見直す必要がある",
    notes: "踏まえる is often used in the context of making decisions or taking actions based on prior knowledge, experience, or information. It implies that the past events or facts are being considered as a foundation for the current action or decision.\nFrequent pattern:〜を踏まえて、〜する",
    extraVocabulary: [
      { wordRuby: "障{しょう}害{がい}", meaning: "obstacle・impediment・problem・failure" },
      { wordRuby: "事{じ}例{れい}", meaning: "case・example・precedent・actual instance" },
    ],
  },
  {
    id: 3,
    wordRuby: "実{じっ}施{し}",
    meaning: "implementation・execution・conducting・carrying out",
    exampleSentence: "セキュリティ対策の一環として、定期的に脆弱性診断を実施する",
    extraVocabulary: [
      { wordRuby: "対{たい}策{さく}", meaning: "countermeasure・response" },
      { wordRuby: "一{いっ}環{かん}", meaning: "part of・one part of a larger whole・one component/element of an overall effort" },
      { wordRuby: "脆{ぜい}弱{じゃく}性{せい}", meaning: "vulnerability・weakness・fragility" },
      { wordRuby: "診{しん}断{だん}", meaning: "diagnosis・examination・assessment" },
    ],
  },
  {
    id: 4,
    wordRuby: "確{かく}定{てい}する",
    meaning: "to confirm・to finalize・to determine・to be fixed",
    notes: "Frequent pattern: 〜を〜として認定する",
    exampleSentence: "テストの結果を確認した上で、本番環境へのリリース日を確定する。",
  },
  {
    id: 5,
    wordRuby: "認{にん}定{てい}する",
    meaning: "to certify・to officially recognize・to accredit・to designate",
    exampleSentence: "この制度では、一定の基準を満たした企業をセキュリティ対策の優良企業として認定する",
    extraVocabulary: [
      { wordRuby: "制{せい}度{ど}", meaning: "system・institution・established rules/system" },
      { wordRuby: "一{いっ}定{てい}", meaning: "a fixed amount・consistent・constant" },
      { wordRuby: "満{み}たす", meaning: "to satisfy・to meet・to fulfill" },
      { wordRuby: "対{たい}策{さく}", meaning: "Countermeasure・Response" },
      { wordRuby: "優{ゆう}良{りょう}", meaning: "excellent・superior・outstanding・high-quality" },
    ],
  },
  {
    id: 6,
    wordRuby: "産{さん}業{ぎょう}",
    meaning: "industry・industrial sector・industry as an economic activity",
    exampleSentence: "AIやIoTの発展により、さまざまな産業でデジタル化が進んでいる",
    extraVocabulary: [
    ],
  },
  {
    id: 7,
    wordRuby: "基{き}礎{そ}",
    meaning: "Basis・Foundation",
    exampleSentence: "プログラミングだけでなく、ネットワークやデータベースの基礎も身につける必要がある",
    extraVocabulary: [
    ],
  },
  {
    id: 8,
    wordRuby: "登{とう}竜{りゅう}門{もん}",
    meaning: "gateway to success・gateway to advancement・important stepping stone",
    notes: "is an idiom for an opportunity, competition, position, or experience that can lead to major success or advancement",
    exampleSentence: "基本情報技術者試験は、ITエンジニアとしてキャリアを築くための登竜門の一つとされている",
    extraVocabulary: [
    ],
  },
  {
    id: 9,
    wordRuby: "資{し}格{かく}",
    meaning: "Qualification",
    exampleSentence: "IT業界では、資格だけでなく、実務経験や技術力も重要視される",
    extraVocabulary: [
    ],
  },
  {
    id: 10,
    wordRuby: "甘{あま}く見{み}る",
    meaning: "To underestimate・to take lightly・to underestimate the difficulty or seriousness of something",
    exampleSentence: "サイバー攻撃のリスクを甘く見て、十分なセキュリティ対策を講じなければ、重大な情報漏えいにつながる可能性がある",
    extraVocabulary: [
    ],
  },
  {
    id: 11,
    wordRuby: "出{しゅつ}題{だい}傾{けい}向{こう}",
    meaning: "question patterns・tendency in what is tested・exam question trends",
    exampleSentence: "過去の問題を分析することで、基本情報技術者試験の出題傾向を把握できる",
    extraVocabulary: [
    ],
  },
  {
    id: 12,
    wordRuby: "傾{けい}向{こう}",
    meaning: "Tendency ・Trends",
    notes: "This is a very useful formal pattern meaning 'to tend to' or 'there is a tendency to'\nUseful pattern: ～傾向にある",
    exampleSentence: "近年は、クラウドやセキュリティに関する問題が増える傾向にある",
    extraVocabulary: [
    ],
  },
  {
    id: 13,
    wordRuby: "把{は}握{あく}",
    meaning: "understanding・grasp・comprehension・having a clear grasp of something ",
    notes: "Think of 把握する = understand/grasp the current situation or details, rather than simply 'know.'\nUseful pattern: ～を把握する",
    exampleSentence: "システムの現在の負荷状況を把握するために、監視ツールを導入した",
    extraVocabulary: [
    ],
  },
  {
    id: 14,
    wordRuby: "対{たい}策{さく}",
    meaning: "Countermeasure・Response",
    note: "対策を講じる = to take countermeasures・to implement measures to address a problem or situation",
    exampleSentence: "不正アクセスを防ぐため、適切なセキュリティ対策を講じる必要がある",
    extraVocabulary: [
    ],
  },
  {
    id: 15,
    wordRuby: "効{こう}率{りつ}",
    meaning: "efficiency・effectiveness・productivity",
    exampleSentence: "アルゴリズムを改善することで、データ処理の効率を高めることができる",
    extraVocabulary: [
    ],
  },
  {
    id: 16,
    wordRuby: "効{こう}果{か}",
    meaning: "effectiveness・result",
    notes: "This pattern is common in technical explanations: Xすることで、Yする効果が期待できる",
    exampleSentence: "キャッシュを利用することで、サーバーの負荷を軽減する効果が期待できる",
    extraVocabulary: [
    ],
  },
  {
    id: 17,
    wordRuby: "項{こう}目{もく}",
    meaning: "item・category・entry・field",
    exampleSentence: "システムの要件定義では、機能要件だけでなく、セキュリティに関する項目も確認する",
    extraVocabulary: [
    ],
  },
  {
    id: 18,
    wordRuby: "概{がい}要{よう}",
    meaning: "Overview・summary",
    exampleSentence: "まずシステムの概要を説明した後、具体的な機能について詳しく説明する",
    extraVocabulary: [
    ],
  },
  {
    id: 19,
    wordRuby: "形{けい}式{しき}",
    meaning: "format・form・style・type・structure",
    notes: "refers to the form or format in which something is structured or presented",
    exampleSentence: "この試験では、選択式の形式で出題される問題が多い",
    extraVocabulary: [
    ],
  },
  {
    id: 20,
    wordRuby: "随{ずい}時{じ}",
    meaning: "at any time・as needed・whenever necessary・on an ongoing basis",
    notes: "随時 is slightly different from 定期的に:\n定期的に = at regular intervals\n随時 = whenever necessary / as needed / from time to time",
    exampleSentence: "システムの稼働状況を随時確認し、異常が発生した場合は速やかに対応する",
    extraVocabulary: [
    ],
  },
  {
    id: 21,
    wordRuby: "満{み}たす",
    meaning: "to satisfy・to meet・to fulfill",
    exampleSentence: "システムが定められた性能要件を満たしているかどうかを確認する",
    extraVocabulary: [
    ],
  },
  {
    id: 22,
    wordRuby: "時{じ}刻{こく}",
    meaning: "time・time of day・specific time・clock time",
    exampleSentence: "サーバー間で時刻がずれていると、ログの解析に支障をきたす可能性がある",
    extraVocabulary: [
    ],
  },
  {
    id: 23,
    wordRuby: "参{さん}照{しょう}",
    meaning: "reference・refer to・consult・look up (actively look at/consult a specific source)",
    exampleSentence: "データベースから必要な情報を参照し、画面に表示する",
    extraVocabulary: [
    ],
  },
  {
    id: 24,
    wordRuby: "参{さん}考{こう}",
    meaning: "reference・guidance・helpful information (use something as a reference when making a decision or forming an idea)",
    exampleSentence: "詳細な設定方法については、公式のマニュアルを参考にしてください",
    extraVocabulary: [
    ],
  },
  {
    id: 25,
    wordRuby: "方{ほう}式{しき}",
    meaning: "method・system・procedure・format・way of doing something",
    notes: "A very useful pattern is: ～方式を採用する",
    exampleSentence: "このシステムでは、利用者を認証するために多要素認証方式を採用している",
    extraVocabulary: [
      { wordRuby: "認証方式", meaning: "authentication method" },//TODO:
      { wordRuby: "通信方式", meaning: "communication method" },
      { wordRuby: "暗号方式", meaning: "encryption method" },
    ],
  },
  {
    id: 26,
    wordRuby: "採{さい}用{よう}される",
    meaning: "Be adopted",
    exampleSentence: "大量のデータを効率的に処理するため、分散処理方式が採用されている",
    extraVocabulary: [
    ],
  },
  {
    id: 27,
    wordRuby: "解{かい}答{とう}",
    meaning: "answer・solution・answer to a question/problem",
    exampleSentence: "問題文に示された条件を整理してから、適切な解答を選ぶ",
    extraVocabulary: [
    ],
  },
  {
    id: 28,
    wordRuby: "選{せん}択{たく}肢{し}",
    meaning: "choice・option・answer choice",
    exampleSentence: "四つの選択肢の中から、正しいものを一つ選びなさい",
    extraVocabulary: [
    ],
  },
  {
    id: 29,
    wordRuby: "計{けい}算{さん}",
    meaning: "calculation・calculating・computation",
    exampleSentence: "CPUの処理時間を求めるには、与えられた数値を使って計算する必要がある",
    extraVocabulary: [
    ],
  },
  {
    id: 30,
    wordRuby: "仕{し}組{く}み",
    meaning: "Structure",
    notes: "仕組み is extremely useful for IT Japanese because it means how something works / mechanism / structure.",
    exampleSentence: "暗号化の仕組みを理解するためには、公開鍵と秘密鍵の役割を知る必要がある",
    extraVocabulary: [
    ],
  },
  {
    id: 31,
    wordRuby: "要{よう}素{そ}",
    meaning: "Element・Factor・component・aspect",
    exampleSentence: "システムの性能を左右する要素として、CPUの処理能力やメモリ容量が挙げられる",
    extraVocabulary: [
    ],
  },
  {
    id: 32,
    wordRuby: "戦{せん}略{りゃく}",
    meaning: "strategy・strategic plan・tactics for achieving a goal",
    exampleSentence: "企業はデジタル技術を活用した事業戦略を策定し、競争力の向上を目指している",
    extraVocabulary: [
      { wordRuby: "経{けい}営{えい}戦{せん}略{りゃく}マネジメント", meaning: "business strategy management・corporate strategy management" },
      { wordRuby: "技{ぎ}術{じゅつ}戦{せん}略{りゃく}マネジメント", meaning: "technology strategy management・technology strategic management" },
      { wordRuby: "システム戦{せん}略{りゃく}", meaning: "System strategy" },
    ]
  },
  {
    id: 33,
    wordRuby: "法{ほう}務{む}",
    meaning: "legal affairs・legal matters・legal department",
    exampleSentence: "IT企業では、個人情報保護や著作権などに関する法務上の問題にも注意する必要がある",
    extraVocabulary: [
    ],
  },
  {
    id: 34,
    wordRuby: "処{しょ}理{り}",
    meaning: "processing・handling・disposal・treatment",
    exampleSentence: "大量のデータを効率よく処理するために、適切なアルゴリズムを選択する必要がある",
    extraVocabulary: [
      { wordRuby: "データを処{しょ}理{り}する", meaning: "to process data" },
      { wordRuby: "情報を処{しょ}理{り}する", meaning: "to process information" },
      { wordRuby: "並列処{しょ}理{り}", meaning: "parallel processing" },
      { wordRuby: "分散処{しょ}理{り}", meaning: "distributed processing" },
      { wordRuby: "例外処{しょ}理{り}", meaning: "exception handling" },
    ],
  },
  {
    id: 35,
    wordRuby: "誤{あやま}り",
    meaning: "mistake・error・incorrectness・fault",
    exampleSentence: "入力データに誤りがある場合、正しい計算結果が得られない可能性がある",
    extraVocabulary: [
    ],
  },
  {
    id: 36,
    wordRuby: "会{かい}計{けい}",
    meaning: "accounting・payment・checkout・bill",
    exampleSentence: "ERPシステムを導入することで、販売管理や在庫管理だけでなく、会計業務も効率化できる",
    extraVocabulary: [
    ],
  },
  {
    id: 37,
    wordRuby: "一{いっ}見{けん}する",
    meaning: "to look at something at first glance・to appear at first sight・to seem on the surface",
    exampleSentence: "一見すると単純なプログラムに見えるが、実際には複雑な処理が含まれている",
    extraVocabulary: [
    ],
  },
  {
    id: 38,
    wordRuby: "分{ぶん}類{るい}",
    meaning: "classification・categorization・category・classification system",
    exampleSentence: "コンピュータウイルスは、その特徴や感染方法などに基づいて分類される",
    extraVocabulary: [
    ],
  },
  {
    id: 39,
    wordRuby: "算{さん}出{しゅつ}",
    meaning: "calculation・computation・derivation of a figure",
    exampleSentence: "システムの稼働率は、稼働時間と停止時間から算出することができる",
    extraVocabulary: [
    ],
  },
  {
    id: 40,
    wordRuby: "昨{さっ}今{こん}",
    meaning: "nowadays・in recent years・these days・in recent times",
    notes: "This sounds much more formal than: 最近...",
    exampleSentence: "昨今、AI技術の急速な発展に伴い、さまざまな業界で業務のデジタル化が進んでいる",
    extraVocabulary: [
      { wordRuby: "昨{さっ}今{こん}急{きゅう}速{そく}に", meaning: "In recent years, ～ has rapidly..." },
    ]
  },
  {
    id: 41,
    wordRuby: "急{きゅう}速{そく}",
    meaning: "rapid・rapidly・swift・at a fast pace",
    exampleSentence: "AI技術は急速に発展しており、さまざまな分野で活用されるようになっている",
    extraVocabulary: [
      { wordRuby: "昨{さっ}今{こん}急{きゅう}速{そく}に", meaning: "In recent years, ～ has rapidly..." },
    ]
  },
  {
    id: 42,
    wordRuby: "突{とっ}出{しゅつ}する",
    meaning: "to protrude・stick out・stand out・be exceptionally prominent",
    notes: "This means something stands out significantly / is exceptionally high compared with others. It's stronger than simply: 高い",
    exampleSentence: "このシステムは、他の製品と比較して処理速度が突出している",
    extraVocabulary: [
    ],
  },
  {
    id: 43,
    wordRuby: "構{こう}成{せい}要{よう}素{そ}",
    meaning: "component・constituent element・building block・component part",
    notes: "This is especially useful because you'll frequently see: AはBの構成要素である = A is a component of B",
    exampleSentence: "CPU、メモリ、ストレージなどは、コンピュータシステムを構成する主要な構成要素である",
    extraVocabulary: [
      { wordRuby: "構{こう}成{せい}", meaning: "composition・structure・configuration" },
      { wordRuby: "要{よう}素{そ}", meaning: "element・factor・component" },
    ]
  },
  {
    id: 44,
    wordRuby: "監{かん}査{さ}",
    meaning: "audit・inspection・auditing",
    notes: "A very useful sentence pattern: ～が適切に行われているかを監査する",
    exampleSentence: "情報システムの監査では、セキュリティ対策が適切に実施されているか確認する",
  },
  {
    id: 45,
    wordRuby: "用{よう}語{ご}",
    meaning: "term・technical term・terminology",
    notes: "用語 vs 定義 These two often appear together in textbooks. 用語 = term・定義 = definition. So: 用語の定義 = definition of a term",
    exampleSentence: "ITに関する資料を読む際には、専門的な用語の意味を正しく理解することが重要である",
    extraVocabulary: [
      { wordRuby: "単{たん}に用{よう}語{ご}の定{てい}義{ぎ}を問{と}うような問{もん}題{だい}", meaning: "A question that simply asks for the definition of a term" },
    ]
  },
  {
    id: 46,
    wordRuby: "定{てい}義{ぎ}",
    meaning: "definition・defining・formal definition",
    exampleSentence: "データベースでは、各項目のデータ型をあらかじめ定義しておく必要がある",
    extraVocabulary: [
      { wordRuby: "単{たん}に用{よう}語{ご}の定{てい}義{ぎ}を問{と}うような問{もん}題{だい}", meaning: "A question that simply asks for the definition of a term" },
    ]
  },
  {
    id: 47,
    wordRuby: "単{たん}に",
    meaning: "simply・merely・just・only",
    notes: "単に～だけではない is an especially useful pattern. Another common structure: 単にAだけでなく、Bも～",
    exampleSentence: "セキュリティ対策は、単にパスワードを設定するだけでは十分ではない",
    extraVocabulary: [
      { wordRuby: "単{たん}に用{よう}語{ご}の定{てい}義{ぎ}を問{と}うような問{もん}題{だい}", meaning: "A question that simply asks for the definition of a term" },
    ]
  },
  {
    id: 48,
    wordRuby: "非{ひ}常{じょう}に",
    meaning: "very・extremely・highly・remarkably",
    exampleSentence: "このアルゴリズムは計算量が非常に少なく、大量のデータを効率的に処理できる",
  },
  {
    id: 49,
    wordRuby: "最{さい}短{たん}",
    meaning: "shortest・shortest possible・minimum time/distance",
    exampleSentence: "ネットワーク上でデータを送信する際、目的地までの最短経路を選択する",
    extraVocabulary: [
      { wordRuby: "最{さい}短{たん}で", meaning: "in the shortest time・as quickly as possible・at the earliest possible time" },
    ]
  },
  {
    id: 50,
    wordRuby: "下{か}記{き}のように",
    meaning: "as shown below・as described below・as follows",
    exampleSentence: "システムの処理手順を下記のように定義する",
  },
  {
    id: 51,
    wordRuby: "割{わり}合{あい}",
    meaning: "proportion・percentage・ratio・share",
    exampleSentence: "システム全体に占めるネットワーク処理の割合が高い場合、通信速度が性能に大きく影響する",
  },
  {
    id: 52,
    wordRuby: "全{ぜん}般{ぱん}",
    meaning: "overall・general・all-around・the whole range",
    exampleSentence: "情報セキュリティ全般に関する知識を身につけることが重要である",
  },
  {
    id: 53,
    wordRuby: "構{こう}造{ぞう}",
    meaning: "structure・construction・composition・framework",
    exampleSentence: "データベースの構造を理解することで、効率的なデータ管理が可能になる",
    extraVocabulary: [
      { wordRuby: "データ構{こう}造{ぞう}", meaning: "Data structure" },
    ]
  },
  {
    id: 54,
    wordRuby: "適{てき}用{よう}",
    meaning: "application・applying・applicability",
    notes: "The core idea is “applying a rule, law, system, method, or condition to a particular case.”",
    exampleSentence: "新しいセキュリティポリシーをすべての業務システムに適用する",
  },
  {
    id: 55,
    wordRuby: "諸{しょ}",
    meaning: "various・multiple・all sorts of・respective",
    notes: "This one is important because 諸 usually doesn't appear alone in normal sentences. It works as a prefix meaning various / various kinds of.",
    exampleSentence: "システムの導入にあたっては、コストや運用方法などの諸条件を考慮する必要がある",
    extraVocabulary: [
      { wordRuby: "諸{しょ}分{ぶん}野{や}", meaning: "various fields・multiple fields・different fields" },
      { wordRuby: "諸{しょ}条{じょう}件{けん}", meaning: "various conditions" },
    ]
  },
  {
    id: 56,
    wordRuby: "確{かく}保{ほ}",
    meaning: "securing・securing/obtaining・ensuring・setting aside",
    exampleSentence: "障害発生時にもサービスを継続できるよう、十分な可用性を確保する必要がある",
    extraVocabulary: [
      { wordRuby: "セキュリティの確{かく}保{ほ}", meaning: "Security assurance" },
    ]
  },
  {
    id: 57,
    wordRuby: "特{とく}筆{ひつ}すべき",
    meaning: "special mention・notesworthy point・something worth specifically mentioning",
    exampleSentence: "このシステムは高い処理性能に加え、セキュリティ面でも特筆すべき特徴を持っている",
  },
  {
    id: 58,
    wordRuby: "関{かん}連{れん}",
    meaning: "relation・connection・association・relevance",
    exampleSentence: "システム開発では、技術だけでなく、法律や規則などの関連事項についても理解しておく必要がある",
  },
  {
    id: 59,
    wordRuby: "あくまでも 〜",
    meaning: "strictly speaking・after all・only・nothing more than",
    notes: "It often emphasizes that something should not be interpreted beyond its intended scope.",
    exampleSentence: "この資料に記載されている数値は、あくまでも参考値であり、実際の性能を保証するものではない",
    extraVocabulary: [
      { wordRuby: "あくまでも X", meaning: "X, and nothing beyond that → strictly / only / merely X" },
    ]
  },
  {
    id: 60,
    wordRuby: "機{き}能{のう}",
    meaning: "Function ・Ability",
    exampleSentence: "このアプリケーションには、利用者がデータを検索・編集するための機能が実装されている",
    extraVocabulary: [
      { wordRuby: "機{き}能{のう}設{せっ}計{けい}", meaning: "functional design" },
      { wordRuby: "機{き}能{のう}要{よう}件{けん}", meaning: "functional requirements" },
      { wordRuby: "機{き}能{のう}追{つい}加{か}", meaning: "feature addition" },
    ],
  },
  {
    id: 61,
    wordRuby: "身{み}構{がま}える",
    meaning: "to brace oneself・to get ready・to prepare oneself・to become guarded・to take a defensive stance",
    notes: "This is usually not a technical term. It means to mentally/physically prepare yourself because you expect something difficult, serious, or threatening.",
    exampleSentence: "新しい技術だからといって身構える必要はなく、まずは基本的な仕組みから理解するとよい",
  },
  {
    id: 62,
    wordRuby: "併{あわ}せる",
    meaning: "to combine・put together・do together",
    notes: "This is worth learning as a formal written expression: AとBを併せて考える・AとBを併せて検討する・AとBを併せて評価する",
    exampleSentence: "システムの性能だけでなく、セキュリティ面も併せて評価する必要がある",
  },
  {
    id: 63,
    wordRuby: "短{たん}期{き}間{かん}",
    meaning: "short period・short period of time・brief period",
    exampleSentence: "短期間で大量のデータを処理するには、効率のよいアルゴリズムが必要になる",
  },
  {
    id: 64,
    wordRuby: "一{いっ}発{ぱつ}",
    meaning: "one shot・one try・single attempt",
    exampleSentence: "この試験は一発で合格するのが難しいため、計画的に学習を進めることが重要だ",
    extraVocabulary: [
      { wordRuby: "一{いっ}発{ぱつ}で～", meaning: "in one shot・on the first try" },
      { wordRuby: "一{いっ}発{ぱつ}で合{ごう}格{かく}する", meaning: "pass on the first try" },
    ]
  },
  {
    id: 65,
    wordRuby: "達{たっ}成{せい}する",
    meaning: "achieve・accomplish・attain",
    notes: "Used when you reach a goal, target, objective, or numerical target",
    exampleSentence: "開発チームは、予定していた性能目標を無事に達成した",
    extraVocabulary: [
      { wordRuby: "短{たん}期{き}間{かん}で達{たっ}成{せい}する", meaning: "achieve in a short period" },
    ]
  },
  {
    id: 66,
    wordRuby: "軽{かる}い",
    meaning: "light・mild・easy・casual",
    notes: "Besides physical weight, it can describe something that is not serious, demanding, or intense",
    exampleSentence: "このアプリは処理が軽く、低スペックの端末でも快適に動作する",
    extraVocabulary: [
      { wordRuby: "軽{かる}く読{よ}む", meaning: "read through casually" },
    ]
  },
  {
    id: 67,
    wordRuby: "通{つう}読{どく}する",
    meaning: "read through・read from beginning to end",
    notes: "It emphasizes reading the entire text continuously, rather than studying every detail",
    exampleSentence: "試験対策として、まず参考書を一度通読して、全体の内容を把握する",
    extraVocabulary: [
      { wordRuby: "参{さん}考{こう}書{しょ}を通{つう}読{どく}する", meaning: "read through a textbook" },
    ]
  },
  {
    id: 68,
    wordRuby: "挑{ちょう}戦{せん}する",
    meaning: "challenge・take on・attempt",
    exampleSentence: "新しいフレームワークの導入に挑戦する前に、既存システムへの影響を検討する必要がある",
    extraVocabulary: [
      { wordRuby: "試{し}験{けん}に挑{ちょう}戦{せん}する", meaning: "take on the exam" },
    ]
  },
  {
    id: 69,
    wordRuby: "新{あら}たな",
    meaning: "new・fresh・newly emerging",
    notes: "Compared with 新しい, 新たな sounds more formal and often suggests something newly arising or newly recognized",
    exampleSentence: "AIを活用することで、これまでになかった新たなサービスを開発できる可能性がある",
  },
  {
    id: 70,
    wordRuby: "開{かい}始{し}",
    meaning: "start・beginning・commencement",
    exampleSentence: "システムの移行作業は、利用者への影響が少ない時間帯に開始する予定である",
  },
  {
    id: 71,
    wordRuby: "暗{あん}記{き}",
    meaning: "memorization・memorizing・learning by heart",
    notes: "The important nuance is memorizing something so you can reproduce it, rather than merely understanding it",
    exampleSentence: "基本的な用語や公式は暗記するだけでなく、その意味や使い方も理解しておく必要がある",
    extraVocabulary: [
      { wordRuby: "用{よう}語{ご}を暗{あん}記{き}する", meaning: "memorize terminology" },
    ]
  },
  {
    id: 72,
    wordRuby: "お勧{すす}め",
    meaning: "recommendation・recommended",
    exampleSentence: "FE試験の対策として、過去問題を繰り返し解くことをお勧めする",
  },
  {
    id: 73,
    wordRuby: "先{せん}述{じゅつ}した",
    meaning: "mentioned earlier・stated above・previously mentioned",
    exampleSentence: "先述したように、アルゴリズムの計算量は処理性能に大きく影響する",
  },
  {
    id: 74,
    wordRuby: "後{こう}述{じゅつ}する",
    meaning: "mention later・state below",
    exampleSentence: "この問題の詳しい解決方法については、後述するアルゴリズムを参照してほしい",
  },
  {
    id: 75,
    wordRuby: "範{はん}囲{い}",
    meaning: "range・scope・extent・coverage",
    exampleSentence: "FE試験では、ネットワークやデータベースなど、幅広い範囲の知識が求められる",
    extraVocabulary: [
      { wordRuby: "試{し}験{けん}範{はん}囲{い}", meaning: "exam scope" },
    ]
  },
  {
    id: 76,
    wordRuby: "執{しゅう}着{ちゃく}",
    meaning: "attachment・obsession・fixation",
    notes: "It means being unable or unwilling to let go of something, often excessively",
    exampleSentence: "一つの問題の解答に執着しすぎると、試験全体の時間配分を誤る可能性がある",
  },
  {
    id: 77,
    wordRuby: "挫{ざ}折{せつ}",
    meaning: "setback・failure・giving up after failure・frustration",
    notes: "describes having your efforts toward a goal blocked or broken, often leading to giving up",
    exampleSentence: "最初からすべてを完璧に理解しようとすると、学習途中で挫折する可能性がある",
  },
  {
    id: 78,
    wordRuby: "掲{けい}載{さい}",
    meaning: "publication・being posted・being published・being listed",
    exampleSentence: "この参考書には、過去の試験問題とその解説が掲載されている",
  },
  {
    id: 79,
    wordRuby: "正{せい}答{とう}",
    meaning: "correct answer",
    exampleSentence: "問題を解いた後は、正答だけでなく、なぜその答えになるのかも確認する",
    extraVocabulary: [
      { wordRuby: "正{せい}解{かい}", meaning: "correct answer・correct solution" },
      { wordRuby: "正{せい}答{とう}率{りつ}", meaning: "correct-answer rate" },
    ]
  },
  {
    id: 80,
    wordRuby: "各{かく}章{しょう}",
    meaning: "each chapter・every chapter",
    exampleSentence: "参考書の各章を読み終えたら、関連する過去問題を解いて理解度を確認する",
    extraVocabulary: [
      { wordRuby: "各{かく}章{しょう}を読{よ}む", meaning: "read each chapter" },
      { wordRuby: "各{かく}章{しょう}の要{よう}点{てん}", meaning: "key points of each chapter" },
      { wordRuby: "第{だい}一{いっ}章{しょう}", meaning: "Chapter 1" },
      { wordRuby: "章{しょう}立{だ}て", meaning: "chapter structure・organization into chapters" },
    ]
  },
  {
    id: 81,
    wordRuby: "腕{うで}試{だめ}し",
    meaning: "test of one's ability・test your skills・practice test",
    notes: "It often implies “Let's see how good I actually am.”",
    exampleSentence: "現在の実力を確認するために、模擬試験を腕試しとして受けてみる",
    extraVocabulary: [
      { wordRuby: "腕{うで}試{だめ}しに問{もん}題{だい}を解{と}く", meaning: "solve questions to test your ability" },
    ]
  },
  {
    id: 82,
    wordRuby: "スラスラと",
    meaning: "fluently・smoothly・without difficulty",
    notes: "describing something happening smoothly and without getting stuck, Especially common with 読む, 話す, 書く",
    exampleSentence: "基本的なアルゴリズムなら、処理の流れをスラスラと説明できるようにしておきたい",
  },
  {
    id: 83,
    wordRuby: "再{さい}度{ど}～",
    meaning: "again・once again・a second time",
    notes: "Formal version of もう一度",
    exampleSentence: "解答を確認した後、間違えた問題を再度解いてみる",
    extraVocabulary: [
      { wordRuby: "再{さい}度{ど}挑{ちょう}戦{せん}する", meaning: "try again" },
    ]
  },
  {
    id: 84,
    wordRuby: "全{ぜん}体{たい}像{ぞう}",
    meaning: "overall picture・big picture・overall structure",
    notes: "It means understanding how all the pieces fit together, rather than knowing isolated details",
    exampleSentence: "まず試験範囲を一通り確認して、学習内容の全体像を把握する",
    extraVocabulary: [
      { wordRuby: "全{ぜん}体{たい}像{ぞう}を把{は}握{あく}する", meaning: "grasp the big picture" },
    ]
  },
  {
    id: 85,
    wordRuby: "活{かつ}用{よう}する",
    meaning: "make use of・utilize・take advantage of",
    notes: "It means use something effectively for a purpose. Compared with 利用する, 活用 often emphasizes using something effectively or to its full potential",
    exampleSentence: "過去問題を活用して、自分の苦手な分野を特定する",
    extraVocabulary: [
      { wordRuby: "過{か}去{こ}問{もん}を活{かつ}用{よう}する", meaning: "make use of past questions" },
    ]
  },
  {
    id: 86,
    wordRuby: "再{いっ}度{たん}～",
    meaning: "once・for the time being",
    exampleSentence: "分からない問題はいったん飛ばして、後から時間があれば戻る",
    extraVocabulary: [
      { wordRuby: "いったん読{よ}み終{お}えたら、～", meaning: "Once you've finished reading it, …" },
    ]
  },
  {
    id: 87,
    wordRuby: "単{たん}位{い}",
    meaning: "unit・quantity counted as one",
    exampleSentence: "ネットワークの通信速度は、一般にMbpsやGbpsなどの単位で表される",
    extraVocabulary: [
      { wordRuby: "データの単{たん}位{い}", meaning: "unit of data" },
    ]
  },
  {
    id: 88,
    wordRuby: "数{すう}値{ち}",
    meaning: "numerical value・numerical data・figure",
    exampleSentence: "アルゴリズムの計算問題では、問題文に与えられた数値を正確に読み取ることが重要である",
    extraVocabulary: [
      { wordRuby: "数{すう}値{ち}表{ひょう}現{げん}", meaning: "numerical expression・numeric representation" },
    ]
  },
  {
    id: 89,
    wordRuby: "盛{もり}",
    meaning: "Size・Portion",
    exampleSentence: "この問題は、過去の出題傾向を盛り込んだ練習問題として作成されている",
    extraVocabulary: [
      { wordRuby: "盛{もり}込{こ}む", meaning: "to include・to incorporate" },
    ]
  },
  {
    id: 90,
    wordRuby: "見{み}慣{な}れる",
    meaning: "get used to seeing・become familiar with the sight of something",
    exampleSentence: "FEの問題文に見慣れてくると、専門用語が多くても内容を把握しやすくなる",
  },
  {
    id: 91,
    wordRuby: "難{なん}易{い}度{ど}",
    meaning: "difficulty level・degree of difficulty",
    exampleSentence: "この問題は計算量が多く、基本情報技術者試験の中でも比較的難易度が高い",
  },
  {
    id: 92,
    wordRuby: "断{だん}念{ねん}する",
    meaning: "give up on・abandon・decide to abandon an attempt/plan",
    notes: "More formal than 諦める, usually given up a specific plan, goal, or attempt",
    exampleSentence: "一つの問題に時間をかけすぎて、途中で解答を断念することになった",
  },
  {
    id: 93,
    wordRuby: "念{ねん}頭{とう}に～",
    meaning: "bearing in mind・keeping in mind・with something in mind",
    notes: "This is a very useful fixed expression: ～を念頭に置く = keep ～ in mind・bear ～ in mind・take ～ into consideration",
    exampleSentence: "システムを設計する際には、将来的な利用者数の増加も念頭に置く必要がある",
    extraVocabulary: [
      { wordRuby: "～を念{ねん}頭{とう}に置{お}く", meaning: "keep ～ in mind・bear ～ in mind・take ～ into consideration" },
    ]
  },
  {
    id: 94,
    wordRuby: "読{よ}み飛{と}ばす",
    meaning: "skip while reading・skip over・skip a section/page",
    exampleSentence: "問題文の重要な条件を読み飛ばすと、正しい解答を導き出せない可能性がある",
    extraVocabulary: [
      { wordRuby: "難しいところは読み飛ばしてもいいです", meaning: "You can skip the difficult parts" },
    ]
  },
  {
    id: 95,
    wordRuby: "読{よ}み返{かえ}す",
    meaning: "read again・reread・read back over・go back and read again",
    exampleSentence: "計算結果が合わない場合は、問題文を読み返して条件を確認する",
    extraVocabulary: [
      { wordRuby: "分からないところがあったので、前のページを読み返した。", meaning: "I went back and reread the previous page because there were parts I didn't understand." },
    ]
  },
  {
    id: 96,
    wordRuby: "精{せい}神{しん}",
    meaning: "Spirit・Mind・Mental state",
    notes: "The exact meaning depends heavily on context. 精神 often refers to someone's inner mental/emotional state, mindset, or spirit, rather than the physical body. ",
    exampleSentence: "長時間の試験では、最後まで集中力を維持する精神力も重要になる",
  },
  {
    id: 97,
    wordRuby: "冒{ぼう}頭{とう}に～",
    meaning: "at the beginning・at the outset・at the start・in the opening part",
    notes: "冒頭 refers to the very beginning of a text, speech, meeting, article, story, etc. It is more formal than simply 「最初」",
    exampleSentence: "問題文の冒頭に示された条件を見落とさないように注意する",
  },
  {
    id: 98,
    wordRuby: "躓{つまず}く",
    meaning: "to get stuck・to struggle with・to stumble on・to have difficulty with",
    notes: "You'll also see the noun: 躓きやすいポイント → points where learners tend to get stuck",
    exampleSentence: "プログラミングの基礎で躓くと、その後のアルゴリズムの学習も難しくなる",
  },
  {
    id: 99,
    wordRuby: "取{と}り掛{か}かる",
    meaning: "to start working on・to get started on・to begin tackling",
    notes: "取る＝ take・掛かる＝ begin to work on・be engaged in - Together, 取り掛かる has the sense of “start taking on a task.”",
    exampleSentence: "まず試験範囲を確認してから、苦手な分野の学習に取り掛かる",
  },
  {
    id: 100,
    wordRuby: "闇{やみ}雲{くも}に",
    meaning: "blindly・haphazardly・recklessly・without a clear plan・strategy",
    notes: "It means doing something without knowing the best direction or without thinking/choosing a strategy first.",
    exampleSentence: "闇雲に過去問題を解くのではなく、間違えた原因を分析することが重要である",
  },
  {
    id: 101,
    wordRuby: "得{とく}策{さく}",
    meaning: "A wise move・best course of action・wise strategy・advisable option・good way to proceed",
    notes: "You'll often encounter it in the negative: 得策ではない = is not a good strategy / is not advisable",
    exampleSentence: "すべての用語を一度に暗記しようとするのは、必ずしも得策ではない",
    extraVocabulary: [
      { wordRuby: "分からない問題に長時間こだわるのは得策ではない", meaning: "Spending a long time stuck on a question you don't understand isn't a good strategy`" },
    ]
  },
  {
    id: 102,
    wordRuby: "進{しん}数{すう}",
    meaning: "number base・numeral system・radix",
    notes: "In IT・mathematics, 進数 is used when talking about how numbers are represented using a particular base. The term comes from the idea of a number system that progresses/counts by a particular base.",
    exampleSentence: "2進数と10進数の変換方法は、FE試験で頻繁に問われる重要な知識である",
    extraVocabulary: [
      { wordRuby: "2{に}進{しん}数{すう}", meaning: "binary・base 2" },
      { wordRuby: "8{はっ}進{しん}数{すう}", meaning: "octal・base 8" },
      { wordRuby: "10{じゅっ}進{しん}数{すう}", meaning: "decimal・base 10" },
      { wordRuby: "16{じゅうろく}進{しん}数{すう}", meaning: "hexadecimal・base 16" },
      { wordRuby: "10進数の10を2進数で表すと1010です。", meaning: "The decimal number 10 is represented as 1010 in binary." },
      { wordRuby: "2進数を10進数に変換する。", meaning: "Convert binary to decimal." },
    ]
  },
  {
    id: 103,
    wordRuby: "演{えん}算{ざん}式{しき}",
    meaning: "arithmetic expression・mathematical expression・formula / calculation expression",
    notes: "In IT・programming, 演算式 refers to an expression that performs a calculation using operators and values/variables.",
    exampleSentence: "この演算式では、乗算を加算より先に実行する必要がある",
  },
  {
    id: 104,
    wordRuby: "直{ちょく}接{せつ}",
    meaning: "directly・firsthand・in person",
    notes: "The core idea is something happening without an intermediary or middle step.",
    exampleSentence: "データベースに直接アクセスするのではなく、APIを介してデータを取得する",
  },
  {
    id: 105,
    wordRuby: "前{ぜん}提{てい}",
    meaning: "premise・assumption・prerequisite・presupposition",
    notes: "The core idea is something that is assumed or established beforehand as the basis for thinking, discussing, or doing something.",
    exampleSentence: "このアルゴリズムは、入力データが正しいことを前提として設計されている",
  },
  {
    id: 106,
    wordRuby: "最{さい}小{しょう}単{たん}位{い}",
    meaning: "smallest unit・minimum unit・smallest indivisible/basic unit",
    notes: "It refers to the smallest unit that something can be divided into or treated as a unit. コンピュータが扱うデータの最小単位です。",
    exampleSentence: "ビットはコンピュータが扱うデータの最小単位であり、0または1の値を取る",
    extraVocabulary: [
      { wordRuby: "コンピュータが扱うデータの最小単位です", meaning: "the smallest unit of data that a computer can handle" },
    ]
  },
  {
    id: 107,
    wordRuby: "状{じょう}態{たい}",
    meaning: "state・Situation・status・condition",
    exampleSentence: "システムの現在の状態を確認してから、次の処理を実行する",
    extraVocabulary: [
      { wordRuby: "1ビットは2つの状態（または1）を表せる", meaning: "1 bit can represent 2 states (or 1)" },
      { wordRuby: "1バイトでは2通り（256通り）の状態を表すことができます", meaning: "1 byte can represent 2 types (256 types) of states" },
    ]
  },
  {
    id: 108,
    wordRuby: "大{おお}きな値{あたい}",
    meaning: "large value・high value・a large number",
    notes: "In an IT・mathematics・data context, 値（あたい） means a value, especially a numerical value.",
    exampleSentence: "大きな数値を扱う場合は、データ型の範囲を超えないように注意する必要がある",
    extraVocabulary: [
      { wordRuby: "小{ちい}さな値{あたい}", meaning: "small value" },
    ]
  },
  {
    id: 109,
    wordRuby: "扱{あつか}う",
    meaning: "handle・deal with・work with",
    notes: "The core idea is “handle or deal with something in a particular way.” The exact translation depends on context. In IT, it often refers to how data is processed or managed.",
    exampleSentence: "このプログラムでは、個人情報を含むデータを扱うため、適切なアクセス制御が必要である",
  },
  {
    id: 110,
    wordRuby: "簡{かん}潔{けつ}",
    meaning: "concise・succinct・brief・simple and to the point",
    notes: "The core idea is expressing something clearly without unnecessary details or extra words.",
    exampleSentence: "複雑な処理内容を、誰にでも分かるように簡潔に説明することが重要である",
    extraVocabulary: [
      { wordRuby: "簡{かん}潔{けつ}な", meaning: "concise・succinct" },
      { wordRuby: "簡{かん}潔{けつ}に", meaning: "concisely・briefly" },
    ]
  },
  {
    id: 111,
    wordRuby: "表{ひょう}記{き}",
    meaning: "notation・representation・written form・way something is written or displayed",
    exampleSentence: "プログラムのソースコードでは、変数名や関数名の表記を統一することが重要である",
  },
  {
    id: 112,
    wordRuby: "累{るい}乗{じょう}",
    meaning: "exponentiation・power・raising to a power",
    notes: "同じ数を繰り返し掛ける計算を累乗という。",
    exampleSentence: "2進数の各桁の値は、2の累乗を使って表すことができる",
    extraVocabulary: [
      { wordRuby: "同じ数を繰り返し掛ける計算を累乗という。", meaning: "a calculation that multiplies the same number repeatedly is called exponentiation" },
      { wordRuby: "指{し}数{すう}", meaning: "exponent" },
      { wordRuby: "底{てい}", meaning: "base" },
      { wordRuby: "2{に}乗{じょう}", meaning: "square・second power" },
      { wordRuby: "3{さん}乗{じょう}", meaning: "cube・third power" },
    ]
  },
  {
    id: 113,
    wordRuby: "通{つう}信{しん}量{りょう}",
    meaning: "data usage・amount of data transmitted・network traffic・communication volume",
    notes: "specifically refers to the amount of data transmitted over a network. It is commonly measured in bytes, KB, MB, GB, etc.",
    exampleSentence: "動画配信サービスでは、利用者が増えるとネットワークの通信量も増加する",
    extraVocabulary: [
      { wordRuby: "通{つう}信{しん}量{りょう}を削{さく}減{げん}する", meaning: "reduce data usage" },
    ]
  },
];

// \n\n\n\n\n\n