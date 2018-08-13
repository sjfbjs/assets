(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('锦屏县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"522628","properties":{"name":"锦屏县","cp":[109.200534,26.676233],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@KEBEDKHIJQHKDGDABCDEJEHC@@FCJEHCHAHC@@JBFDDFHDFHHBDABEDK@I@EBEHIJCHCHGBEBE@GBABC@@B@BC@CBE@AFCFCB@@A@AAK@A@AA@ACAA@@BGBAB@@A@@@A@@AC@ECCCG@@B@B@@@B@@@B@@@B@B@@@B@@@@B@@B@@@@@B@@B@@B@B@@AB@@@D@@AAAACCAFAFCFGDIDQ@ABQCGEEEEIAKEEAG@CG@GDIBCBCBE@CBECGGEIIMIKI@AAE@E@EDEFAFBH@FAHA@ABC@CACGEGCGAO@A@AAICKEOIKGGECAECAAE@A@C@ABA@EACBA@A@ABA@@@@DABA@A@ABAB@@A@AA@B@@@AA@A@ABAAAAC@C@C@@@A@@BC@@AA@@BA@@@AAABC@A@AFC@ABB@@BAB@BB@BA@@@BABABA@BBAB@@CBCBIHABA@@BABD@HBBABBB@AD@FADEBC@@@ABA@ADC@A@ECAAAC@CAA@ABCAC@C@CCACBC@A@CACA@BAFA@AA@@@CBC@G@C@@D@HBD@FA@AB@AA@ACCECCAACCC@@B@@@@AAA@@D@B@BACAAA@CDEB@B@BAFAF@DB@A@@B@DAA@A@@AA@@A@AB@FDB@HEDAF@HCHAFCDA@A@AAACAEA@ACCECCACCA@A@ABCJADABEBABC@CA@BA@@BCDA@A@@@@A@@GAEA@@@FBB@D@BED@BA@ABCBCB@BBBCDADC@EBGAAA@@@ABA@AAAACA@CAEDKA@CEE@ADEB@F@DBDDB@BABA@AAAAAACGK@@BABC@AAAAA@AC@EACBA@A@ABA@AAA@ADBBBBFBBB@BCD@BA@E@A@@CAAAABCAACAE@AAC@A@A@A@@@BAAAA@@@AC@AA@@@AAABA@AACAAACBABABC@BF@HADABCBA@GAGAC@CAA@ABEB@@ABC@ABCEABAAC@@@EDA@A@@@@DC@AB@BA@A@CDA@AB@BCAA@@AB@@AAAA@AEA@C@AA@ACCA@BABA@@AAAAA@@ACC@@AAACAAA@ABA@A@ADC@ADAB@@A@A@@BC@@BA@AF@B@D@@EB@BCB@@@B@@A@@BCBABA@A@A@CBABC@ABABABC@C@@@@CAAB@AA@@GAC@@@A@ABEDCBAD@@ADABAD@B@BAB@BA@@BDH@@@D@B@BA@C@CBA@C@A@AAA@CC@AAAAAA@A@ACA@@AA@@@AA@@A@A@ED@A@AA@EAA@AAA@A@A@CC@@A@ABA@@BA@ABA@A@@D@@A@AAABC@AB@@A@AACEAABAAACAAA@B@DAB@BABAD@BAB@ACB@@C@E@EAAA@@CEA@AB@AABCC@@@A@A@@@@A@ACCBA@@AC@A@AC@@@B@D@BC@AD@AABA@@@B@@BA@@BBB@DB@DB@BB@ABC@@BBFAD@@CBEBC@CBEF@BDB@@BDA@ABE@AFBD@BA@ABA@EB@BBBC@AAABA@AAAA@@AA@ACC@@A@CE@AAAA@E@EC@A@AAC@AAAA@@AAABACAAAA@CAA@AACA@@ABAB@@@B@B@D@@EBAAAB@BA@ABABDBCBBDABABA@@@IACCC@EAAAIAEAAACACABA@AAA@AA@ACC@E@EAABADAAA@ABC@CBCBA@ABA@ADA@@BA@CB@BAB@B@BADADCDB@BBDBB@DBBDAB@BBB@B@BABAB@BC@AAA@AC@@CBEBADCAC@@@A@@D@B@B@@AB@D@BB@@BA@@BCBA@CAEBE@A@CFABABA@AHBD@BBBB@BBDDB@BBF@BBDBDAB@DBBDB@BD@D@@AB@BBB@@B@FBBBBB@@DB@B@@DB@@@BB@BB@@B@BB@BB@B@BDBBDBBB@@BBBB@BBBB@D@B@D@B@DAB@DFDBDBDDBFBDA@ABABCBA@DB@BFFJH@BB@@@BBDF@DBBDBDB@@DBBDBBBBDDDBAD@B@HABI@G@CDABAB@BBBBBADBBBB@B@@ABBBADCD@@@BBBBB@@DDDABBBD@B@B@BB@@D@B@@@D@BBBBABB@ABB@ABBB@@D@DA@E@C@GDABA@ABC@EBBB@BBF@BEHABABCB@@@B@@@DBBABBBABBB@BADAB@@FD@DFBBDDBD@BBB@DBDDHB@B@H@BDB@DBBB@@@@@B@B@@B@B@@CBABCACBA@E@@@AAA@AD@BBBBDB@BDBDBBBBBDBBBB@@DBDBB@@@D@F@BAF@DAD@DAB@LD@BD@DBB@B@B@DAD@B@DCHAB@JDL@BB@FBB@@B@@BBA@BBBDA@@B@@@@BB@DBB@@BB@@@BDBBD@B@D@@D@B@BDDBBABAB@FABAB@BA@ABBBBDCDBDABAFBDAF@DBBADDD@DABBBDDD@D@FE@AAA@ABEBAB@F@JGDAD@BBB@JABABC@EBAB@FBBB@BDBDBDADEBADCHEB@BBDBDJDD@BAB@BDDCBBBABC@@B@BBB@B@@@BABB@B@HAFCBC@ACI@ABC@@@ABAB@@BBB@@FDH@H@BB@@@@AFDBF@D@BB@DBBB@DB@BBBB@B@FFBABBB@B@@C@@B@BBB@B@@BAB@@FD@B@@D@BA@C@CDEBAB@D@B@FCD@D@DBB@B@BBBDBDBB@@DA@BDC@@HBB@BBABDD@BA@BBA@@B@BD@@BB@BB@DB@D@NCF@B@FBBBADB@F@B@D@BADBB@B@BCBA@@DA@AB@FA@@AADA@CBABABAB@DAB@BADABADADB@BBBF@DDD@B@BBB@@BBB@DA@A@BBABB@@@B@@AB@@BC@@B@@B@HFADBFBBBBB@BCBBB@BBDBBB@B@B@B@B@@D@DBH@D@BF@@CD@BB@@BB@BB@BB@BBB@B@B@@BDBB@B@@BDBF@B@B@BBB@B@BBBBB@@B@BA@@B@D@DBBBDFBB@BB@@BBB@B@D@B@BAF@DDB@@AD@F@F@@@B@BGBC@ABA@G@ADCBEBC@C@ABA@AB@@ACE@A@ABCDAFG@ABABABA@A@A@AAABABA@ABABABA@AD@@CACB@B@B@@ADABC@@B@B@BACA@ECABA@A@A@A@A@@D@F@HBBA@ABCB@@@"],"encodeOffsets":[[111915,27343]]}}],"UTF8Encoding":true});}));