const SITE_ROOT = 'https://www.deuren.co.uk'
const pageURL = SITE_ROOT+"/wp-json/wp/v2/internal-doors";
const singleURL = SITE_ROOT+"/wp-json/wp/v2/internal-doors?slug=";

const internalStyleURL = SITE_ROOT+"/wp-json/wp/v2/internal-doors-style";
const internalWoodURL = SITE_ROOT+"/wp-json/wp/v2/internal-doors-wood";



const FORM_GET  = 'https://www.silcoates.org.uk/gravityformsapi/forms/10/?api_key=1e6c0aabff&signature=l4zyGAFjIVgzcXuEIl3vn%2Bqlp30%3D&expires=1528351612'
const FORM_POST = 'https://www.silcoates.org.uk/gravityformsapi/forms/10/submissions?api_key=c6be399bda&signature=P8zomy9qv%2FBLgOyNdAzpKBq2sD0%3D&expires=1528351213'

export { SITE_ROOT, FORM_GET, FORM_POST, pageURL, singleURL, internalStyleURL, internalWoodURL  };
