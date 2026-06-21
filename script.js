// ==========================================
// 資料庫區域 (由 User 提供的最新精選名單)
// ==========================================

// 1. 下午茶/甜點/咖啡 (對應按鈕：點心)
const afternoonTeaShops = [
  // 區域 A：信義商圈
  { name: "The Ukai Taipei", dish: "季節下午茶套餐", notes: "微風南山 46F / 需預約 / 高空景觀" },
  { name: "Simple Kaffa Sola 興波咖啡", dish: "皺皺半熟蜂蜜蛋糕", notes: "台北101 88F / 世界冠軍咖啡" },
  { name: "Lady M 遠百信義店", dish: "原味千層蛋糕", notes: "遠百信義A13 1F / 紐約神級甜點" },
  { name: "Smith & Hsu 統一時代店", dish: "英式酥餅 (Scone)", notes: "統一時代 6F / 台北最好吃司康之一" },
  { name: "Fika Fika Cafe A13", dish: "黑糖拿鐵", notes: "遠百信義A13 B3 / 北歐烘焙冠軍" },
  { name: "Ten Ren's Cha for Tea 喫茶趣", dish: "913茶王", notes: "信義店 / 經典台式茶飲" },
  { name: "Woosa屋莎洋食鬆餅屋", dish: "雲の鬆餅", notes: "新光三越A8 B1 / 口感如雲朵般軟綿" },
  { name: "Engolili 英格莉莉", dish: "英式豹紋厚鬆餅", notes: "微風南山 2F / 網美拍照熱點" },
  { name: "PAUL 信義A9店", dish: "草莓千層派", notes: "新光三越A9 2F / 法國百年品牌" },
  { name: "Gelato Pique Cafe", dish: "法式奶油可麗餅", notes: "新光三越A8 2F / 艾許奶油製作" },
  { name: "LeTAO 小樽洋菓子舖", dish: "雙層乳酪蛋糕", notes: "松山文創園區旁 / 北海道直送" },
  { name: "Come True Coffee 成真咖啡", dish: "舒芙蕾厚鬆餅", notes: "誠品松菸店 / 冠軍咖啡師團隊" },
  { name: "108 Matcha Saro", dish: "抹茶大判燒", notes: "誠品信義/松菸周邊 / 來自北海道旭川" },
  { name: "Häagen-Dazs 信義威秀店", dish: "冰淇淋火鍋", notes: "信義威秀 / 經典聚會場所" },
  { name: "Auntie Stella 詩特莉", dish: "手工餅乾下午茶", notes: "新光三越A4 B2 / 鄉村風" },
  { name: "Miacucina 信義店", dish: "胡蘿蔔蛋糕", notes: "新光三越A11 2F / 甜點意外非常強" },
  { name: "Dreamers Coffee Roasters", dish: "肉桂捲", notes: "新光三越A8 1F / 逛街歇腳好去處" },
  { name: "TAMED FOX XINYI", dish: "巴西莓果碗", notes: "信義A13 B1 / 健康系早午餐" },
  { name: "Caffé Florian 福里安花神", dish: "威尼斯咖啡", notes: "新光三越A9 2F / 義大利最古老咖啡廳" },
  { name: "Chochoco Chocolate", dish: "生巧克力", notes: "新光三越A8 / 台中知名巧克力" },
  // 區域 B：永吉路30巷
  { name: "SOMA 特調飲品", dish: "原味茶歐蕾", notes: "永吉路30巷 / 台灣奶茶節冠軍" },
  { name: "約翰紅茶公司", dish: "煮濃那堤", notes: "永吉路30巷 / 紅茶專賣" },
  { name: "龜記茗品", dish: "紅柚翡翠", notes: "永吉路30巷 / 果肉滿滿" },
  { name: "五桐號 WooTea", dish: "五桐茶凍奶茶", notes: "永吉路30巷 / 手工杏仁凍" },
  { name: "麻古茶坊", dish: "芝芝葡萄果粒", notes: "永吉路30巷 / 奶蓋水果茶霸主" },
  { name: "KEBUKE 可不可熟成紅茶", dish: "白玉歐蕾", notes: "永吉路30巷 / 英倫復古風" },
  { name: "珍煮丹", dish: "黑糖珍珠鮮奶", notes: "永吉路30巷 / 黑糖珍珠入味" },
  { name: "迷客夏 Milkshop", dish: "大甲芋頭鮮奶", notes: "永吉路30巷 / 自家牧場鮮奶" },
  { name: "萬波島嶼紅茶", dish: "紅豆粉粿鮮奶", notes: "永吉路30巷 / 懷舊風格" },
  { name: "一沐日", dish: "逮丸奶茶 (草仔粿)", notes: "永吉路30巷 / 獨創草仔粿珍珠" },
  { name: "得正 OOLONG TEA", dish: "檸檬春烏龍", notes: "永吉路30巷 / 烏龍茶專賣" },
  { name: "Nap Tea 再睡5分鐘", dish: "棉被午茉綠", notes: "近松高路 / YouTuber滴妹品牌" },
  { name: "Arthere Café 上樓看看", dish: "手沖咖啡", notes: "永吉路30巷內 / 工業風" },
  { name: "CoCo都可", dish: "百香雙響炮", notes: "永吉路30巷 / 經典老牌" },
  { name: "50嵐", dish: "1號 (四季春+珍波椰)", notes: "永吉路30巷 / 國民飲料" },
  { name: "清心福全", dish: "烏龍綠茶", notes: "永吉路30巷 / 隱藏喝法多" },
  { name: "鶴茶樓", dish: "鶴頂紅茶", notes: "永吉路30巷 / 復古港式風格" },
  { name: "抿茶 min cha", dish: "法芝奶蓋", notes: "永吉路30巷 / 焦糖系奶蓋" },
  // 區域 C：虎林街 / 永春站
  { name: "嘉義紅心粉圓", dish: "雪片黑糖冰", notes: "林口街 / 獨特片狀黑糖冰" },
  { name: "大方冰品", dish: "綜合刨冰", notes: "信義路六段 / 料多實在" },
  { name: "佳德鳳梨酥", dish: "原味鳳梨酥", notes: "南京東路五段 / 台北必買伴手禮" },
  { name: "永春豆花", dish: "傳統豆花", notes: "忠孝東路五段 / 古早味糖水" },
  { name: "Cam Cama 虎林店", dish: "海鹽焦糖拿鐵", notes: "虎林街 / 現烘咖啡豆香氣" },
  { name: "Louisa Coffee 路易莎", dish: "莊園拿鐵", notes: "虎林街 / 平價工作空間" },
  { name: "汝家冰舖", dish: "自製冰淇淋", notes: "虎林街巷弄 / 天然食材製作" },
  { name: "本願豆花店", dish: "黑糖豆花", notes: "信義區 / 文青風格豆花" },
  // 區域 D：市政府周邊
  { name: "Out of office 不在辦公室", dish: "千層蛋糕", notes: "市府捷運站旁 / 地下室超大空間" },
  { name: "We & Me Cafe", dish: "紐約起司蛋糕", notes: "基隆路一段 / 看得到101" },
  { name: "CURISTA COFFEE 奎士咖啡", dish: "精品拿鐵", notes: "市府轉運站對面 / 純白極簡裝潢" },
  { name: "Waku Waku Burger 101店", dish: "焙茶巴斯克", notes: "台北101 / 雖然是漢堡店但甜點極強" }
];

// 2. 正餐/聚餐 (對應按鈕：餐廳)
const diningSpots = [
  // 區域 A：永吉路30巷
  { name: "滇味廚房", dish: "過橋米線", notes: "永吉路30巷 / 湯頭鮮甜" },
  { name: "胡饕米粉湯55年老店", dish: "招牌芋頭米粉湯", notes: "永吉路30巷 / 國宴等級小吃" },
  { name: "武鼎越豐越南麵食館", dish: "越式鮮牛肉河粉", notes: "永吉路30巷 / 老字號排隊名店" },
  { name: "亞米小廚 Yummy Kitchenette", dish: "泰式椒麻雞飯", notes: "永吉路30巷 / 歐式鄉村風" },
  { name: "捲餅達人", dish: "烤鴨捲餅", notes: "永吉路30巷 / 餅皮酥脆" },
  { name: "鴨肉許 (信義店)", dish: "煙燻鴨肉", notes: "永吉路30巷 / 新竹名店分店" },
  { name: "毅壽司", dish: "綜合生魚片丼", notes: "永吉路30巷 / 隱藏版平價日料" },
  { name: "烤師傅港式燒烤", dish: "招牌烤肉飯", notes: "永吉路30巷 / 炭火現烤" },
  // 區域 B：虎林街 / 永春站
  { name: "GYUU NIKU ステーキ專門店", dish: "火山月見丼", notes: "永春站 / 視覺效果佳" },
  { name: "無敵水餃", dish: "搶鍋麵", notes: "虎林街 / 必點蒜頭蛤蠣雞湯" },
  { name: "牛味", dish: "紅燒牛肉麵", notes: "虎林街 / 湯頭濃郁藥膳風" },
  { name: "香廚炒飯專賣店", dish: "紹興炒飯", notes: "虎林街 / 鑊氣十足" },
  { name: "蕨食堂", dish: "炸豬排定食", notes: "虎林街 / 家庭式日料" },
  { name: "小陳牛肉麵", dish: "紅燒牛肉麵", notes: "虎林街 / 大份量肉塊" },
  { name: "施家麻油腰花", dish: "麻油腰花", notes: "松山路 / 老字號進補首選" },
  // 區域 C：信義商圈 - 拉麵日料
  { name: "一幻拉麵", dish: "鮮蝦鹽味拉麵", notes: "信義威秀 / 北海道甜蝦湯頭" },
  { name: "一風堂 台北101店", dish: "白丸元味", notes: "台北101 / 經典博多豚骨" },
  { name: "五之神製作所", dish: "濃厚這海老沾麵", notes: "松菸旁 / 極致蝦味" },
  { name: "麵匡匡拉麵食堂", dish: "招牌豚骨拉麵", notes: "莊敬路 / 台灣風味拉麵" },
  { name: "くら寿司 藏壽司", dish: "炙烤鮭魚壽司", notes: "ATT 4 FUN / 迴轉壽司" },
  { name: "伊禾白湯", dish: "雞白湯拉麵", notes: "光復南路巷弄 / 預約制質感店" },
  { name: "靜岡勝政日式豬排", dish: "腰內豬排", notes: "統一時代 B2 / 豬排酥脆多汁" },
  { name: "大心新泰式麵食", dish: "酸辣海陸麵", notes: "信義威秀 / 贈黑火山芝麻霜淇淋" },
  // 區域 C：信義商圈 - 異國料理
  { name: "帕泰家 Baan Phadthai", dish: "泰式炒河粉", notes: "新光三越A8 / 米其林必比登推薦" },
  { name: "Nara Thai Cuisine", dish: "金錢蝦餅", notes: "統一時代 7F / 泰國最佳餐廳" },
  { name: "饗泰多 Siam More", dish: "月亮蝦餅", notes: "微風松高 3F / 菜色多樣" },
  { name: "新村站著吃烤肉", dish: "橫膈膜", notes: "市府轉運站對面 / 鐵桶烤肉" },
  { name: "北村豆腐家", dish: "海鮮嫩豆腐煲", notes: "統一時代 B2 / 飯後送霜淇淋" },
  { name: "Meat Love 韓國烤肉", dish: "厚切五花肉", notes: "信義路四段 / 專人代烤" },
  { name: "韓川館", dish: "銅盤烤肉", notes: "松菸旁巷弄 / CP值高" },
  { name: "More Pasta 默爾義大利餐廳", dish: "松露蘑菇燉飯", notes: "信義威秀 / 手工窯烤披薩" },
  { name: "Creative Pasta 創義麵", dish: "鮮蝦干貝茄汁奶油麵", notes: "莊敬路 / 創意口味多" },
  { name: "Lazy Pasta 慵懶義式廚房", dish: "青醬蛤蠣義大利麵", notes: "市府站巷弄 / 氣氛放鬆" },
  { name: "馬友友印度廚房", dish: "奶油雞肉咖哩", notes: "基隆路一段 / 道地印度主廚" },
  { name: "依鼎越式美食", dish: "生牛肉河粉", notes: "吳興街 / 湯頭清甜" },
  { name: "Waku Waku Burger", dish: "炸洋蔥富士山漢堡", notes: "台北101 / 日式文青漢堡" },
  // 區域 C：信義商圈 - 火鍋與聚餐
  { name: "馬辣頂級麻辣鴛鴦火鍋", dish: "麻辣鍋吃到飽", notes: "信義A19 / 哈根達斯吃到飽" },
  { name: "品湯白色麻辣鍋專賣", dish: "精華豬肚煲鍋", notes: "信義路巷弄 / 獨特白色麻辣" },
  { name: "鼎泰豐 (A4店)", dish: "小籠包", notes: "新光三越A4 / 台灣之光" },
  { name: "點點心", dish: "豬仔流沙包", notes: "微風信義 B1 / 來自香港" },
  { name: "樂天皇朝", dish: "八色小籠包", notes: "微風信義 4F / 創意中菜" },
  { name: "小小麥 (信義店)", dish: "明太子白醬烏龍麵", notes: "新光三越A11 / 99元起平價烏龍" },
  { name: "M One Cafe A11", dish: "牛小排早餐", notes: "新光三越A11 / 薯絲餅台北最強" },
  { name: "稻舍食館 Rice 1923", dish: "客家封肉", notes: "微風信義 4F / 迪化街老店" },
  { name: "赤門居酒屋", dish: "元氣燒肉組合", notes: "松隆路 / 適合下班小酌" },
  { name: "竹村居酒屋", dish: "烤雞肉串", notes: "松仁路巷弄 / 偶像劇景點" },
  { name: "古記雞.私房菜.居酒屋", dish: "剝皮辣椒雞湯", notes: "忠孝東路巷弄 / 明星愛店" }
];

// 3. 平價小吃 (對應按鈕：小吃)
const affordableEats = [
  // 區域 A：永吉路30巷
  { name: "烤師傅港式燒烤", dish: "招牌烤肉飯", notes: "永吉路30巷 / 獨門醬汁" },
  { name: "胡饕米粉湯55年老店", dish: "招牌芋頭米粉湯", notes: "永吉路30巷 / 痛風蛤蠣盤" },
  { name: "滇味廚房", dish: "過橋米線", notes: "永吉路30巷 / CP值極高" },
  { name: "武鼎越豐越南麵食館", dish: "越式鮮牛肉河粉", notes: "永吉路30巷 / 人氣排隊店" },
  { name: "傷心酸辣粉", dish: "招牌酸辣粉", notes: "永吉路30巷 / 酸辣夠味" },
  { name: "捲餅達人", dish: "烤鴨捲餅", notes: "永吉路30巷 / 滿滿蔥段" },
  { name: "鴨肉許 (信義店)", dish: "鴨肉飯", notes: "永吉路30巷 / 煙燻味香" },
  { name: "梁社漢排骨", dish: "炸排骨飯", notes: "永吉路30巷 / 厚實多汁" },
  { name: "30巷咖哩飯", dish: "雙拼咖哩飯", notes: "永吉路30巷 / 台式家常口味" },
  { name: "溫州大餛飩", dish: "鮮蝦大餛飩麵", notes: "永吉路30巷 / 經典老味道" },
  { name: "彭記臭豆腐", dish: "脆皮臭豆腐", notes: "永吉路30巷 / 蚵仔麵線也好吃" },
  { name: "阿柳水果攤 (旁炒飯)", dish: "什錦炒飯", notes: "永吉路30巷 / 隱藏版宵夜" },
  { name: "泰飽", dish: "打拋豬肉飯", notes: "永吉路30巷 / 泰式便當" },
  { name: "空軍涼麵", dish: "大碗涼麵+味噌湯", notes: "基隆路一段 / 份量巨大" },
  { name: "好好味冰火菠蘿油", dish: "冰火菠蘿油", notes: "永吉路30巷 / 港式點心" },
  { name: "八方雲集 (永吉店)", dish: "招牌鍋貼", notes: "永吉路30巷 / 國民美食" },
  { name: "老虎醬溫州大餛飩", dish: "麻醬麵", notes: "永吉路30巷 / 獨門老虎醬" },
  { name: "家常飯朴老師", dish: "韓式拌飯", notes: "永吉路30巷 / 道地口味" },
  // 區域 B：虎林街 / 永春市場
  { name: "無敵水餃", dish: "搶鍋麵", notes: "虎林街 / 水餃大顆" },
  { name: "施家麻油腰花", dish: "魯肉飯+麻油豬肝", notes: "松山路 / 台北必吃魯肉飯" },
  { name: "小陳牛肉麵", dish: "紅燒牛肉麵", notes: "虎林街 / 肉塊巨大" },
  { name: "香廚炒飯專賣店", dish: "紹興炒飯", notes: "虎林街 / 粒粒分明" },
  { name: "東加炸雞", dish: "雞腿+薯條", notes: "虎林街(黃昏市場) / CP值炸裂" },
  { name: "春桂賓", dish: "滑蛋銷魂雞肉飯", notes: "永春站 / 嫩雞肉必吃" },
  { name: "賈家哈爾濱大餅", dish: "千層蔥花大餅", notes: "虎林街 / 麵香十足" },
  { name: "顏家麵線", dish: "蚵仔麵線", notes: "松山路 / 臭豆腐是絕配" },
  { name: "金仙魯肉飯 (松山店)", dish: "排骨飯", notes: "松山路 / 蝦捲也好吃" },
  { name: "廣越美食", dish: "豬排涼拌米粉", notes: "松山路 / 份量大" },
  { name: "虎林街麵攤", dish: "麻醬麵", notes: "虎林街 / 無名老店" },
  { name: "大方冰品 (鹹食部)", dish: "乾麵", notes: "信義路六段 / 簡單麵食" },
  // 區域 C：信義商圈 B1/B2
  { name: "丸龜製麵", dish: "豚骨烏龍麵", notes: "新光三越A8 B2 / 炸物自由選" },
  { name: "小南門豆花", dish: "排骨飯套餐", notes: "微風松高 / 附湯或甜點" },
  { name: "繼光香香雞", dish: "香香炸雞套餐", notes: "新光三越A8 / 逛街充飢" },
  { name: "MOS BURGER 摩斯漢堡", dish: "海洋珍珠堡", notes: "台北101 / 穩定好吃" },
  { name: "麥當勞 (信義店)", dish: "大麥克套餐", notes: "信義路 / 快速方便" },
  { name: "21風味館", dish: "香草烤雞腿飯", notes: "統一時代 B2 / 烤雞多汁" },
  { name: "太陽蕃茄拉麵", dish: "太陽起司拉麵", notes: "統一時代 B2 / 義式湯頭" },
  { name: "瑞記海南雞飯", dish: "海南雞腿飯", notes: "永吉路30巷 / 肉質極嫩" },
  { name: "Sukiya すき家", dish: "蔥溫玉牛丼", notes: "信義ATT周邊 / 24小時營業" },
  { name: "頂呱呱 TKK", dish: "呱呱包餐", notes: "遠百A13 / 呱呱包是本體" },
  { name: "海壽司 (外帶區)", dish: "綜合壽司盒", notes: "微風松高 / 食材新鮮" },
  { name: "米哥烘焙坊", dish: "各式麵包", notes: "信義新天地 / 便宜選擇" },
  // 區域 D：周邊補充
  { name: "富春雞肉", dish: "百斬雞肉飯", notes: "吳興街 / 雞油飯香" },
  { name: "林家牛肉麵", dish: "藥膳牛肉麵", notes: "吳興街 / 湯頭獨特" },
  { name: "大王麻辣乾麵", dish: "重慶麻辣乾麵", notes: "吳興街 / 挑戰辣度" },
  { name: "北平都一處 (外帶)", dish: "芝麻醬燒餅", notes: "市府路 / 必吃燒餅" },
  { name: "陳根找茶", dish: "法式吐司", notes: "莊敬路 / 知名早餐店" },
  { name: "周家豆腐捲", dish: "豆腐捲+小米粥", notes: "光復南路市場 / 乾烙不油膩" },
  { name: "信義區平價熱炒", dish: "炒飯/炒麵", notes: "基隆路一帶 / 商業午餐" },
  { name: "胖老爹美式炸雞", dish: "5號全家餐", notes: "永吉路巷弄 / 現點現炸" }
];


// ==========================================
// 程式邏輯控制區
// ==========================================

// 全域變數
let currentCategory = null; 
let currentList = []; 

// 抓取 DOM 元素
const nameDisplay = document.getElementById('restaurant-name');
const dishDisplay = document.getElementById('dish-name');
const spinBtn = document.getElementById('spin-btn');
const resultCard = document.getElementById('result-card');
const catBtns = document.querySelectorAll('.square-btn'); 

// 抓取動畫元素
const leverContainer = document.querySelector('.lever-container'); 
const screenSection = document.querySelector('.screen-section'); 

// --- 選擇分類 ---
function selectCategory(category) {
    currentCategory = category;

    // 將按鈕的 ID 對應到正確的資料陣列
    if (category === 'restaurant') {
        currentList = diningSpots;
    } else if (category === 'streetfood') { // HTML按鈕寫的是 streetfood
        currentList = affordableEats;
    } else if (category === 'dessert') {
        currentList = afternoonTeaShops;
    }

    if (!currentList || currentList.length === 0) {
        console.error("無資料");
        return;
    }

    // 更新螢幕文字
    nameDisplay.innerText = "準備完成";
    let displayText = "";
    if (category === 'restaurant') displayText = "類別：餐廳";
    else if (category === 'streetfood') displayText = "類別：小吃";
    else if (category === 'dessert') displayText = "類別：點心";
    dishDisplay.innerText = displayText;
    
    // 解鎖 Start 按鈕
    spinBtn.disabled = false;
    spinBtn.classList.add('active-spin'); 

    // 按鈕狀態切換
    catBtns.forEach(btn => {
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active-category');
        } else {
            btn.classList.remove('active-category');
        }
    });
}

// --- 開始轉動 (修改版：加入滾動特效) ---
function startSpin() {
    if (currentList.length === 0) {
        alert("請先選擇分類！");
        return; 
    }

    // 1. 介面重置
    resultCard.classList.add('hidden');
    spinBtn.disabled = true; 
    spinBtn.classList.remove('active-spin'); 
    
    // 2. 拉桿動畫
    if(leverContainer) {
        leverContainer.classList.remove('active'); 
        void leverContainer.offsetWidth; 
        leverContainer.classList.add('active');
        setTimeout(() => {
            leverContainer.classList.remove('active');
        }, 500);
    }

    // 3. 螢幕邊框閃爍
    if(screenSection) {
        screenSection.classList.add('lights-blinking');
    }

    // --- 新增：文字加入滾動特效 Class ---
    nameDisplay.classList.add('text-rolling');

    // 4. 轉動邏輯
    let counter = 0;
    // 稍微加快切換速度，配合 CSS 的 0.1s 動畫
    const speed = 100; 
    const totalSpins = 30; // 約 3 秒
    
    const interval = setInterval(() => {
        const tempIndex = Math.floor(Math.random() * currentList.length);
        
        // 這裡只更新文字，視覺上的「滾動感」由 CSS animation 負責
        nameDisplay.innerText = currentList[tempIndex].name;
        dishDisplay.innerText = "......"; 
        
        counter++;
        if (counter >= totalSpins) {
            clearInterval(interval);
            showResult(); 
        }
    }, speed); 
}

// --- 顯示結果 (修改版：移除特效) ---
function showResult() {
    // 1. 停止閃爍
    if(screenSection) {
        screenSection.classList.remove('lights-blinking');
    }

    // --- 新增：移除文字滾動特效 Class ---
    nameDisplay.classList.remove('text-rolling');

    // 2. 選出贏家
    const winnerIndex = Math.floor(Math.random() * currentList.length);
    const winner = currentList[winnerIndex];

    // 3. 顯示最終結果 (這裡可以加一個小小的進場動畫，讓定格更有力)
    nameDisplay.innerText = winner.name;
    dishDisplay.innerText = winner.dish;

    document.getElementById('final-name').innerText = winner.name;
    document.getElementById('final-dish').innerText = winner.dish;

    // 4. 生成導航連結
    let locationHint = "台北";
    if (winner.notes) {
        locationHint = winner.notes.split('/')[0].trim();
    }
    const query = encodeURIComponent(winner.name + " " + locationHint); 
    const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;
    
    document.getElementById('final-link').href = mapUrl;

    resultCard.classList.remove('hidden');
    spinBtn.disabled = false; 
    spinBtn.classList.add('active-spin'); 
}

// --- 關閉結果卡片 ---
function closeCard() {
    const resultCard = document.getElementById('result-card');
    // 隱藏卡片
    resultCard.classList.add('hidden');
    
    // 額外保險：移除可能殘留的動畫 class (雖然理論上 showResult 會處理，但多做無害)
    const nameDisplay = document.getElementById('restaurant-name');
    nameDisplay.classList.remove('text-rolling');
}