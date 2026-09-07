
export const JLPT_N1_FASTPASS_TANGO: Record<string, TangoEntry> = {
  '出' : {
    meaning: "Out・Start",
    words: [
      {
        id: 1,
        wordRuby: "出{しゅつ}現{げん}",
        connector: "する",
        meaning: "Appearance",
        components: [
          { kanji: "出", meaning: "Out" },
          { kanji: "現", meaning: "Present" }
        ],
        example: "未確認の生物がこの地域に突然{出現する}[*226*なんてない]と思っていたが、実際に複数の住民が<目撃した>[*274*となると]、単なる見間違いでは<片づけ>られない。",
        exampleMeaning: "I never thought [there was any way] an unidentified creature could suddenly {appear} in this area, but given that several residents actually <witnessed> it, it can’t simply <be dismissed> as a case of mistaken identity.",
        extraVocabulary: [
          { wordRuby: "目{もく}撃{げき}する", meaning: "To witness" },
          { wordRuby: "片{かた}づける", meaning: "To put in order・To tidy up・To deal with・To resolve something" },
        ],
      },
      {
        id: 2,
        wordRuby: "出{で}来{き}",
        meaning: "Quality・Result・Outcome",
        info: "This is the noun form related to 出来る \n出来がいい to be well-made / turn out well\n\nIt can also be read as 出来（しゅったい）meaning occurrence・completion\nThis is a more formal/literary reading.\n事件が出来する （しゅったいする） an incident occurs",
        components: [
          { kanji: "出", meaning: "Out" },
          { kanji: "来", meaning: "Come" }
        ],
        example: "新商品の{出来}[*204*については]、<期待以上>の<仕上がり>だったという声が多いが、[*227*どちらかというと]、<斬新さ>よりも<従来>の製品にはない<完成度>の高さが<評価>されているようだ。",
        exampleMeaning: "[As for the] {quality} of the new product, many people say it turned out <better than expected>. [If I had to put it one way], though, it seems that what’s being praised is less its <originality> and more its <high level of refinement>, which the <previous products> lacked.",
        extraVocabulary: [
          { wordRuby: "期{き}待{たい}以{い}上{じょう}", meaning: "Better than expected・Beyond expectations" },
          { wordRuby: "仕{し}上{あ}がり", meaning: "Finish・Completion・Finished result・how something turned out" },
          { wordRuby: "斬{ざん}新{しん}な", meaning: "Novel・Original・Innovative" },
          { wordRuby: "従{じゅう}来{らい}", meaning: "Traditional・Conventional・Previously existing" },
          { wordRuby: "完{かん}成{せい}度{ど}", meaning: "Degree of perfection・Level of completion・Quality" },
          { wordRuby: "評{ひょう}価{か}", meaning: "Evaluation・Assessment・Appraisal・Rating" },
        ]
      },
      {
        id: 3,
        wordRuby: "出{で}来{き}栄{ば}え",
        meaning: "Quality・Result・Finish・How well something turned out",
        components: [
          { kanji: "出来", meaning: "Result" },
          { kanji: "栄える", meaning: "Shine" }
        ],
        example: "長年[*37*にわたり]<伝統技法>を守り続けてきた<職人>[*225*ならでは]の<緻密な>仕事ぶりが<随所>に表れており、今回の作品の{出来栄え}はまさに<圧巻>の一言に<尽きる>。",
        exampleMeaning: "The <meticulous> <craftsmanship>, [unique to] an artisan who has spent [many] years preserving <traditional techniques>, is evident <throughout> the work, and the <quality> of this piece is nothing short of <breathtaking>.",
        extraVocabulary: [
          { wordRuby: "伝{でん}統{とう}技{ぎ}法{ほう}", meaning: "Traditional techniques" },
          { wordRuby: "職{しょく}人{にん}", meaning: "Artisan・Craftsman" },
          { wordRuby: "緻{ち}密{みつ}な", meaning: "Meticulous・Precise" },
          { wordRuby: "随{ずい}所{しょ}", meaning: "Everywhere・Throughout・various places" },
          { wordRuby: "圧{あっ}巻{かん}", meaning: "Highlight・Climax・Breathtaking・The most impressive part" },
          { wordRuby: "尽{つ}きる", meaning: "To be exhausted・To run out・To be limited・To come to an end" },
        ]
      },
      {
        id: 4,
        wordRuby: "抽{ちゅう}出{しゅつ}",
        meaning: "Extraction・Selection・filtering out",
        connector: "する",
        info: "The core idea is taking out specific things from a larger group or set.",
        components: [
          { kanji: "抽", meaning: "Pull out" },
          { kanji: "出", meaning: "Out" }
        ],
        example: "必要な情報を{抽出}[*228*しようがしまいが]、<最終的な>判断は現場の担当者に<委ねら>れるため、システム側で結果の正確性を<保証する>ことはできない。",
        exampleMeaning: "[Whether] the necessary information is {extracted} [or not], the <final> decision will <be left to> the person in charge on site, so the system cannot guarantee the accuracy of the results.",
        extraVocabulary: [
          { wordRuby: "最{さい}終{しゅう}的{てき}な", meaning: "Final・Ultimate" },
          { wordRuby: "委{ゆだ}ねる", meaning: "To entrust・To leave to someone else" },
          { wordRuby: "保{ほ}証{しょう}する", meaning: "To guarantee・To ensure" },
        ],
        important: true,
      },
      {
        id: 5,
        wordRuby: "流{りゅう}出{しゅつ}",
        meaning: "Flow out・Leak",
        components: [
          { kanji: "流", meaning: "Flow" },
          { kanji: "出", meaning: "Out" }
        ],
        example: "<機密>情報が{流出}[*228*しようがしまいが]、一度インターネット上に公開されてしまえば、完全に<削除する>ことは<事実上>不可能だ。",
        exampleMeaning: "[Whether] <confidential> information gets {leaked} [or not], once it has been made public on the internet, it is <virtually> impossible to <remove> it completely.",
        extraVocabulary: [
          { wordRuby: "機{き}密{みつ}", meaning: "Confidential・Secret" },
          { wordRuby: "削{さく}除{じょ}する", meaning: "To delete・To remove・To erase" },
          { wordRuby: "事{じ}実{じつ}上{じょう}", meaning: "In practice・Virtually・In reality・Effectively" },
        ],
        important: true,
      },
      {
        id: 6,
        wordRuby: "はみ出{だ}す",
        meaning: "Stick out・Protrude",
        components: [
          { kanji: "出す", meaning: "Out" }
        ],
        example: "会議の時間が予定を<大幅に>{はみ出した}[*230*とはいえ]、参加者全員が納得できるまで<議論>を<尽くした>ことには<意義>がある。",
        exampleMeaning: "[Although] the meeting went <well> {beyond} the scheduled time, there was <value> in <discussing> the matter <thoroughly> until everyone involved was satisfied.",
        extraVocabulary: [
          { wordRuby: "大{おお}幅{はば}に", meaning: "Significantly・Substantially・Considerably ( It is used when something changes by a large degree or amount )" },
          { wordRuby: "議{ぎ}論{ろん}", meaning: "Discussion・Debate" },
          { wordRuby: "尽{つ}くす", meaning: "To exhaust・To do something to the fullest・To devote oneself to" },
          { wordRuby: "意{い}義{ぎ}", meaning: "Meaning・Significance・Value" },
        ]
      },
      {
        id: 7,
        wordRuby: "考{かんが}え出{だ}す",
        meaning: "To start thinking about something・To come up with an idea",
        components: [
          { kanji: "考える", meaning: "Think" },
          { kanji: "出す", meaning: "Out" }
        ],
        example: "新たな<解決策>を{考え出さ}[*258*んがため]、研究チームは<既存>の理論を一から<検証し>直すことにした。",
        exampleMeaning: "[In order to] {come up with} a new <solution>, the research team decided to re-<examine> <existing> theories from the ground up.",
        extraVocabulary: [
          { wordRuby: "解{かい}決{けつ}策{さく}", meaning: "Solution・Measure・Way to solve a problem・Remedy" },
          { wordRuby: "既{き}存{ぞん}", meaning: "Existing・Pre-existing" },
          { wordRuby: "検{けん}証{しょう}する", meaning: "To verify・To examine・To check" },
        ]
      },
      {
        id: 8,
        wordRuby: "差{さ}し出{だ}す",
        meaning: "to hand/give something to someone・to hold something out・to submit・To Offer/sacrifice something",
        components: [
          { kanji: "差す", meaning: "Extend" },
          { kanji: "出す", meaning: "Out" }
        ],
        example: "周囲からの<批判>[*269*をものともせず]、彼は<被災者>に<救援物資>を{差し出し}続けた。",
        exampleMeaning: "[Undeterred by] <criticism> from those around him, he continued {offering} <relief supplies> to the <disaster victims>.",
        extraVocabulary: [
          { wordRuby: "批{ひ}判{はん}", meaning: "Criticism・Judgment・Comment" },
          { wordRuby: "被{ひ}災{さい}者{しゃ}", meaning: "Disaster victim" },
          { wordRuby: "救{きゅう}援{えん}物{ぶっ}資{し}", meaning: "Relief supplies・Aid supplies" },
        ]
      },
      {
        id: 9,
        wordRuby: "乗{の}り出{だ}す",
        meaning: "To start taking action・To get involved",
        components: [
          { kanji: "乗る", meaning: "Get on" },
          { kanji: "出す", meaning: "start" }
        ],
        example: "大学で研究を続ける[*262*かたわら]、彼は地域の<環境><保全>活動にも{乗り出した}。",
        exampleMeaning: "[While] continuing his research at the university, he also {became involved} in local <environmental> <conservation> efforts.",
        extraVocabulary: [
          { wordRuby: "環{かん}境{きょう}", meaning: "Environment" },
          { wordRuby: "保{ほ}全{ぜん}", meaning: "Conservation・Preservation" },
        ]
      },
    ]
  },
  '実' : {
    meaning: "Actual",
    words: [
      {
        id: 10,
        wordRuby: "実{じつ}に",
        meaning: "Truly・Really・Indeed",
        components: [
        { kanji: "実", meaning: "Actual" }
        ],
        example: "今回の<改修>にかかった期間は、{実に}三年[*272*といったところ]で、<決して>短期間で<成し遂げら>れたものではない。",
        exampleMeaning: "The <renovation> {indeed} took [roughly] three years, so it <certainly wasn't> something {accomplished} in a short period.",
        extraVocabulary: [
          { wordRuby: "改{かい}修{しゅう}", meaning: "Renovation・Repair・Remodeling" },
          { wordRuby: "決{けっ}して", meaning: "Never・By no means・Not at all ( mainly used with a negative expression to strongly emphasize that something will not happen / is not true under any circumstances )" },
          { wordRuby: "成{なし}遂{とげ}る", meaning: "To accomplish・To achieve・To complete" },
        ]
      },
      {
        id: 11,
        wordRuby: "実{じつ}在{ざい}",
        meaning: "Real existence・Existence in reality",
        connector: "する",
        components: [
          { kanji: "実", meaning: "Actual" },
          { kanji: "在", meaning: "Exist" }
        ],
        example: "これほど<精巧な><偽物>が存在する[*246*とは]、{実在する}<人物>の<肖像画>だと信じて疑わなかった。",
        exampleMeaning: "[I can't believe] such a <sophisticated> <fake> exists. I was convinced without a doubt that it was a <portrait> of a {real} <person>.",
        extraVocabulary: [
          { wordRuby: "精{せい}巧{こう}な", meaning: "Exquisite・Elaborate・Sophisticated" },
          { wordRuby: "人{じん}物{ぶつ}", meaning: "Person・Individual・Character・Personality" },
          { wordRuby: "偽{にせ}者{もの}", meaning: "Fake・Imitation・Counterfeit" },
          { wordRuby: "肖{しょう}像{ぞう}画{が}", meaning: "Portrait・Portrait painting" },
        ]
      },
      {
        id: 12,
        wordRuby: "実{じつ}情{じょう}",
        meaning: "The facts・The real situation・The truth of the matter",
        components: [
          { kanji: "実", meaning: "Actual" },
          { kanji: "情", meaning: "Situation" }
        ],
        example: "現場の{実情}[*268*をよそに]、<経営陣>は<さらなる>人員<削減>を決定した。",
        exampleMeaning: "[Ignoring] the {actual situation} on the ground, <management> decided to make <further> staff <cuts>.",
        extraVocabulary: [
          { wordRuby: "経{けい}営{えい}陣{じん}", meaning: "Management team・Executives" },
          { wordRuby: "更{さら}なる", meaning: "Further・Additional・Even more" },
          { wordRuby: "人{じん}員{いん}", meaning: "Staff・Personnel" },
          { wordRuby: "削{さく}減{げん}", meaning: "Reduction・Cutting・Decrease" }
        ]
      },
      {
        id: 13,
        wordRuby: "実{じっ}体{たい}",
        meaning: "actual entity・true nature・concrete reality・The real thing",
        components: [
          { kanji: "実", meaning: "Actual" },
          { kanji: "体", meaning: "Body" }
        ],
        example: "製品の{実体}を<隠した>まま販売を続ける[*246*とは]、企業[*240*としてあるまじき]<行為>だ。",
        exampleMeaning: "Continuing to sell the product while <concealing> its {true nature} [is absolutely unacceptable for] a company.",
        extraVocabulary: [
          { wordRuby: "隠{かく}す", meaning: "To hide・To conceal・To cover up" },
          { wordRuby: "行{こう}為{い}", meaning: "Action・Behavior・Conduct" }
        ]
      },
      {
        id: 14,
        wordRuby: "実{じっ}態{たい}",
        meaning: "actual situation・actual state・reality・true state of affairs",
        components: [
          { kanji: "実", meaning: "Actual" },
          { kanji: "態", meaning: "State" }
        ],
        example: "会社全体の{実態}も<深刻>だが、海外支社[*251*に至っては]、半年間ほとんど<業務>が<機能>していなかった。",
        exampleMeaning: "The {situation} throughout the company is <serious>, [but when it comes to] the overseas branch, <operations> had barely <functioned> for six months.",
        extraVocabulary: [
          { wordRuby: "深{しん}刻{こく}な", meaning: "Serious・Severe・Critical" },
          { wordRuby: "業{ぎょう}務{む}", meaning: "Business・Operations・Work" },
          { wordRuby: "機{き}能{のう}", meaning: "Function・Ability・Capability" }
        ]
      },
      {
        id: 15,
        wordRuby: "実{じっ}費{ぴ}",
        meaning: "actual costs・real expenses・out-of-pocket costs",
        components: [
          { kanji: "実", meaning: "Actual" },
          { kanji: "費", meaning: "Expense" }
        ],
        example: "今回の<研修>にかかる<交通費>は、<領収書>の提出[*250*をもって]{実費}<精算>とする。",
        exampleMeaning: "Transportation expenses for this training will be reimbursed at actual cost upon submission of the receipts.",
        extraVocabulary: [
          { wordRuby: "研{けん}修{しゅう}", meaning: "Training・Study" },
          { wordRuby: "交{こう}通{つう}費{ひ}", meaning: "Transportation expenses・Travel expenses" },
          { wordRuby: "領{りょう}収{しゅう}書{しょ}", meaning: "Receipt" },
          { wordRuby: "精{せい}算{さん}", meaning: "Settlement・Reimbursement・Adjustment" }
        ]
      },
      {
        id: 16,
        wordRuby: "真{しん}実{じつ}",
        meaning: "the truth・reality・facts",
        components: [
          { kanji: "真", meaning: "True" },
          { kanji: "実", meaning: "Actual" }
        ],
        example: "たとえ不都合な{真実}[*85*であっても]、<一片>[*236*たりとも]<隠す>ことなく<公表>しなければならない。",
        exampleMeaning: "Even if it is an inconvenient truth, not even the slightest bit of it should be concealed; it must be made public.",
        extraVocabulary: [
          { wordRuby: "一{いっ}片{ぺん}", meaning: "A piece・A bit・A fragment・A slice" },
          { wordRuby: "隠{かく}す", meaning: "To hide・To conceal・To cover up・To keep secret" },
          { wordRuby: "公{こう}表{ひょう}する", meaning: "To make public・To announce" }
        ]
      },
      {
        id: 17,
        wordRuby: "誠{せい}実{じつ}な",
        meaning: "Sincere・Honest・Truthful",
        components: [
          { kanji: "誠", meaning: "Sincerity" },
          { kanji: "実", meaning: "Actual" }
        ],
        example: "この複雑な<案件>を任せられる人材[*239*をおいて他にない]と判断し、彼に<交渉>を<一任>した。",
        exampleMeaning: "We determined that there was [no one other than him] we could entrust with this complicated <matter>, so we left the <negotiations> entirely to him.",
        extraVocabulary: [
          { wordRuby: "案{あん}件{けん}", meaning: "Matter・Case・Project・Business deal" },
          { wordRuby: "交{こう}渉{しょう}", meaning: "Negotiation・Bargaining" },
          { wordRuby: "一{いち}任{にん}する", meaning: "To entrust entirely・To leave entirely to someone else・To give someone full authority" }
        ]
      },
      {
        id: 18,
        wordRuby: "如{にょ}実{じつ}に",
        meaning: "vividly・clearly・faithfully・exactly as it really is・Just as it is",
        components: [
          { kanji: "如", meaning: "As・like" },
          { kanji: "実", meaning: "Actual" }
        ],
        example: "売上の<落ち込み>が{如実に}表れている<旧店舗>[*241*にひきかえ]、<新店舗>は開業以来、<客足>が<途切れる>ことがない。",
        exampleMeaning: "[In contrast to] the old store, where the decline in sales is clearly evident, the new store has had a steady stream of customers since opening.",
        extraVocabulary: [
          { wordRuby: "落{お}ち込{こ}む", meaning: "To fall into a slump・To decline・To be depressed" },
          { wordRuby: "旧{きゅう}店{てん}舗{ぽ}", meaning: "Old store location・Former store" },
          { wordRuby: "新{しん}店{てん}舗{ぽ}", meaning: "New store location・New store" },
          { wordRuby: "客{きゃく}足{あし}", meaning: "Customer traffic・Number of customers coming to a store" },
          { wordRuby: "途{と}切{ぎ}れる", meaning: "To be interrupted・To be cut off・To stop temporarily" }
        ]
      },
    ],
  },
  '合' : {
    meaning: "Match・Fit・Join",
    words: [
      {
        id: 19,
        wordRuby: "合{がっ}致{ち}",
        meaning: "Match・Correspond・Coincide・Be in agreement",
        connector: "する",
        info: "Two things fit or agree with each other.",
        components: [
          { kanji: "合", meaning: "Match" },
          { kanji: "致", meaning: "Reach" }
        ],
        example: "<双方>の<主張>が完全に{合致}[*234*すればこそ]、今回の<合意>に<至る>ことができたのである。",
        exampleMeaning: "It was [precisely because] <both sides>' <positions> were completely {in agreement} that they were able to <reach> this <agreement>.",
        extraVocabulary: [
          { wordRuby: "双{そう}方{ほう}", meaning: "Both sides・Both parties" },
          { wordRuby: "主{しゅ}張{ちょう}", meaning: "Claim・Assertion・Argument・Position" },
          { wordRuby: "合{ごう}意{い}", meaning: "Agreement・Consensus・Mutual agreement" },
          { wordRuby: "至{いた}る", meaning: "To reach・To arrive at・To lead to・To result in" }
        ]
      },
      {
        id: 20,
        wordRuby: "合{がっ}併{ぺい}",
        meaning: "Merger・Consolidation",
        connector: "する",
        info: "Two or more separate organizations, companies, municipalities, etc. become one.",
        components: [
          { kanji: "合", meaning: "Match" },
          { kanji: "併", meaning: "Combine" }
        ],
        example: "両社が{合併する}[*265*とあっては]、<従業員>の<配置>や<待遇>についても大幅な見直しが必要になるだろう。",
        exampleMeaning: "[Given that] the two companies are {merging}, there will likely need to be major revisions to <employee> <assignments> and <working conditions>.",
        extraVocabulary: [
          { wordRuby: "従{じゅう}業{ぎょう}員{いん}", meaning: "Employee・Staff member" },
          { wordRuby: "配{はい}置{ち}", meaning: "Assignment・Deployment・Placement ( The act of putting people or things in particular positions/locations )" },
          { wordRuby: "待{たい}遇{ぐう}", meaning: "Treatment・Working conditions・Salary and benefits・Employment conditions・Benefits" }
        ]
      },
      {
        id: 21,
        wordRuby: "合{ごう}理{り}的{てき}な",
        meaning: "rational・logical・reasonable・efficient",
        components: [
          { kanji: "合理", meaning: "rationality" },
          { kanji: "的", meaning: "Adj. suffix" }
        ],
        example: "その判断が{合理的}[*230*とはいえ]、長年現場を支えてきた<職員>の意見を<無視して>よいこと[にはならない]。",
        exampleMeaning: "[Although] the decision may be {rational}, that doesn't mean the opinions of <employees> who have supported the workplace for years can simply be <ignored>.",
        extraVocabulary: [
          { wordRuby: "判{はん}断{だん}", meaning: "Decision・Judgment" },
          { wordRuby: "職{しょく}員{いん}", meaning: "Employee・Staff member" },
          { wordRuby: "無{む}視{し}する", meaning: "To ignore・To disregard・To overlook" }
        ]
      },
      {
        id: 22,
        wordRuby: "結{けつ}合{ごう}",
        meaning: "Combination・Joining・Connection・Bonding",
        connector: "する",
        info: "Two or more things that were separate become connected or joined together.",
        components: [
          { kanji: "結", meaning: "Bind" },
          { kanji: "合", meaning: "Match" }
        ],
        example: "<複数>のデータベースの{結合}[*263*なくして]、このシステムの<一元><管理>を<実現する>ことはできない。",
        exampleMeaning: "[Without] {combining} the <multiple> databases, it would be impossible to <achieve> <centralized> <management> of this system.",
        extraVocabulary: [
          { wordRuby: "複{ふく}数{すう}", meaning: "Multiple・Plural" },
          { wordRuby: "一{いち}元{げん}", meaning: "Centralized・Unified・One source" },
          { wordRuby: "管{かん}理{り}", meaning: "Management・Administration" },
          { wordRuby: "一{いち}元{げん}管{かん}理{り}", meaning: "Centralized management" },
          { wordRuby: "実{じつ}現{げん}する", meaning: "To realize・To implement・To achieve" }
        ]
      },
      {
        id: 23,
        wordRuby: "競{きょう}合{ごう}",
        meaning: "Competition with another company/product・Contest・Rivalry",
        connector: "する",
        components: [
          { kanji: "競", meaning: "Compete" },
          { kanji: "合", meaning: "Match" }
        ],
        example: "<大手>企業と{競合}[*255*しようものなら]、価格<競争>に<巻き込まれる>だけでなく、<経営><基盤>そのものが<揺らぎ>[*96*かねない]。",
        exampleMeaning: "[If we were to] {compete} with a major corporation, we could not only get dragged into a price war, but our very business foundation could be put at risk.",
        extraVocabulary: [
          { wordRuby: "大{おお}手{て}", meaning: "Major company・Leading company" },
          { wordRuby: "競{きょう}争{そう}", meaning: "Competition ( as a general activity/situation )・Contest・Rivalry" },
          { wordRuby: "巻{ま}き込{こ}む", meaning: "To involve someone・To drag someone into something・To get caught up in" },
          { wordRuby: "経{けい}営{えい}", meaning: "Management・Administration・Running a business/company" },
          { wordRuby: "基{き}盤{ばん}", meaning: "Foundation・Basis・Infrastructure" },
          { wordRuby: "揺{ゆ}らぐ", meaning: "To shake・To sway・To waver・To be unstable・To be shaken" }
        ]
      },
      {
        id: 24,
        wordRuby: "総{そう}合{ごう}的{てき}な",
        meaning: "As a whole・Overall・General・Comprehensive",
        components: [
          { kanji: "総", meaning: "Overall" },
          { kanji: "合", meaning: "Match" },
          { kanji: "的", meaning: "Adj. suffix" }
        ],
        example: "今後の対応は、調査結果[*266*いかん]によっては、{総合的な}事業計画その[*253*ものを]見直す必要がある。",
        exampleMeaning: "[Depending on] the investigation results, we may have to reconsider the {overall} business plan itself."
      },
      {
        id: 25,
        wordRuby: "かみ合{あ}う",
        meaning: "To fit together・To match perfectly",
        components: [
          { kanji: "かむ", meaning: "Bite" },
          { kanji: "合う", meaning: "Match" }
        ],
        example: "<双方>の意見が{かみ合う}[*259*や否や]、長時間に<及んだ><交渉>は一気に<妥結>へと向かった。",
        exampleMeaning: "[The moment] the <two sides>' positions finally {aligned}, the <negotiations>, which had <dragged on> for hours, suddenly moved toward an <agreement>.",
        extraVocabulary: [
          { wordRuby: "双{そう}方{ほう}", meaning: "Both sides・Both parties" },
          { wordRuby: "及{およ}ぶ", meaning: "To reach・To extend・To go as far as" },
          { wordRuby: "交{こう}渉{しょう}", meaning: "Negotiation・Bargaining" },
          { wordRuby: "妥{だ}結{けつ}", meaning: "Agreement・Settlement・Compromise・Successful conclusion of negotiations" }
        ]
      },
      {
        id: 26,
        wordRuby: "向{む}き合{あ}う",
        meaning: "To face each other・To confront・To deal with",
        components: [
          { kanji: "向く", meaning: "Turn toward" },
          { kanji: "合う", meaning: "Match" }
        ],
        example: "自らの<過ち>と{向き合う}[*264*ことなしに]、同じ失敗を<繰り返さ>ないための<教訓>を<得る>ことはできない。",
        exampleMeaning: "[Without] {confronting} one's own mistakes, it is impossible to learn lessons that will prevent the same failures from recurring.",
        extraVocabulary: [
          { wordRuby: "過{あやま}ち", meaning: "Mistake・Error・Fault・Wrongdoing" },
          { wordRuby: "繰{く}り返{かえ}す", meaning: "To repeat・To do something over again" },
          { wordRuby: "教{きょう}訓{くん}", meaning: "Lesson・Moral・Learned lesson ( A lesson learned from an experience, mistake, failure, or event, especially something that can guide future behavior )" },
          { wordRuby: "得{え}る", meaning: "To obtain・To gain・To acquire" }
        ]
      },
      {
        id: 27,
        wordRuby: "張{は}り合{あ}う",
        meaning: "To compete with each other・To strive against each other・To try to outdo each other",
        components: [
          { kanji: "張る", meaning: "Strech" },
          { kanji: "合う", meaning: "Match" }
        ],
        example: "互いに{張り合う}<姿勢>[*238*もさることながら]、<切磋琢磨>しながら成長[*1*しようとする]<姿勢>こそ<評価>すべきだ。",
        exampleMeaning: "Their competitive <attitude> [is certainly noteworthy, but] what deserves recognition is their determination to grow while <pushing each other to improve>.",
        extraVocabulary: [
          { wordRuby: "姿{し}勢{せい}", meaning: "Attitude・Posture" },
          { wordRuby: "切{せっ}磋{さ}琢{たく}磨{ま}", meaning: "To improve oneself through friendly rivalry・To learn from each other・Polishing and improving oneself through interaction with others" },
          { wordRuby: "評{ひょう}価{か}", meaning: "Evaluation・Assessment・Appraisal" }
        ]
      },
    ],
  },
  '人' : {
    meaning: "Person・Human",
    words: [
      {
        id:28,
        wordRuby: "人{ひと}手{て}",
        meaning: "Manpower・Human resources・Personnel・Workforce",
        components: [
        { kanji: "人", meaning: "Person" },
        { kanji: "手", meaning: "Hand" }
        ],
        example: "{人手}を増や[*231*そうにも]、<予算>に<余裕>がなく、<現状>の人員だけで対応せ[*48*ざるを得ない]。",
        exampleMeaning: "[Even though we'd like to] increase the workforce, there's no <room> in the <budget>, so [we have no choice but] to manage with the <current> staff.",
        extraVocabulary: [
          { wordRuby: "予{よ}算{さん}", meaning: "Budget・Estimate" },
          { wordRuby: "余{よ}裕{ゆう}", meaning: "Leeway・Room・Margin・Allowance" },
          { wordRuby: "現{げん}状{じょう}", meaning: "Current situation・Present condition・Status quo" },
        ]
      },
      {
        id: 29,
        wordRuby: "人{ひと}柄{がら}",
        meaning: "Character・Personality・Nature",
        components: [
          { kanji: "人", meaning: "Human" },
          { kanji: "柄", meaning: "Pattern" }
        ],
        example: "彼の{人柄}[*274*ともなると]、<初対面>の相手[*67*でさえ]自然と心を開いてしまうほどの<親しみ>やすさがある。",
        exampleMeaning: "[When it comes to] his personality, he is so <approachable> that [even] people meeting him for the first time naturally open up to him.",
        extraVocabulary: [
          { wordRuby: "初{しょ}対{たい}面{めん}", meaning: "First meeting・First encounter" },
          { wordRuby: "親{した}しみ", meaning: "Friendliness・Familiarity・Affection" }
        ]
      },
      {
        id: 30,
        wordRuby: "人{じん}格{かく}",
        meaning: "Personality・Character",
        components: [
          { kanji: "人", meaning: "Human" },
          { kanji: "格", meaning: "Form" }
        ],
        example: "{人格}を<否定する>ような発言を<公の場>でするとは、あまりにも<無神経>[*243*極まりない]。",
        exampleMeaning: "Making remarks in public that attack someone's {character} is [utterly] <insensitive>.",
        extraVocabulary: [
          { wordRuby: "否{ひ}定{てい}する", meaning: "To deny・To negate・To reject" },
          { wordRuby: "公{おおやけ}の場{ば}", meaning: "Public place・In public" },
          { wordRuby: "無{む}神{しん}経{けい}", meaning: "Insensitive・Thoughtless・Inconsiderate" }
        ]
      },
      {
        id: 31,
        wordRuby: "人{じん}員{いん}",
        meaning: "Personnel・Staff",
        components: [
          { kanji: "人", meaning: "Person" },
          { kanji: "員", meaning: "Member" }
        ],
        example: "{人員}<削減>によって現場の<負担>がさらに増すことを考えると、<経営陣>の判断には<懸念>[*245*を禁じ得ない]。",
        exampleMeaning: "Considering that the staff <cuts> will further increase the <burden> on those working on the ground, [I cannot help but feel] <concerned> about <management>'s decision.",
        extraVocabulary: [
          { wordRuby: "削{さく}減{げん}", meaning: "Reduction・Cutting・Decrease" },
          { wordRuby: "負{ふ}担{たん}", meaning: "Burden・Responsibility・Load" },
          { wordRuby: "経{けい}営{えい}陣{じん}", meaning: "Management team・Executives" },
          { wordRuby: "懸{け}念{ねん}", meaning: "Concern・Worry・Anxiety" }
        ]
      },
      {
        id: 32,
        wordRuby: "人{じん}類{るい}",
        meaning: "Humanity・Mankind",
        components: [
          { kanji: "人", meaning: "Human" },
          { kanji: "類", meaning: "Category" }
        ],
        example: "{人類}が<月面>に<定住する>[*271*までも]いかなくても、将来的には長期滞在が現実的になるかもしれない。",
        exampleMeaning: "[Even if] humanity [doesn't go so far as] to establish <permanent settlements> on <the Moon>, long-term stays may become realistic in the future.",
        extraVocabulary: [
          { wordRuby: "月{げつ}面{めん}", meaning: "Moon's surface・Lunar surface" },
          { wordRuby: "定{てい}住{じゅう}する", meaning: "To settle down・To establish a permanent residence" },
        ]
      },
      {
        id: 33,
        wordRuby: "人{じん}事{じ}",
        meaning: "Human resources・Personnel affairs",
        components: [
          { kanji: "人", meaning: "Person" },
          { kanji: "事", meaning: "Matter" }
        ],
        example: "今さら{人事}を見直した[*233*ところで]、すでに<退職>を<決意した>社員を<引き留める>ことは難しいだろう。",
        exampleMeaning: "[Even if] we revise the {personnel} decisions now, it probably won't help us <retain> employees who have already <decided> to <resign>.",
        extraVocabulary: [
          { wordRuby: "退{たい}職{しょく}", meaning: "Resignation・Retirement" },
          { wordRuby: "決{けつ}意{い}", meaning: "Firm decision・Determination・Make up one’s mind" },
          { wordRuby: "引{ひ}き留{と}める", meaning: "To retain・To keep someone from leaving・To persuade someone to stay・To dissuade someone from resigning" }
        ]
      },
      {
        id: 34,
        wordRuby: "人{にん}間{げん}性{せい}",
        meaning: "Humanity・Human nature",
        components: [
          { kanji: "人間", meaning: "Human" },
          { kanji: "性", meaning: "Nature" }
        ],
        example: "企業として<利益>を<追求する>のは当然だが、{人間性}を<犠牲>に[*248*してまで]<競争>に勝とうとする姿勢には、強い疑問を感じ[*48*ざるを得ない]。",
        exampleMeaning: "While it is only natural for a company to <pursue> <profits>, [I cannot help] seriously questioning an attitude that [goes so far as to] <sacrifice> its {humanity} [in order to] win the <competition>.",
        extraVocabulary: [
          { wordRuby: "利{り}益{えき}", meaning: "Profit・Gain・Benefit" },
          { wordRuby: "追{つい}求{きゅう}する", meaning: "To pursue・To seek・To chase after" },
          { wordRuby: "犠{ぎ}牲{せい}", meaning: "Sacrifice・Victim" },
          { wordRuby: "競{きょう}争{そう}", meaning: "Competition ( as a general activity/situation )・Contest・Rivalry" }
        ]
      },
      {
        id: 35,
        wordRuby: "知{ち}人{じん}",
        meaning: "Acquaintance・Someone you know",
        info: "acquaintance — someone you know, but aren't necessarily close to",
        components: [
          { kanji: "知", meaning: "Know" },
          { kanji: "人", meaning: "Person" }
        ],
        example: "{知人}[*254*ではあるまいし]、<初対面>の相手にそこまで個人的な<事情>を話す必要はない。",
        exampleMeaning: "[It's not as if] they're even an {acquaintance}, so there's no need to tell someone you've just met that much about your personal <circumstances>.",
        extraVocabulary: [
          { wordRuby: "初{しょ}対{たい}面{めん}", meaning: "First meeting・First encounter" },
          { wordRuby: "事{じ}情{じょう}", meaning: "Circumstances・Situation・Conditions" }
        ]
      },
      {
        id: 36,
        wordRuby: "職{しょく}人{にん}",
        meaning: "Craftsman・Skilled worker",
        info: "Someone who has specialized skills and expertise in a particular craft or trade, often developed through years of practice.",
        components: [
          { kanji: "職", meaning: "Job" },
          { kanji: "人", meaning: "Person" }
        ],
        example: "<伝統><工芸>の{職人}として<技>を<磨く>[*262*かたわら]、<後進>の<育成>にも力を<注いで>いる。",
        exampleMeaning: "[While] <honing> his <skills> as a <traditional> {craftsman}, [he also] <devotes> himself to <training> the <next generation>.",
        extraVocabulary: [
          { wordRuby: "伝{でん}統{とう}", meaning: "Tradition・Traditional" },
          { wordRuby: "工{こう}芸{げい}", meaning: "Craft・Artisan work・Handicraft" },
          { wordRuby: "技{わざ}", meaning: "Skill・Technique・Art" },
          { wordRuby: "磨{みが}く", meaning: "To polish・To refine・To improve・To perfect・To hone" },
          { wordRuby: "後{こう}進{しん}", meaning: "Next generation・Younger generation・Successors・Those who come after・Junior people in the same field" },
          { wordRuby: "育{いく}成{せい}", meaning: "Training・Development・Fostering" },
          { wordRuby: "注{そそ}ぐ", meaning: "To pour (into)・To devote (oneself to)" }
        ]
      },
    ],
  },
  '見' : {
    meaning: "Look・See",
    words: [
      {
        id: 37,
        wordRuby: "見{み}なす",
        meaning: "To regard as・Consider・Treat as",
        info: "The idea is deciding that something should be considered to be something else, even if it isn't literally that thing.\nAをBと見なす -> regard A as B",
        components: [
          { kanji: "見る", meaning: "Look" },
          { kanji: "なす", meaning: "To do" }
        ],
        example: "<契約書>の<文言>が曖昧[*235*ゆえに]<誤解>が生じたが、<双方>はトラブルを<回避す>[*153*べく]、この<合意>を<正式な>決定と{見なす}ことにした。",
        exampleMeaning: "[Because] the <wording> of the <contract> was ambiguous, a <misunderstanding> arose, but [in order to] <avoid> trouble, <both parties> decided to regard this <agreement> as the <official> decision.",
        extraVocabulary: [
          { wordRuby: "契{けい}約{やく}書{しょ}", meaning: "Contract・Agreement document" },
          { wordRuby: "文{もん}言{ごん}", meaning: "Wording・Phrasing・Terms" },
          { wordRuby: "誤{ご}解{かい}", meaning: "Misunderstanding・Misinterpretation・Misconception" },
          { wordRuby: "双{そう}方{ほう}", meaning: "Both sides・Both parties involved" },
          { wordRuby: "回{かい}避{ひ}する", meaning: "To avoid・To evade・To prevent" },
          { wordRuby: "合{ごう}意{い}", meaning: "Agreement・Consensus・Mutual agreement" },
          { wordRuby: "正{せい}式{しき}な", meaning: "Formal・Official・Proper" }
        ]
      },
      {
        id: 38,
        wordRuby: "見{み}返{かえ}り",
        meaning: "something given in return・compensation・return・reward",
        info: "The basic idea is getting something back in exchange for what you gave or did.\nAの見返りにB -> B in return for A\nIt can imply that you're doing something because you expect to get something back, especially when talking about relationships or favors.",
        components: [
          { kanji: "見る", meaning: "Look" },
          { kanji: "返る", meaning: "Return" }
        ],
        example: "何の{見返り}も求めずに地域の<復興>に<尽力>した彼の姿勢に、私は敬意を表して[*244*やまない]。",
        exampleMeaning: "I have the [deepest] respect for his dedication to the community's recovery without seeking anything {in return}.",
        extraVocabulary: [
          { wordRuby: "復{ふっ}興{こう}", meaning: "Revival・Reconstruction・Recovery・Restoration" },
          { wordRuby: "尽{じん}力{りょく}", meaning: "Make every effort・Endeavor・Devote oneself・Dedication" }
        ]
      },
      {
        id: 39,
        wordRuby: "見{み}込{こ}む",
        meaning: "To expect・To anticipate",
        info: "You can use it when making a prediction about an expected amount.\nexpect something based on an estimate, calculation, potential, or prospects\nIt can also mean to see potential / have high hopes for someone. This usage has the nuance of: 'I think you're capable of this'",
        components: [
          { kanji: "見る", meaning: "Look" },
          { kanji: "込む", meaning: "Into" }
        ],
        example: "ご<多忙>の[*260*ところ]<恐縮>ですが、今回の<新規>事業には十分な<需要>が{見込まれる}ため、ぜひ<前向き>にご<検討>いただきたいです。",
        exampleMeaning: "I <apologize for troubling> you while you're <busy>, but since sufficient <demand> is {expected} for this <new> business, I would greatly appreciate your <favorable> <consideration>.",
        extraVocabulary: [
          { wordRuby: "多{た}忙{ぼう}", meaning: "Extremely busy・Occupied with a lot of work・Hectic" },
          { wordRuby: "恐{きょう}縮{しゅく}", meaning: "I feel indebted・I’m very grateful ( in a formal/polite way )・Feeling grateful・Feeling sorry for troubling someone" },
          { wordRuby: "新{しん}規{き}", meaning: "New・Fresh・new/existing for the first time" },
          { wordRuby: "需{じゅ}要{よう}", meaning: "Demand (in economics) (Usually refers to how much people want or need a product/service, especially economically.)" },
          { wordRuby: "前{まえ}向{む}き", meaning: "Positive・Forward-looking・Optimistic・Proactive" },
          { wordRuby: "検{けん}討{とう}する", meaning: "To consider・To discuss・To examine" }
        ]
      },
      {
        id: 40,
        wordRuby: "見{み}抜{ぬ}く",
        meaning: "To see through・To see the truth behind something",
        info: "The idea is looking beyond the surface and correctly recognizing what is really going on.\n嘘を見抜く -> see through a lie / detect a lie",
        components: [
          { kanji: "見る", meaning: "Look" },
          { kanji: "抜く", meaning: "Pull out" }
        ],
        example: "もっと早く彼の言葉の裏にある<意図>を{見抜いて}いれば、あのような<事態>にはならなかった[*253*ものを]。",
        exampleMeaning: "[If only] I had {seen through} the <intention> behind his words earlier, things wouldn't have turned out that way.",
        extraVocabulary: [
          { wordRuby: "意{い}図{と}", meaning: "Intention・Purpose・Motive・what someone intends to do" },
          { wordRuby: "事{じ}態{たい}", meaning: "Situation・State of affairs・Circumstances・Situation that has developed" }
        ]
      },
      {
        id: 41,
        wordRuby: "見{み}出{だ}す",
        meaning: "To discover・To find out・To identify・To recognize",
        info: "The core idea is finding something that wasn't obvious before, especially something valuable, important, or meaningful.\n価値を見出す -> find/recognize value",
        components: [
          { kanji: "見る", meaning: "Look" },
          { kanji: "出す", meaning: "To bring out" }
        ],
        example: "同じデータでも、<分析し>[*267*ようによっては]、これまで{見出せなかった}<新たな><傾向>が<明らか>になる可能性がある。",
        exampleMeaning: "Even with the same data, [depending on how] it is <analyzed>, <new> <trends> that could not previously be {identified} may become <apparent>.",
        extraVocabulary: [
          { wordRuby: "分{ぶん}析{せき}する", meaning: "To analyze・To examine・To study" },
          { wordRuby: "新{あら}たな", meaning: "New・Fresh・Novel・Newly emerging" },
          { wordRuby: "傾{けい}向{こう}", meaning: "Trend・Tendency・Inclination・Orientation" },
          { wordRuby: "明{あき}らか", meaning: "Clear・Obvious・Evident・Apparent" }
        ]
      },
      {
        id: 42,
        wordRuby: "見{み}かける",
        meaning: "To see (something) occasionally・To happen to see",
        info: "The nuance is that you happen to see or notice someone/something, rather than deliberately looking for it.\n駅でよく彼を見かける -> I often see him at the station",
        components: [
          { kanji: "見る", meaning: "Look" },
          { kanji: "かける", meaning: "To hang" }
        ],
        example: "<高級><住宅街>[*232*かと思いきや]、<路地裏>では<身なり>の<貧しい>人々を<ちょくちょく>{見かける}。",
        exampleMeaning: "[Just when I thought] it was a <luxury residential area>, I <frequently> {happen to see} <poorly> <dressed> people in the <back alleys>.",
        extraVocabulary: [
          { wordRuby: "高{こう}級{きゅう}", meaning: "Luxury・Upscale" },
          { wordRuby: "住{じゅう}宅{たく}街{がい}", meaning: "Residential area・Neighborhood" },
          { wordRuby: "路{ろ}地{じ}裏{うら}", meaning: "Back alley・Back street・Alleyway・Side street behind the main street" },
          { wordRuby: "身{み}なり", meaning: "Appearance・Dress・Attire・How someone is dressed" },
          { wordRuby: "貧{まず}しい", meaning: "Poor・Needy・Impoverished" },
          { wordRuby: "ちょくちょく", meaning: "Frequently・Fairly often・Occasionally・Now and then" }
        ]
      },
      {
        id: 43,
        wordRuby: "見{み}せかけ",
        meaning: "Superficial・appearance・outward show・pretense・facade",
        info: "The idea is something that looks a certain way on the surface, but isn't necessarily that way in reality.\n見せかけだけの親切 -> kindness that's only for show",
        components: [
          { kanji: "見せる", meaning: "To show" },
          { kanji: "かける", meaning: "To hang" }
        ],
        example: "表面的な{見せかけ}の親切などではなく、長年の<信頼>関係[*225*ならではの]温かい<思いやり>を感じた。",
        exampleMeaning: "Rather than {superficial}, for-show kindness, I felt a warm <thoughtfulness> [unique to] a long-standing relationship of <trust>.",
        extraVocabulary: [
          { wordRuby: "信{しん}頼{らい}", meaning: "Trust・Reliance・Confidence" },
          { wordRuby: "思{おも}いやり", meaning: "Consideration for others・Thoughtfulness・Compassion" }
        ]
      },
      {
        id: 44,
        wordRuby: "見{み}慣{な}れる",
        meaning: "Familiar・To become accustomed to seeing something・To become familiar with the sight of something",
        info: "Careful: 見慣れる specifically concerns what you see, not what you hear or experience in general. It means that you've seen something often enough that it no longer surprises or shocks you.",
        components: [
          { kanji: "見る", meaning: "Look" },
          { kanji: "慣れる", meaning: "Accustomed" }
        ],
        example: "この街に引っ越して来て[*249*からというもの]、毎朝の通勤ラッシュで<混雑>する駅の<光景>もすっかり{見慣れた}。",
        exampleMeaning: "[Ever since] I moved to this city, I have {become} completely {accustomed} to the <sight> of the station <crowded> during the morning rush hour.",
        extraVocabulary: [
          { wordRuby: "混{こん}雑{ざつ}", meaning: "Crowded・Congested・Busy・Jammed" },
          { wordRuby: "光{こう}景{けい}", meaning: "Scene・View・Sight・A scene one witnesses" }
        ]
      },
      {
        id: 45,
        wordRuby: "見{み}合{あ}わせる",
        meaning: "Postpone・Suspend・To Look at each other",
        info: "It has two important meanings, depending on context.\nPostpone・suspend (often temporarily): extremely common in news, announcements, and formal Japanese\n計画を見合わせる -> Postpone/suspend the plan\nLook at each other: It can also literally mean look at each other\n彼らは顔を見合わせて笑った -> They looked at each other and laughed",
        components: [
          { kanji: "見る", meaning: "Look" },
          { kanji: "合わせる", meaning: "Match" }
        ],
        example: "<悪天候>のため本日の<野外>イベントの<開催>は{見合わせたく}<存じます>ので、<何卒>ご<容赦>[*182*お願えます]でしょうか。",
        exampleMeaning: "Due to <bad weather>, we intend to postpone today's <outdoor> event, so [we kindly ask for] your understanding.",
        extraVocabulary: [
          { wordRuby: "悪{あく}天{てん}候{こう}", meaning: "Bad weather・Inclement weather・Adverse weather conditions" },
          { wordRuby: "野{や}外{がい}", meaning: "Outdoors・Outside・Open air" },
          { wordRuby: "開{かい}催{さい}", meaning: "Holding (an event)・Hosting・Conducting an event" },
          { wordRuby: "存{ぞん}じる", meaning: "To know・To be aware of・To think (humble/formal version of 思います)" },
          { wordRuby: "何{なに}卒{とぞ}", meaning: "Please・Kindly・By all means・I sincerely ask that you (This is a very formal/polite expression used when making a request or asking for understanding/cooperation.)" },
          { wordRuby: "容{よう}赦{しゃ}", meaning: "Forgiveness・Pardon・Understanding・Tolerance・Mercy" }
        ]
      },
    ],
  },
  '行' : {
    meaning: "Go・Conduct",
    words: [
      {
        id: 46,
        wordRuby: "行{おこな}い",
        meaning: "Action・Conduct・behavior・deed",
        components: [
          { kanji: "行", meaning: "Go" }
        ],
        example: "どんなに<立派な><抱負>を語ろうとも、日々の{行い}が<伴わ>なけれ[*257*ばそれまでだ]。",
        exampleMeaning: "No matter how <noble> an <ambition> you talk about, [if] your daily {conduct} doesn't <match> it, all your words are [in vain].",
        extraVocabulary: [
          { wordRuby: "立{りっ}派{ぱ}な", meaning: "Splendid・Fine・Excellent・Admirable・Respectable" },
          { wordRuby: "抱{ほう}負{ふ}", meaning: "Ambition・Aspiration・Resolution・Goals" },
          { wordRuby: "伴{ともな}う", meaning: "To accompany・To go hand in hand with・To be accompanied by" }
        ]
      },
      {
        id: 47,
        wordRuby: "行{い・ゆ}き交{か}う",
        meaning: "To come and go・Pass each other・Move back and forth",
        info: "The image is of people, vehicles, etc. moving in opposite or different directions and passing one another.",
        components: [
          { kanji: "行く", meaning: "Go" },
          { kanji: "交う", meaning: "Mingle" }
        ],
        example: "お祭りの夜に街を{行き交う}人々の楽しそうな表情の素晴らしさ[*242*といったったらなかった]。",
        exampleMeaning: "[Words cannot describe how] wonderful the joyful expressions of the people {coming and going} through the streets on the night of the festival were."
      },
      {
        id: 48,
        wordRuby: "行{い・ゆ}き届{とど}く",
        meaning: "To reach every part・To be thorough・To be attentive・To be well taken care of",
        info: "The core idea is that something reaches all the places or details that need attention.",
        components: [
          { kanji: "行く", meaning: "Go" },
          { kanji: "届く", meaning: "Reach" }
        ],
        example: "<一流>ホテルのように<隅々>まで{行き届いた}サービスとまではいか[*271*ないまでも]、心のこもった<接客>であることは言う[*270*までもない]。",
        exampleMeaning: "[Although it may not reach] the level of {flawless} service {delivered} to <every detail> like a <top-tier hotel>, [it goes] [without saying] that their <customer service> is heartfelt.",
        extraVocabulary: [
          { wordRuby: "一{いち}流{りゅう}", meaning: "First-class・Top-notch・High-quality・Excellent" },
          { wordRuby: "隅{すみ}々{ずみ}", meaning: "Every corner・Every nook and cranny・All parts・All areas・Every detail" },
          { wordRuby: "接{せっ}客{きゃく}", meaning: "Customer service・Reception・Serving customers" }
        ]
      },
      {
        id: 49,
        wordRuby: "行{い・ゆ}き着{つ}く",
        meaning: "To arrive at・To reach・Eventually end up at",
        info: "The core idea is going somewhere and finally reaching the destination, often after some process or journey. It emphasizes finally reaching somewhere, often after difficulty or a long journey.\nThe diffence between 行き着く and 着く is that 行き着く emphasizes the process of getting there, while 着く is more neutral and simply means to arrive.",
        components: [
          { kanji: "行く", meaning: "Go" },
          { kanji: "着く", meaning: "Arrive" }
        ],
        example: "どんなに厳しい<批判>を<浴び>[*229*ようが]、諦めずに<試行錯誤>を<重ねた>者だけが<真の>成功に{行き着く}のだ。",
        exampleMeaning: "[No matter how] harsh the <criticism> one <receives>, only those who <persevere> through <trial and error> without giving up will ultimately {arrive at} <true> success.",
        extraVocabulary: [
          { wordRuby: "批{ひ}判{はん}", meaning: "Criticism・Judgment・Commentary" },
          { wordRuby: "浴{あ}びる", meaning: "To bathe in (light, water, etc.)・To be showered with (praise, criticism, etc.)・To be exposed to" },
          { wordRuby: "～を浴{あ}びる", meaning: "To receive a large amount of something directed at you, especially criticism, praise, attention, etc." },
          { wordRuby: "試{し}行{こう}錯{さく}誤{ご}", meaning: "Trial and error・Experimentation・Trying different approaches" },
          { wordRuby: "重{かさ}ねる", meaning: "To pile up・To repeat・To do something repeatedly" },
          { wordRuby: "真{しん}の～", meaning: "True・Genuine・Real" }
        ]
      },
      {
        id: 50,
        wordRuby: "通{つう}行{こう}",
        meaning: "Passage・Traffic・Passing through",
        info: "It is mainly used for people or vehicles moving along or through a road, street, passage, etc.",
        connector: "する",
        components: [
          { kanji: "通", meaning: "Through" },
          { kanji: "行", meaning: "Go" }
        ],
        example: "この<狭い>山道は<夜間>に{通行}を<誤って>足を<踏み外した>[*256*が最後]、<谷底>へ<落下>の危険を<免れない>。",
        exampleMeaning: "On this <narrow> mountain path, [once you] <misstep> while {passing through} <at night>, [you] cannot <escape> the danger of <falling into> the <bottom of the ravine>.",
        extraVocabulary: [
          { wordRuby: "狭{せま}い", meaning: "Narrow・Cramped・Tight" },
          { wordRuby: "夜{や}間{かん}", meaning: "Nighttime・During the night・Night hours" },
          { wordRuby: "誤{あやま}る", meaning: "To make a mistake・To err・To be mistaken" },
          { wordRuby: "踏{ふ}み外{はず}す", meaning: "To misstep・To slip・To lose one's footing" },
          { wordRuby: "谷{たに}底{ぞこ}", meaning: "Bottom of a valley・Valley floor・Bottom of a ravine" },
          { wordRuby: "落{らっ}下{か}", meaning: "Fall・Drop・Plunge・Descent" },
          { wordRuby: "免{まぬか}れる", meaning: "To escape・To avoid・To be spared from something undesirable" }
        ]
      },
      {
        id: 51,
        wordRuby: "並{へい}行{こう}",
        meaning: "To run parallel to・To proceed side by side・at the same time",
        connector: "する",
        info: "This is extremely common in business and everyday Japanese.\n二つのプロジェクトを並行して進める -> Work on two projects in parallel\nCommon expression: ～と並行して\n仕事と並行して日本語を勉強している -> I'm studying Japanese while working / alongside my work",
        components: [
          { kanji: "並", meaning: "Row" },
          { kanji: "行", meaning: "Go" }
        ],
        example: "<新規>事業の<立ち上げ>と<既存>業務の<改善>を{並行して>進める中で、新人も彼[*273*なりに]全力を<尽くして>いる。",
        exampleMeaning: "While pushing forward with <launch> of the <new> business {in parallel with} <improving> <existing> tasks, the newcomer is <doing his absolute best> [in his own way].",
        extraVocabulary: [
          { wordRuby: "新{しん}規{き}", meaning: "New・Newly created・new/existing for the first time" },
          { wordRuby: "立{た}ち上{あ}げ", meaning: "Launch (of a business, project, etc.)・Start up・Set up" },
          { wordRuby: "既{き}存{そん}", meaning: "Existing・Already established・Pre-existing" },
          { wordRuby: "改{かい}善{ぜん}", meaning: "Improvement・Betterment・Enhancement" },
          { wordRuby: "尽{つ}くす", meaning: "To devote oneself to・To do one's best・To exhaust (one's energy, resources, etc.)" }
        ]
      },
      {
        id: 52,
        wordRuby: "修{しゅ}行{ぎょう}",
        meaning: "Training・Practice・Discipline",
        connector: "する",
        info: "The idea is devoting yourself to long-term training and discipline to master a skill or improve yourself.\n料理の修行をする -> Train/study to become a skilled cook",
        components: [
          { kanji: "修", meaning: "Repair" },
          { kanji: "行", meaning: "Go" }
        ],
        example: "厳しい<職人>の世界では、長年の{修行}を<経なけ>れば<一人前>の作業[*237*はおろか]、<道具>に<触る>こと[*66*すら]許されない。",
        exampleMeaning: "In the strict world of <craftsman>ship, unless you <undergo> years of {training}, you [aren't even] allowed to <touch> the <tools>, [let alone] perform <standard> work on your own.",
        extraVocabulary: [
          { wordRuby: "職{しょく}人{にん}", meaning: "Craftsman・Skilled worker" },
          { wordRuby: "経{へ}る", meaning: "To pass through・To go through・To undergo" },
          { wordRuby: "一{いち}人{にん}前{まえ}", meaning: "Fully qualified・Fully competent・A proper professional・Independent adult・Mature" },
          { wordRuby: "道{どう}具{ぐ}", meaning: "Tool・Equipment・Utensil" },
          { wordRuby: "触{さわ}る", meaning: "To touch・To feel・To handle" }
        ]
      },
      {
        id: 53,
        wordRuby: "流{は}行{や}る",
        meaning: "To be popular・To be in fashion",
        components: [
          { kanji: "流", meaning: "Flow" },
          { kanji: "行", meaning: "Go" }
        ],
        example: "最近若者の間でこのファッションが{流行って}いる[*276*っていうか]、単にレトロブームの<再燃>に過ぎない気がする。",
        exampleMeaning: "This fashion is {trending} among young people these days, [or rather, I mean], I feel like it's simply a <resurgence> of the retro boom.",
        extraVocabulary: [
          { wordRuby: "再{さい}燃{ねん}", meaning: "Reignition・Resurgence・Rekindling・Reawakening" }
        ]
      },
      {
        id: 54,
        wordRuby: "奥{おく}行{ゆ}き",
        meaning: "Depth・Distance from front to back",
        info: "It describes how deep something is, especially a room, building, box, piece of furniture, etc.",
        components: [
          { kanji: "奥", meaning: "Depth" },
          { kanji: "行", meaning: "Go" }
        ],
        example: "この<古典>小説が持つ<味わい深い>{奥行き}は、<到底>一言では表現する[*247*にたえず]、<改めて>その<魅力>を<熱弁>[*275*させていただく]。",
        exampleMeaning: "The <deep nuances> and {depth} held by this <classic> novel [are far too] profound [to] express in a single word, so [allow me to] <passionately present> its <appeal> <once again>.",
        extraVocabulary: [
          { wordRuby: "古{こ}典{てん}", meaning: "Classic (literature, music, etc.)" },
          { wordRuby: "味{あじ}わい深{ぶか}い", meaning: "Deeply enjoyable・Rich in character・Profound・Deeply moving・Full of charm" },
          { wordRuby: "到{とう}底{てい}～ない", meaning: "Absolutely cannot・By no means can・Simply impossible" },
          { wordRuby: "改{あらた}めて", meaning: "Once again・Anew・Freshly・From the beginning" },
          { wordRuby: "魅{み}力{りょく}", meaning: "Charm・Attraction・Fascination" },
          { wordRuby: "熱{ねつ}弁{べん}する", meaning: "To speak passionately・To give a passionate speech" }
        ]
      },
    ],
  }
};