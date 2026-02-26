// Articles Data
const articles = [
  {
    id: 1,
    title: '2026年、日本企業が進めるAI活用の最前線',
    category: 'テクノロジー',
    description: '日本の大手企業から中小企業まで、AIを活用した業務効率化、カスタマーサービスの自動化、そして新しいビジネスモデルの創出が急速に進んでいます。',
    image: 'https://images.unsplash.com/photo-1623310073887-c40ff625e3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBBSSUyMHRlY2hub2xvZ3klMjBqYXBhbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTk1OTE1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    author: '田中健一',
    date: '2026年2月20日',
    featured: true
  },
  {
    id: 2,
    title: '働き方はどう変わる？リモート時代の新しい常識',
    category: 'キャリア',
    description: 'ハイブリッドワークが定着した日本で、オフィスの再設計、生産性向上ツール、そして新しい働き方の文化が生まれています。',
    image: 'https://images.unsplash.com/photo-1759752393882-1b6587a7c887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjB3b3JrJTIwbGFwdG9wJTIwbW9kZXJuJTIwb2ZmaWNlfGVufDF8fHx8MTc3MTk1OTE1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    author: '佐藤美咲',
    date: '2026年2月19日',
    featured: true
  },
  {
    id: 3,
    title: 'スマートホームが変える日本の暮らし',
    category: 'ライフスタイル',
    description: 'IoT技術の進化により、セキュリティシステム、エネルギー管理、快適性の向上が日本の住宅で実現しています。',
    image: 'https://images.unsplash.com/photo-1753039495488-434a2fe53e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTk1OTE1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    author: '鈴木太郎',
    date: '2026年2月18日',
    featured: true
  },
  {
    id: 4,
    title: 'Z世代が生み出す新しい消費トレンド',
    category: '文化',
    description: 'ミニマリズム、サブスクリプション文化、セカンドハンド経済が日本の若い世代から広がっています。',
    image: 'https://images.unsplash.com/photo-1629988173560-03bb8d42b9ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGdlbmVyYXRpb24lMjBzaG9wcGluZyUyMG1pbmltYWx8ZW58MXx8fHwxNzcxOTU5MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: '山田花子',
    date: '2026年2月17日'
  },
  {
    id: 5,
    title: '地方創生×テクノロジー：地方都市の挑戦',
    category: 'ビジネス',
    description: '日本の地方都市がテクノロジーを活用してコミュニティを再活性化し、新しい可能性を切り開いています。',
    image: 'https://images.unsplash.com/photo-1720887236907-2e46d23f6b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHJ1cmFsJTIwY291bnRyeXNpZGUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTk1OTE1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    author: '中村誠',
    date: '2026年2月16日'
  },
  {
    id: 6,
    title: 'サステナブルな暮らしを実現する最新アイデア',
    category: 'サステナビリティ',
    description: 'エコハウス、リユースファッション、ゼロウェイストライフスタイルが日本で注目を集めています。',
    image: 'https://images.unsplash.com/photo-1755606159507-a98b20d06578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGxpZmVzdHlsZSUyMGVjbyUyMGZyaWVuZGx5fGVufDF8fHx8MTc3MTkxNjc0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    author: '小林恵美',
    date: '2026年2月15日'
  },
  {
    id: 7,
    title: '日本のスタートアップが注目される理由',
    category: 'ビジネス',
    description: '東京、大阪、福岡のイノベーションハブから生まれる、新しいビジネスモデルとテクノロジー。',
    image: 'https://images.unsplash.com/photo-1758873272115-a88d317d035e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwYnVzaW5lc3MlMjBtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxOTU5MTU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: '高橋大輔',
    date: '2026年2月14日'
  },
  {
    id: 8,
    title: 'キャリア転換期に考えるべき5つの視点',
    category: 'キャリア',
    description: 'スキル開発、デジタルアップスキリング、そしてキャリアプランニングの重要性について。',
    image: 'https://images.unsplash.com/photo-1762341123685-098ecb6c3ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBkZXZlbG9wbWVudCUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc3MTk1OTE1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    author: '伊藤優子',
    date: '2026年2月13日'
  },
  {
    id: 9,
    title: '日本におけるデジタルヘルスの進化',
    category: 'テクノロジー',
    description: 'ヘルスアプリ、ウェアラブルテクノロジーが日本の健康管理を変えています。',
    image: 'https://images.unsplash.com/photo-1760088348194-a5ac70a8aa9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB0ZWNobm9sb2d5JTIwd2VhcmFibGUlMjBmaXRuZXNzfGVufDF8fHx8MTc3MTk1OTE1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    author: '渡辺健二',
    date: '2026年2月12日'
  },
  {
    id: 10,
    title: '2026年の教育トレンドとオンライン学習の未来',
    category: '教育',
    description: '日本におけるEdTechの成長と、新しい学習スタイルの可能性。',
    image: 'https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxOTE1MTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: '森田直樹',
    date: '2026年2月11日'
  },
  {
    id: 11,
    title: '日本の都市生活とウェルビーイング',
    category: 'ライフスタイル',
    description: 'メンタルバランスとワークライフハーモニーを実現するための新しいアプローチ。',
    image: 'https://images.unsplash.com/photo-1612723356063-6be3aaa92956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbGlmZSUyMHdlbGxiZWluZyUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzcxOTU5MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: '加藤愛',
    date: '2026年2月10日'
  },
  {
    id: 12,
    title: '伝統文化とデジタルの融合が生む新しい価値',
    category: '文化',
    description: '着物のリデザイン、デジタルアート、アニメインスパイアードなブランディングの世界。',
    image: 'https://images.unsplash.com/photo-1728200696344-641f004642f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGN1bHR1cmUlMjBkaWdpdGFsJTIwYXJ0JTIwbW9kZXJufGVufDF8fHx8MTc3MTk1OTE2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    author: '岡田麻衣',
    date: '2026年2月9日'
  }
];

const categories = [
  'テクノロジー',
  'ビジネス',
  'キャリア',
  'ライフスタイル',
  '文化',
  'サステナビリティ',
  '教育'
];
