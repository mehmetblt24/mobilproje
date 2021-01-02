import i18n from 'i18n-js'


const de={
    Home:"Home"
};
const tr={
    Home:"Ev"
};
const en=de;

i18n.fallbacks =true ;
i18n.translations={de,tr,en}

export{
    i18n
}