import i18n from 'i18n-js'


const de={
    Home:"Password",
    Accept:"Accept",
    PassPlaceHolder:"Password",
    PassErr:"error password",
    AllPass:"all password"
};
const tr={
    Home:"Sifreler",
    Accept:"Tamam",
    PassPlaceHolder:"Sifrenizi Giriniz",
    PassErr:"Hatali Sifre",
    AllPass:"Tum sifreler"
};
const en=de;

i18n.fallbacks =true ;
i18n.translations={de,tr,en}

export{
    i18n
}