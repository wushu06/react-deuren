import AllDoors from '../WP/CP/Internal/allDoors.json'
import AllSTYLES from '../WP/CP/Internal/allStyles.json'
import AllWOODS from '../WP/CP/Internal/allWoods.json'
const SITE_ROOT = 'https://www.deuren.co.uk'
const pageURL = AllDoors;
const singleURL = SITE_ROOT+"/wp-json/wp/v2/internal-doors?slug=";

const internalStyleURL = AllSTYLES
//const internalStyleURL = SITE_ROOT+"/wp-json/wp/v2/internal_doors_style/?per_page=20";
const internalWoodURL = AllWOODS
//const internalWoodURL = SITE_ROOT+"/wp-json/wp/v2/internal_doors_wood/?per_page=20";



const FORM_GET  = 'https://www.silcoates.org.uk/gravityformsapi/forms/10/?api_key=1e6c0aabff&signature=l4zyGAFjIVgzcXuEIl3vn%2Bqlp30%3D&expires=1528351612'
const FORM_POST = 'https://www.silcoates.org.uk/gravityformsapi/forms/10/submissions?api_key=c6be399bda&signature=P8zomy9qv%2FBLgOyNdAzpKBq2sD0%3D&expires=1528351213'

export { SITE_ROOT, FORM_GET, FORM_POST, pageURL, singleURL, internalStyleURL, internalWoodURL  };
