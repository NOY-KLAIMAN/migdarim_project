function formValidation() {
    var subject = document.forms["contactUs"]["subject"].value;
    var name = document.forms["contactUs"]["name"].value;
    var lastName = document.forms["contactUs"]["lastName"].value;
    var phoneNumber = document.forms["contactUs"]["phoneNumber"].value;
    var contactEmail = document.forms["contactUs"]["contactEmail"].value;
    var contactEmailValidation = document.forms["contactUs"]["contactEmailValidation"].value;
    var textArea = document.forms["contactUs"]["textArea"].value;
    var emptyStr = "";
    var phoneNumberLength = phoneNumber.length;
    errorCleanUp();

    if (subject == 1 || name == emptyStr || lastName == emptyStr || isNaN(phoneNumber) || phoneNumber.length < 10 || contactEmail == emptyStr || contactEmail != contactEmailValidation || textArea == emptyStr) {
        if (subject == 1) {
            document.getElementById("subjectError").innerHTML = "יש לבחור נושא פניה";
        }
        if (name == emptyStr && lastName == emptyStr || name == emptyStr || lastName == emptyStr) {
            if (name == emptyStr && lastName == emptyStr) {
                document.getElementById("nameLastnameError").innerHTML = "יש לציין שם פרטי ושם משפחה";
            }
            else {
                if (name == emptyStr) {
                    document.getElementById("nameLastnameError").innerHTML = "יש לציין שם פרטי";
                }
                else {
                    if (lastName == emptyStr) {
                        document.getElementById("nameLastnameError").innerHTML = "יש לציין שם משפחה";
                    }
                }
            }
        }
        if (phoneNumberLength < 10 || phoneNumberLength > 10) {
            if (phoneNumberLength < 10) {
                document.getElementById("numberError").innerHTML = "מספר הטלפון קצר מידי! יש לקליד מספר טלפון בעל 10 ספרות וללא מקפים";
            }
            else {
                if (phoneNumberLength > 10) {
                    document.getElementById("numberError").innerHTML = "מספר הטלפון ארוך מידי! יש לקליד מספר טלפון בעל 10 ספרות וללא מקפים";
                }
            }
        }
        if (contactEmail == emptyStr) {
            document.getElementById("emailError").innerHTML = "יש להקליד כתובת דואר אלקטרוני";
        }
        if (contactEmail != contactEmailValidation) {
            document.getElementById("emailError").innerHTML = "כתובות הדואר האלקטרוני לא זהות";
        }
        if (textArea == emptyStr) {
            document.getElementById("textAreaError").innerHTML = "יש לציין את תוכן הפניה";
        }
        document.getElementById("error").innerHTML = "נמצאו שגיאות בטופס, פירוט השגיאה מופיע מתחת לכל שדה";
        return false;
    }
    else {
        alert("הפניה נשלחה אלינו בהצלחה");
        return true;
    }
}

function formCleanUp() {
}

function errorCleanUp() {
        document.getElementById("subjectError").innerHTML = "";
        document.getElementById("nameLastnameError").innerHTML = "";
        document.getElementById("numberError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("textAreaError").innerHTML = "";
        document.getElementById("textAreaError").innerHTML = "";
        document.getElementById("error").innerHTML = "";
}