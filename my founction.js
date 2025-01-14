
function toggleDetail(checkbox, containerId) {
    const detailsContainer = document.getElementById(containerId);
    
    if (checkbox.checked) {
        // إضافة تفاصيل الكتاب
 
        detailsContainer.innerHTML = `
            
           
               ${getPrice(containerId)}<br>
                ${getPublisher(containerId)}<br>
               ${getCategory(containerId)}<br>
               : ${getSummary(containerId)}<br>
           
        `;
    } else {
        // إخفاء تفاصيل الكتاب
        detailsContainer.innerHTML = '';
        
    }
}

function getISBN(containerId) {
    switch (containerId) {
        case 'detailsContainer1': return '978-9770916738';
        case 'detailsContainer2': return '978-9953891718';
        case 'detailsContainer3': return '978-9770916738';
        case 'detailsContainer4': return '978-9953451080';
        case 'detailsContainer5': return '978-9770985318';
        default: return '';
    }
}

function getTitle(containerId) {
    switch (containerId) {
        // case 'detailsContainer1': return 'الف ليلة وليلة';
        case 'detailsContainer2': return 'موسم الهجرة إلى الشمال';
        case 'detailsContainer3': return 'الف ليلة وليلة';
        case 'detailsContainer4': return 'الخبز الحافي';
        case 'detailsContainer5': return 'ابتسم فأنت ميت';
        default: return '';
    }
}

function getPrice(containerId) {
    switch (containerId) {
        // case 'detailsContainer1': return '25000 ل.س';
        case 'detailsContainer2': return '25000 ل.س';
        case 'detailsContainer3': return '12000 ل.س';
        case 'detailsContainer4': return '10000 ل.س';
        case 'detailsContainer5': return '23000 ل.س';
        default: return '';
    }
}

function getPublisher(containerId) {
    switch (containerId) {
        case 'detailsContainer1': return 'الناشر :دار المعارف';
        case 'detailsContainer2': return 'دار الجمل';
        case 'detailsContainer3': return 'دار المعارف';
        case 'detailsContainer4': return 'منشورات الزمن';
        case 'detailsContainer5': return 'دار الشؤون الثقافية';
        default: return '';
    }
}

function getCategory(containerId) {
    switch (containerId) {
        case 'detailsContainer1': return 'تصنيف الكتاب: قصص شعبية';
        case 'detailsContainer2': return 'رواية';
        case 'detailsContainer3': return 'قصص شعبية';
        case 'detailsContainer4': return 'سيرة ذاتية';
        case 'detailsContainer5': return 'رواية';
        default: return '';
    }
}

function getSummary(containerId) {
    switch (containerId) {
        case 'detailsContainer1': return '  ملخص:  كتاب أسطوري يضم مجموعة من القصص الشعبية      ';
        case 'detailsContainer2': return ' ملخص:رواية تعالج قضية الهوية والمهاجرين ';
        case 'detailsContainer3': return ' ملخص:نسخة أخرى من "الف ليلة وليلة" مع تفاصيل إضافية ...'
        case 'detailsContainer4': return '  ملخص:سيرة ذاتية تتناول حياة الكاتب ومجتمعه ...';
        case 'detailsContainer5': return '  ملخص: رواية مثيرة تتناول حياة طريفة لشخصية رئيسية ...';
        default: return '';
    }
}


// To access the show button element
let showbtn = document.getElementById("showbtn");

// To access the Close button element
let closebtn = document.getElementById("closebtn");

// To acces the popup element
let popup = document.querySelector(".popup");
let subp = document.getElementById("sub-p");

// To show the popup on click
showbtn.addEventListener("click", () => {
    popup.style.display = "block";
    showbtn.style.display = "none";
    // document.body.style.backgroundColor = "#9EA9B1";
    subp.style.display = "none";
});

// To close the popup on click
closebtn.addEventListener("click", () => {
    popup.style.display = "none";
    showbtn.style.display = "block";
    // document.body.style.backgroundColor = "#09dbd450";
    subp.style.display = "block";
});
// function showPopup() {
//     document.getElementById('popup').style.display = 'block'; // لجعل النموذج يظهر
// }

// function closePopup() {
//     document.getElementById('popup').style.display = 'none'; // لإخفاء النموذج
// }

// function validateForm() {
//     // يمكنك إضافة المزيد من التحقق هنا إذا لزم الأمر
//     return true; // إذا كانت المدخلات صحيحة
// }
function showPopup() {
    document.getElementById('popup').style.display = 'block'; // لجعل النموذج يظهر
}

function closePopup() {
    document.getElementById('popup').style.display = 'none'; // لإخفاء النموذج
}

function validateForm() {
    const form = document.forms['myForm'];
    
    // الحصول على المعلومات المدخلة
    const fullname = form['fullname'].value;
    const nationalID = form['nationalID'].value;
    const birthdate = form['birthdate'].value;
    const mobile = form['mobile'].value;
    const email = form['email'].value;

    // التحقق من صحة المعلومات
    if (!/^[\u0621-\u064A\s]+$/.test(fullname)) {
        alert("يجب إدخال الاسم الكامل باللغة العربية فقط.");
        return false;
    }

    if (!/^(01|02|03|04|05|06|07|08)(\d{11})$/.test(nationalID)) {
        alert("يجب إدخال رقم وطني صالح.");
        return false;
    }

    if (birthdate === "") {
        alert("تاريخ الميلاد مطلوب.");
        return false;
    }

    if (mobile && !/^(09|10|11|12|13|14|15|16|17|18|19)[0-9]{8}$/.test(mobile)) {
        alert("رقم الموبايل غير صالح.");
        return false;
    }

    // إذا مرّ كل شيء بنجاح
    alert(`تم إرسال المعلومات:\n الاسم: ${fullname}\n الرقم الوطني: ${nationalID}\n تاريخ الميلاد: ${birthdate}\n رقم الموبايل: ${mobile}\n الإيميل: ${email}`);
    closePopup(); // إغلاق النموذج
    return false; // لمنع الإرسال الفعلي للنموذج
}

