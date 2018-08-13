(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('壤塘县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"513230","properties":{"name":"壤塘县","cp":[100.978526,32.265796],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@A@AACE@EGEECAAAACACAG@AAAAAACEAGAC@AMEEEGCA@AEAAGCCAA@A@QKQKEACCEE@@CEIMEAECOAGCACKOGMIMCEAKCKEIEAECG@G@KFC@A@GCEAGAICuQCACCECKCSMEGCGCCGAEAC@CDILAHBJ@BABCBG@KDKDCBGVIRCNAFBBBDDFBFAFCJILCBABABAF@D@JBNBFDDFDNFDB@B@BQTGFCBE@CBABAFALADADBD@BHHNTDH@DABIFKDKDIAE@E@GBIFCDAFCHKLfOJMJCFEZ@PDHBFAFCFEDKBEBADCPGNYZA@E@GAOMEAUEKCQBiAC@CBGHMXAH@D@HDLJTDLJHJBB@LEB@BBD@HHFHDBPDFBFBHFFBB@DAB@BBRP\\ZJR@DDDDDFH@L@D@D@HBDBBJBVFJBLALAJBF@FDDHDJ@JANBJ@F@FADCDIHEFAF@NBHDLBDFDZPDDBFDF@BERADCDAD@BMJGFCD@BAB@BABABC@CBC@AAA@AACBEBCBA@C@AAA@C@A@A@@@A@AAA@@BAB@BAHCBEBC@G@aGgM[MKCI@K@EAMQC@C@EBMFGBEB@BCFABABGDCBAD@BCBGACB@@CNCHCDC@G@ABCDGFEBC@AACCCAAAA@_\\EF@D@DBFHJFVBNJT@F@BCBC@CAKCA@A@CDAJGLEFMFEBADAFAZABCBEAC@ONCDEBEBIBGBEBCFCLGNEHEBKFSRIVCHAH@DDDHHHDJBFARCJBJDHLADKNGLABC@EAGBGBMDI@G@GAC@A@CDQ`M^ADCBEBGAEBIFKJGFCBC@CCEIA@Q@@@C@G@A@ADCFEDA@C@GCC@CBQTKTCFAFBFDFHFDDBB@DABAB@BCDABAB@@A@@@AAC@A@A@A@CB@BAB@@AAAACAECE@AA@@AA@@A@@@A@@BABEDA@ABADAB@@@BB@BB@D@B@BAB@@ABAB@BAB@BD@BBBBBD@B@@@DAB@B@B@BA@ABA@@@CBCFABABABCB@B@@@B@B@@@BABEDA@A@A@AB@@@D@DAB@B@@C@@B@B@@BDABAFBD@@BFABAD@@CDCD@B@BBDLPHFBDADCBEFAFAD@JBLDHHLHJTXVRJDZHH@H@F@FBBDDLBDJHHFH@F@DBFFFPRbFDBBBD@FADCBEBMVAFBJBDTLTDdHHDHH@FB@AB@@B@@DEJELCHEJ@JDJBFAFAL@HDN@H@JANAL@JDJBLDJFHFFHBFAFAFCFCDAFAHCJGJGHAF@DBDDFHBJ@F@HCLGVEJQPKLKH@@GHAD@DFDHBBA@@FAFCHCJ@F@FCFCFCHEFCJCPERCFCFCBADBFFDF@DDDHFDBBC@I@IBIBGBCDAFCF@HBLJFFDHFFB@B@DADGDCDAFAD@FBDBDADADAD@JDJD@@D@HCFADABCBCFAJ@FCDABCD@D@FBF@B@BADABAFADBFAF@B@DADA@CBGBEFGDCHADAFDHBB@D@B@FCFGJQFCD@DBJFZXNJJFDBF@DAFAFBJBFDD@B@H@H@FBD@HHFHVPVZJJNHJFJFPJFDHDHBDBB@FBBBF@@@B@B@@C@@BA@@@C@@@ADCDCDA@AB@B@BBDBB@@@BA@@@A@A@@@A@@BAB@BBB@BBBB@B@@BD@@@@B@B@BA@@@A@C@C@@@ABA@@B@DBB@DBB@@B@@@BAB@@A@BB@@@@DBB@B@BA@ABEBC@A@@A@@AA@@A@CAA@A@AAAAC@A@E@EBE@ABA@ABAAC@C@A@ADADAFAB@BA@DB@BB@BABDHL@DAHABAFAFCHEBAFCDCFAFEBCBAHIDCDE@EBEBCBG@GBEBEBEBE@EBCBGBGBC@CLQBCDCBADCFEDCHCF@DAFCJGBAHGDCBCBGACEGACCCIK@CAM@OAC@CBG@I@E@GBCDEBEFMFCFCDCDANEHAH@D@F@FBH@FBLDJ@FBPBFBLDHDFBHBFAJ@DAJIDEDGBKBC@C@CBE@EAI@KBCBE@CBEBIFKBADGBADEDADCDADAJCHAFCF@DANAHAF@JCRENCDAPCDAL@HBFBFDF@DCBG@C@E@EDEBEFAD@JAH@DAJ@FAD@HAHADAFADCJGBCDCBCBCBEBEBEFKDQBE@G@GAAAKAE@EACACAEACACACACCECGCAAEEEAAA@ECECGCIEGIEECEACCGCECCACCEAECCEMAGCGACCCGACAC@ECCCCECC@ECGEKCICOAAAAAACEIGGGCCGGECEEEEECCEIGIKCEEGCGCGEOCE@EACEEGEKEGAGCCAEECCCGEMCGCMCGAECGACACAECEACAEAIBE@EBCFCDCH@H@D@NDNDD@DDH@FAH@BADCBEAK@CBENMNERCPFRLVAJMBYAM@A@CDEHIJIFCDABAD@D@FDLH@@B@FAFCHIB@DBHFFDD@B@HEBCBIBCBA@@BA@ADCBA@A@E@CBEAC@CBCDEDEFUDU@CAAA@QEEAG@KDMHIBGBMAK@CACEIM@CBIDKBCEKDUDKBGDEBCHAL@JBFBDAH@NCRSHYCQCQJ[DAPEFALALGFMKWYWUWOOUYQKAA@A@AAAAACCCAAAAA@A@@@AAAIGIGAAA@G@AAEGEIACCCA@CAGAECA@AA@CECCGACACAACCGECACC@ACCECAAEEEEA@CA@@ABCBEBEDA@"],"encodeOffsets":[[103767,32388]]}}],"UTF8Encoding":true});}));