const posts = [
   {
      "code":"BAcyDyQwcXX",
      "likes":3,
      "id":"1161022966406956503",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/e35/18011254_123108644903702_6902872511873024000_n.jpg"
   },
   {
      "code":"BAPIPRjQce9",
      "likes":1,
      "id":"1157179863266871229",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/18382688_190265688161925_6685519245113032704_n.jpg"
   },
   {
      "code":"-hZh6IQcfN",
      "likes":6,
      "id":"1126293663140399053",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/15043730_324230254628992_8239159184097017856_n.jpg"
   },
   {
      "code":"-B3eiIwcYV",
      "likes":13,
      "id":"1117418173361145365",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13743341_202670950135297_1642784028_n.jpg"
   },
   {
      "code":"BAhvZrRwcfu",
      "likes":20,
      "id":"1162418651480049646",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12530950_814557555355536_884983603_n.jpg"
   },

   {
      "code":"_4jHytwcUA",
      "likes":9,
      "id":"1150824171912152320",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/14474413_171689803279588_5329200647851999232_n.jpg"
   },
   {
      "code":"_zbaOlQcbn",
      "likes":18,
      "id":"1149382879529256679",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19051697_120516201868381_7715793350082691072_n.jpg"
   },
   {
      "code":"_rmvQfQce8", 
      "likes":16,
      "id":"1147180903383025596",
      "display_src":"https://scontent-dft4-3.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/15253235_1780661238842433_5727095617973387264_n.jpg"
   }
   // {
   //    "code":"_ep9kiQcVy",
   //    "likes":64,
   //    "id":"1143535906423162226",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12354078_447337935474115_1484398925_n.jpg"
   // },
   // {
   //    "code":"_XpJcrwcSn",netmag!",
   //    "likes":74,
   //    "id":"1141561999742846119",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12362588_1688046211438811_1395882545_n.jpg"
   // },
   // {
   //    "code":"_KnU7MwceA",
   //    "likes":54,
   //    "id":"1137894817632733056",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12301208_1533749386944985_1334730917_n.jpg"
   // },
   // {
   //    "code":"_HMejJQcY5",
   //    "likes":18,
   //    "id":"1136932306813044281",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12357319_493317964181479_310198908_n.jpg"
   // },
   // {
   //    "code":"_Fq2zmwcaz",
   //    "likes":48,
   //    "id":"1136502965197194931",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12317458_1692845870986430_331905833_n.jpg"
   // },
   // {
   //    "code":"_A2r0aQcfD",
   //    "likes":57,
   //    "id":"1135147611821557699",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12276809_750065668431999_184252508_n.jpg"
   // },
   // {
   //    "code":"-1rhFawccs",
   //    "likes":39,
   //    "id":"1132002270913873708",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12331333_1650987978502155_1162510634_n.jpg"
   // },
   // {
   //    "code":"-pjx-gQcVi",
   //    "likes":81,
   //    "id":"1128590547628442978",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12298962_863814057068027_460827278_n.jpg"
   // },
   // {
   //    "code":"-oTZ0zQcWt",
   //    "likes":81,
   //    "id":"1128237044221461933",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12328347_990748230999662_1512917342_n.jpg"
   // },
   // {
   //    "code":"-mxKQoQcQh",
   //    "likes":47,
   //    "id":"1127804966031967265",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e35/12256736_1758525004381641_1136705181_n.jpg"
   // },
   // {
   //    "code":"-fasqlQceO",
   //    "likes":46,
   //    "id":"1125735850454402958",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/12277581_1028556737218368_1184190781_n.jpg"
   // },
   // {
   //    "code":"-VBgtGQcSf",
   //    "likes":27,
   //    "id":"1122810327591928991",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12224456_175248682823294_1558707223_n.jpg"
   // },
   // {
   //    "code":"-FpTyHQcau",
   //    "likes":82,
   //    "id":"1118481761857291950",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/11326072_550275398458202_1726754023_n.jpg"
   // }
];


export default posts;
