(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('清镇市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"520181","properties":{"name":"清镇市","cp":[106.470714,26.556079],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BAB@BA@@D@B@B@@@BC@AD@BAB@B@F@F@D@B@B@B@B@D@B@@A@@BA@ABABA@@B@B@@@DBB@BBBB@BBFDFBBBD@@BBBB@BBBB@FDB@DBBB@@@@BB@@B@DAD@@@BADADCB@@@BAB@B@BBB@BB@@@@DDB@D@@@B@FC@@D@D@B@BBJFDBBD@@@B@BBBBB@BB@B@B@B@@ADABAB@BAB@@@BABAB@B@DAB@BABA@@@A@@@AA@@AA@A@A@@@AAAA@A@A@CBC@@@AAA@@C@A@CA@@AA@AAABA@A@@@A@@DC@@BA@@@CAAAC@G@A@AAAAC@A@A@@BCBCB@BC@AB@@AAA@@@AAA@AAA@AACAAAA@A@@@A@A@@C@@AAAAB@@A@A@@@AAA@@@A@@@A@CBA@@@@B@@@@@@@@A@@B@BB@A@@BA@@@@@CAA@A@@A@@AAA@CA@@@@ABA@A@@@AB@A@BAA@@@@E@A@A@@@@B@@@B@@@@@@@B@@@B@@@B@@AA@@BB@@@@@@@B@AA@AAAA@@AAA@@@A@@@A@@@@@ABA@@@A@AA@@@B@@@B@@@@B@@@AB@@@@BBA@@B@@@@@@@@B@@@@@@B@@A@@@@@A@@A@@A@@@@@AAA@@@C@A@A@A@A@@@@AA@@A@A@@AA@@@AA@BA@@@@B@@@AAAA@@@@@@@A@A@@@@@A@@@A@A@@@@A@@A@@@A@@@A@@B@AA@ABA@@AA@@@ABA@@A@@A@@@@@@@A@@A@@@BA@@@@@AA@@@@@@@@A@@@@A@@@@@@A@A@@@AA@AA@@@@@@@A@@@@AA@@@A@@@A@A@A@A@@@@@AB@@@@@@A@A@@@@@@@A@@@A@A@@@@@A@A@@@@BA@@@@@@BA@@@@@@B@@A@@@@A@@A@@B@@@A@@@A@A@A@@@A@@A@@@A@@@@@A@A@A@@BA@@@A@@@@@A@@@@@@A@@A@BA@@A@@@@@AB@@A@@AA@@@A@@@AA@@@BA@@AC@@AB@@@AA@@A@@@@AA@@BA@@@AAA@@@@@@@B@@@@A@@@@@@@@@@B@@@@@@@B@@@@A@@A@@A@@@@@@@@@@@@@@@@A@@@@@@@AB@@@@@@@@@BA@@A@@@@@@@A@@@@@A@@A@@@BA@@@@@@A@@@@@@@@@A@@@@@B@@BA@@@@@@@@B@@@@BB@@@@@@A@BB@@A@@@@@@@@@@@B@@@@@@@@@B@@B@@@@A@B@@@@A@@@@B@@B@@@@@@@BA@@@AB@@@AAA@@@AA@@BA@@A@@@@AB@@@@@@AAB@@@@@AB@@AA@@@@@@AAA@@AA@A@@@A@@@A@@@A@@@AA@@@@@A@BA@@@A@@AA@@@A@AA@B@AA@A@@AA@@@@AA@@@@@A@@@@AA@@@A@@AA@@@A@@@@AA@@@AA@AA@@@@@@ACA@@AA@@@@@BA@@@AAA@@@AB@@A@@B@@AB@@A@A@AA@@@B@@AA@@@@AA@@@@A@A@@@A@A@@AE@@A@@@AA@@@A@@@AAB@@AAC@A@@@B@@@@@@A@@BB@A@@B@@AACAA@@@@@@B@@@@@BA@@@@BA@@@@@AAA@A@AA@BA@AAAA@@@@@B@@@AEA@@A@A@A@@@AA@@@AA@@@A@@@ABABAB@@A@@@B@@@@@@B@@A@@@BBABBB@@@B@@@B@@@BB@A@@A@AA@@@@@@@@@A@@A@A@@@@@@A@@@AB@@@@A@@@@@@@AA@@@@@B@@@@BBA@@@@@@@AA@@AB@@@@@@A@@@B@@@@B@@@@@@@@@B@@@@A@@A@@AB@@@@@@@BA@@@A@A@@B@B@B@@@B@D@@@BBAB@@@A@B@@@@@@@@@@@@B@@B@B@@BDB@B@DB@@DD@@@@B@@@@@@BB@@@@@@@@B@@@@@@B@@@@@@@@B@@@@@@BB@@B@B@B@@@@@@@@@B@@B@@@@B@@@@@B@@@@@B@@@@@@@A@@@@BA@@@B@@@@@@@@B@@@@@@@@B@@@@B@@@BBA@@@B@BB@@@@@B@@@A@@B@@@@B@@@@@B@@@B@A@A@@B@@@@B@@D@@@B@@@B@@B@@@@@@@B@@B@A@@@@@AA@@@@@@@B@@A@@@AB@@@@@BA@@@@@B@@@B@@@@B@@@@A@@@AB@B@B@@@DC@@@AB@@@B@@A@@@@@@@B@@A@@@@BAB@BA@@@A@@@@B@@@@@@@@@@@B@@@@@@A@@B@@@@@@BD@BBB@@@@B@@@@@B@BBB@B@@@BA@@@@@ABA@@@@@@BAB@@@@@B@@@@@BB@@@@B@@@@@@BBA@@@@B@@@BA@@@@@@@BB@BAB@@C@A@A@@A@@@A@@@@ABA@@@@@A@A@@@@B@@@@@AAAA@@@AA@@@A@AB@@@B@@AA@@@@@@@C@@@@@@@@B@BA@@A@@AB@D@BB@A@@@@@A@C@A@@@A@@@@@@A@B@BABA@A@@A@@A@A@@@@B@@@@@@@B@@@@@B@@@@AB@BB@@BAB@@AB@@@F@@@BAB@@A@@B@@A@@B@@A@@@@B@@@B@@@B@@AB@@@B@@B@AB@@@BB@@@AB@@@@@B@@@@A@@@@B@@@BA@AB@@@B@@@@A@@A@@@@@@AB@@@@@@A@@A@@@@@@@AA@@@@B@@@@@@A@@A@@@@@@A@@@A@@AB@@A@@@@@@A@C@@@@A@@B@@AA@@ABA@@@@@@@@AA@@@A@@@@@A@@@@@A@@@@@@@@@A@A@AA@@AB@@A@@A@@A@A@@@A@A@A@@@@@@AA@@@@A@A@A@@@@B@@@@A@@@@@A@@@@@BA@@@@@@@C@@@A@@A@@@A@@A@@@AB@@@@@@@@@@BA@@AA@@B@@AB@@A@@@@AB@@@@@A@@B@@A@@@A@@BA@@@AA@@@@AB@BA@@A@@A@@A@A@A@@@@@AB@@@@@@A@@@A@CB@@@@@A@@@@@@BA@@B@BA@@@A@A@@AB@@A@@@@@@AA@BC@@@@@@@AA@@@@A@@@@A@@@@@@A@@@@AAA@@A@@@@@@@@BA@AB@B@@BB@@@@A@@@AAA@@@@@A@@@@B@BB@@B@@@@A@@@A@@A@@@@A@AA@@@@C@CA@@@AA@@A@A@AA@@@@BCB@BB@@BAD@B@B@B@@AB@@AAA@A@@B@@@B@@C@A@@@ABA@@@@@@@CAA@@@@ABABAA@AAA@@@@AACAAA@@BCAAAAA@AA@A@@AAA@@C@@@@@@BAD@B@@@B@@@B@BAB@BA@@AA@@@A@@@@@AB@@@BA@@@B@@@@BA@A@@@@A@@@@@@@BA@@@ABA@@@@A@@@@@@@@AB@@@@@A@@@@A@A@@A@@@@@BA@@BA@A@@@@A@A@@@A@@B@@@@@A@A@@@BB@B@@A@@AA@@@@@A@@BD@@B@AAB@@@@AA@A@@@@@B@@@B@@@@@@A@@B@@@B@B@@@@@AA@@@@B@@@@@@A@@@ABB@A@@A@A@@@A@@@@@@@B@B@@@BA@@@A@@@A@@B@@@@@A@BA@@@@@@@@A@@@AAA@@@@@AAA@AB@@A@@@@A@@A@AB@@@@@@A@AB@A@@@@@BA@@@CB@@ABA@@@@@@B@B@@CB@@B@@BA@@@@BA@A@@@A@A@@@AB@@A@A@@BA@ABC@A@@B@AA@@@AC@A@A@@@A@@A@AA@A@A@@@@@AB@BA@@@@@G@@@C@@@AAA@AA@@@@A@AB@@@@@@A@@CAA@@AA@C@AA@@@@@A@@AA@@@A@@A@@@@@@A@@A@@A@@B@@@AAAACA@AA@CA@@A@B@@@@A@@BAA@AAA@A@A@AA@A@CA@@A@A@AAAA@@@CA@@@CAAA@@C@E@C@AAB@CBA@A@@C@A@C@C@@@@BBBC@AFD@@DABAB@BABCD@BBJADBBDBBB@@B@ADABAHGHGDA@G@ECCCIEECCCKGAQIBCDC@@BAAABAAAA@JA@CAACBCBCAC@ADCBCBA@ACCAA@FAA@CCA@A@MCAC@A@@ADEB@D@@CACH@ACAGCCCAA@AA@@AB@BCD@@GBA@AB@BBBBBA@ABAAABBBDB@@BB@@@B@BBBBBB@@FAB@B@BAAABBBA@AB@D@D@BAB@DABA@@BABBDBBAB@@AA@@C@AB@@@B@B@BBF@B@DAB@BA@@B@@C@A@@BABA@@@A@@@EFC@E@EACCAAC@I@A@C@E@CBA@C@EBE@E@A@AB@BAD@D@BBBB@BDBAB@DBFBH@FDBD@FCDBBB@D@D@F@BBBDCJAB@@@DAB@BAB@@@BA@AB@@CBA@C@A@@@C@E@BBBBABAAC@CAA@ABC@A@AAA@A@A@ADCHDJBHDJBJ@D@J@BCJGLGJEBGB@@GBIBIDKJIJEDCBC@A@KAMCGCA@OEOEECCAA@IEKAK@OBIBC@EDCBIHCBCFCBE@EBAB@BDJDHABAB@BAB@@AB@@A@@@A@@B@@@@AB@@@BBB@BB@BBF@B@BBCDAB@D@BBB@F@BBDAB@@ABC@ABEDCBEDGFEJ@D@@@@A@AHEH@BGFQPCJAJCFA@@BCDCBULGFAJ@FPPbDB@\\DDDJFBBBNCNIZ@DCJABBh@BBHBDFTDP@B@BBZADKP@@EBYNMJaZABLzDFNVDDHFHDPBVDBB@B@BBB@@BBB@B@@AB@BBB@FDXHNDTT@BDDDDXPN@F@B@BA@@@@@ABABC@ABAN[JIDCDATIL@RHDDPV@@\\lBA@@@@@@@@F@@@F@JCBAVI@A@@FAHCH@HABBLDLJ@@@@DDHN@J@B@B@B@B@L@PDL@BFFDA@@D@B@@@D@BA@ABABA@@DAB@FEBADE@A@@BAB@BABAD@B@B@DABADABA@ABA@@B@@A@@@A@C@ABA@A@AAA@C@@@AA@AA@A@A@ABA@ABA@@@CB@BCBA@ADC@ABA@@BC@C@@B@BC@ABAB@DC@@FAB@BA@ABAB@BABADA@A@@@C@@AA@AAA@@BA@ABAB@B@D@BBB@BB@@BBBB@@@B@@BB@B@B@@@BBBBBB@FB@@D@BBD@B@DBDBDBB@B@@@BA@ABA@@BAB@@@B@B@@@B@BABA@@BA@A@AAA@@AAAAACAAA@CAAACA@AC@AA@AAA@EAA@AAAA@AA@CAA@A@C@A@A@@AC@@@ABA@A@ABABA@@@A@@ACAE@@@A@@@A@AB@BA@AFA@@BCB@BA@A@A@@@AAA@@A@@@A@AA@@AA@AAAAA@A@@@A@A@A@@AAC@@AA@@A@C@@BA@A"],"encodeOffsets":[[108993,27436]]}}],"UTF8Encoding":true});}));