/* global VK */

export default class VKAPI {
    constructor(appId, perms) {
        this.appId = appId;
        this.perms = perms;
    }

    init() {
        return new Promise(resolve => {
            const script = document.createElement('script');
            script.src = 'https://vk.com/js/api/openapi.js?168';
            document.body.appendChild(script);
            script.addEventListener('load', resolve);
        });
    }

    login() {
        return new Promise((resolve, reject) => {
            VK.init({
                apiId: this.appId,
            });

            VK.Auth.login(response => {
                if (response.session) {
                    resolve(response);
                } else {
                    reject(new Error('Не удалось авторизоваться'));
                }
            }, this.perms);
        });
    }

    callApi(method, params) {
        params.v = params.v || '5.120';

        return new Promise((resolve, reject) => {
            VK.api(method, params, response => {
                if (response.error) {
                    reject(new Error(response.error.error_msg));
                } else {
                    resolve(response.response);
                }
            });
        });
    }

    getFriends() {
        const params = {
            fields: ['photo_50'],
        };

        return this.callApi('friends.get', params);
    }

    async getUsers(friendsIds) {
        if (friendsIds.length) {
    
            const friends = await this.getFriends()

            const filterFriends = friendsIds.map(id => {
               for (let friend of friends.items) {
                   if (friend.id === id) {
                       return friend
                   }
               }
            });

            return filterFriends;
        } else {
            return friendsIds
        }
    }
}
