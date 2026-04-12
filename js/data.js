/**
 * 统一数据源
 * wishesData 来自 data/raw/wishes.xlsx 与 images/wishes/
 * galleryData 来自 images/gallery/ 中浏览器兼容的图片
 */

const wishesData = [
    {
        "id": 1,
        "name": "Lillian Guo",
        "photo": "images/wishes/Lillian Guo.jpg",
        "blessing": "【Lillian Guo】\n\nHi Amanda, 非常荣幸能跟你共事。还记得你刚进公司时，用青涩的脸庞在三楼会议室落落大方地跟大家做自我介绍，自信开朗像个小太阳，给我留下了深刻的印象。当时我们工作虽没有交集，但是也时常见到你活跃在各个会场，年会主持，annual award主持等等，让人过目不忘。机缘巧合下你成了我的LM。做为你的下属，我觉得你是一个很真诚很直接的领导，会一针见血地提出我工作中的问题，并且附赠你的解答和建议，从来不来虚的。私下里你也是一个热情爱分享的人，大家会一起聊天南地北家长里短，炫美食晒娃，我们小team的氛围永远和睦友爱，暖意洋洋。虽不舍你离开，但更为你开启新旅程感到开心。Amanda寓意着“值得被爱”，愿你跟你的名字一样，永远被温柔以待，因为你值得所有的美好与偏爱。",
        "dailyQuote": "你值得这世间所有的美好与偏爱。"
    },
    {
        "id": 2,
        "name": "Jackie Sun",
        "photo": "images/wishes/Jackie Sun.jpg",
        "blessing": "【Jackie Sun】\n\n亲爱的阿曼达，值得信任的老板，永远可靠的伙伴：\n\n如果要列举你的优点，真的可以写很长一页，但我最喜欢、也最常挂在心里的那个词，还是——可靠的伙伴。从最初相识，到我成为 CTI 的一份子，无论我的角色、职位如何变化，你始终是那个让我安心的存在：老板、mentor、也是并肩作战的姐妹 :)\n\n当然，“可靠”只是你众多优点里最不张扬的一个。\n工作中最松弛的时刻，是在和你聊育儿、拉家常、互相种草山姆，认真讨论吃喝玩乐，一边畅想周末、一边又默默加快手头的活。所谓的 work‑life balance，真的就在这些平凡又真实的工作日里悄悄发生。\n\n原谅我再碎碎念一下（你看，我又开始 piece by piece 地分享了哈哈）,但也正是这一路和你真正 piece by piece 并肩工作的经历，让我们team每个小伙伴都悄悄完成了成长。\n\n最后需要引经据典地收尾一下：\n飞蓬各自远，且尽手中杯。\n\n——来自酒量不咋地、但情绪很到位的 Jackie 🍷",
        "dailyQuote": "最好的 Work-life balance，是既能并肩作战，也能一起虚度时光。"
    },
    {
        "id": 3,
        "name": "Eve Yang",
        "photo": "images/wishes/Eve Yang.jpg",
        "blessing": "【Eve Yang】\n\n亲爱的Amanda，\n\n这些天借由准备farewell礼物的机会，收集了许多过去的照片。有一些照片很古早了，照片里的你看上去可爱青涩，有一些照片刚刚发生在昨天，你看上去瘦了许多，也成熟了许多，但充满感染力的笑容和多年前的样子别无二致。在整理这些照片的过程中，我好像陪伴你重新走过在联合利华这九年的旅程，因此也更加不舍。\n\n与你相处的日子让我理解了什么是好老板，好同事，好的工作与生活伙伴，我想很多同事都与我有共鸣，从大家都想来CTI轮岗，听说你要离开的消息，都忍不住落泪，就可见一斑。与你有关的美好回忆有很多，记起有一次1v1，似乎是你成为我们LM的第一年，你问我，现在你用邮件给我comment report的方式是否合适，对于我们的交流方式，我是否有其他的建议和想法。看似平淡的一段记忆，却给我留下了深刻的印象，因为我想起在联合利华的第一岗，我的LM很少允许我有自己的意见，我们的相处方式都是她说什么，我做什么。与你相处的每一天都能让我感受到被尊重与平等地对待，我知道我们怎样对待他人，就会被他人怎样对待，所以此刻打包在联合利华的这段经历，你收获到的所有爱与尊重与友情，都是因为你值得，我也毫不怀疑在未来的道路中，你会比这收获更多。\n\n当我在那个周末的上午听说你要离开的消息，我既有惊诧与不舍，更多的是祝福与期待。我相信这只是暂时的告别，有缘必会再相见。期盼下一次见面时，再看到你明媚的笑容，和我们述说你的精彩生活。\n\nFrom Eve",
        "dailyQuote": "你如何对待世界，世界便如何回馈你。"
    },
    {
        "id": 4,
        "name": "Freya Fan",
        "photo": "images/wishes/Freya Fan.jpg",
        "blessing": "【Freya Fan】\n\n我亲爱的最爱的阿曼达，\n\n即使我在你之前离开，但得知你要离开UL的消息依然非常的震惊，或许是你一直都太靠谱太沉稳，是我们所有人的依靠和大后方，所以当得知你要离开时，我第一反应就是：啊！娘家的天！塌了！\n\n当然了震惊过后真的很替你开心！我相信聪明睿智成熟优秀人见人爱如你，一定会为自己做最好最正确的选择，也相信无论去往何处你都能一如既往发光发亮成为最璀璨耀眼的那一个！\n\n最近见证了太多的变化，让我由衷感慨命运的奇妙，好像冥冥之中真的会牵引大家去往各自的轨道，并在新的轨道上成长为更好更优秀的人。我真诚得祝福你去往新的天地，见花开见世界见自己！\n\nPS: 你去哪儿我都会黏糊糊得贴过来，蹭饭逛街聊天，你烦我我也得粘着你！嘿嘿~\n\n\n你永远的小棉袄\nFreya",
        "dailyQuote": "去往新的轨道，去见花开，见世界，见那个最璀璨的自己。"
    },
    {
        "id": 5,
        "name": "Yadi Huo",
        "photo": "images/wishes/Yadi Huo.jpg",
        "blessing": "【Yadi Huo】\n\n在我才加入利华，还没见过真人不知道你是谁的时候，就听说了Amanda是大家见过最优秀的MT，要多和你沟通学习。机缘巧合，我的第一个项目就和你有深度的合作，一下子就被你超敏捷的思维和超强的亲和力征服了，不自觉地想和你亲近，当时就暗下决心一定要努力找机会加入你的team。但是没想到我梦想成真以后就得知你要离职了。虽然很不舍很遗憾，但是也为你开心和期待你新的旅程。祝我们都在数不尽的明天，径行直遂，青云万里！（希望私下还是可以多多约饭哈哈！）",
        "dailyQuote": "在数不尽的明天里，径行直遂，青云万里。"
    },
    {
        "id": 6,
        "name": "Marina Bian",
        "photo": "images/wishes/Marina Bian.jpg",
        "blessing": "【Marina Bian】\n\n从边唱边跳的CTICA之歌”倔强“开始的Scalp Claims之旅，到完美融入CTIC大家庭；我们拥有太多共同体验的温暖时刻~~~\n只愿这一段旅程，成为妳未来的美好回忆与面对更多挑战的底气~~~\n祝未来一切都好，前程锦绣！常回家看看！",
        "dailyQuote": "过往的温暖时刻，终将成为你面对未来挑战时最坚韧的底气。"
    },
    {
        "id": 7,
        "name": "Cathy Liang",
        "photo": "images/wishes/Cathy Liang.jpg",
        "blessing": "【Cathy Liang】\n\nDear Amanda,\n\nIt’s always a lucky thing to meet a person who makes work smarter, warmer, and fun — and you’ve done all three effortlessly 🌟\n\nThank you for the inspiration and positive energy you bring every day. Wishing you an exciting next chapter filled with growth, joy, and great adventures ahead 🚀✨",
        "dailyQuote": "让工作变得更聪明、更温暖、更有趣，是你送给这个世界最棒的礼物。"
    },
    {
        "id": 8,
        "name": "Ding shushu",
        "photo": "images/wishes/Ding shushu.jpg",
        "blessing": "【Ding shushu】\n\n带队干练不废话，\n回家哄娃也有法，\n此去前程照样燃，\n——走起！",
        "dailyQuote": "干练中藏着智慧，温柔里带着锋芒，生活与前程同样热辣滚烫。"
    },
    {
        "id": 9,
        "name": "Zoe Yue",
        "photo": "images/wishes/Zoe Yue.jpg",
        "blessing": "【Zoe Yue】\n\nhi 阿曼达老师！\n时间过的太快了，因为我回想到我和你的第一次接触应该是在4年半以前，那会我刚入职没多久，你怀孕月份很大了，在当时还不是固定工位的时候我们坐在了一起，你给我分享你的超大蓝莓！我当时有点紧张因为我刚从民企过来，在高压环境下呆太久了没有遇到过很多主动释放善意的人，所以我很记得这份善意！\n后来就是我也当妈妈了，（所以时间真的过的太快了）我有在关注你的微信公众号，我感觉你们家真的特别会教导小朋友！家庭氛围太好拉！真是非常爽朗的东北家庭！我有在悄悄记下很多可以和小朋友一起玩的游戏，以后也会一直向你学习！\n你身上值得学习的优点太多了，相信不论在哪里，你都能闪闪发光！\n祝你前路坦荡，万事顺遂❤\n\nZoe Yue",
        "dailyQuote": "今天，全家一起爽朗地哈哈大笑~"
    },
    {
        "id": 10,
        "name": "Belle Qin",
        "photo": "images/wishes/Belle Qin.jpg",
        "blessing": "【Belle Qin】\n\nHi 亲爱的Amanda，\n\n很高兴和你成为同事~很不舍，和你共事的时间并不久，但很幸运，未来的时间还会很长！\n相信你未来一定会前程似锦！愿你永远在收获更美的风景和属于你的大女主故事！\n\nBelle.",
        "dailyQuote": "属于你的大女主故事，未来还有很长。"
    },
    {
        "id": 11,
        "name": "Hilary Chen",
        "photo": "images/wishes/Hilary Chen.jpg",
        "blessing": "【Hilary Chen】\n\n写下这些话的时候，真的没想到我们会前后脚一起毕业！ 从 MT 后辈，到短暂在你 team 里共事，到同桌两年多，这些经历现在回想起来，反而格外珍贵。 有些你可能只是随口一说的话，我却一直记在心里，也慢慢变成了自己做事的一部分。 祝你接下来开启更精彩的新篇章，步步向前，步步灿烂！",
        "dailyQuote": "所谓传承，便是我身上已带着你的光，而我们即将奔向各自的灿烂。"
    },
    {
        "id": 12,
        "name": "Eric Han",
        "photo": "images/wishes/Eric Han.jpg",
        "blessing": "【Eric Han】\n\nHappy graduation, Amanda, you have done great things in Unilever and made a lot of friends, I hope you keep smiling and remain fearless on the next chapter, stay in touch.",
        "dailyQuote": "最好的毕业作品，是那些带不走的成就，和一直都在的朋友。"
    },
    {
        "id": 13,
        "name": "Echo Pi",
        "photo": "images/wishes/Echo Pi.jpeg",
        "blessing": "【Echo Pi】\n\n2017年2月-2026年4月，共同的好时光，有幸见证你的成长。你是最最优秀的消费者研究专家，自带幽默基因带来好氛围的好朋友，勇敢直言authentic的小钢炮，forward integration的卷王, 专业真诚有勇气！祝你新工作顺顺利利，开开心心，多升职多加薪！",
        "dailyQuote": "用专业与勇气，去撞开未来的大门。"
    },
    {
        "id": 14,
        "name": "Le Ying-Yi",
        "photo": "images/wishes/Le Ying-Yi.jpg",
        "blessing": "【Le Ying-Yi】\n\n人生就是一趟列车，有上车就有人下车，不是每个人都会一直在车上，只要你还在往前开，就会遇到新的风景。你若盛开，蝴蝶自来。",
        "dailyQuote": "人生列车不断前行，只要你在盛开，清风与蝴蝶自会如约而至。"
    },
    {
        "id": 15,
        "name": "Frankie Mo",
        "photo": "images/wishes/Frankie Mo.jpg",
        "blessing": "【Frankie Mo】\n\nAmanda！！！大惊！！！到最后我成了那个被留下的人？！开玩笑咧。祝你在新的道路上越走越好，开心快乐！别的我也不说废话，我回国的时候单约！",
        "dailyQuote": "老友之间没有废话，所有的挂念都藏在重逢的那顿火锅里。"
    },
    {
        "id": 16,
        "name": "Lanny Li",
        "photo": "images/wishes/Lanny Li.jpg",
        "blessing": "【Lanny Li】\n\n亲爱的Amanda同学，你怎么就抛弃我们了呢！虽然只有两年多的时间，但你是我合作过最好的CTI partner! 喜欢你的直爽，认真，诚恳，和专业。还有就是非常合作的态度！在公司里能遇到志同道合的同事，本来就不是容易的事情！希望大家友谊长存！I wish we could have worked longer and I will miss you! 希望你一切顺利呀！以后我们还要在上海长聚， 有机会再来坡，随时找我！Keep in touch and all the best for your new adventure! ",
        "dailyQuote": "万水千山总是情，志同道合的人终会重逢。"
    },
    {
        "id": 17,
        "name": "Paul Huang",
        "photo": "images/wishes/Paul Huang.jpg",
        "blessing": "【Paul Huang】\n\nAmanda是我们最负责最专业也最可靠的好伙伴，和你的合作一直非常愉快，并且学到了许多许多。你永远是CI大家庭无可替代的担当！祝未来光明灿烂！",
        "dailyQuote": "专业是抵御变迁的铠甲，可靠是永不褪色的勋章。"
    },
    {
        "id": 18,
        "name": "Howson Huang",
        "photo": "images/wishes/Howson Huang.jpg",
        "blessing": "【Howson Huang】\n\n虽然已经Move到其他team了，但还是很想念之前清扬的朋友们...没想到Amanda也要走了..每次见到Amanda都是元气满满的样子，完全0妈感，非常热情友善，工作看起来也是干净利索地样子! 希望Amanda以后一切顺利，家庭幸福，继续开心热情地生活~",
        "dailyQuote": "所谓元气，便是在看清生活的琐碎后，依旧能热烈地奔赴。"
    },
    {
        "id": 19,
        "name": "Yaya She",
        "photo": "images/wishes/Yaya She.jpg",
        "blessing": "【Yaya She】\n\n祝福Amanda之后也永远走花路！开心工作开心生活！❤",
        "dailyQuote": "这一刻就要快乐，因为这一刻即是人生。"
    },
    {
        "id": 20,
        "name": "Fannie Li",
        "photo": "images/wishes/Fannie Li.jpg",
        "blessing": "【Fannie Li】\n\n亲爱的Amanda~~\n一转眼都和你在hair共事好几年啦，我们大insight team也因为你的撮合聚了好几次哈哈！以前的CTI老师都是稳重温和型的，你应该是我遇到过非常少见的profile非常energetic的CTI leader了~~ 力士的香，多芬的post wash，nexxus的claim，还有整个hair生意背后的鸡零狗碎，都有和你太多有共鸣的时刻！很遗憾不能再一起并肩作战啦... 但是能去到更好的地方特别为你高兴！一定会顺顺利利哒！江湖不大，以后一定还有机会再相遇：）Best wishes!! 我们保持联系!!",
        "dailyQuote": "这一站的终点，是下一站更美风景的起点。"
    },
    {
        "id": 21,
        "name": "Liu Qinqin",
        "photo": "images/wishes/Liu Qinqin.jpg",
        "blessing": "【Liu Qinqin】\n\n祝我们阿曼达在consumer insight的滋养下越过越好，勤奋努力和热情真诚是你身上最打动人的部分，也会是通向未来成功的坚实阶梯！",
        "dailyQuote": "在这个喧嚣的世界，你身上那份最打动人的纯粹，就是你最强大的武器。"
    },
    {
        "id": 22,
        "name": "Clare Jiang",
        "photo": "images/wishes/Clare Jiang.jpg",
        "blessing": "【Clare Jiang】\n\nDearest Amanda,\nI felt really happy to work with you in Unilever.\nAppreciate your expertise & faithful to the right things. I beliver you will have a brigter future. \nWishing you new adventures filled with Joy, chase your dreams fearlessly. ",
        "dailyQuote": "坚持做正确的事，时间终会奖赏你一个更明亮的未来。"
    },
    {
        "id": 23,
        "name": "Judy Gu",
        "photo": "images/wishes/Judy Gu.jpg",
        "blessing": "【Judy Gu】\n\n亲爱的Amanda,\n山水一程，有幸并肩。虽然不舍，但更为你高兴。\n愿你在新的战场，依然保持飒爽，继续闪闪发光。\n常联系，后会有期！",
        "dailyQuote": "山水一程，有幸并肩，你将在新的战场闪闪发光。"
    },
    {
        "id": 24,
        "name": "Jeffery Liu",
        "photo": "images/wishes/Jeffery Liu.jpg",
        "blessing": "【Jeffery Liu】\n\nHi Amanda，很开心能和你做同事，曾经的并肩作战令我印象深刻。然而聚散终有时，虽然总有不舍，更祝你新工作涨薪不加班，新同事好处不内卷，仍然天天开开心心。去乘风破浪吧，相信你所行之处必是坦途！保持联系，分享你的快乐:)",
        "dailyQuote": "涨薪不加班，同事不内卷，乘风破浪皆是坦途。"
    },
    {
        "id": 25,
        "name": "Matt Seal",
        "photo": "images/wishes/Matt Seal.jpg",
        "blessing": "【Matt Seal】\n\nAmanda, sad to hear you are leaving :( . I still have fond memories of our time together on Courage, full of tests and testing! As well as your visit to Indonesia for counsumer deep-dive. \nI truly wish you all the best for whatever adventure you have planned next.   ",
        "dailyQuote": "那些共同经历的挑战与探索，终将化作新冒险里最坚实的底气。"
    },
    {
        "id": 26,
        "name": "Telisiah Utami Putri",
        "photo": "images/wishes/Telisiah Utami Putri.jpg",
        "blessing": "【Telisiah Utami Putri】\n\nDear Amanda,\n\nWhile it’s difficult to say goodbye, I want to sincerely thank you for the support and guidance you’ve given me throughout our time working together.\n\nI gained my foundational understanding of Clear consumers through the studies you led, and I truly appreciated your openness and willingness to share knowledge. You were always a trusted person to turn to—whether for project discussions, insights, market trends (China & SEA) —and your clarity and generosity made a real difference.\n\nAlthough it’s a sad farewell for me, I’m genuinely happy for you as you move into your next chapter. I have no doubt it will be a meaningful and rewarding journey, contributing positively to both your professional and personal development.\n\nThank you once again for your support and collaboration. You will be greatly missed, and I wish you continued success in everything ahead.\n\nWarm regards,\nTeli",
        "dailyQuote": "分享知识是一种慷慨，而保持清晰与开放，是专业者最高级的温柔。"
    },
    {
        "id": 27,
        "name": "Tina Yusuf",
        "photo": "images/wishes/Tina Yusuf.jpg",
        "blessing": "【Tina Yusuf】\n\nHi Amanda,\n\nThank you very much for your endless support for Clear Indonesia. It's been a great to have a chance to work with you. Wishing you great success as you begin a new chapter in your career. Good luck in your future endeavors!\n\nBest wishes,\nTina ",
        "dailyQuote": "当新的一页翻开，所有的支持与汗水都化作前行的勇气。"
    },
    {
        "id": 28,
        "name": "Lee Murphy",
        "photo": "images/wishes/Lee Murphy.jpg",
        "blessing": "【Lee Murphy】\n\nDear Amanda, \nIt has been great working with you, & sorry to see you leaving Unilever, you will be sorely missed. Best wishes for your future endeavours..",
        "dailyQuote": "离别虽有遗憾，但你留下的印记，会随同行的伙伴一直走下去。"
    },
    {
        "id": 29,
        "name": "Aurelie Labat",
        "photo": "images/wishes/Aurelie Labat.jpg",
        "blessing": "【Aurelie Labat】\n\nIt was a pleasure working with you, wishing you all the best in your new adventures. ",
        "dailyQuote": "所有的相遇都有意义，所有的冒险都值得全力以赴。"
    },
    {
        "id": 30,
        "name": "Thomas Gareth",
        "photo": "images/wishes/Thomas Gareth.jpg",
        "blessing": "【Thomas Gareth】\n\nAmanda,\n\nIt's been great to work work with you on & off over so many years!\nI wish you all the very best in your new role & for the future!\n\nTake care & keep in touch!\nGareth",
        "dailyQuote": "Everything will come up roses."
    },
    {
        "id": 31,
        "name": "June Wu",
        "photo": "images/wishes/June Wu.jpg",
        "blessing": "【June Wu - Ipsos】\n\n得知你要离开的消息有些意外，更多是不舍。这么多年合作下来，一直被你的真诚和热情所打动，也特别感谢你对我们团队的信任、尊重和支持。祝你的新征程顺顺利利、前程大好，期待以后还能常联系、多交流！",
        "dailyQuote": "长久的合作始于信任，而深厚的情谊源于尊重。"
    },
    {
        "id": 32,
        "name": "Leah Xu",
        "photo": "images/wishes/Leah Xu.jpg",
        "blessing": "【Leah Xu - Ipsos】\n\n亲爱的阿曼达~\n你绝对是“打破砂锅问到底”领域的灵魂人物，每次你的十万个为什么都让我们一阵手忙脚乱。可工作之外，你又自带满满的母性光辉，听着你的小段子总让我忍不住疑惑，怎么会有人既能雷厉风行，又能让人心里软乎乎暖烘烘的呢，也太厉害了！（螺旋比心）\n我们在大U的缘分暂告一段落噜，祝愿你在新的旅程里依旧尽情散发温柔与光芒~也超级期待再听到你那句熟悉的：“诶？莉亚，那这又是为什么呢？”",
        "dailyQuote": "保持那份“打破砂锅问到底”的执着，它是灵魂里最珍贵的锋芒。"
    },
    {
        "id": 33,
        "name": "Phoebe Bao",
        "photo": "images/wishes/Phoebe Bao.jpg",
        "blessing": "【Phoebe Bao - HowTo】\n\n恭喜Amanda开启新的征程，感念过往合作中您的专业与信任，如沐春风。谨祝您前路顺遂，诸事圆满，未来可期！",
        "dailyQuote": "The best is yet to come."
    },
    {
        "id": 34,
        "name": "Ma Xiaojiang",
        "photo": "images/wishes/Ma Xiaojiang.jpg",
        "blessing": "【Ma Xiaojiang】\n\n1. 离职了是不是该请喝酒了，之前喝不过现在是不是能再拼一下\n2. 去了下家记得挖我",
        "dailyQuote": "真正的交情，是离开后还能约一场不醉不归的酒，和一句随时待命的信赖。"
    },
    {
        "id": 35,
        "name": "Pu Mingming",
        "photo": "images/wishes/Pu Mingming.jpg",
        "blessing": "【Pu Mingming】\n\n亲爱的Amanda，很不舍与你道别。\n衷心祝愿你在新的征程上一切顺利，继续收获成长与成就。\n也祝你和家人幸福安康，生活中始终笑口常开、充满阳光。\n期待未来有机会再相遇，祝前程似锦！",
        "dailyQuote": "生活里始终笑口常开，前程中必然繁花似锦。"
    },
    {
        "id": 36,
        "name": "Evie Feng",
        "photo": "images/wishes/Evie Feng.jpg",
        "blessing": "【Evie Feng】\n\n有幸和你做过一次室友，很开心。你爽朗的性格，还有工作中始终专业严谨、认真靠谱的态度，都给我留下了特别深刻的印象。\n真心祝愿你未来一切顺利，前程似锦，也希望我们之后常联系，能一直听到你的消息，多多分享你生活和工作里的趣事与精彩。",
        "dailyQuote": "今天，寻找一个与你同频共振的人。"
    },
    {
        "id": 37,
        "name": "Liu jingjing",
        "photo": "images/wishes/Liu jingjing.jpg",
        "blessing": "【Liu jingjing】\n\n祝阿曼达飞黄腾达，前途无量~",
        "dailyQuote": "I communicate with ease and peace."
    },
    {
        "id": 38,
        "name": "Koko Li",
        "photo": "images/wishes/Koko Li.jpg",
        "blessing": "【Koko Li】\n\nDear Amanda，\n\n有幸和优秀的你一路同行过~\n感谢你为我们带来的欢乐和活力，祝你下段旅程一切顺利，前路坦荡，万事顺遂✨\n\nKoko",
        "dailyQuote": "Compassion is my compass."
    },
    {
        "id": 39,
        "name": "Zhang Lan",
        "photo": "images/wishes/Zhang Lan.jpg",
        "blessing": "【Zhang Lan】\n\n亲爱的Amanda，好不舍得你，愿你永远青春活泼，前程似锦！",
        "dailyQuote": "Creativity flows from me. I am a divine creator."
    },
    {
        "id": 40,
        "name": "Sun Ran",
        "photo": "images/wishes/Sun Ran.jpg",
        "blessing": "【Sun Ran】\n\n祝我们活力满满魅力四射的Amanda，未来更加精彩💕",
        "dailyQuote": "I am in sync with the flow of life."
    },
    {
        "id": 41,
        "name": "Avril Ji",
        "photo": "images/wishes/Avril Ji.jpg",
        "blessing": "【Avril Ji】\n\n心中最美丽阳光活力满满的大女主Amanda要去更高更远的地方拼搏啦~干杯！🍻期待再一起约火锅吃哈哈",
        "dailyQuote": "大女主的剧本里，永远写满了阳光、活力与向上的力量。"
    },
    {
        "id": 42,
        "name": "Joseca Alincastre",
        "photo": "images/wishes/Joseca Alincastre.jpg",
        "blessing": "【Joseca Alincastre】\n\nHi Amanda! It’s been so wonderful knowing you! I’m excited for everything ahead for you. Wishing you all the best in your new adventure. Let’s definitely keep in touch - I’d love to hear from you and stay connected on WeChat!\n\nTake care and talk soon!😊",
        "dailyQuote": "最好的告别不是再见，而是带着对方的期待，去开启全新的冒险。"
    },
    {
        "id": 43,
        "name": "Zoe Zhou",
        "photo": "images/wishes/Zoe Zhou.jpg",
        "blessing": "【Zoe Zhou】\n\nDearest Amanda, 非常有幸能在初入职场的时候就能认识像你这样一位大姐姐。直爽，风风火火，工作能力特别强。难以忘记任何一次的相聚，也很舍不得你。但是祝福你，开启新征程。keep in touch.",
        "dailyQuote": "愿你既有大姐姐的温柔，也有风风火火闯荡世界的孤勇。"
    },
    {
        "id": 44,
        "name": "Sherrie Wong",
        "photo": "images/wishes/Sherrie Wong.jpg",
        "blessing": "【Sherrie Wong】\n\nHi Amanda! Am sad to hear that you're leaving but happy for you nonetheless as change is constant and i believe you will be going to greener pastures ;) I absolutely enjoy working together with you and only hope that our paths will cross again in the near future. All the best! Cheers, Sherrie  ",
        "dailyQuote": "变动是成长的常态，而你终将抵达那片属于自己的绿洲。"
    }
];

const galleryData = [
    {
        "id": 1,
        "photo": "images/gallery/062b83f15nb62969a44345c6f4bada90.JPG",
        "title": "062b83f15nb62969a44345c6f4bada90",
        "width": 1440,
        "height": 1080
    },
    {
        "id": 2,
        "photo": "images/gallery/08ffcf237ce7021f5dbcc6318554b47a.JPG",
        "title": "08ffcf237ce7021f5dbcc6318554b47a",
        "width": 1350,
        "height": 1800
    },
    {
        "id": 3,
        "photo": "images/gallery/09f3556211d02685160ee2dab01de32a.JPG",
        "title": "09f3556211d02685160ee2dab01de32a",
        "width": 1012,
        "height": 1800
    },
    {
        "id": 4,
        "photo": "images/gallery/0eb4f311db4ef0083d646a1fdfccc056.jpg",
        "title": "0eb4f311db4ef0083d646a1fdfccc056",
        "width": 1279,
        "height": 2275
    },
    {
        "id": 5,
        "photo": "images/gallery/1092fcb57f492bb31781fcc4e8312517.jpg",
        "title": "1092fcb57f492bb31781fcc4e8312517",
        "width": 1623,
        "height": 1080
    },
    {
        "id": 6,
        "photo": "images/gallery/12025b0d50bdaf0166786261cf7b7fde.jpg",
        "title": "12025b0d50bdaf0166786261cf7b7fde",
        "width": 1279,
        "height": 1140
    },
    {
        "id": 7,
        "photo": "images/gallery/2026-04-03 010044.jpg",
        "title": "2026-04-03 010044",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 8,
        "photo": "images/gallery/2026-04-03 010046.jpg",
        "title": "2026-04-03 010046",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 9,
        "photo": "images/gallery/2026-04-03 010048.jpg",
        "title": "2026-04-03 010048",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 10,
        "photo": "images/gallery/2026-04-03 010055.jpg",
        "title": "2026-04-03 010055",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 11,
        "photo": "images/gallery/2026-04-03 010103.jpg",
        "title": "2026-04-03 010103",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 12,
        "photo": "images/gallery/2026-04-03 010105.jpg",
        "title": "2026-04-03 010105",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 13,
        "photo": "images/gallery/2026-04-03 010108.jpg",
        "title": "2026-04-03 010108",
        "width": 1200,
        "height": 1800
    },
    {
        "id": 14,
        "photo": "images/gallery/2026-04-03 010113.jpg",
        "title": "2026-04-03 010113",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 15,
        "photo": "images/gallery/2026-04-03 010132.jpg",
        "title": "2026-04-03 010132",
        "width": 1800,
        "height": 1012
    },
    {
        "id": 16,
        "photo": "images/gallery/2026-04-03 010135.jpg",
        "title": "2026-04-03 010135",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 17,
        "photo": "images/gallery/2026-04-03 010138.jpg",
        "title": "2026-04-03 010138",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 18,
        "photo": "images/gallery/2026-04-03 010141.jpg",
        "title": "2026-04-03 010141",
        "width": 1080,
        "height": 1379
    },
    {
        "id": 19,
        "photo": "images/gallery/2026-04-03 010146.jpg",
        "title": "2026-04-03 010146",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 20,
        "photo": "images/gallery/2026-04-03 010148.jpg",
        "title": "2026-04-03 010148",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 21,
        "photo": "images/gallery/2026-04-03 010153.jpg",
        "title": "2026-04-03 010153",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 22,
        "photo": "images/gallery/2026-04-03 010158.jpg",
        "title": "2026-04-03 010158",
        "width": 1347,
        "height": 1800
    },
    {
        "id": 23,
        "photo": "images/gallery/2026-04-03 010435.jpg",
        "title": "2026-04-03 010435",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 24,
        "photo": "images/gallery/2026-04-03 010438.jpg",
        "title": "2026-04-03 010438",
        "width": 1800,
        "height": 1349
    },
    {
        "id": 25,
        "photo": "images/gallery/2026-04-03 010440.jpg",
        "title": "2026-04-03 010440",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 26,
        "photo": "images/gallery/2026-04-03 010442.jpg",
        "title": "2026-04-03 010442",
        "width": 1600,
        "height": 1066
    },
    {
        "id": 27,
        "photo": "images/gallery/2026-04-03 010445.jpg",
        "title": "2026-04-03 010445",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 28,
        "photo": "images/gallery/2026-04-03 010447.jpg",
        "title": "2026-04-03 010447",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 29,
        "photo": "images/gallery/2026-04-03 010459.jpg",
        "title": "2026-04-03 010459",
        "width": 1080,
        "height": 1437
    },
    {
        "id": 30,
        "photo": "images/gallery/2026-04-03 010502.jpg",
        "title": "2026-04-03 010502",
        "width": 800,
        "height": 1207
    },
    {
        "id": 31,
        "photo": "images/gallery/2026-04-03 010507.jpg",
        "title": "2026-04-03 010507",
        "width": 1800,
        "height": 1463
    },
    {
        "id": 32,
        "photo": "images/gallery/2026-04-03 010510.jpg",
        "title": "2026-04-03 010510",
        "width": 1800,
        "height": 1351
    },
    {
        "id": 33,
        "photo": "images/gallery/2026-04-03 010520.jpg",
        "title": "2026-04-03 010520",
        "width": 1200,
        "height": 1800
    },
    {
        "id": 34,
        "photo": "images/gallery/2026-04-03 010522.jpg",
        "title": "2026-04-03 010522",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 35,
        "photo": "images/gallery/2026-04-03 010525.jpg",
        "title": "2026-04-03 010525",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 36,
        "photo": "images/gallery/2026-04-03 010528.jpg",
        "title": "2026-04-03 010528",
        "width": 1200,
        "height": 1800
    },
    {
        "id": 37,
        "photo": "images/gallery/2026-04-03 014028.jpg",
        "title": "2026-04-03 014028",
        "width": 1350,
        "height": 1800
    },
    {
        "id": 38,
        "photo": "images/gallery/2026-04-03 014049.jpg",
        "title": "2026-04-03 014049",
        "width": 1436,
        "height": 1080
    },
    {
        "id": 39,
        "photo": "images/gallery/2026-04-03 014143.jpg",
        "title": "2026-04-03 014143",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 40,
        "photo": "images/gallery/2026-04-03 014226.jpg",
        "title": "2026-04-03 014226",
        "width": 1800,
        "height": 1012
    },
    {
        "id": 41,
        "photo": "images/gallery/2026-04-03 014241.jpg",
        "title": "2026-04-03 014241",
        "width": 1200,
        "height": 1600
    },
    {
        "id": 42,
        "photo": "images/gallery/2026-04-03 014333.jpg",
        "title": "2026-04-03 014333",
        "width": 1338,
        "height": 1800
    },
    {
        "id": 43,
        "photo": "images/gallery/2026-04-03 014503.jpg",
        "title": "2026-04-03 014503",
        "width": 1280,
        "height": 960
    },
    {
        "id": 44,
        "photo": "images/gallery/2026-04-03 014515.jpg",
        "title": "2026-04-03 014515",
        "width": 720,
        "height": 1280
    },
    {
        "id": 45,
        "photo": "images/gallery/2026-04-03 014525.jpg",
        "title": "2026-04-03 014525",
        "width": 1600,
        "height": 1066
    },
    {
        "id": 46,
        "photo": "images/gallery/2026-04-03 014541.jpg",
        "title": "2026-04-03 014541",
        "width": 1600,
        "height": 1067
    },
    {
        "id": 47,
        "photo": "images/gallery/2026-04-09 212307.jpg",
        "title": "2026-04-09 212307",
        "width": 1706,
        "height": 1279
    },
    {
        "id": 48,
        "photo": "images/gallery/2026-04-09 232215.jpg",
        "title": "2026-04-09 232215",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 49,
        "photo": "images/gallery/2026-04-10 112447.jpg",
        "title": "2026-04-10 112447",
        "width": 1280,
        "height": 1707
    },
    {
        "id": 50,
        "photo": "images/gallery/2026-04-10 112511.jpg",
        "title": "2026-04-10 112511",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 51,
        "photo": "images/gallery/2026-04-10 112530.jpg",
        "title": "2026-04-10 112530",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 52,
        "photo": "images/gallery/2026-04-10 112537.jpg",
        "title": "2026-04-10 112537",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 53,
        "photo": "images/gallery/2026-04-10 112543.jpg",
        "title": "2026-04-10 112543",
        "width": 1200,
        "height": 1800
    },
    {
        "id": 54,
        "photo": "images/gallery/2026-04-10 112553.jpg",
        "title": "2026-04-10 112553",
        "width": 1279,
        "height": 1706
    },
    {
        "id": 55,
        "photo": "images/gallery/2026-04-10 112559.jpg",
        "title": "2026-04-10 112559",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 56,
        "photo": "images/gallery/2026-04-10 112618.jpg",
        "title": "2026-04-10 112618",
        "width": 1224,
        "height": 1800
    },
    {
        "id": 57,
        "photo": "images/gallery/2026-04-10 112624.jpg",
        "title": "2026-04-10 112624",
        "width": 1279,
        "height": 1706
    },
    {
        "id": 58,
        "photo": "images/gallery/2026-04-10 112717.jpg",
        "title": "2026-04-10 112717",
        "width": 1706,
        "height": 1279
    },
    {
        "id": 59,
        "photo": "images/gallery/2026-04-10 112724.jpg",
        "title": "2026-04-10 112724",
        "width": 1706,
        "height": 1279
    },
    {
        "id": 60,
        "photo": "images/gallery/2026-04-10 112752.jpg",
        "title": "2026-04-10 112752",
        "width": 1706,
        "height": 1279
    },
    {
        "id": 61,
        "photo": "images/gallery/2026-04-10 142938.jpg",
        "title": "2026-04-10 142938",
        "width": 651,
        "height": 1024
    },
    {
        "id": 62,
        "photo": "images/gallery/2026-04-10 142943.jpg",
        "title": "2026-04-10 142943",
        "width": 800,
        "height": 600
    },
    {
        "id": 63,
        "photo": "images/gallery/2026-04-10 142947.jpg",
        "title": "2026-04-10 142947",
        "width": 800,
        "height": 600
    },
    {
        "id": 64,
        "photo": "images/gallery/2026-04-10 142951.jpg",
        "title": "2026-04-10 142951",
        "width": 800,
        "height": 600
    },
    {
        "id": 65,
        "photo": "images/gallery/2026-04-10 142956.jpg",
        "title": "2026-04-10 142956",
        "width": 800,
        "height": 600
    },
    {
        "id": 66,
        "photo": "images/gallery/2026-04-10 143000.jpg",
        "title": "2026-04-10 143000",
        "width": 800,
        "height": 600
    },
    {
        "id": 67,
        "photo": "images/gallery/2026-04-10 143004.jpg",
        "title": "2026-04-10 143004",
        "width": 800,
        "height": 368
    },
    {
        "id": 68,
        "photo": "images/gallery/289d833a7ee6e520e96a5d6acdecd8e7.jpg",
        "title": "289d833a7ee6e520e96a5d6acdecd8e7",
        "width": 1800,
        "height": 986
    },
    {
        "id": 69,
        "photo": "images/gallery/2f869291962328f24792a06a9ea7b159.JPG",
        "title": "2f869291962328f24792a06a9ea7b159",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 70,
        "photo": "images/gallery/31CE20BD-C61C-4C2A-9D72-79F999721E33.JPG",
        "title": "31CE20BD-C61C-4C2A-9D72-79F999721E33",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 71,
        "photo": "images/gallery/32cb8be6987ef141d52c1cba558a9229.JPG",
        "title": "32cb8be6987ef141d52c1cba558a9229",
        "width": 1800,
        "height": 1012
    },
    {
        "id": 72,
        "photo": "images/gallery/37bb54a2bcf45dad9abe35c8fcb9df30.jpg",
        "title": "37bb54a2bcf45dad9abe35c8fcb9df30",
        "width": 2275,
        "height": 1279
    },
    {
        "id": 73,
        "photo": "images/gallery/447c6af28092b5fc3e944ee7fec61612.JPG",
        "title": "447c6af28092b5fc3e944ee7fec61612",
        "width": 1800,
        "height": 1219
    },
    {
        "id": 74,
        "photo": "images/gallery/53fb47d4e91141558037d3b722428445.jpg",
        "title": "53fb47d4e91141558037d3b722428445",
        "width": 1280,
        "height": 1920
    },
    {
        "id": 75,
        "photo": "images/gallery/5a63ac306l1c634bc68130b080746bf2.JPG",
        "title": "5a63ac306l1c634bc68130b080746bf2",
        "width": 1440,
        "height": 1080
    },
    {
        "id": 76,
        "photo": "images/gallery/5d1f1e434627cf3aaefca0a34b07be88.jpg",
        "title": "5d1f1e434627cf3aaefca0a34b07be88",
        "width": 1623,
        "height": 1080
    },
    {
        "id": 77,
        "photo": "images/gallery/5e1e765eer6f3088e145653000f5180e.JPG",
        "title": "5e1e765eer6f3088e145653000f5180e",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 78,
        "photo": "images/gallery/61deac84b233be2696466b460a652087.jpg",
        "title": "61deac84b233be2696466b460a652087",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 79,
        "photo": "images/gallery/6abc14a6c7bb675bf6e686a82542fed5.JPG",
        "title": "6abc14a6c7bb675bf6e686a82542fed5",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 80,
        "photo": "images/gallery/6d567526a6009a334565e78922e06e89.JPG",
        "title": "6d567526a6009a334565e78922e06e89",
        "width": 1706,
        "height": 1215
    },
    {
        "id": 81,
        "photo": "images/gallery/729fd0d881d1cc6fc4608abcc1a584f3.jpg",
        "title": "729fd0d881d1cc6fc4608abcc1a584f3",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 82,
        "photo": "images/gallery/783ff4c7aaf75c845f11f3734f37e49f.JPG",
        "title": "783ff4c7aaf75c845f11f3734f37e49f",
        "width": 1707,
        "height": 1280
    },
    {
        "id": 83,
        "photo": "images/gallery/79b295f8c1fa99df04b94a9c714e404e.JPG",
        "title": "79b295f8c1fa99df04b94a9c714e404e",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 84,
        "photo": "images/gallery/7dfa3eaad0ccf42083cb650a0e4dcdaa.JPG",
        "title": "7dfa3eaad0ccf42083cb650a0e4dcdaa",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 85,
        "photo": "images/gallery/8A4CEA41-912B-4454-A5E6-99449363BC9B.JPG",
        "title": "8A4CEA41-912B-4454-A5E6-99449363BC9B",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 86,
        "photo": "images/gallery/8b0eaea4ea2fab07ce3dcae86a4890fc.jpg",
        "title": "8b0eaea4ea2fab07ce3dcae86a4890fc",
        "width": 1279,
        "height": 2275
    },
    {
        "id": 87,
        "photo": "images/gallery/8cad6715aca0e8089a33f674b9ad35cd.JPG",
        "title": "8cad6715aca0e8089a33f674b9ad35cd",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 88,
        "photo": "images/gallery/8d229dd8fq4e8b581b7455c4602a1298.JPG",
        "title": "8d229dd8fq4e8b581b7455c4602a1298",
        "width": 1080,
        "height": 1440
    },
    {
        "id": 89,
        "photo": "images/gallery/8e518467805a7f72831654f4da8a4bd9.JPG",
        "title": "8e518467805a7f72831654f4da8a4bd9",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 90,
        "photo": "images/gallery/90ed6326a3ec9f40ea9fea53d5be61ee.JPG",
        "title": "90ed6326a3ec9f40ea9fea53d5be61ee",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 91,
        "photo": "images/gallery/98FA992B-B602-4A1D-8E8F-ADBC708CA30B.JPG",
        "title": "98FA992B-B602-4A1D-8E8F-ADBC708CA30B",
        "width": 1440,
        "height": 960
    },
    {
        "id": 92,
        "photo": "images/gallery/9d8430cb1v6c9cd2fbc4e22d48ec5bc8.JPG",
        "title": "9d8430cb1v6c9cd2fbc4e22d48ec5bc8",
        "width": 1706,
        "height": 1215
    },
    {
        "id": 93,
        "photo": "images/gallery/a077e175cb81658580f57fc42bbd720f.JPG",
        "title": "a077e175cb81658580f57fc42bbd720f",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 94,
        "photo": "images/gallery/a9ff9e7c63815a308405df8eb9fd3804.JPG",
        "title": "a9ff9e7c63815a308405df8eb9fd3804",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 95,
        "photo": "images/gallery/b001b355d5583b36cca7e746528c797b.jpg",
        "title": "b001b355d5583b36cca7e746528c797b",
        "width": 960,
        "height": 1708
    },
    {
        "id": 96,
        "photo": "images/gallery/b7554172c5e060413d06281ccd0c7f.JPG",
        "title": "b7554172c5e060413d06281ccd0c7f",
        "width": 1440,
        "height": 1080
    },
    {
        "id": 97,
        "photo": "images/gallery/b8ca34eef9c1087e59413974ea9985c1.jpg",
        "title": "b8ca34eef9c1087e59413974ea9985c1",
        "width": 1279,
        "height": 1706
    },
    {
        "id": 98,
        "photo": "images/gallery/bada595aava66edae8586f2dfe05ee98.JPG",
        "title": "bada595aava66edae8586f2dfe05ee98",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 99,
        "photo": "images/gallery/c2685c6cd6cb812914d798227c1645af.JPG",
        "title": "c2685c6cd6cb812914d798227c1645af",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 100,
        "photo": "images/gallery/c9b6224a122e510e81a6ef54fb25918b.jpg",
        "title": "c9b6224a122e510e81a6ef54fb25918b",
        "width": 2275,
        "height": 1279
    },
    {
        "id": 101,
        "photo": "images/gallery/cf0c134dbmf54d4c678f8e4db8cdb856.JPG",
        "title": "cf0c134dbmf54d4c678f8e4db8cdb856",
        "width": 1800,
        "height": 1233
    },
    {
        "id": 102,
        "photo": "images/gallery/d359b10261171932dd9d466bc27e0eb4.JPG",
        "title": "d359b10261171932dd9d466bc27e0eb4",
        "width": 1012,
        "height": 1800
    },
    {
        "id": 103,
        "photo": "images/gallery/dafc1d2c901601e66a2bdd8fc3b5f91b.JPG",
        "title": "dafc1d2c901601e66a2bdd8fc3b5f91b",
        "width": 1279,
        "height": 1706
    },
    {
        "id": 104,
        "photo": "images/gallery/db5fd268eu5e7187a26beedbb37d6660.JPG",
        "title": "db5fd268eu5e7187a26beedbb37d6660",
        "width": 1080,
        "height": 1440
    },
    {
        "id": 105,
        "photo": "images/gallery/E3077DC8-10FD-4F00-ADCE-38AB355475FE.JPG",
        "title": "E3077DC8-10FD-4F00-ADCE-38AB355475FE",
        "width": 1440,
        "height": 1440
    },
    {
        "id": 106,
        "photo": "images/gallery/E38DADBC-0C1E-4341-9EDA-F6A80EBE8E64.JPG",
        "title": "E38DADBC-0C1E-4341-9EDA-F6A80EBE8E64",
        "width": 1350,
        "height": 1800
    },
    {
        "id": 107,
        "photo": "images/gallery/e54f1489c368945f8d112e843ab70fc1.JPG",
        "title": "e54f1489c368945f8d112e843ab70fc1",
        "width": 1225,
        "height": 1800
    },
    {
        "id": 108,
        "photo": "images/gallery/e6d059e187b2adcbac56142c8425f739.JPG",
        "title": "e6d059e187b2adcbac56142c8425f739",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 109,
        "photo": "images/gallery/e9cb28246c8810d946c831f73bdf09ca.jpg",
        "title": "e9cb28246c8810d946c831f73bdf09ca",
        "width": 2275,
        "height": 1279
    },
    {
        "id": 110,
        "photo": "images/gallery/f1356aa376f8138b2db9e620b815aa79.jpg",
        "title": "f1356aa376f8138b2db9e620b815aa79",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 111,
        "photo": "images/gallery/fb4bba51ac460e1d4b684b5f25585c83.JPG",
        "title": "fb4bba51ac460e1d4b684b5f25585c83",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 112,
        "photo": "images/gallery/fdfa788e3b61a56dbc1ce912a943bc3e.jpg",
        "title": "fdfa788e3b61a56dbc1ce912a943bc3e",
        "width": 1279,
        "height": 1191
    },
    {
        "id": 113,
        "photo": "images/gallery/IMG_1112.JPG",
        "title": "IMG_1112",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 114,
        "photo": "images/gallery/IMG_1113.JPG",
        "title": "IMG_1113",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 115,
        "photo": "images/gallery/IMG_1366.JPG",
        "title": "IMG_1366",
        "width": 1800,
        "height": 1012
    },
    {
        "id": 116,
        "photo": "images/gallery/IMG_1860.JPG",
        "title": "IMG_1860",
        "width": 1458,
        "height": 1080
    },
    {
        "id": 117,
        "photo": "images/gallery/IMG_2017.JPG",
        "title": "IMG_2017",
        "width": 1078,
        "height": 1616
    },
    {
        "id": 118,
        "photo": "images/gallery/IMG_20241107_183655.jpg",
        "title": "IMG_20241107_183655",
        "width": 800,
        "height": 600
    },
    {
        "id": 119,
        "photo": "images/gallery/IMG_4330.JPG",
        "title": "IMG_4330",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 120,
        "photo": "images/gallery/IMG_4336.JPG",
        "title": "IMG_4336",
        "width": 1800,
        "height": 1012
    },
    {
        "id": 121,
        "photo": "images/gallery/IMG_4337.JPG",
        "title": "IMG_4337",
        "width": 1800,
        "height": 1259
    },
    {
        "id": 122,
        "photo": "images/gallery/IMG_4338.JPG",
        "title": "IMG_4338",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 123,
        "photo": "images/gallery/IMG_4378.JPG",
        "title": "IMG_4378",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 124,
        "photo": "images/gallery/IMG_4407.JPG",
        "title": "IMG_4407",
        "width": 1800,
        "height": 1012
    },
    {
        "id": 125,
        "photo": "images/gallery/IMG_4408.JPG",
        "title": "IMG_4408",
        "width": 1438,
        "height": 1080
    },
    {
        "id": 126,
        "photo": "images/gallery/IMG_4410.JPG",
        "title": "IMG_4410",
        "width": 1440,
        "height": 1080
    },
    {
        "id": 127,
        "photo": "images/gallery/IMG_4413.JPG",
        "title": "IMG_4413",
        "width": 1620,
        "height": 1080
    },
    {
        "id": 128,
        "photo": "images/gallery/IMG_4415.JPG",
        "title": "IMG_4415",
        "width": 1080,
        "height": 1440
    },
    {
        "id": 129,
        "photo": "images/gallery/IMG_4416.JPG",
        "title": "IMG_4416",
        "width": 1620,
        "height": 1080
    },
    {
        "id": 130,
        "photo": "images/gallery/IMG_4419.JPG",
        "title": "IMG_4419",
        "width": 1800,
        "height": 1012
    },
    {
        "id": 131,
        "photo": "images/gallery/IMG_4420.JPG",
        "title": "IMG_4420",
        "width": 1080,
        "height": 1080
    },
    {
        "id": 132,
        "photo": "images/gallery/IMG_4421.JPG",
        "title": "IMG_4421",
        "width": 1440,
        "height": 1080
    },
    {
        "id": 133,
        "photo": "images/gallery/IMG_4422.JPG",
        "title": "IMG_4422",
        "width": 1440,
        "height": 1080
    },
    {
        "id": 134,
        "photo": "images/gallery/IMG_4423.JPG",
        "title": "IMG_4423",
        "width": 1800,
        "height": 1012
    },
    {
        "id": 135,
        "photo": "images/gallery/IMG_4424.JPG",
        "title": "IMG_4424",
        "width": 1440,
        "height": 1080
    },
    {
        "id": 136,
        "photo": "images/gallery/IMG_4425.JPG",
        "title": "IMG_4425",
        "width": 1338,
        "height": 1080
    },
    {
        "id": 137,
        "photo": "images/gallery/IMG_4426.JPG",
        "title": "IMG_4426",
        "width": 1440,
        "height": 1080
    },
    {
        "id": 138,
        "photo": "images/gallery/IMG_4429.JPG",
        "title": "IMG_4429",
        "width": 1312,
        "height": 1080
    },
    {
        "id": 139,
        "photo": "images/gallery/IMG_4430.JPG",
        "title": "IMG_4430",
        "width": 1350,
        "height": 1800
    },
    {
        "id": 140,
        "photo": "images/gallery/IMG_4431.JPG",
        "title": "IMG_4431",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 141,
        "photo": "images/gallery/IMG_4432.JPG",
        "title": "IMG_4432",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 142,
        "photo": "images/gallery/IMG_4434.JPG",
        "title": "IMG_4434",
        "width": 1800,
        "height": 1012
    },
    {
        "id": 143,
        "photo": "images/gallery/IMG_4493.JPG",
        "title": "IMG_4493",
        "width": 1620,
        "height": 1080
    },
    {
        "id": 144,
        "photo": "images/gallery/IMG_4976.JPG",
        "title": "IMG_4976",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 145,
        "photo": "images/gallery/IMG_4977.JPG",
        "title": "IMG_4977",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 146,
        "photo": "images/gallery/IMG_5014.JPG",
        "title": "IMG_5014",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 147,
        "photo": "images/gallery/IMG_5651.JPG",
        "title": "IMG_5651",
        "width": 1800,
        "height": 1201
    },
    {
        "id": 148,
        "photo": "images/gallery/IMG_5657.JPG",
        "title": "IMG_5657",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 149,
        "photo": "images/gallery/IMG_5732.JPG",
        "title": "IMG_5732",
        "width": 1623,
        "height": 1080
    },
    {
        "id": 150,
        "photo": "images/gallery/IMG_5876.JPG",
        "title": "IMG_5876",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 151,
        "photo": "images/gallery/IMG_7378.JPG",
        "title": "IMG_7378",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 152,
        "photo": "images/gallery/IMG_8312.JPG",
        "title": "IMG_8312",
        "width": 1800,
        "height": 1012
    },
    {
        "id": 153,
        "photo": "images/gallery/IMG_8314.JPG",
        "title": "IMG_8314",
        "width": 1800,
        "height": 1350
    },
    {
        "id": 154,
        "photo": "images/gallery/IMG_8315.JPG",
        "title": "IMG_8315",
        "width": 1800,
        "height": 1012
    },
    {
        "id": 155,
        "photo": "images/gallery/IMG_8316.JPG",
        "title": "IMG_8316",
        "width": 1800,
        "height": 1200
    },
    {
        "id": 156,
        "photo": "images/gallery/IMG_8317.JPG",
        "title": "IMG_8317",
        "width": 1800,
        "height": 1350
    }
];

if (typeof module !== 'undefined') {
    module.exports = { wishesData, galleryData };
}
