function getBaseURL() {
    return '';
}

const ROUTES = {
    ROOT: '/',
};

const appendBaseUrl = <P>(obj: P) => {
    const keys = Object.keys(obj) as (keyof P)[];
    const newObj: any = {};
    keys.map((key: keyof P) => {
        if (typeof obj[key] == 'string') {
            newObj[key] = getBaseURL() + obj[key];
        } else {
            newObj[key] = appendBaseUrl(obj[key]);
        }
    });
    return newObj as P;
};

const routes = Object.freeze(appendBaseUrl(ROUTES));
export default routes;
