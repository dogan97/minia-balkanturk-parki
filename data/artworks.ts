
import { Artwork } from '../types';

export const artworksData: Artwork[] = [
  {
    id: 1,
    slug: 'ataturk-evi',
    title: {
      tr: 'Atatürk Evi',
      en: 'Ataturk House',
      bg: 'Къща на Ататюрк',
      sr: 'Atatürkova kuća',
    },
    description: {
      tr: 'Bursa\'da bulunan Atatürk Evi, Mustafa Kemal Atatürk\'ün 1924 yılında kaldığı tarihi konaktır. Türk İstiklal Harbi sırasında önemli kararların alındığı bu yapı, şimdi müze olarak hizmet vermektedir.',
      en: 'The Ataturk House in Bursa is a historic mansion where Mustafa Kemal Ataturk stayed in 1924. This building, where important decisions were made during the Turkish War of Independence, now serves as a museum.',
      bg: 'Къщата на Ататюрк в Бурса е историческа къща, където Мустафа Кемал Ататюрк е отседнал през 1924 г. Тази сграда, където са взети важни решения по време на турската война за независимост, сега функционира като музей.',
      sr: 'Atatürkova kuća u Bursi je istorijska rezidencija gde je Mustafa Kemal Atatürk boravio 1924. godine. Ova zgrada, gde su donošene važne odluke tokom turskog rata za nezavisnost, sada služi kao muzej.',
    },
    location: {
      tr: 'Bursa, Türkiye',
      en: 'Bursa, Turkey',
      bg: 'Бурса, Турция',
      sr: 'Bursa, Turska',
    },
    architect: { tr: 'Geleneksel Osmanlı Mimarisi', en: 'Traditional Ottoman Architecture', bg: 'Традиционна османска архитектура', sr: 'Tradicionalna osmanska arhitektura' },
    year: '19. Yüzyıl',
    scale: '1:25',
    culturalBackground: {
      tr: 'Cumhuriyet tarihimizin önemli tanığı olan bu yapı, Atatürk\'ün hayatına ve dönemine ışık tutan değerli eserlerle donatılmıştır.',
      en: 'This building, an important witness to the history of the Republic, is equipped with valuable artifacts that shed light on Ataturk\'s life and era.',
      bg: 'Тази сграда, важен свидетел на историята на Републиката, е оборудвана с ценни артефакти, които хвърлят светлина върху живота и епохата на Ататюрк.',
      sr: 'Ova zgrada, važan svedok istorije Republike, opremljena je vrednim artefaktima koji bacaju svetlo na Atatürkov život i epohu.',
    },
    images: ['https://picsum.photos/seed/ataturk-house1/800/600', 'https://picsum.photos/seed/ataturk-house2/800/600', 'https://picsum.photos/seed/ataturk-house3/800/600'],
    thumbnail: 'https://picsum.photos/seed/ataturk-house/400/300',
  },
  {
    id: 2,
    slug: 'shkoder-castle',
    title: {
      tr: 'İşkodra Kalesi',
      en: 'Shkodër Castle',
      bg: 'Замък Шкодер',
      sr: 'Skadarsko utvrđenje',
    },
    description: {
      tr: 'Arnavutluk\'un İşkodra şehrinde bulunan tarihi kaledir. Buna ve Drin nehirlerinin birleştiği noktada stratejik bir konuma sahiptir. Roma, Bizans ve Osmanlı dönemlerinden kalma izler taşımaktadır.',
      en: 'A historic castle located in Shkodër, Albania. It has a strategic position at the confluence of the Buna and Drin rivers. It bears traces from the Roman, Byzantine and Ottoman periods.',
      bg: 'Исторически замък, разположен в Шкодер, Албания. Има стратегическо положение на сливането на реките Буна и Дрин. Носи следи от римския, византийския и османския период.',
      sr: 'Istorijska tvrđava u gradu Skadru, Albanija. Ima stratešku poziciju na ušću reka Bojane i Drima. Nosi tragove iz rimskog, vizantijskog i osmanskog perioda.',
    },
    location: { tr: 'İşkodra, Arnavutluk', en: 'Shkodër, Albania', bg: 'Шкодер, Албания', sr: 'Skadar, Albanija' },
    architect: { tr: 'Çeşitli Medeniyetler', en: 'Various Civilizations', bg: 'Различни цивилизации', sr: 'Razne civilizacije' },
    year: 'Antik Çağ - Osmanlı Dönemi',
    scale: '1:30',
    culturalBackground: {
      tr: 'Balkanlar\'da önemli bir stratejik konuma sahip olan kale, birçok medeniyetin izlerini taşıyan çok katmanlı bir tarihi yapıdır.',
      en: 'The castle, which has an important strategic position in the Balkans, is a multi-layered historical structure bearing the traces of many civilizations.',
      bg: 'Замъкът, който има важна стратегическа позиция на Балканите, е многопластова историческа структура, носеща следи от много цивилизации.',
      sr: 'Tvrđava, koja ima važnu stratešku poziciju na Balkanu, je višeslojna istorijska struktura koja nosi tragove mnogih civilizacija.',
    },
    images: ['https://picsum.photos/seed/shkoder-castle1/800/600', 'https://picsum.photos/seed/shkoder-castle2/800/600', 'https://picsum.photos/seed/shkoder-castle3/800/600'],
    thumbnail: 'https://picsum.photos/seed/shkoder-castle/400/300',
  },
  {
    id: 3,
    slug: 'podgorica-clock-tower',
    title: {
      tr: 'Podgorica Saat Kulesi',
      en: 'Podgorica Clock Tower',
      bg: 'Часовникова кула на Подгорица',
      sr: 'Sahat kula u Podgorici',
    },
    description: {
      tr: 'Karadağ\'ın başkenti Podgorica\'da bulunan tarihi saat kulesidir. Osmanlı döneminde inşa edilmiş olan bu yapı, şehrin merkezi meydanında yer almaktadır ve Podgorica\'nın en önemli tarihi simgelerinden biridir.',
      en: 'A historic clock tower located in Podgorica, the capital of Montenegro. Built during the Ottoman period, this structure is located in the city\'s central square and is one of Podgorica\'s most important historical symbols.',
      bg: 'Историческа часовникова кула, разположена в Подгорица, столицата на Черна гора. Построена през османския период, тази структура се намира на централния площад на града и е един от най-важните исторически символи на Подгорица.',
      sr: 'Istorijska sahat kula u Podgorici, glavnom gradu Crne Gore. Izgrađena tokom osmanskog perioda, ova struktura se nalazi na centralnom trgu grada i jedan je od najvažnijih istorijskih simbola Podgorice.',
    },
    location: { tr: 'Podgorica, Karadağ', en: 'Podgorica, Montenegro', bg: 'Подгорица, Черна гора', sr: 'Podgorica, Crna Gora' },
    architect: { tr: 'Osmanlı Mimarları', en: 'Ottoman Architects', bg: 'Османски архитекти', sr: 'Osmanski arhitekte' },
    year: '17. Yüzyıl',
    scale: '1:20',
    culturalBackground: {
      tr: 'Osmanlı mimarisinin Karadağ\'daki önemli örneklerinden biri olan saat kulesi, şehrin tarihi dokusunu yansıtan değerli bir kültürel mirastır.',
      en: 'The clock tower, one of the important examples of Ottoman architecture in Montenegro, is a valuable cultural heritage reflecting the historical fabric of the city.',
      bg: 'Часовниковата кула, един от важните примери за османската архитектура в Черна гора, е ценно културно наследство, отразяващо историческата структура на града.',
      sr: 'Sahat kula, jedan od važnih primera osmanske arhitekture u Crnoj Gori, je dragoceno kulturno nasleđe koje odražava istorijsku strukturu grada.',
    },
    images: ['https://picsum.photos/seed/clock-tower1/800/600', 'https://picsum.photos/seed/clock-tower2/800/600'],
    thumbnail: 'https://picsum.photos/seed/clock-tower/400/300',
  },
  {
    id: 4,
    slug: 'skopje-stone-bridge',
    title: { 
      tr: 'Üsküp Taş Köprü', 
      en: 'Skopje Stone Bridge', 
      bg: 'Каменният мост в Скопие', 
      sr: 'Kameni most u Skoplju' 
    },
    description: {
      tr: 'Kuzey Makedonya\'nın başkenti Üsküp\'te Vardar Nehri üzerinde bulunan tarihi taş köprüdür. 15. yüzyılda Osmanlı döneminde inşa edilmiş olan köprü, şehrin en önemli sembollerinden biridir.',
      en: 'A historic stone bridge over the Vardar River in Skopje, the capital of North Macedonia. Built in the 15th century during the Ottoman period, the bridge is one of the city\'s most important symbols.',
      bg: 'Историческият каменен мост над река Вардар в Скопие, столицата на Северна Македония. Построен през 15-ти век по време на османския период, мостът е един от най-важните символи на града.',
      sr: 'Istorijski kameni most preko reke Vardar u Skoplju, glavnom gradu Severne Makedonije. Izgrađen u 15. veku tokom osmanskog perioda, most je jedan od najvažnijih simbola grada.'
    },
    location: { tr: 'Üsküp, Kuzey Makedonya', en: 'Skopje, North Macedonia', bg: 'Скопие, Северна Македония', sr: 'Skoplje, Severna Makedonija' },
    architect: { tr: 'Osmanlı Mimarları', en: 'Ottoman Architects', bg: 'Османски архитекти', sr: 'Osmanski arhitekte' },
    year: '15. Yüzyıl',
    scale: '1:30',
    culturalBackground: {
      tr: 'Osmanlı mimarisinin Balkanlardaki önemli örneklerinden biri olan köprü, Üsküp\'ün eski ve yeni şehir bölümlerini birbirine bağlar ve şehrin tarihi kimliğinin önemli bir parçasıdır.',
      en: 'The bridge, one of the important examples of Ottoman architecture in the Balkans, connects the old and new city parts of Skopje and is an important part of the city\'s historical identity.',
      bg: 'Мостът, един от важните примери на османската архитектура на Балканите, свързва старата и новата част на Скопие и е важна част от историческата идентичност на града.',
      sr: 'Most, jedan od važnih primera osmanske arhitekture na Balkanu, povezuje stari i novi deo grada Skoplja i važan je deo istorijskog identiteta grada.'
    },
    images: ['https://picsum.photos/seed/stone-bridge1/800/600', 'https://picsum.photos/seed/stone-bridge2/800/600'],
    thumbnail: 'https://picsum.photos/seed/stone-bridge/400/300',
  },
  {
    id: 5,
    slug: 'vojvodina-hamam',
    title: { 
      tr: 'Vojvodina Hamamı', 
      en: 'Vojvodina Bath House', 
      bg: 'Войводинска баня', 
      sr: 'Vojvođanski hamam' 
    },
    description: {
      tr: 'Sırbistan\'ın Vojvodina bölgesinde bulunan Osmanlı döneminden kalma tarihi hamamdır. Geleneksel Osmanlı hamam mimarisinin tipik örneklerinden biri olarak, bölgedeki İslami kültürün önemli izlerinden birini oluşturmaktadır.',
      en: 'A historic Ottoman-era bathhouse located in the Vojvodina region of Serbia. As one of the typical examples of traditional Ottoman bath architecture, it represents one of the important traces of Islamic culture in the region.',
      bg: 'Историческа баня от османската епоха, разположена в регион Войводина в Сърбия. Като един от типичните примери на традиционната османска архитектура на бани, тя представлява една от важните следи от ислямската култура в региона.',
      sr: 'Istorijski hamam iz osmanskog perioda koji se nalazi u Vojvodini, Srbija. Kao jedan od tipičnih primera tradicionalne osmanske arhitekture hamama, predstavlja jedan od važnih tragova islamske kulture u regionu.'
    },
    location: { tr: 'Vojvodina, Sırbistan', en: 'Vojvodina, Serbia', bg: 'Войводина, Сърбия', sr: 'Vojvodina, Srbija' },
    architect: { tr: 'Osmanlı Mimarları', en: 'Ottoman Architects', bg: 'Османски архитекти', sr: 'Osmanski arhitekte' },
    year: '16. Yüzyıl',
    scale: '1:25',
    culturalBackground: {
      tr: 'Osmanlı hamamı geleneğinin Balkanlardaki örneklerinden biri olarak, bölgenin çok kültürlü tarihini yansıtan önemli bir mimari mirastır.',
      en: 'As one of the examples of Ottoman bath tradition in the Balkans, it is an important architectural heritage reflecting the multicultural history of the region.',
      bg: 'Като един от примерите на османската традиция за бани на Балканите, това е важно архитектурно наследство, отразяващо многокултурната история на региона.',
      sr: 'Kao jedan od primera osmanske tradicije hamama na Balkanu, predstavlja važno arhitektonsko nasleđe koje odražava multikulturalnu istoriju regiona.'
    },
    images: ['https://picsum.photos/seed/bath-house1/800/600', 'https://picsum.photos/seed/bath-house2/800/600'],
    thumbnail: 'https://picsum.photos/seed/bath-house/400/300',
  },
  {
    id: 6,
    slug: 'sultan-murad-tomb',
    title: { tr: 'Sultan Murad Türbesi', en: 'Sultan Murad Tomb', bg: 'Гробница на султан Мурад', sr: 'Grob sultana Murata' },
    description: {
      tr: 'Kosova\'da, I. Kosova Savaşı\'nın yapıldığı yerde I. Murad\'ın iç organlarının gömülü olduğu türbedir.',
      en: 'A tomb in Kosovo, at the site of the First Battle of Kosovo, where the internal organs of Murad I are buried.',
      bg: 'Гробница в Косово, на мястото на Първата битка за Косово, където са погребани вътрешните органи на Мурад I.',
      sr: 'Grob na Kosovu, na mestu Prve kosovske bitke, gde su sahranjeni unutrašnji organi Murata I.'
    },
    location: { tr: 'Mazgit, Kosova', en: 'Mazgit, Kosovo', bg: 'Мазгит, Косово', sr: 'Mazgit, Kosovo' },
    architect: { tr: 'Bilinmiyor', en: 'Unknown', bg: 'Неизвестен', sr: 'Nepoznat' },
    year: '14. Yüzyıl',
    scale: '1:25',
    culturalBackground: {
      tr: 'Osmanlı padişahı I. Murad\'a adanmıştır ve Balkanlar\'daki önemli bir Osmanlı anıtıdır.',
      en: 'It is dedicated to the Ottoman Sultan Murad I and is an important Ottoman monument in the Balkans.',
      bg: 'Посветена е на османския султан Мурад I и е важен османски паметник на Балканите.',
      sr: 'Posvećen je osmanskom sultanu Muratu I i važan je osmanski spomenik na Balkanu.'
    },
    images: ['https://picsum.photos/seed/sultan-tomb1/800/600', 'https://picsum.photos/seed/sultan-tomb2/800/600'],
    thumbnail: 'https://picsum.photos/seed/sultan-tomb/400/300',
  },
  {
    id: 7,
    slug: 'klis-fortress',
    title: { 
      tr: 'Klis Kalesi', 
      en: 'Klis Fortress', 
      bg: 'Крепост Клис', 
      sr: 'Tvrđava Klis' 
    },
    description: {
        tr: 'Hırvatistan\'ın Split şehri yakınlarında bulunan tarihi kaledir. Osmanlı İmparatorluğu ile Habsburg Monarşisi arasındaki savaşlarda önemli rol oynamıştır. Stratejik konumu nedeniyle Dalmaçya bölgesinin kontrolünde kritik önem taşımıştır.',
        en: 'A historic fortress located near the city of Split, Croatia. It played an important role in the wars between the Ottoman Empire and the Habsburg Monarchy. Due to its strategic position, it was of critical importance in controlling the Dalmatia region.',
        bg: 'Историческа крепост, разположена близо до град Сплит, Хърватия. Играла е важна роля във войните между Османската империя и Хабсбургската монархия. Поради стратегическото си положение е имала критично значение за контрола на регион Далмация.',
        sr: 'Istorijska tvrđava smeštena blizu grada Splita, Hrvatska. Igrala je važnu ulogu u ratovima između Osmanskog carstva i Habzburške monarhije. Zbog svog strateškog položaja bila je od kritične važnosti za kontrolu regiona Dalmacije.'
    },
    location: { tr: 'Split, Hırvatistan', en: 'Split, Croatia', bg: 'Сплит, Хърватия', sr: 'Split, Hrvatska' },
    architect: { tr: 'Çeşitli Dönemler', en: 'Various Periods', bg: 'Различни периоди', sr: 'Razni periodi' },
    year: 'Orta Çağ - 17. Yüzyıl',
    scale: '1:40',
    culturalBackground: {
        tr: 'Osmanlı-Habsburg savaşlarının önemli tanığı olan kale, Balkanlar\'da Doğu ve Batı kültürlerinin kesiştiği stratejik bir noktada yer almaktadır.',
        en: 'The fortress, an important witness to the Ottoman-Habsburg wars, is located at a strategic point where Eastern and Western cultures intersect in the Balkans.',
        bg: 'Крепостта, важен свидетел на османо-хабсбургските войни, е разположена на стратегическа точка, където се пресичат източната и западната култура на Балканите.',
        sr: 'Tvrđava, važan svedok osmansko-habzburških ratova, smeštena je na strateškoj tački gde se ukrštaju istočna i zapadna kultura na Balkanu.'
    },
    images: ['https://picsum.photos/seed/klis-fortress1/800/600', 'https://picsum.photos/seed/klis-fortress2/800/600'],
    thumbnail: 'https://picsum.photos/seed/klis-fortress/400/300',
  },
  {
      id: 8,
      slug: 'comrat-cathedral',
      title: { 
        tr: 'Komrat Katedrali', 
        en: 'Comrat Cathedral', 
        bg: 'Катедрала в Комрат', 
        sr: 'Katedrala u Komratu' 
      },
      description: {
          tr: 'Moldova\'nın Gagavuz Özerk Bölgesi\'nin başkenti Komrat\'ta bulunan Ortodoks katedralidir. Gagavuz halkının dini ve kültürel yaşamının merkezi olan bu yapı, bölgenin Ortodoks Hıristiyan kimliğini yansıtmaktadır.',
          en: 'An Orthodox cathedral located in Comrat, the capital of Gagauzia Autonomous Region in Moldova. This structure, which is the center of the religious and cultural life of the Gagauz people, reflects the Orthodox Christian identity of the region.',
          bg: 'Православна катедрала, разположена в Комрат, столицата на автономния регион Гагаузия в Молдова. Тази структура, която е център на религиозния и културния живот на гагаузкия народ, отразява православната християнска идентичност на региона.',
          sr: 'Pravoslavna katedrala smeštena u Komratu, glavnom gradu autonomnog regiona Gagauzije u Moldaviji. Ova struktura, koja je centar religijskog i kulturnog života gagauzkog naroda, odražava pravoslavni hrišćanski identitet regiona.'
      },
      location: { tr: 'Komrat, Moldova', en: 'Comrat, Moldova', bg: 'Комрат, Молдова', sr: 'Komrat, Moldavija' },
      architect: { tr: 'Gagavuz Mimarları', en: 'Gagauz Architects', bg: 'Гагаузки архитекти', sr: 'Gagauski arhitekte' },
      year: '19. Yüzyıl',
      scale: '1:30',
      culturalBackground: {
          tr: 'Gagavuz halkının Ortodoks Hıristiyan inancının simgesi olan katedral, Balkan kökenli Gagavuz kültürünün Moldova topraklarındaki önemli temsilcilerinden biridir.',
          en: 'The cathedral, a symbol of the Orthodox Christian faith of the Gagauz people, is one of the important representatives of Balkan-origin Gagauz culture on Moldovan soil.',
          bg: 'Катедралата, символ на православната християнска вяра на гагаузкия народ, е един от важните представители на гагаузката култура с балкански произход на молдовска земя.',
          sr: 'Katedrala, simbol pravoslavne hrišćanske vere gagauzkog naroda, jedan je od važnih predstavnika gagauske kulture balkanskog porekla na moldavskoj zemlji.'
      },
      images: ['https://picsum.photos/seed/cathedral1/800/600', 'https://picsum.photos/seed/cathedral2/800/600'],
      thumbnail: 'https://picsum.photos/seed/cathedral/400/300',
  },
  {
      id: 9,
      slug: 'ibrahim-pasha-mosque',
      title: { 
        tr: 'İbrahim Paşa Camii', 
        en: 'Ibrahim Pasha Mosque', 
        bg: 'Джамия на Ибрахим паша', 
        sr: 'Ibrahim-pašina džamija' 
      },
      description: {
          tr: 'Balkan coğrafyasında bulunan Osmanlı döneminden kalma tarihi camidir. Klasik Osmanlı camii mimarisinin güzel örneklerinden biri olan yapı, büyük vezir İbrahim Paşa\'nın adını taşımaktadır ve bölgedeki İslami mimarinin önemli temsilcilerindendir.',
          en: 'A historic mosque from the Ottoman period located in the Balkan geography. The structure, one of the beautiful examples of classical Ottoman mosque architecture, bears the name of Grand Vizier Ibrahim Pasha and is one of the important representatives of Islamic architecture in the region.',
          bg: 'Историческа джамия от османския период, разположена в балканската география. Структурата, един от красивите примери на класическата османска джамийска архитектура, носи името на великия везир Ибрахим паша и е един от важните представители на ислямската архитектура в региона.',
          sr: 'Istorijska džamija iz osmanskog perioda smeštena u balkanskoj geografiji. Struktura, jedan od lepih primera klasične osmanske džamijske arhitekture, nosi ime velikog vezira Ibrahim-paše i jedan je od važnih predstavnika islamske arhitekture u regionu.'
      },
      location: { tr: 'Balkanlar', en: 'Balkans', bg: 'Балкани', sr: 'Balkan' },
      architect: { tr: 'Osmanlı Mimarları', en: 'Ottoman Architects', bg: 'Османски архитекти', sr: 'Osmanski arhitekte' },
      year: '16. Yüzyıl',
      scale: '1:25',
      culturalBackground: {
          tr: 'Osmanlı İmparatorluğu\'nun Balkanlardaki mimari mirasının önemli bir parçası olan cami, İslami sanatın ve mimarinin bölgedeki etkinliğini gösteren değerli bir eserdir.',
          en: 'The mosque, an important part of the Ottoman Empire\'s architectural heritage in the Balkans, is a valuable work that demonstrates the influence of Islamic art and architecture in the region.',
          bg: 'Джамията, важна част от архитектурното наследство на Османската империя на Балканите, е ценно произведение, което демонстрира влиянието на ислямското изкуство и архитектура в региона.',
          sr: 'Džamija, važan deo arhitektonskog nasleđa Osmanskog carstva na Balkanu, je dragoceno delo koje demonstrira uticaj islamske umetnosti i arhitekture u regionu.'
      },
      images: ['https://picsum.photos/seed/mosque1/800/600', 'https://picsum.photos/seed/mosque2/800/600'],
      thumbnail: 'https://picsum.photos/seed/mosque/400/300',
  },
  // {
  //     id: 10,
  //     slug: 'skanderbeg-square',
  //     title: { tr: 'İskender Bey Meydanı', en: 'Skanderbeg Square', bg: 'Площад Скендербег', sr: 'Trg Skenderbega' },
  //     description: {
  //         tr: 'Arnavutluk\'un başkenti Tiran\'daki ana meydandır.',
  //         en: 'The main plaza in the center of Tirana, Albania.',
  //         bg: 'Главният площад в центъра на Тирана, Албания.',
  //         sr: 'Glavni trg u centru Tirane, Albanija.'
  //     },
  //     location: { tr: 'Tiran, Arnavutluk', en: 'Tirana, Albania', bg: 'Тирана, Албания', sr: 'Tirana, Albanija' },
  //     architect: { tr: 'Çeşitli', en: 'Various', bg: 'Различни', sr: 'Razni' },
  //     year: '20. Yüzyıl',
  //     scale: '1:50',
  //     culturalBackground: {
  //         tr: 'Adını Arnavut ulusal kahramanı İskender Bey\'den alan meydan, ülkenin siyasi ve sosyal hayatının merkezidir.',
  //         en: 'Named after the Albanian national hero Skanderbeg, the square is the center of the country\'s political and social life.',
  //         bg: 'Кръстен на албанския национален герой Скендербег, площадът е център на политическия и социалния живот на страната.',
  //         sr: 'Nazvan po albanskom nacionalnom heroju Skenderbegu, trg je centar političkog i društvenog života zemlje.'
  //     },
  //     images: ['https://picsum.photos/seed/skanderbeg1/1200/800', 'https://picsum.photos/seed/skanderbeg2/1200/800'],
  //     thumbnail: 'https://picsum.photos/seed/skanderbeg-thumb/500/300',
  // },
];
