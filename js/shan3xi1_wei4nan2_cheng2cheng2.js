(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('澄城县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610525","properties":{"name":"澄城县","cp":[109.93235,35.190245],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@@@GAC@@I@@A@C@@C@@E@@E@@EC@M@@A@E@@E@@@AU@AB@B@@A@C@@A@@@@C@@A@@AA@A@@@@A@ABAA@A@A@@@@@AAB@@@BA@A@@ABABADAB@@A@@@@@@@@@@A@C@@@A@@@@A@@@@@@@ABA@@@@@@ABAB@@C@@A@@B@@A@AB@@A@@@@@BA@A@@A@@@@@@@@A@AA@@@@@AA@AA@AAAA@@A@@B@@A@EF@BAB@@A@@@@B@BAB@@CAA@@AAAAA@@A@@AAA@@@E@@@@E@AA@AC@AAA@@@@A@@@@AACB@@@@A@@@@@A@@@@@@A@@@A@G@@G@E@@@@B@@A@@B@B@@A@@A@@A@@@@@@B@B@@@@AA@@@@@@@@AB@@@@@@@@A@@@@@A@@B@@@@AAA@A@@AC@@@@A@@@@@@CB@@@@AAC@A@@BA@@D@@AB@B@@AB@@@@A@A@@@ABC@@@AB@@@@A@@@@@A@A@@@@D@@A@A@@@@@@@AE@@G@C@@@AAAA@AAB@D@B@@OA@B@F@@A@@@@D@B@@@@A@I@@@AB@F@@A@@DABG@@@@@@@A@@@@B@@@@A@@BBB@BCDABA@@@@B@@@B@@@@CBA@@@@BAB@@@@@@B@@@BBB@B@@@@DA@A@A@@B@B@@@@B@@@A@@BB@B@@@BAAAB@@@@B@@B@@@@@@A@@B@@B@@@@@@B@@@AB@@AB@@A@@B@@@@FBD@@@@@A@@@@B@@@@FB@@B@@@@@@BA@@@@@@@A@A@@@A@AA@@@@AB@B@@B@B@@@@B@@@@A@@@BBBB@@@@B@@AB@B@@@BAB@@@@@@BB@@@@@C@AB@@@@@B@@@@A@@@A@@@A@@@@B@@@B@@@B@@A@@@@B@@AB@@@@@BB@B@BAB@@@B@B@B@@@@@BB@@@@A@A@AB@@A@@@@BB@BBB@@@AB@@A@@@@@@B@@B@BB@@D@BB@@A@A@@@@@@@B@@@@B@@A@A@@@@@@B@@@@B@@@BB@@@@@B@@B@@@A@@@@@@BB@BB@@BA@@@@@B@@B@@@B@@@@BA@G@A@@@@B@@@B@@@@@@@B@@A@@@@@B@@@@@A@ABAAA@@B@@B@@@@@B@@@@B@@@@@@@@B@@B@B@BBA@B@@@DB@@@ADB@@AB@@@F@@@@B@D@BF@@@D@B@@D@@@@@@B@@@@@@@@@B@@@BB@B@@@@@B@B@@@@BF@@@B@@A@@B@@@@@@@BA@@BA@@B@@@@A@@B@@A@@@A@@@@B@@@@@BABB@@B@@@@@@@B@@@@@@@B@@A@@B@@@B@@@@BB@@A@@BB@@B@B@@@DB@@D@@@@BABA@A@@@@@B@@@B@@BB@@@@@@A@@@@B@@@@@@A@@B@B@@@@B@@@@@B@@@@@@BA@@B@@A@@@AA@@A@@@BB@@@@@@@@@B@@@BA@@@A@@@@@A@@@A@@B@AA@@@A@A@@@@@@B@@BB@@A@A@@@@@@@@AAA@@@@A@@@@@A@@@@B@@@@A@@A@@@@AB@@@@@AA@B@@@@@B@AAA@@@A@A@@@B@B@@@AB@@@@@B@@@@AA@@@@A@@@@@@@@@A@AA@@BAB@@@B@@@@@FA@@AA@@CB@@A@@@C@@BA@@@@A@@A@@@A@@@CB@@EB@@@A@@@@CBAB@@@@@B@@A@@@A@A@AA@@AA@@A@@A@@A@C@CA@@@@BAB@A@BA@@@@@A@@@A@A@@@@@@@A@@AB@A@@ABA@A@@@@@@BCABC@@G@A@@AB@B@@@@AA@@@B@F@@@@@@@@@BA@@CACA@AA@@@A@EBAB@A@CAACB@@E@A@EB@A@@AC@A@@@AB@@@@@C@@@A@A@@@A@CAA@@@@@@A@@@A@@@@@@C@AA@AA@@BA@@A@@@@A@@@A@@B@@@@BD@BB@@BGFABAB@@@@BBBBB@BBB@B@BBBB@B@BAB@B@BAB@@@BAB@@B@@@@@B@B@@ABB@@@@@B@BAB@@AB@@@@A@@B@@@BDB@@B@BB@@BB@@@@ABA@A@@@A@@@@@AB@@@B@@@@CB@B@@@B@B@DBD@B@@AB@B@BB@DB@@@A@@@A@@@@B@@@@@@D@@B@@@B@B@@@@AA@A@@@@A@@@@B@B@B@@BB@B@@@@@@@AA@@@@@@FAB@@@BA@B@B@@@B@@@@BA@@B@@@BB@@@@@A@@AA@@@@B@B@B@B@B@@@@B@@@B@@@@B@@@@@AB@@BB@@@@B@BABA@@BA@@@@@@@D@B@@B@D@@@@@@B@@A@@@@@BB@@@@AB@BAB@@@@BBFABBBBDBB@@@@BA@@@C@@@A@A@@B@@CB@BA@CBA@A@@@A@@BB@B@D@@@B@D@BB@@B@@@B@B@BB@@B@B@B@@@@BA@@@A@@@@@@BABB@@@@@A@CB@@A@@BB@@@@@A@AA@@@B@@@B@@A@@@@@DB@@@B@@@@BBB@@@@@B@@@B@B@BB@@B@@@B@@@BBB@B@@@@@B@@@BB@@D@@BB@BB@@B@@B@@B@@@B@@@@@BB@@B@BBBBBB@@B@BB@@@B@@BBB@@@@@AB@@@@@B@@@B@BE@A@@@@B@BB@A@@BA@@@@BA@A@@BC@@@A@A@@@A@A@@@@BC@A@@@A@@B@@@@AB@@@BA@AB@@A@A@A@CBA@ABC@A@A@A@A@A@@@@@@A@@AA@@@A@@A@@@@B@@@BA@@@@@@E@A@@C@A@A@@@@@AA@@@A@@@A@@@@BAA@@AB@BAB@@@@BB@@BF@@@@@@ACA@@A@@@@@@A@@@@AACA@@@ACA@A@@CAA@B@@AB@@@@C@@@@BB@@@@BAB@B@@A@@@A@@BA@A@A@@@@A@@@A@AAA@@AC@@@@A@@AA@@@@BAB@@@A@A@@@@@@AA@@@@@B@@A@@A@AB@@@CA@@@@C@@@@@B@BA@A@@@A@@D@BBB@B@@@BAB@BAB@@A@A@A@AD@B@B@D@@BD@BBD@B@@@BA@@@CBA@CDCBA@CD@@@B@@ED@@A@@BB@DF@B@B@@ADADCB@BAB@@ABA@@@@@@@@B@B@B@B@@ABAFA@@@BB@BFD@B@@@B@B@@@@CBEDA@@B@@AD@@@B@BBB@B@@@B@@A@@@ABAACAA@ABA@A@@BA@ABA@CAA@@@@AAA@@A@A@A@ABA@C@A@@@CB@@@B@@ABIDGB@@ABA@ABCBCB@B@@@BBB@@@@ABA@AB@@AB@@AB@@C@A@A@C@CBC@C@C@A@A@CB@@A@CBA@@BA@@B@B@@BBDD@@B@B@@ADABAB@BA@BB@@@@BADAHABA@@@A@ECA@@@CA@@ABC@@@A@@B@@@B@B@BB@@F@@@B@BB@@BAB@B@@A@ABEBABGDCD@@@@@BBD@B@@BFBB@B@D@B@BAB@@ED@@CBABAB@B@@@B@F@D@@@BABADA@AB@@A@C@A@A@C@C@C@C@@@ABAB@@AD@@BD@BBBBBDBFF@@@B@@@@@BABA@@@ABAAA@C@A@A@CBA@CBEDC@@BAAABA@@@CB@BABAB@B@@@BBF@D@B@BB@@BB@@BDB@BBD@B@@@BA@@@C@@AC@A@CCCAAAA@@@A@A@AB@@@B@@@D@@@BBB@B@@AB@@@@@@@BB@B@@@BB@@@B@@B@@@BBBB@B@@BBBB@@@@@@A@@B@@BB@B@@@B@B@@@@@B@@B@B@@@B@@@B@@@B@@@@B@B@B@@@@@BBB@@@@@B@@@@@B@@B@@B@B@@ABA@@@@@@BD@@BA@@BA@@@@@@BB@BB@@B@@@@BBB@@AB@@CB@@@BB@@@B@BBB@@@B@@B@@@@@@AB@@BB@@@BB@@@AB@BB@ABB@@B@@@@@@B@@BB@@@A@@B@@BB@BB@@B@@@BBB@@AB@B@@@@BB@@@B@B@@@B@@BB@@@B@@BBBBB@A@BBBB@@@B@@@B@@BB@@B@@@B@@@B@@@B@B@@@@@BBB@B@@@@@B@@B@@@BB@@@B@@BDDB@@BD@@@BB@@BAB@@@@B@B@@@BAD@B@B@B@BBB@BB@@BB@@@@B@@A@AB@@@@B@BB@@@@@B@@BBB@@BB@@@@@@@@B@@@B@@B@B@@@@@@@A@@@@B@@@B@@BBBB@D@@A@@@@@@B@@B@B@@@@B@@AB@@B@@BB@A@@B@@@@@@B@@BB@A@@BABB@@@DB@DADBB@@@B@@@B@B@@@B@D@BB@@BBBBB@@@B@B@@BB@B@B@B@B@D@@@B@B@@@@@BAB@B@BA@A@@@A@@BA@@@@@@@@BA@@@A@@B@B@@@@@B@@@@A@@@@B@@@@@B@@@@@B@@@@@@@B@@@B@@@@@B@@ABCBA@AB@BAB@@BB@BBA@@D@BA@A@@@A@@@@BADA@@BAB@@@BA@@BA@@@A@@@@@@BA@@@@@@@@@A@@@@@AB@@@@@@@@BB@@@A@@BB@@@@@@@@B@@@@@@@B@@@B@@@@@B@@@B@@@B@@A@@B@B@@@@ABA@@B@@@BA@A@AB@@BB@@@BB@B@B@D@@@D@B@@@@A@@B@@A@@BAA@B@@AA@B@@@@@A@BA@@A@@@B@@A@@@AB@@@AAB@@@@@@@@A@@@A@@@A@AB@@A@C@@@@BB@@@@@BBB@@A@BBAB@@B@@B@@@@@B@@B@@B@@@@@BB@@B@@@B@@@@@@@BB@@B@BB@BBB@BDBBB@FDDBDBD@DBD@DBB@BBDBBBBB@@B@BA@@BABA@A@ADC@A@@BA@@@@B@@@@BB@@F@BBB@@BBB@@@BB@AB@B@@@B@B@D@@@@BB@B@@BBA@@BBB@@@@BB@B@@@B@B@@BD@@AB@B@@A@@@@ACC@A@@GDABCBA@@@@CA@@B@B@@@@A@@@@A@@AA@@@BC@@A@AA@@@@D@BAB@BA@CBA@@@@@@@@DBFDDBDB@@B@BAB@B@@@@B@@@@@@B@@@B@@A@@B@@@@@@@B@@@BA@@BAB@@@@BB@@BA@@@@@B@BB@@@@BA@@B@@@DCDA@A@@@A@@A@@A@@@A@A@AB@@AB@@@B@@ABA@AB@@@@BBB@BA@BB@B@@@@@BB@@@BBBBB@@B@@AB@@@B@@B@@BA@@@A@@@@AAA@@A@@@@@A@@B@B@B@@@@@@AAA@AA@@@BA@@B@BB@BB@B@@AD@@B@@@B@B@@@B@@@@BA@@@AD@BB@@@@A@@BB@@B@@@B@B@B@B@BB@@@B@@BA@ABA@@A@AA@@BABA@@BA@@B@AA@A@A@@@@@@B@B@DB@@@ADC@@@@B@@BAB@@BB@@BB@@B@@@BA@ABA@A@@B@B@@@@B@B@B@BB@@@B@@@@@@A@A@@BA@@B@DAD@@@@CA@@C@@@A@@@@B@@@@@@BB@@A@@@@B@@A@@BAB@B@D@F@@@@AAA@AA@@AAA@@AA@@@@@A@A@@@A@G@@@A@@@A@@@@@@@AAA@@@@@@@A@@B@@@@@DD@@BBB@@@B@@B@@@@@B@@B@BBB@@DB@@DB@@@@C@@B@@@@@@AA@@@@A@@@@@A@A@C@A@AB@@@@@@B@@@B@@B@@@BADAB@@@DBBB@@@@C@@@A@BBB@@B@@@@B@@@BB@@AF@B@B@@DA@@BB@@@@@BB@BBDAD@@@@@B@@@B@@A@@B@B@B@DAD@B@D@D@@@B@BA@AD@@@B@@B@@B@@A@@B@B@@@@@BB@B@@BB@@B@@B@B@@BB@@@BABB@@B@@B@@AB@B@@ADAB@B@@@B@@@BA@@B@BAD@B@@@@A@@@AB@@@D@B@@@@@BAB@D@F@B@B@BBB@@@B@BAB@F@@AB@B@B@@A@@@@BABA@BABAB@B@@@B@@@@B@@BBB@B@B@B@FB@BB@@@B@@@BA@@B@@@BBB@BB@@@B@@@B@@@@D@BB@@BD@BBDBB@B@BB@@B@@@@A@@@ABA@@B@B@@C@@@@@@@@B@@@@@B@@@@ABADCB@B@@ABABAAA@ABA@@@AB@@AB@@A@A@A@@BA@ABA@@@@AC@@@A@A@@@@BAB@@@@A@@BA@C@AAA@@@AC@@AAA@@@A@@B@@@BA@@@@@AA@@A@@@A@AAA@@@@AA@@BA@A@AA@@AA@@@@A@A@@@AAA@@@A@AAAA@@A@@@@@A@@@A@A@@ACAAAA@A@A@A@@B@BA@@@@@A@@B@@A@@@@@A@@A@A@@@A@@@@A@@@@BBBA@@@A@@B@@@B@@A@@@@A@@A@@@@@@@@DA@@A@A@@AA@@AA@@@@AB@@@@@A@AA@@B@@@EC@@@A@@B@DBB@@@@A@@C@AA@A@AB@B@B@@@@A@@AA@@A@A@@@@@@@@@@@DA@@AAC@A@AA@@@AB@D@BBD@@@@@@@AA@@@@@AA@@@@A@@BB@ABA@@@A@@@A@ABA@@@@@@B@@A@@@A@AB@@@@BB@@@@B@@@@@A@@D@B@@@A@A@AA@@@@@AA@@@BA@@AA@@@@BAB@@@@@@@@A@@AA@@A@A@A@@A@@AABA@@@AAAAA@AACAAAACECCE@@@@A@@@A@@B@D@@@@@@@@A@@C@A@@@@C@@@AD@@@@AA@@A@@@A@A@@@@A@A@@@@A@@@AB@@AB@B@@@@AAA@@A@@A@A@@@AA@@@@A@@@@B@@@B@A@@AAA@@@A@@@@CA@@C@E@@A@@@@BA@A@@BA@A@@@@@@A@@BA@@A@@@@@AB@@@B@@A@A@@@@@@HC@@@@@@@AA@@@@ABABADAB@@A@A@@@@BA@AA@@@A@@@A@BA@@AAB@@@B@B@B@@AB@@AAA@@AA@AAA@@BA@@@A@@AA@@@@DC@@B@AA@@@@C@@A@@AA@@@@@@B@B@@@@@B@@@B@BA@@DABA@CB@@AA@@AB@BAB@@@B@BA@@@AB@@@B@B@@@@@@@@AAA@@AA@ABA@AA@@@BA@@B@BA@@@A@@BAB@B@BA@ABABBF@D@@@@@@@@@@@B@HAD@DA@@@@AA@@@@@@@A@@BBB@D@BBD@@@@B@@D@@@@A@E@ABABA@A@A@@@@EC@@@A@@@@AAA@A@@@AA@@A@@@@AAB@@A@@A@@@@@@@AB@@@D@@@@@@@AAAA@@AB@@CA@@@@@@B@@AB@@@BA@@@@CA@@@@F@D@@@BB@@@@B@@@@A@@AA@A@@A@@@@@AAB@@AACAA@A@@BABAB@@@@A@@A@A@A@AA@@A@A@@AAC@@AAAAA@@@@@ABA@@@AA@@@@BA@@@@@@A@@@A@A@A@@@@AABAA@@@@A@@A@@A@@@@@BA@@@A@@AA@A@@A@@@@A@@A@@@B@@A@@@@@@@A@@AA@@@@A@AA@@@@@A@C@@B@@C@AB@B@B@@A@@@@@@@BDA@@B@@@BBB@B@BBB@@AB@B@@@@AB@B@@@@@B@@@B@@A@@@AA@@@@@@A@@@@D@B@@B@@@@B@@@@A@@B@@AB@@A@A@@@@AB@@AAC@@@@@@A@@A@CA@A@@@@@A@@B@@@BB@@@@@A@@@@@AAA@@@@A@@A@AB@@@A@@A@@@@@@B@@@BB@@B@D@B@@@@A@AB@@@@ACA@@@AAA@@AA@@@@@@BA@@BC@AAA@AA@AA@@B@BA@@@@BB@@BB@@BA@@@@AA@AB@@@B@@@DB@@B@@@@@BA@@A@@AA@@@@@@@D@@A@@A@CA@AA@@A@@B@B@DBBADB@A@@@@A@@A@@A@@@@@AA@@@@B@@@@A@@@@A@@@@@B@BA@@BA@@B@@AB@@@BB@@@@@@@A@@@@@@B@@@@BDBBBB@@@B@@@@@AAC@AA@@@GACCE@A@@@AA@@@A@@@@@AA@@@@AB@@A@EA@@A@BABA@ABA@@D@@@@A@@@A@@@@AAC@AAC@C@@@@AAA@@AAABAA@@AA@@B@B@@@@@AA@@A@@@AAB@AAB@@@@@B@@AAA@@B@@@@@@@@@AA@@A@@@@@@@@@DAB@BA@@@A@@A@@B@@A@@@AA@@@@A@@A@@AB@@@@@A@@A@@@@@@@A@B@@@@@CC@A@@B@@@@@@A@@BA@@@A@@@@C@@@@A@@@AB@@A@@ABA@@@@A@ABA@@@@A@@@A@@B@A@@@A@@@A@@A@@@@B@BABA@ABA@@@@BC@A@A@@@A@@AB@@@@@@@@A@@@A@@A@@@@@A@@CA@@B@B@@C@@@AA@@@@@@A@A@@@@@A@AB@@@@@@@@@A@A@@@@AB@@A@A@C@@BA@AAA@@AC@AAA@CAA@@@AE@@AAA@CA@@@@@A@@@A@@@@@ABA@AB@@A@@B@AA@@A@@@@ABAB@@@@@@AA@A@@@A@@@@A@@@@@@A@@@AABA@@B@@AB@@@DA@@@A@@DABAH@B@@@@@@A@@@@@C@@B@BA@@D@B@@@@A@A@@B@BAB@@@@@@A@AB@D@B@R@D@@@@@@B@@B@@A@@B@@@DAB@B@@@@@@@@B@@@@@@@BB@A@@BB@B@D@@AB@@@BABBBA@A@@B@@B@@BB@@B@@@@A@AF@BBB@@A@@@ABC@E@CBABA@ABA@AB@@A@A@@@@D@@E@@J@@@@A@C@@B@B@FAD@@BBD@@H@@A@CB@B@@@@@@EB@@FB@@E@@B@@ED@@@@ABA@@B@D@BA@CA@BAB@AI@AF@@FB@@EH@@@L@N@H@@C@A@@@@@A@C@@@A@@@C@@@@@E@C@A@A@C@A@A@C@@BA@@BA@@@EGA@@@@@AA@E@@BE@I@@@E@@@@EE@C@@B@D@@@@C@@F@@A@AFE@@FEB@FK@@K@A@@BEC@@E@@@@E@@A@C@@@@E@A@AA@@C@A@CA@@AA@C@@@@@AE@C@G@"],"encodeOffsets":[[112678,35825]]}}],"UTF8Encoding":true});}));