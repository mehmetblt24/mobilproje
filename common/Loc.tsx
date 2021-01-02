import i18n from 'i18n-js'


const de={
    Home:"Home",
    Accept:"Bestatigen",
    PassPlaceHolder:"Geben Sie Ihree Passwort",
    PassErr:"error password"
};
const tr={
    Home:"Ev",
    Accept:"Tamam",
    PassPlaceHolder:"Sifrenizi Giriniz",
    PassErr:"Hatali Sifre"
};
const en=de;

i18n.fallbacks =true ;
i18n.translations={de,tr,en}

export{
    i18n
}