// ==UserScript==
// @name Karla Replacer
// @namespace xyz
// @version 1.0.0
// @description Replace fonts with Karla. All credits to original script Noto Sans Replacer by Martin Davis and/or dedbbs1 greasyfork.org.
// @author xyz
// @license GPLv2
// @grant GM_addStyle
// @run-at document-start
// @include *
// ==/UserScript==

(function() {
let css = "";
css += `

@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital@1&display=swap');

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}

pre,
code,
kbd,
samp {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}

button,
input,
keygen,
optgroup,
select,
textarea {
  font-family: inherit;
}

html:lang(zh) body,
html:lang(zh-CN) body,
html:lang(zh-SG) body,
html:lang(zh-Hans) body,
html:lang(cmn) body,
html:lang(cmn-Hans) body,
html:lang(zh-cmn-Hans) body {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
  quotes: '???' '???';
}
html:lang(zh) pre,
html:lang(zh) code,
html:lang(zh) kbd,
html:lang(zh) samp,
html:lang(zh-CN) pre,
html:lang(zh-CN) code,
html:lang(zh-CN) kbd,
html:lang(zh-CN) samp,
html:lang(zh-SG) pre,
html:lang(zh-SG) code,
html:lang(zh-SG) kbd,
html:lang(zh-SG) samp,
html:lang(zh-Hans) pre,
html:lang(zh-Hans) code,
html:lang(zh-Hans) kbd,
html:lang(zh-Hans) samp,
html:lang(cmn) pre,
html:lang(cmn) code,
html:lang(cmn) kbd,
html:lang(cmn) samp,
html:lang(cmn-Hans) pre,
html:lang(cmn-Hans) code,
html:lang(cmn-Hans) kbd,
html:lang(cmn-Hans) samp,
html:lang(zh-cmn-Hans) pre,
html:lang(zh-cmn-Hans) code,
html:lang(zh-cmn-Hans) kbd,
html:lang(zh-cmn-Hans) samp {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}
html:lang(zh-TW) body,
html:lang(zh-Hant) body,
html:lang(cmn-Hant) body,
html:lang(zh-cmn-Hant) body {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
  quotes: '???' '???';
}
html:lang(zh-TW) pre,
html:lang(zh-TW) code,
html:lang(zh-TW) kbd,
html:lang(zh-TW) samp,
html:lang(zh-Hant) pre,
html:lang(zh-Hant) code,
html:lang(zh-Hant) kbd,
html:lang(zh-Hant) samp,
html:lang(cmn-Hant) pre,
html:lang(cmn-Hant) code,
html:lang(cmn-Hant) kbd,
html:lang(cmn-Hant) samp,
html:lang(zh-cmn-Hant) pre,
html:lang(zh-cmn-Hant) code,
html:lang(zh-cmn-Hant) kbd,
html:lang(zh-cmn-Hant) samp {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}
html:lang(zh-HK) body,
html:lang(zh-MO) body,
html:lang(yue) body,
html:lang(yue-Hant) body,
html:lang(zh-yue-Hant) body {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
  quotes: '???' '???';
}
html:lang(zh-HK) pre,
html:lang(zh-HK) code,
html:lang(zh-HK) kbd,
html:lang(zh-HK) samp,
html:lang(zh-MO) pre,
html:lang(zh-MO) code,
html:lang(zh-MO) kbd,
html:lang(zh-MO) samp,
html:lang(yue) pre,
html:lang(yue) code,
html:lang(yue) kbd,
html:lang(yue) samp,
html:lang(yue-Hant) pre,
html:lang(yue-Hant) code,
html:lang(yue-Hant) kbd,
html:lang(yue-Hant) samp,
html:lang(zh-yue-Hant) pre,
html:lang(zh-yue-Hant) code,
html:lang(zh-yue-Hant) kbd,
html:lang(zh-yue-Hant) samp {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}
html:lang(ja) body {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
  quotes: '???' '???';
}
html:lang(ja) pre,
html:lang(ja) code,
html:lang(ja) kbd,
html:lang(ja) samp {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}
html:lang(ko) body {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}
html:lang(ko) pre,
html:lang(ko) code,
html:lang(ko) kbd,
html:lang(ko) samp {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}
html:lang(de) body,
html:lang(nl) body,
html:lang(en) body,
html:lang(nb) body,
html:lang(no) body,
html:lang(is) body,
html:lang(da) body,
html:lang(sv) body,
html:lang(pt) body,
html:lang(es) body,
html:lang(fr) body,
html:lang(it) body,
html:lang(ro) body,
html:lang(lv) body,
html:lang(lt) body,
html:lang(pl) body,
html:lang(cs) body,
html:lang(sk) body,
html:lang(bs) body,
html:lang(hr) body,
html:lang(sr) body,
html:lang(bg) body,
html:lang(sl) body,
html:lang(ru) body,
html:lang(uk) body,
html:lang(be) body,
html:lang(el) body,
html:lang(hu) body,
html:lang(et) body,
html:lang(fi) body,
html:lang(tr) body,
html:lang(id) body,
html:lang(ms) body {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}
html:lang(x-western) body {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}
html:lang(x-unicode) body {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}
html:lang(de) pre,
html:lang(de) code,
html:lang(de) kbd,
html:lang(de) samp,
html:lang(nl) pre,
html:lang(nl) code,
html:lang(nl) kbd,
html:lang(nl) samp,
html:lang(en) pre,
html:lang(en) code,
html:lang(en) kbd,
html:lang(en) samp,
html:lang(nb) pre,
html:lang(nb) code,
html:lang(nb) kbd,
html:lang(nb) samp,
html:lang(no) pre,
html:lang(no) code,
html:lang(no) kbd,
html:lang(no) samp,
html:lang(is) pre,
html:lang(is) code,
html:lang(is) kbd,
html:lang(is) samp,
html:lang(da) pre,
html:lang(da) code,
html:lang(da) kbd,
html:lang(da) samp,
html:lang(sv) pre,
html:lang(sv) code,
html:lang(sv) kbd,
html:lang(sv) samp,
html:lang(pt) pre,
html:lang(pt) code,
html:lang(pt) kbd,
html:lang(pt) samp,
html:lang(es) pre,
html:lang(es) code,
html:lang(es) kbd,
html:lang(es) samp,
html:lang(fr) pre,
html:lang(fr) code,
html:lang(fr) kbd,
html:lang(fr) samp,
html:lang(it) pre,
html:lang(it) code,
html:lang(it) kbd,
html:lang(it) samp,
html:lang(ro) pre,
html:lang(ro) code,
html:lang(ro) kbd,
html:lang(ro) samp,
html:lang(lv) pre,
html:lang(lv) code,
html:lang(lv) kbd,
html:lang(lv) samp,
html:lang(lt) pre,
html:lang(lt) code,
html:lang(lt) kbd,
html:lang(lt) samp,
html:lang(pl) pre,
html:lang(pl) code,
html:lang(pl) kbd,
html:lang(pl) samp,
html:lang(cs) pre,
html:lang(cs) code,
html:lang(cs) kbd,
html:lang(cs) samp,
html:lang(sk) pre,
html:lang(sk) code,
html:lang(sk) kbd,
html:lang(sk) samp,
html:lang(bs) pre,
html:lang(bs) code,
html:lang(bs) kbd,
html:lang(bs) samp,
html:lang(hr) pre,
html:lang(hr) code,
html:lang(hr) kbd,
html:lang(hr) samp,
html:lang(sr) pre,
html:lang(sr) code,
html:lang(sr) kbd,
html:lang(sr) samp,
html:lang(bg) pre,
html:lang(bg) code,
html:lang(bg) kbd,
html:lang(bg) samp,
html:lang(sl) pre,
html:lang(sl) code,
html:lang(sl) kbd,
html:lang(sl) samp,
html:lang(ru) pre,
html:lang(ru) code,
html:lang(ru) kbd,
html:lang(ru) samp,
html:lang(uk) pre,
html:lang(uk) code,
html:lang(uk) kbd,
html:lang(uk) samp,
html:lang(be) pre,
html:lang(be) code,
html:lang(be) kbd,
html:lang(be) samp,
html:lang(el) pre,
html:lang(el) code,
html:lang(el) kbd,
html:lang(el) samp,
html:lang(hu) pre,
html:lang(hu) code,
html:lang(hu) kbd,
html:lang(hu) samp,
html:lang(et) pre,
html:lang(et) code,
html:lang(et) kbd,
html:lang(et) samp,
html:lang(fi) pre,
html:lang(fi) code,
html:lang(fi) kbd,
html:lang(fi) samp,
html:lang(tr) pre,
html:lang(tr) code,
html:lang(tr) kbd,
html:lang(tr) samp,
html:lang(id) pre,
html:lang(id) code,
html:lang(id) kbd,
html:lang(id) samp,
html:lang(ms) pre,
html:lang(ms) code,
html:lang(ms) kbd,
html:lang(ms) samp {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}
html:lang(de) body {
  quotes: '???' '???';
}
html:lang(nb) body,
html:lang(no) body,
html:lang(es) body {
  quotes: '??' '??';
}
html:lang(fr) body {
  quotes: '?? ' ' ??';
}
html:lang(ar) body,
html:lang(he) body,
html:lang(th) body,
html:lang(vi) body {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}
html:lang(ar) pre,
html:lang(ar) code,
html:lang(ar) kbd,
html:lang(ar) samp,
html:lang(he) pre,
html:lang(he) code,
html:lang(he) kbd,
html:lang(he) samp,
html:lang(th) pre,
html:lang(th) code,
html:lang(th) kbd,
html:lang(th) samp,
html:lang(vi) pre,
html:lang(vi) code,
html:lang(vi) kbd,
html:lang(vi) samp {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}
html:lang(x-western) kbd,
html:lang(x-western) samp {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}
html:lang(x-unicode) kbd,
html:lang(x-unicode) samp {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
}

/* ???????????? */
@font-face {
  font-family: 'Georgia';
  src: local('Karla');
}
@font-face {
  font-family: 'New York';
  src: local('Karla');
}
@font-face {
  font-family: 'Times';
  src: local('Karla');
}
@font-face {
  font-family: 'Times New Roman';
  src: local('Karla');
}
@font-face {
  font-family: 'Time New Roman';
  src: local('Karla');
}
@font-face {
  font-family: 'Arial';
  src: local('Karla');
}
@font-face {
  font-family: 'Helvetica';
  src: local('Karla');
}
@font-face {
  font-family: 'Helvetica Neue';
  src: local('Karla');
}
@font-face {
  font-family: 'Open Sans';
  src: local('Karla');
}
@font-face {
  font-family: 'San Francisco' 'Segoe UI';
  src: local('Karla');
}
@font-face {
  font-family: 'Tahoma';
  src: local('Karla');
}
@font-face {
  font-family: 'Trebuchet';
  src: local('Karla');
}
@font-face {
  font-family: 'Trebuchet MS';
  src: local('Karla');
}
@font-face {
  font-family: 'Ubuntu';
  src: local('Karla');
}
@font-face {
  font-family: 'Verdana';
  src: local('Karla');
  }
@font-face {
  font-family: 'Consolas';
  src: local('Fixedsys Excelsior 3.01');
}
@font-face {
  font-family: 'Courier';
  src: local('Fixedsys Excelsior 3.01');
}
@font-face {
  font-family: 'Courier New';
  src: local('Fixedsys Excelsior 3.01');
}
@font-face {
  font-family: 'DejaVu Sans Mono';
  src: local('Fixedsys Excelsior 3.01');
}
@font-face {
  font-family: 'Lucida Console';
  src: local('Fixedsys Excelsior 3.01');
}
@font-face {
  font-family: 'SF Mono';
  src: local('Fixedsys Excelsior 3.01');
}
@font-face {
  font-family: 'Ubuntu Mono';
  src: local('Fixedsys Excelsior 3.01');
}
@font-face {
  font-family: 'SimSun';
	src: local('Noto Sans CJK SC');
}
@font-face {
  font-family: 'SimSun-ExtB';
	src: local('Noto Sans CJK SC');
}
@font-face {
  font-family: '??????';
	src: local('Noto Sans CJK SC');
}
@font-face {
  font-family: 'NSimSun';
	src: local('Noto Sans CJK SC');
}
@font-face {
  font-family: '?????????';
	src: local('Noto Sans CJK SC');
}
@font-face {
  font-family: 'SimHei';
	src: local('Noto Sans CJK SC');
}
@font-face {
  font-family: '??????';
	src: local('Noto Sans CJK SC');
}
@font-face {
  font-family: 'Microsource Han Sans SC';
	src: local('Noto Sans CJK SC');
}
@font-face {
	font-family: 'Microsoft YaHei UI';
	src: local('Noto Sans CJK SC');
	}
@font-face {
  font-family: 'Microsoft YaHei';
	src: local('Noto Sans CJK SC');
}
@font-face {
  font-family: '????????????';
	src: local('Noto Sans CJK SC');
}
@font-face {
  font-family: 'STHeiti SC';
	src: local('Noto Sans CJK SC');
}
@font-face {
  font-family: 'PingFang SC';
	src: local('Noto Sans CJK SC');
}
@font-face {
  font-family: '??????-???';
	src: local('Noto Sans CJK SC');
}
@font-face {
  font-family: 'MingLiU';
	src: local('Noto Sans CJK TC');
}
@font-face {
  font-family: 'MingLiU-ExtB';
	src: local('Noto Sans CJK TC');

}
@font-face {
  font-family: 'PMingLiU';
	src: local('Noto Sans CJK TC');
}
@font-face {
  font-family: 'PMingLiU-ExtB';
	src: local('Noto Sans CJK TC');
}
@font-face {
  font-family: 'Microsoft JhengHei UI';
	src: local('Noto Sans CJK TC');
}
@font-face {
  font-family: 'Microsoft JhengHei';
	src: local('Noto Sans CJK TC');
}
@font-face {
  font-family: '???????????????';
	src: local('Noto Sans CJK TC');
}
@font-face {
  font-family: 'STHeiti TC';
	src: local('Noto Sans CJK TC');
}
@font-face {
  font-family: 'PingFang TC';
	src: local('Noto Sans CJK TC');
}
@font-face {
  font-family: '??????-???';
	src: local('Noto Sans CJK TC');
}
@font-face {
  font-family: 'MingLiU_HKSCS';
	src: local('Noto Sans CJK TC');
}
@font-face {
  font-family: 'MingLiU_HKSCS-ExtB';
	src: local('Noto Sans CJK HK');
}
@font-face {
  font-family: 'PingFang HK';
	src: local('Noto Sans CJK HK');
}
@font-face {
  font-family: '??????-???';
	src: local('Noto Sans CJK HK');
}
@font-face {
  font-family: 'MS Mincho';
	src: local('Noto Sans CJK JP');
}
@font-face {
  font-family: 'MS PMincho';
  src: local('Noto Sans CJK JP');
}
@font-face {
  font-family: 'Meiryo';
	src: local('Noto Sans CJK JP');
}
@font-face {
  font-family: 'Meiryo UI';
	src: local('Noto Sans CJK JP');
}
@font-face {
  font-family: 'MS Gothic';
	src: local('Noto Sans CJK JP');
}
@font-face {
  font-family: 'MS PGothic';
	src: local('Noto Sans CJK JP');
}
@font-face {
  font-family: 'MS UI Gothic';
	src: local('Noto Sans CJK JP');
}
@font-face {
  font-family: 'Yu Gothic';
	src: local('Noto Sans CJK JP');
}
@font-face {
  font-family: 'Yu Gothic UI';
	src: local('Noto Sans CJK JP');
}
@font-face {
  font-family: 'Malgun Gothic';
	src: local('Noto Sans CJK KR');
}
/* ?????????????????? */
`;
if ((location.hostname === "423down.com" || location.hostname.endsWith(".423down.com"))) {
  css += `
    .excerpt h2 {
      height: unset;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `;
}
if ((location.hostname === "baidu.com" || location.hostname.endsWith(".baidu.com"))) {
  css += `
    * {
		font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL' !important;
  `;
}
if (new RegExp("^(?:https://www.baidu.com/#?)\$").test(location.href) || location.href.startsWith("https://www.baidu.com/?tn=")) {
  css += `
    .s_ipt,
    .new-pmd .c-font-medium {
		font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL' !important;
    }
  `;
}
if ((location.hostname === "greasyfork.org" || location.hostname.endsWith(".greasyfork.org"))) {
  css += `
    #script_version_code,
    .ace_editor {
			font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL' !important;o Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
    }
  `;
}
if ((location.hostname === "github.com" || location.hostname.endsWith(".github.com"))) {
  css += `
    .text-mono {
		font-family: 'Fixedsys Excelsior 3.01', 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL' !important;
    }

    .blob-num,
    .blob-code-inner {
		font-family: 'Fixedsys Excelsior 3.01', 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL' !important;
    }
  `;
}
if ((location.hostname === "ithome.com" || location.hostname.endsWith(".ithome.com"))) {
  css += `
    .post_comment {
			font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL' !important;
    }
  `;
}
if ((location.hostname === "jiemian.com" || location.hostname.endsWith(".jiemian.com"))) {
  css += `
    .article-content {
		font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL' !important;
    }

    #ad_header_top,
    .cnzz-ads,
    .jm-app {
      display: none !important;
    }
  `;
}
if ((location.hostname === "so.com" || location.hostname.endsWith(".so.com"))) {
  css += `
    * {
	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL' !important;    }

    #footer a[href="http://mse.360.cn"],
  #footer a[href="http://mse.360.cn"] + span
    {
      display: none !important;
    }
  `;
}
if ((location.hostname === "sogou.com" || location.hostname.endsWith(".sogou.com"))) {
  css += `
    * {
		font-fam	font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL' !important;ily: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL';
    }

    .erwm-box {
      display: none !important;
    }
  `;
}
if ((location.hostname === "sspai.com" || location.hostname.endsWith(".sspai.com"))) {
  css += `
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .title,
    .content,
    p,
    a {
		font-family: 'Karla', 'Noto Sans Adlam Unjoined', 'Noto Sans Anatolian Hieroglyphs', 'Noto Sans Armenian Condensed', 'Noto Sans Avestan', 'Noto Sans Balinese', 'Noto Sans Bamum', 'Noto Sans Bassa Vah', 'Noto Sans Batak', 'Noto Sans Bengali Condensed', 'Noto Sans Bhaiksuki', 'Noto Sans Chorasmian', 'Noto Sans Canadian Aboriginal', 'Noto Sans Carian', 'Noto Sans Caucasian Albanian', 'Noto Sans Brahmi', 'Noto Sans Buginese', 'Noto Sans Buhid', 'Noto Sans Chakma', 'Noto Sans Cham', 'Noto Sans Coptic', 'Noto Sans Cuneiform', 'Noto Sans Cypriot', 'Noto Sans Cypro Minoan', 'Noto Sans Deseret', 'Noto Sans Duployan', 'Noto Sans Egyptian Hieroglyphs', 'Noto Sans Elbasan', 'Noto Sans Elymaic', 'Noto Sans Cherokee', 'Noto Sans Devanagari Condensed', 'Noto Sans Ethiopic Condensed', 'Noto Sans Georgian Condensed', 'Noto Sans Glagolitic', 'Noto Sans Gothic', 'Noto Sans Grantha', 'Noto Kufi Arabic', 'Noto Sans Gujarati Condensed', 'Noto Sans Gunjala Gondi', 'Noto Sans Gurmukhi Condensed', 'Noto Sans Hanifi Rohingya', 'Noto Sans Hanunoo', 'Noto Sans Hatran', 'Noto Sans Hebrew Condensed', 'Noto Sans Imperial Aramaic', 'Noto Sans Indic Siyaq Numbers', 'Noto Sans Inscriptional Pahlavi', 'Noto Sans Inscriptional Parthian', 'Noto Sans Javanese', 'Noto Sans Kaithi', 'Noto Sans Kannada Condensed', 'Noto Sans Kayah Li', 'Noto Sans Kharoshthi', 'Noto Sans Khmer Condensed', 'Noto Sans Khojki', 'Noto Sans Khudawadi', 'Noto Sans Lao Condensed', 'Noto Sans Lepcha', 'Noto Sans Limbu', 'Noto Sans Linear A', 'Noto Sans Linear B', 'Noto Sans Lisu', 'Noto Sans Lycian', 'Noto Sans Lydian', 'Noto Sans Mahajani', 'Noto Sans Mandaic', 'Noto Sans Manichaean', 'Noto Sans Marchen', 'Noto Sans Masaram Gondi', 'Noto Sans Mayan Numerals', 'Noto Sans Medefaidrin', 'Noto Sans Meetei Mayak', 'Noto Sans Mende Kikakui', 'Noto Sans Meroitic', 'Noto Sans Miao', 'Noto Sans Modi', 'Noto Sans Mongolian', 'Noto Sans Mro', 'Noto Sans Multani', 'Noto Sans Myanmar Condensed', 'Noto Sans Nabataean', 'Noto Sans Nandinagari', 'Noto Sans Newa', 'Noto Sans New Tai Lue', 'Noto Sans NKo', 'Noto Sans Nushu', 'Noto Sans Ogham', 'Noto Sans Ol Chiki', 'Noto Sans Old Hungarian', 'Noto Sans Old Italic', 'Noto Sans Old North Arabian', 'Noto Sans Old Permic', 'Noto Sans Old Persian', 'Noto Sans Old Sogdian', 'Noto Sans Old South Arabian', 'Noto Sans Old Turkic', 'Noto Sans Osmanya', 'Noto Sans Oriya Condensed', 'Noto Sans Osage', 'Noto Sans Pahawh Hmong', 'Noto Sans Palmyrene', 'Noto Sans Pau Cin Hau', 'Noto Sans Phags Pa', 'Noto Sans Phoenician', 'Noto Sans Psalter Pahlavi', 'Noto Sans Rejang', 'Noto Sans Runic', 'Noto Sans Samaritan', 'Noto Sans Saurashtra', 'Noto Sans Malayalam Condensed', 'Noto Sans Sharada', 'Noto Sans Shavian', 'Noto Sans Siddham', 'Noto Sans Sign Writing', 'Noto Sans Sinhala Condensed', 'Noto Sans Sogdian', 'Noto Sans Sora Sompeng', 'Noto Sans Soyombo', 'Noto Sans Sundanese', 'Noto Sans Syloti Nagri', 'Noto Sans Syriac', 'Noto Sans Tagalog', 'Noto Sans Tagbanwa', 'Noto Sans Tai Le', 'Noto Sans Tai Tham', 'Noto Sans Takri', 'Noto Sans Tamil Condensed', 'Noto Sans Tangsa', 'Noto Sans Telugu Condensed', 'Noto Sans Thaana', 'Noto Sans Tibetan', 'Noto Sans Thai Condensed', 'Noto Sans Tifinagh', 'Noto Sans Tifinagh Adrar', 'Noto Sans Tifinagh Agraw Imazighen', 'Noto Sans Tifinagh Ahaggar', 'Noto Sans Tifinagh Air', 'Noto Sans Tifinagh APT', 'Noto Sans Tifinagh Azawagh', 'Noto Sans Tifinagh Ghat', 'Noto Sans Tifinagh Hawad', 'Noto Sans Tifinagh Rhissalxa', 'Noto Sans Tifinagh SIL', 'Noto Sans Tifinagh Tawellemmet', 'Noto Sans Tirhuta', 'Noto Sans Ugaritic', 'Noto Nastaliq Urdu', 'Noto Sans Vai', 'Noto Sans Vithkuqi', 'Noto Sans Wancho', 'Noto Sans Warang Citi', 'Noto Sans Yi', 'Noto Sans Zanabazar Square', 'Noto Sans CJK JP', 'Noto Sans CJK KR', 'Noto Sans CJK SC', 'Noto Sans CJK TC', 'Noto Sans CJK HK', 'Noto Serif Dives Akuru', 'Noto Serif Dogra', 'Noto Serif Makasar', 'Noto Serif Nyiakeng Puachue Hmong', 'Noto Serif Old Uyghur', 'Noto Serif Tangut', 'Noto Serif Toto', 'Noto Serif Yezidi', 'Noto Traditional Nushu', 'Noto Color Emoji', 'Noto Emoji', 'Noto Music', 'Noto Sans Math', 'Noto Sans Symbols', 'Noto Sans Symbols2', 'Segoe UI', 'Segoe UI Historic', 'Unicode BMP Fallback SIL' !important;
    }
  `;
}
if ((location.hostname === "userstyles.org" || location.hostname.endsWith(".userstyles.org"))) {
  css += `
    .ad,
    #top_android_button,
    .android_button_button,
    .android_button_banner,
    .walking {
      display: none !important;
    }
  `;
}
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();
