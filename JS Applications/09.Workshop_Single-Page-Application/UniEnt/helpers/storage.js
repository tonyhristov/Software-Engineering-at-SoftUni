export const appKey = 'kid_SJS7X2faH';
export const appSecret = 'e3f1ea37ea774ebd8bac63d69c4ef259';

function saveData(key, value) {
   sessionStorage.setItem(key + appKey, JSON.stringify(value));
}

export function getData(key) {
   return sessionStorage.getItem(key + appKey);
}

export function saveUser(data) {
   saveData('userInfo', data);
   saveData('authToken', data._kmd.authtoken);
}

export function removeUser() {
   sessionStorage.clear();
}
