export const o_O = (promise) => {
    return promise.then(data => {
        if(data instanceof Error) return [data]
        return [null, data]
    }).catch(err => [err])
}

export const urlString = (str) => {
    return str.toLowerCase().replace(new RegExp(' ', 'g'), '+');
}

export const isEmpty = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const goBack = () => window.history.go(-1);
export const isUrl = (url) => window.route().current(url);
export const goForward = () => window.history.go(1);

export const formatDate = (template, date) => {
    var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':');
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
    return date.toISOString().split(/[-:.TZ]/).reduce(function(template, item, i) {
      return template.split(specs[i]).join(item);
    }, template);
}
export const APP_URL = 'http://breevio-website.loc/api';
export const USER_TOKEN = 'token'
export const TOKEN_EXPIRED_AT = 'expired_at';
// export const WORLD_LANGUAGE_API = 'https://pkgstore.datahub.io/core/language-codes/language-codes_json/data/734c5eea7e10548144a18241e8f931f8/language-codes_json.json'
export const INDUSTRY = [
    "Automotive", "Business", "Career", "Pharmaceutical", "Data & Analytics", "Design", "Devices & Hardware", "Art & Photos", "Economy & Finance", "Education", "Engineering", "Entertainment & Humor", "Environment", "Food", "Government & Nonprofit", "Health & Medicine", "Health Care", "Internet", "Investor Relations", "Law", "Leadership & Management", "Lifestyle", "Marketing", "Mobile", "News & Politics", "Presentations & Public Speaking", "Real Estate", "Recruiting & Human Resources", "Retail", "Sales", "Science", "Self Improvement", "Services", "Small Business & Entrepreneurship", "Social Media", "Software", "Spiritual", "Sports", "Technology", "Travel", "Others"
];

