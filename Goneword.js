/**
 * DoneWord.js - Complete Descriptive Edition (All Classes)
 * Topic: अनेक शब्दों के लिए एक शब्द (One Word Substitution)
 */

if (typeof Hindi === 'undefined') { window.Hindi = {}; }

Hindi.oneword = {
    title: "अनेक शब्दों के लिए एक शब्द: भाषा का संक्षेपण ✍️",
    content: `
        <section style="text-align: left; padding: 10px;">
            
            <div style="background: #f0f7ff; padding: 25px; border-radius: 25px; border-left: 10px solid #4D96FF; margin-bottom: 30px;">
                <h2 style="color: #4D96FF; font-size: 2.2rem; margin-top:0;">1. वाक्यांश के लिए एक शब्द क्या है?</h2>
                <p style="font-size: 1.4rem; line-height: 1.8;">
                    <b>परिभाषा:</b> जब किसी पूरे वाक्य या वाक्यांश के अर्थ को केवल <b>एक शब्द</b> में समेट दिया जाता है, तो उसे 'अनेक शब्दों के लिए एक शब्द' कहते हैं। 
                    इससे भाषा में कम शब्दों में अधिक बात कही जा सकती है।
                </p>
                <div style="background: white; padding: 15px; border-radius: 12px; margin-top: 15px; border: 1px dashed #4D96FF;">
                    <p style="font-size: 1.3rem; margin: 5px 0;"><i>उदाहरण 1:</i> जो कभी न मरे - <b>अमर</b></p>
                    <p style="font-size: 1.3rem; margin: 5px 0;"><i>उदाहरण 2:</i> जिसका कोई शत्रु न हो - <b>अजातशत्रु</b></p>
                    <p style="font-size: 1.3rem; margin: 5px 0;"><i>उदाहरण 3:</i> जो ईश्वर में विश्वास रखता हो - <b>आस्तिक</b></p>
                </div>
            </div>

            <h2 style="color: #333; font-size: 2rem; border-bottom: 3px solid #333; display: inline-block; margin-bottom: 20px;">महत्वपूर्ण वाक्यांशों की सूची</h2>
            
            <div style="height: 450px; overflow-y: auto; background: #fff; padding: 20px; border-radius: 20px; border: 2px solid #eee;">
                <div style="display: grid; grid-template-columns: 1fr; gap: 10px;">
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>1. जिसकी कल्पना न की जा सके:</b> अकल्पनीय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>2. जिसका अंत न हो:</b> अनंत</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>3. दोपहर के बाद का समय:</b> अपराह्न</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>4. जिसे जीता न जा सके:</b> अजेय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>5. जिसका जन्म न हुआ हो:</b> अजन्मा</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>6. जो दिखाई न दे:</b> अदृश्य</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>7. जिसका कोई समान न हो:</b> अद्वितीय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>8. जो कम बोलता हो:</b> मितभाषी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>9. जो बहुत बोलता हो:</b> वाचाल</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>10. जिसे टाला न जा सके:</b> अनिवार्य</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>11. जो कानून के विरुद्ध हो:</b> अवैध / वैधानिक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>12. जिसका भाग्य अच्छा न हो:</b> अभागा</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>13. जो ईश्वर में विश्वास न रखे:</b> नास्तिक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>14. जिसके माता-पिता न हों:</b> अनाथ</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>15. जो उपकार को मानता हो:</b> कृतज्ञ</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>16. जो उपकार को न मानता हो:</b> कृतघ्न</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>17. जानने की इच्छा रखने वाला:</b> जिज्ञासु</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>18. जो सब कुछ जानता हो:</b> सर्वज्ञ</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>19. हाथ से लिखा हुआ:</b> हस्तलिखित</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>20. जल में रहने वाला:</b> जलचर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>21. जो कभी न मरे:</b> अमर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>22. जो थोड़ा जानता हो:</b> अल्पज्ञ</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>23. जिसे क्षमा न किया जा सके:</b> अक्षम्य</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>24. जिसका कोई शत्रु न हो:</b> अजातशत्रु</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>25. जो कभी बूढ़ा न हो:</b> अजर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>26. जो गिना न जा सके:</b> अनगिनत</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>27. जिसका कोई आकार न हो:</b> निराकार</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>28. जो आँखों के सामने हो:</b> प्रत्यक्ष</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>29. जो आँखों के सामने न हो:</b> परोक्ष / अप्रत्यक्ष</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>30. जहाँ पहुँचा न जा सके:</b> अगम</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>31. जो बहुत कीमती हो:</b> बहुमूल्य</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>32. जो पहले न पढ़ा गया हो:</b> अपठित</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>33. जिसकी कोई उपमा न हो:</b> अनुपम</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>34. जिसकी गहराई का पता न हो:</b> अथाह</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>35. जो पीने योग्य हो:</b> पेय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>36. जिसके हृदय में दया हो:</b> दयालु</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>37. जिसके हृदय में दया न हो:</b> निर्दय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>38. जो मीठा बोलता हो:</b> मृदुभाषी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>39. जो मांस खाता हो:</b> मांसाहारी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>40. जो फल खाता हो:</b> फलाहारी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>41. जो शाक-सब्जी खाता हो:</b> शाकाहारी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>42. जो पढ़ा-लिखा हो:</b> साक्षर / शिक्षित</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>43. जो पढ़ा-लिखा न हो:</b> निरक्षर / अनपढ़</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>44. जो सब कुछ त्याग दे:</b> त्यागी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>45. जो शरण में आया हो:</b> शरणागत</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>46. जिसका कोई आधार न हो:</b> निराधार</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>47. जिसकी आयु लंबी हो:</b> दीर्घायु</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>48. जिसकी आयु कम हो:</b> अल्पायु</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>49. जो सहन करने योग्य न हो:</b> असह्य</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>50. जो सहनशील हो:</b> सहिष्णु</div>

        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>51. हाथ से लिखा हुआ:</b> हस्तलिखित</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>52. हृदय को छूने वाला:</b> हृदयस्पर्शी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>53. दूसरों का उपकार करने वाला:</b> परोपकारी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>54. अपने परिवार के साथ:</b> सपरिवार</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>55. जिसमें विष हो:</b> विषैला</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>56. जिसमें जहर न हो:</b> निर्विष</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>57. जहाँ अनाथ रहते हों:</b> अनाथालय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>58. जहाँ दवा मिलती हो:</b> औषधालय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>59. जहाँ पुस्तकें पढ़ी जाती हों:</b> पुस्तकालय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>60. भाषण देने वाला:</b> वक्ता</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>61. सुनने वाला:</b> श्रोता</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>62. देखने वाला:</b> दर्शक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>63. कविता लिखने वाला:</b> कवि</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>64. कविता लिखने वाली:</b> कवयित्री</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>65. जो अभिनय करता हो:</b> अभिनेता</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>66. जो अभिनय करती हो:</b> अभिनेत्री</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>67. जो चित्र बनाता हो:</b> चित्रकार</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>68. जो व्यापार करता हो:</b> व्यापारी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>69. जो खेती करता हो:</b> किसान / कृषक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>70. जो मूर्ति बनाता हो:</b> मूर्तिकार</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>71. जो लोहे का काम करे:</b> लोहार</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>72. जो सोने का काम करे:</b> सुनार</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>73. मिट्टी के बर्तन बनाने वाला:</b> कुम्हार</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>74. लकड़ी का काम करने वाला:</b> बढ़ई</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>75. जो पढ़ाता हो:</b> अध्यापक / शिक्षक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>76. जो पढ़ाती हो:</b> अध्यापिका / शिक्षिका</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>77. जो बीमार का इलाज करे:</b> चिकित्सक / डॉक्टर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>78. रक्षा करने वाला:</b> रक्षक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>79. विनाश करने वाला:</b> भक्षक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>80. गाँव में रहने वाला:</b> ग्रामीण</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>81. शहर में रहने वाला:</b> शहरी / नागरिक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>82. विदेश में रहने वाला:</b> विदेशी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>83. अपने देश का:</b> स्वदेशी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>84. जो साथ पढ़ता हो:</b> सहपाठी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>85. जो साथ काम करता हो:</b> सहकर्मी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>86. प्रतिदिन होने वाला:</b> दैनिक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>87. सप्ताह में एक बार होने वाला:</b> साप्ताहिक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>88. पंद्रह दिन में एक बार होने वाला:</b> पाक्षिक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>89. महीने में एक बार होने वाला:</b> मासिक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>90. वर्ष में एक बार होने वाला:</b> वार्षिक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>91. सौ वर्ष का समय:</b> शताब्दी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>92. जल में जन्म लेने वाला:</b> जलज</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>93. कीचड़ में जन्म लेने वाला:</b> पंकज</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>94. अंडे से जन्म लेने वाला:</b> अंडज</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>95. स्वदे (पसीने) से जन्म लेने वाला:</b> स्वेदज</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>96. जिसका आदि (शुरुआत) न हो:</b> अनादि</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>97. जिसे टाला न जा सके:</b> अपरिहार्य / अनिवार्य</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>98. जो पुरुष कविता करता हो:</b> कवि</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>99. जिसकी उपमा न दी जा सके:</b> अनुपम</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>100. जिसे जानना आवश्यक हो:</b> ज्ञेय</div>

        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>101. जिसने इंद्रियों को जीत लिया हो:</b> जितेन्द्रिय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>102. मोक्ष की इच्छा रखने वाला:</b> मुमुक्षु</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>103. जो युद्ध करने का इच्छुक हो:</b> युयुत्सु</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>104. जिसके हृदय में ममता न हो:</b> निर्मम</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>105. जिसकी गर्दन सुंदर हो:</b> सुग्रीव</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>106. हाथी हाँकने वाला छोटा भाला:</b> अंकुश</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>107. जो पहले कभी न हुआ हो:</b> अभूतपूर्व</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>108. महल का वह भाग जहाँ रानियाँ रहती हैं:</b> अंतःपुर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>109. जिसे जीता न जा सके:</b> अजेय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>110. जिसका कोई इलाज न हो सके:</b> असाध्य</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>111. जो सब कुछ उदारता से देना जानता हो:</b> औदार्यदाता</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>112. जिस स्त्री का पति परदेश से आने वाला हो:</b> आगामिष्यत्पतिका</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>113. जो छाती के बल चलता हो:</b> उरग</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>114. जिसका कोई उपाय न हो:</b> निरुपाय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>115. जिसे बुलाया न गया हो:</b> अनाहूत</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>116. पद का उम्मीदवार:</b> अभ्यर्थी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>117. जो केवल निरामिष (बिना मांस का) भोजन करे:</b> निरामिष</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>118. साँझ और रात के बीच का समय:</b> गोधूलि</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>119. जिसे व्याकरण का पूरा ज्ञान हो:</b> वैयाकरण</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>120. पाप का दंड स्वरूप किया गया कार्य:</b> प्रायश्चित</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>121. समान उदर से जन्म लेने वाले भाई:</b> सहोदर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>122. पर्वत के नीचे की भूमि:</b> उपत्यका</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>123. पर्वत के ऊपर की समतल भूमि:</b> अधित्यका</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>124. जिसका दमन करना कठिन हो:</b> दुर्दम्य</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>125. जो सब में व्याप्त है:</b> विभु / सर्वव्यापी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>126. अन्य माता से उत्पन्न हुआ भाई:</b> अन्योदर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>127. सफलता न मिलने पर होने वाला दुख:</b> क्षोभ</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>128. जो नया-नया आया हो:</b> नवागंतुक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>129. जो बहुत छोटा न हो:</b> नातिलघु</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>130. आधी रात का समय:</b> निशीथ</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>131. जिस पर उपकार किया गया हो:</b> उपकृत</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>132. जिसने ऋण चुका दिया हो:</b> उऋण</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>133. जो भूमि उपजाऊ न हो:</b> ऊषर / बंजर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>134. जो बहुत मंद गति से कार्य करता हो:</b> मंथर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>135. जो उच्च कुल में पैदा हुआ हो:</b> कुलीन / अभिजात</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>136. अनुकरण करने योग्य:</b> अनुकरणीय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>137. बढ़ा-चढ़ाकर कही गई बात:</b> अतिशयोक्ति</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>138. जो कम खर्च करता हो:</b> मितव्ययी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>139. जो अधिक खर्च करता हो:</b> अपव्ययी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>140. फेक कर चलाया जाने वाला हथियार:</b> अस्त्र</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>141. हाथ में पकड़कर चलाया जाने वाला हथियार:</b> शस्त्र</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>142. जो हमेशा रहने वाला हो:</b> शाश्वत</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>143. जो नष्ट होने वाला हो:</b> नश्वर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>144. दो बार जन्म लेने वाला:</b> द्विज</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>145. जिसके पास कुछ न हो:</b> अकिंचन</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>146. जो सब जगह व्याप्त हो:</b> सर्वव्यापी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>147. जो आँखों के सामने हो:</b> प्रत्यक्ष</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>148. जो पहले पढ़ा न गया हो:</b> अपठित</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>149. दोपहर का समय:</b> मध्याह्न</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>150. आकाश को चूमने वाला:</b> गगनचुंबी</div>

        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>151. इतिहास से सम्बन्ध रखने वाला:</b> ऐतिहासिक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>152. भूगोल से सम्बन्ध रखने वाला:</b> भौगोलिक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>153. जो धर्म का काम करे:</b> धर्मात्मा</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>154. जिसकी कोई सीमा न हो:</b> असीम</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>155. जो किए गए उपकार को न माने:</b> कृतघ्न</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>156. जो बिना सोचे-समझे विश्वास करे:</b> अंधविश्वासी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>157. जो शरण में आया हो:</b> शरणागत</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>158. जो अपने देश से प्यार करे:</b> देशभक्त</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>159. जो कड़वा बोलता हो:</b> कटुभाषी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>160. जो सब कुछ जानता हो:</b> सर्वज्ञ</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>161. कठिनाई से समझने योग्य:</b> दुर्बोध</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>162. गोद लिया हुआ पुत्र:</b> दत्तक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>163. जो सब में व्याप्त हो:</b> सर्वव्यापी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>164. उपकार करने वाला:</b> उपकारी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>165. कम भोजन करने वाला:</b> अल्पाहारी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>166. जिसकी गहराई न मापी जा सके:</b> अथाह</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>167. जो दूसरों के अधीन हो:</b> पराधीन</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>168. जो अपने अधीन हो:</b> स्वाधीन</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>169. जो मोक्ष चाहता हो:</b> मुमुक्षु</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>170. रात में घूमने वाला:</b> निशाचर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>171. आकाश में उड़ने वाला:</b> नभचर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>172. साथ पढ़ने वाला:</b> सहपाठी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>173. दूर की सोचने वाला:</b> दूरदर्शी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>174. जो मार्ग दिखाता हो:</b> मार्गदर्शक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>175. जिसमें सहनशक्ति हो:</b> सहनशील</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>176. जल में रहने वाला:</b> जलचर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>177. थल पर रहने वाला:</b> थलचर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>178. जिसकी तुलना न हो सके:</b> अतुलनीय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>179. जो कानून के विरुद्ध हो:</b> अवैध</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>180. जिसे टाला न जा सके:</b> अनिवार्य</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>181. जिसके आने की तिथि न हो:</b> अतिथि</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>182. जो गुप्त रखने योग्य हो:</b> गोपनीय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>183. जिसका कोई शत्रु न हो:</b> अजातशत्रु</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>184. जिसका वर्णन न हो सके:</b> अवर्णनीय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>185. जो आँखों के सामने हो:</b> प्रत्यक्ष</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>186. जो आँखों से ओझल हो:</b> परोक्ष</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>187. सप्ताह में एक बार:</b> साप्ताहिक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>188. वर्ष में एक बार:</b> वार्षिक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>189. महीने में एक बार:</b> मासिक</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>190. जिसका अंत न हो:</b> अनंत</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>191. जो वंदना के योग्य हो:</b> वंदनीय</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>192. जो मांस न खाता हो:</b> शाकाहारी / निरामिष</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>193. जो परिचित न हो:</b> अपरिचित</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>194. जो फल खाता हो:</b> फलाहारी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>195. हाथ से लिखा हुआ:</b> हस्तलिखित</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>196. दोपहर का समय:</b> मध्याह्न</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>197. दोपहर के पहले का समय:</b> पूर्वाह्न</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>198. दोपहर के बाद का समय:</b> अपराह्न</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>199. जो गिना न जा सके:</b> अनगिनत</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>200. जो कम बोलता हो:</b> मितभाषी</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>201. जो सब कुछ जानता हो:</b> सर्वज्ञ</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>202. जानने की इच्छा रखने वाला:</b> जिज्ञासु</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>203. जो दूसरों के भाग्य से ईर्ष्या करे:</b> परश्रीकातर</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>204. शिव की जटाएँ:</b> कपर्द</div>
        <div style="padding:8px; border-bottom:1px solid #f9f9f9;"><b>205. जिसे खरीदा गया हो:</b> क्रीत</div>
    </div>
    <p style="text-align:center; color:#4D96FF; margin-top:20px; font-weight:bold;">[ कुल 200+ वाक्यांश संकलित ]</p>
</div>
        </section>

        <div class="quiz-panel" id="hindi-quiz-wrapper" style="background: #fff; padding: 35px; border-radius: 35px; border: 5px solid #4D96FF; margin-top: 40px;">
            <div style="display: flex; justify-content: space-between; font-size: 1.6rem; font-weight: bold; margin-bottom: 30px;">
                <span id="hq-progress" style="color: #4D96FF;">प्रश्न: 1 / 100</span>
                <span id="hq-score" style="color: #6BCB77;">स्कोर: 0</span>
            </div>
            <div id="h-question-container" style="min-height: 220px; text-align: center;">
                <h4 id="hq-text" style="font-size: 1.8rem; color: #2c3e50; margin-bottom: 35px;">क्विज़ लोड हो रहा है...</h4>
                <div id="h-options-box"></div>
            </div>
            <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 45px;">
                <button class="option-btn" onclick="window.prevHindiQuestion()">पीछे</button>
                <button class="option-btn" onclick="window.nextHindiQuestion()">आगे</button>
            </div>
        </div>
    `,
    quizData: [
        { q: "1. 'जो कभी न मरे' के लिए एक शब्द क्या है?", options: ["अमर", "अजर", "अनंत"], correct: 0 },
        { q: "2. 'जो दिखाई न दे' उसे क्या कहते हैं?", options: ["अपार", "अदृश्य", "अज्ञेय"], correct: 1 },
        { q: "3. 'ईश्वर में विश्वास रखने वाला' कहलाता है:", options: ["नास्तिक", "आस्तिक", "भक्त"], correct: 1 },
        { q: "4. 'जिसके माता-पिता न हों' उसे कहते हैं:", options: ["असहाय", "अनाथ", "अभागा"], correct: 1 },
        { q: "5. 'जो सब कुछ जानता हो' के लिए शब्द है:", options: ["अल्पज्ञ", "बहुज्ञ", "सर्वज्ञ"], correct: 2 },
        { q: "6. 'जानने की इच्छा रखने वाला' कहलाता है:", options: ["ज्ञानी", "जिज्ञासु", "विद्वान"], correct: 1 },
        { q: "7. 'जो मांस खाता हो' उसे क्या कहते हैं?", options: ["शाकाहारी", "मांसाहारी", "सर्वाहारी"], correct: 1 },
        { q: "8. 'जिसका कोई शत्रु न हो':", options: ["अजातशत्रु", "अजेय", "शत्रुघ्न"], correct: 0 },
        { q: "9. 'जो बहुत बोलता हो' उसे कहते हैं:", options: ["वाचाल", "मितभाषी", "मृदुभाषी"], correct: 0 },
        { q: "10. 'वर्ष में एक बार होने वाला' कहलाता है:", options: ["मासिक", "साप्ताहिक", "वार्षिक"], correct: 2 },
        { q: "1. 'जो कभी न मरे' के लिए एक शब्द क्या है?", options: ["अमर", "अजर", "अविनाशी"], correct: 0 },
        { q: "2. 'जो दिखाई न दे' उसे क्या कहते हैं?", options: ["अदृश्य", "अल्प", "अज्ञेय"], correct: 0 },
        { q: "3. 'ईश्वर में विश्वास रखने वाला' क्या कहलाता है?", options: ["नास्तिक", "आस्तिक", "धार्मिक"], correct: 1 },
        { q: "4. 'जिसके माता-पिता न हों' उसे कहते हैं:", options: ["अनाथ", "असहाय", "अभागा"], correct: 0 },
        { q: "5. 'जो सब कुछ जानता हो' के लिए शब्द है:", options: ["बहुज्ञ", "अल्पज्ञ", "सर्वज्ञ"], correct: 2 },
        { q: "6. 'जानने की इच्छा रखने वाला' कहलाता है:", options: ["विद्वान", "जिज्ञासु", "ज्ञानी"], correct: 1 },
        { q: "7. 'जो मांस खाता हो' उसे क्या कहते हैं?", options: ["शाकाहारी", "मांसाहारी", "सर्वाहारी"], correct: 1 },
        { q: "8. 'जिसका कोई शत्रु न हो' उसे कहते हैं:", options: ["अजेय", "अजातशत्रु", "शत्रुहीन"], correct: 1 },
        { q: "9. 'जो बहुत बोलता हो' उसे क्या कहते हैं?", options: ["वाचाल", "मितभाषी", "मृदुभाषी"], correct: 0 },
        { q: "10. 'वर्ष में एक बार होने वाला' कहलाता है:", options: ["मासिक", "वार्षिक", "साप्ताहिक"], correct: 1 },
        { q: "11. 'जो उपकार को मानता हो' उसे कहते हैं:", options: ["कृतघ्न", "कृतज्ञ", "दानी"], correct: 1 },
        { q: "12. 'जो उपकार को न मानता हो' उसे कहते हैं:", options: ["कृतज्ञ", "कृतघ्न", "धोखेबाज"], correct: 1 },
        { q: "13. 'हाथ से लिखा हुआ' के लिए एक शब्द:", options: ["हस्तलिखित", "पांडुलिपि", "सुलेख"], correct: 0 },
        { q: "14. 'जिसका अंत न हो' उसे क्या कहते हैं?", options: ["अमर", "अनंत", "असीम"], correct: 1 },
        { q: "15. 'जो कम बोलता हो' उसे कहते हैं:", options: ["मितभाषी", "वाचाल", "मूक"], correct: 0 },
        { q: "16. 'जिसका भाग्य अच्छा न हो' उसे कहते हैं:", options: ["अभागा", "दुर्भाग्य", "दुखी"], correct: 0 },
        { q: "17. 'जो कानून के विरुद्ध हो' उसे कहते हैं:", options: ["अपराध", "अवैध/अवैधानिक", "अनुचित"], correct: 1 },
        { q: "18. 'जिसके समान कोई दूसरा न हो' उसे कहते हैं:", options: ["अद्वितीय", "सर्वश्रेष्ठ", "अनूठा"], correct: 0 },
        { q: "19. 'दोपहर के बाद का समय' कहलाता है:", options: ["पूर्वाह्न", "अपराह्न", "मध्याह्न"], correct: 1 },
        { q: "20. 'दोपहर के पहले का समय' कहलाता है:", options: ["अपराह्न", "पूर्वाह्न", "संध्या"], correct: 1 },
        { q: "21. 'जो सब जगह व्याप्त हो' उसे कहते हैं:", options: ["सर्वव्यापी", "सर्वशक्तिमान", "सर्वज्ञ"], correct: 0 },
        { q: "22. 'जिसकी आयु लंबी हो' उसे कहते हैं:", options: ["अल्पायु", "दीर्घायु", "अमर"], correct: 1 },
        { q: "23. 'जो कभी बूढ़ा न हो' उसे कहते हैं:", options: ["अमर", "अजर", "अविनाशी"], correct: 1 },
        { q: "24. 'जिसका कोई आकार न हो' उसे कहते हैं:", options: ["साकार", "निराकार", "विकार"], correct: 1 },
        { q: "25. 'जो आँखों के सामने हो' उसे कहते हैं:", options: ["परोक्ष", "प्रत्यक्ष", "साक्षात"], correct: 1 },
        { q: "26. 'जो आँखों के सामने न हो' उसे कहते हैं:", options: ["प्रत्यक्ष", "परोक्ष/अप्रत्यक्ष", "ओझल"], correct: 1 },
        { q: "27. 'जहाँ पहुँच पाना कठिन हो' उसे कहते हैं:", options: ["अगम", "दुर्गम", "कठिन"], correct: 1 },
        { q: "28. 'जहाँ पहुँचा न जा सके' उसे कहते हैं:", options: ["दुर्गम", "अगम", "अगम्य"], correct: 1 },
        { q: "29. 'जो गिना न जा सके' उसे कहते हैं:", options: ["अनगिनत", "अगणित", "बहुत"], correct: 0 },
        { q: "30. 'रास्ता दिखाने वाला' क्या कहलाता है?", options: ["सारथी", "मार्गदर्शक/पथप्रदर्शक", "गुरु"], correct: 1 },
        { q: "31. 'जो वंदना करने योग्य हो':", options: ["वंदनीय", "पूजनीय", "स्तुत्य"], correct: 0 },
        { q: "32. 'जिसके हृदय में दया हो':", options: ["निर्दय", "दयालु", "सदय"], correct: 1 },
        { q: "33. 'जिसके हृदय में दया न हो':", options: ["कठोर", "निर्दय", "क्रूर"], correct: 1 },
        { q: "34. 'जो कड़वा बोलता हो':", options: ["मृदुभाषी", "कटुभाषी", "अप्रिय"], correct: 1 },
        { q: "35. 'जो मीठा बोलता हो':", options: ["मधुभाषी", "मृदुभाषी", "मिष्टभाषी"], correct: 1 },
        { q: "36. 'जो बहुत भाषाएँ जानता हो':", options: ["भाषाई", "बहुभाषाविद", "दुभाषिया"], correct: 1 },
        { q: "37. 'आकाश में विचरण करने वाला':", options: ["नभचर", "जलचर", "थलचर"], correct: 0 },
        { q: "38. 'जल में विचरण करने वाला':", options: ["नभचर", "थलचर", "जलचर"], correct: 2 },
        { q: "39. 'थल (भूमि) पर विचरण करने वाला':", options: ["थलचर", "नभचर", "चर"], correct: 0 },
        { q: "40. 'जो पढ़ा-लिखा न हो':", options: ["शिक्षित", "अनपढ़/निरक्षर", "मूर्ख"], correct: 1 },
        { q: "41. 'जो पढ़ा-लिखा हो':", options: ["साक्षर", "शिक्षित", "विद्वान"], correct: 0 },
        { q: "42. 'जिसका कोई आधार न हो':", options: ["निराधार", "साधार", "बेकार"], correct: 0 },
        { q: "43. 'प्रतिदिन होने वाला':", options: ["साप्ताहिक", "दैनिक", "मासिक"], correct: 1 },
        { q: "44. 'सप्ताह में एक बार होने वाला':", options: ["पाक्षिक", "साप्ताहिक", "दैनिक"], correct: 1 },
        { q: "45. 'पंद्रह दिन में एक बार होने वाला':", options: ["साप्ताहिक", "पाक्षिक", "मासिक"], correct: 1 },
        { q: "46. 'महीने में एक बार होने वाला':", options: ["मासिक", "वार्षिक", "दैनिक"], correct: 0 },
        { q: "47. 'जो सब कुछ त्याग दे':", options: ["त्यागी", "संन्यासी", "बैरागी"], correct: 0 },
        { q: "48. 'जो शरण में आया हो':", options: ["शरणार्थी", "शरणागत", "आश्रित"], correct: 1 },
        { q: "49. 'जिसका मूल्य न आँका जा सके':", options: ["बहुमूल्य", "अमूल्य", "महँगा"], correct: 1 },
        { q: "50. 'जो बहुत मूल्यवान हो':", options: ["अमूल्य", "बहुमूल्य", "कीमती"], correct: 1 },
        { q: "51. 'जो कम जानता हो':", options: ["अल्पज्ञ", "अज्ञ", "मूर्ख"], correct: 0 },
        { q: "52. 'जो संगीत जानता हो':", options: ["गायक", "संगीतकार", "संगीतज्ञ"], correct: 2 },
        { q: "53. 'जो कला जानता हो':", options: ["कलाकार", "मूर्तिकार", "चित्रकार"], correct: 0 },
        { q: "54. 'जो कविता लिखता हो':", options: ["लेखक", "कवि", "गायक"], correct: 1 },
        { q: "55. 'जो कविता लिखती हो' (स्त्री):", options: ["कवि", "कवयित्री", "लेखिका"], correct: 1 },
        { q: "56. 'जो अभिनय करता हो' (पुरुष):", options: ["कलाकार", "नायक", "अभिनेता"], correct: 2 },
        { q: "57. 'जो अभिनय करती हो' (स्त्री):", options: ["नायिका", "अभिनेत्री", "नर्तकी"], correct: 1 },
        { q: "58. 'जहाँ पुस्तकें रखी जाती हैं':", options: ["पुस्तकालय", "वाचनालय", "संग्रहालय"], correct: 0 },
        { q: "59. 'जहाँ औषधियाँ मिलती हैं':", options: ["अस्पताल", "औषधालय", "प्रयोगशाला"], correct: 1 },
        { q: "60. 'जिसके आने की तिथि न हो':", options: ["मेहमान", "अतिथि", "आगंतुक"], correct: 1 },
        { q: "61. 'जो दूसरों का भला करे':", options: ["स्वार्थी", "परोपकारी", "दानी"], correct: 1 },
        { q: "62. 'जो केवल अपना भला सोचे':", options: ["लालची", "स्वार्थी", "नीच"], correct: 1 },
        { q: "63. 'जो परिचित न हो':", options: ["अजनबी", "अपरिचित", "अनजान"], correct: 1 },
        { q: "64. 'जो परिचित हो':", options: ["परिचित", "मित्र", "सम्बन्धी"], correct: 0 },
        { q: "65. 'जिसकी तुलना न की जा सके':", options: ["अतुलनीय", "अनुपम", "बेजोड़"], correct: 0 },
        { q: "66. 'जो कठिनाई से मिले':", options: ["सुलभ", "दुर्लभ", "अलभ्य"], correct: 1 },
        { q: "67. 'जो आसानी से मिले':", options: ["सुलभ", "दुर्लभ", "सहज"], correct: 0 },
        { q: "68. 'जिसका कोई अंत न हो':", options: ["अनादि", "अनंत", "असीम"], correct: 1 },
        { q: "69. 'जिसका कोई आदि (शुरुआत) न हो':", options: ["अनंत", "अनादि", "प्राचीन"], correct: 1 },
        { q: "70. 'जो युद्ध में स्थिर रहता हो':", options: ["युधिष्ठिर", "योद्धा", "वीर"], correct: 0 },
        { q: "71. 'जिसकी थाह न मिल सके':", options: ["गहरा", "अथाह", "अपार"], correct: 1 },
        { q: "72. 'जो सहा न जा सके':", options: ["असहनीय", "कष्टकारी", "असह्य"], correct: 2 },
        { q: "73. 'जो करने योग्य हो':", options: ["कर्तव्य", "करणीय", "कार्य"], correct: 1 },
        { q: "74. 'जो करने योग्य न हो':", options: ["अकर्तव्य", "अकरणीय", "वर्जित"], correct: 1 },
        { q: "75. 'जो राजनीति जानता हो':", options: ["राजनेता", "राजनीतिज्ञ", "मंत्री"], correct: 1 },
        { q: "76. 'जो इतिहास जानता हो':", options: ["इतिहासकार", "इतिहासज्ञ", "पुरातत्ववेत्ता"], correct: 1 },
        { q: "77. 'जो विज्ञान जानता हो':", options: ["वैज्ञानिक", "विज्ञानी", "विद्वान"], correct: 0 },
        { q: "78. 'जिसका वर्णन न किया जा सके':", options: ["अकथनीय", "अवर्णीय", "अर्वणनीय"], correct: 2 },
        { q: "79. 'जो उपहास के योग्य हो':", options: ["हास्यप्रद", "उपहासास्पद", "मजाकिया"], correct: 1 },
        { q: "80. 'जिसके नीचे रेखा खिंची हो':", options: ["रेखांकित", "अधोरेखित", "चिह्नित"], correct: 0 },
        { q: "81. 'काम से जी चुराने वाला':", options: ["आलसी", "कामचोर", "बेकार"], correct: 1 },
        { q: "82. 'जो कतई न बदले':", options: ["अटल", "स्थिर", "अपरिवर्तनीय"], correct: 2 },
        { q: "83. 'जिसमें लज्जा न हो':", options: ["निर्लज्ज", "बेशर्म", "ढीठ"], correct: 0 },
        { q: "84. 'जो सब कुछ भक्षण करने वाला हो':", options: ["मांसाहारी", "सर्वाहारी", "शाकाहारी"], correct: 1 },
        { q: "85. 'जिसकी पत्नी मर गई हो':", options: ["विधुर", "अकेला", "परित्यक्त"], correct: 0 },
        { q: "86. 'जिसका पति मर गया हो':", options: ["विधवा", "अनाथ", "परित्यक्ता"], correct: 0 },
        { q: "87. 'जो साथ पढ़ता हो':", options: ["मित्र", "सहपाठी", "सखा"], correct: 1 },
        { q: "88. 'जो साथ काम करता हो':", options: ["सहायक", "सहकर्मी", "साथी"], correct: 1 },
        { q: "89. 'जो फल खाता हो':", options: ["फलाहारी", "शाकाहारी", "अल्पाहारी"], correct: 0 },
        { q: "90. 'जो साग-सब्जी खाता हो':", options: ["मांसाहारी", "शाकाहारी", "फलाहारी"], correct: 1 },
        { q: "91. 'आज्ञा मानने वाला':", options: ["आज्ञाकारी", "सेवक", "शिष्य"], correct: 0 },
        { q: "92. 'जो शरण देना चाहता हो':", options: ["शरणार्थी", "शरणदाता", "रक्षक"], correct: 1 },
        { q: "93. 'जिसका कोई दोष न हो':", options: ["निर्दोष", "बेकसूर", "सज्जन"], correct: 0 },
        { q: "94. 'जिसमें विष हो':", options: ["जहरीला", "विषैला", "घातक"], correct: 1 },
        { q: "95. 'गाँव में रहने वाला':", options: ["गँवार", "ग्रामीण", "देहाती"], correct: 1 },
        { q: "96. 'शहर में रहने वाला':", options: ["शहरी", "नागरिक", "सभ्य"], correct: 0 },
        { q: "97. 'जो भाग्य पर विश्वास करे':", options: ["भाग्यवादी", "आस्तिक", "आलसी"], correct: 0 },
        { q: "98. 'जो बिना वेतन के काम करे':", options: ["स्वयंसेवक", "अवैतनिक", "निशुल्क"], correct: 1 },
        { q: "99. 'जिसका आकार हो':", options: ["निराकार", "साकार", "विकार"], correct: 1 },
        { q: "100. 'जिसे समझना कठिन हो':", options: ["अगम", "दुस्तर", "दुर्बोध"], correct: 2 },
    { q: "101. 'जिसने इंद्रियों को जीत लिया हो' उसे कहते हैं:", options: ["इंद्रजीत", "जितेन्द्रिय", "योगी"], correct: 1 },
    { q: "102. 'मोक्ष की इच्छा रखने वाला' कहलाता है:", options: ["मुमुक्षु", "जिज्ञासु", "योगी"], correct: 0 },
    { q: "103. 'जो युद्ध करने का इच्छुक हो' उसे कहते हैं:", options: ["योद्धा", "युयुत्सु", "वीर"], correct: 1 },
    { q: "104. 'जिसके हृदय में ममता न हो' उसे कहते हैं:", options: ["निर्दय", "निर्मम", "कठोर"], correct: 1 },
    { q: "105. 'जिसकी गर्दन सुंदर हो' उसे क्या कहते हैं?", options: ["सुग्रीव", "सुघड़", "सुंदर"], correct: 0 },
    { q: "106. 'हाथी को हाँकने वाला छोटा भाला':", options: ["अंकुश", "त्रिशूल", "भाला"], correct: 0 },
    { q: "107. 'जो पहले कभी न हुआ हो':", options: ["अभूतपूर्व", "अपूर्व", "अनोखा"], correct: 0 },
    { q: "108. 'महल का वह भाग जहाँ रानियाँ रहती हैं':", options: ["निवास", "अंतःपुर", "महल"], correct: 1 },
    { q: "109. 'पसीने से उत्पन्न होने वाला' कहलाता है:", options: ["अंडज", "स्वेदज", "पसीज"], correct: 1 },
    { q: "110. 'जिसका कोई इलाज न हो सके' उसे कहते हैं:", options: ["असाध्य", "लालाज", "कठिन"], correct: 0 },
    { q: "111. 'जो सब कुछ उदारता से देना जानता हो':", options: ["दानी", "औदार्यदाता", "महादानी"], correct: 1 },
    { q: "112. 'जिस स्त्री का पति परदेश से आने वाला हो':", options: ["आगतपतिका", "आगामिष्यत्पतिका", "प्रोषितपतिका"], correct: 1 },
    { q: "113. 'जो छाती के बल चलता हो' (जैसे सांप):", options: ["सरीसृप", "उरग", "भुजंग"], correct: 1 },
    { q: "114. 'जिसका कोई उपाय न हो':", options: ["निरुपाय", "असहाय", "बेकार"], correct: 0 },
    { q: "115. 'जिसे बुलाया न गया हो' उसे कहते हैं:", options: ["अतिथि", "अनाहूत", "आगंतुक"], correct: 1 },
    { q: "116. 'किसी पद का उम्मीदवार' कहलाता है:", options: ["प्रार्थी", "अभ्यर्थी", "प्रत्याशी"], correct: 1 },
    { q: "117. 'जो केवल अन्न फल और शाक खाता हो':", options: ["शाकाहारी", "निरामिष", "फलाहारी"], correct: 1 },
    { q: "118. 'साँझ और रात के बीच का समय':", options: ["संध्या", "गोधूलि", "निशा"], correct: 1 },
    { q: "119. 'जिसे व्याकरण का पूरा ज्ञान हो':", options: ["व्याकरणविद", "वैयाकरण", "विद्वान"], correct: 1 },
    { q: "120. 'किए हुए पाप का दंड स्वरूप किया गया कार्य':", options: ["पछतावा", "प्रायश्चित", "तपस्या"], correct: 1 },
    { q: "121. 'जो स्त्री कविता रचती है':", options: ["कवि", "कवयित्री", "लेखिका"], correct: 1 },
    { q: "122. 'समान उदर (पेट) से जन्म लेने वाले भाई':", options: ["सहोदर", "सगे", "जुड़वाँ"], correct: 0 },
    { q: "123. 'पर्वत के नीचे की तलहटी वाली भूमि':", options: ["घाटी", "उपत्यका", "मैदान"], correct: 1 },
    { q: "124. 'जिसका दमन करना कठिन हो':", options: ["दुर्दम्य", "कठोर", "अजेय"], correct: 0 },
    { q: "125. 'जो सब में व्याप्त है':", options: ["सर्वज्ञ", "विभु", "सर्वव्यापी"], correct: 1 },
    { q: "126. 'वह भाई जो अन्य माता से उत्पन्न हुआ हो':", options: ["सहोदर", "अन्योदर", "सौतेला"], correct: 1 },
    { q: "127. 'सफलता न मिलने पर दुखी होना' कहलाता है:", options: ["शोक", "क्षोभ", "दुख"], correct: 1 },
    { q: "128. 'जो नया-नया आया हो':", options: ["नवागंतुक", "अतिथि", "नया"], correct: 0 },
    { q: "129. 'जो बहुत छोटा न हो':", options: ["बड़ा", "नातिलघु", "लंबा"], correct: 1 },
    { q: "130. 'आधी रात का समय' कहलाता है:", options: ["निशा", "निशीथ", "विभावरी"], correct: 1 },
    { q: "131. 'जिस पर उपकार किया गया हो':", options: ["कृतज्ञ", "उपकृत", "ऋणी"], correct: 1 },
    { q: "132. 'जिसने ऋण चुका दिया हो':", options: ["ऋणी", "उऋण", "मुक्त"], correct: 1 },
    { q: "133. 'जो भूमि उपजाऊ न हो':", options: ["बंजर", "ऊषर", "बेकार"], correct: 1 },
    { q: "134. 'जो बहुत मंद गति से कार्य करता हो':", options: ["आलसी", "मंथर", "सुस्त"], correct: 1 },
    { q: "135. 'किसी बात को करने का दृढ़ निश्चय':", options: ["संकल्प", "प्रतिज्ञा", "मान्यता"], correct: 0 },
    { q: "136. 'जो उच्च कुल में पैदा हुआ हो':", options: ["अभिजात", "कुलीन", "दोनों"], correct: 2 },
    { q: "137. 'जिसके आने की तिथि मालूम न हो':", options: ["मेहमान", "अतिथि", "आगंतुक"], correct: 1 },
    { q: "138. 'अनुकरण करने योग्य':", options: ["अनुकूल", "अनुकरणीय", "प्रशंसनीय"], correct: 1 },
    { q: "139. 'बढ़ा-चढ़ाकर कही गई बात':", options: ["अतिशयोक्ति", "झूठ", "बड़बोलापन"], correct: 0 },
    { q: "140. 'वह स्थान जहाँ मुर्दे जलाए जाते हैं':", options: ["कब्रिस्तान", "श्मशान", "मरघट"], correct: 1 },
    { q: "141. 'जो कम खर्च करता हो':", options: ["कंजूस", "मितव्ययी", "अल्पव्ययी"], correct: 1 },
    { q: "142. 'जो अधिक खर्च करता हो':", options: ["दानी", "अपव्ययी", "खर्चीला"], correct: 1 },
    { q: "143. 'फेक कर चलाया जाने वाला हथियार':", options: ["शस्त्र", "अस्त्र", "भाला"], correct: 1 },
    { q: "144. 'हाथ में पकड़कर चलाया जाने वाला हथियार':", options: ["अस्त्र", "शस्त्र", "तलवार"], correct: 1 },
    { q: "145. 'जो हमेशा रहने वाला हो':", options: ["अमर", "शाश्वत", "अनंत"], correct: 1 },
    { q: "146. 'जो नष्ट होने वाला हो':", options: ["क्षणिक", "नश्वर", "बेकार"], correct: 1 },
    { q: "147. 'आलोचना करने वाला' कहलाता है:", options: ["आलोचक", "शत्रु", "निंदक"], correct: 0 },
    { q: "148. 'जिसकी गहराई का पता न हो':", options: ["गहरा", "अथाह", "अपार"], correct: 1 },
    { q: "149. 'दो बार जन्म लेने वाला':", options: ["द्विज", "जुड़वाँ", "अमर"], correct: 0 },
    { q: "150. 'जिसके पास कुछ न हो' उसे कहते हैं:", options: ["दरिद्र", "अकिंचन", "कंगाल"], correct: 1 }
    ]
};
