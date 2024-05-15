class boredapi {
    constructor(){
        this.api = "http://www.boredapi.com/api"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest"}
    }
    
    async req(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                headers: this.headers,
            }).then(res => res.text()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    
    async random_activities(){
        return (await this.req(`${this.api}/activity/`));
    }
    async activity_by_key(key){
        return (await this.req(`${this.api}/activity?key=${key}`));
    }
    async activity_by_type(type){
        return (await this.req(`${this.api}/activity?type=${type}`));
    }
    async activity_by_participants(participants){
        return (await this.req(`${this.api}/activity?participants=${participants}`));
    }
    async activity_by_price(price){
        return (await this.req(`${this.api}/activity?price=${price}`));
    }
    async activitys_by_price(max,min){
        return (await this.req(`${this.api}/activity?minprice=${min}&maxprice=${max}`));
    }
    async activity_by_accessibility(accessibility){
        return (await this.req(`${this.api}/activity?accessibility=${accessibility}`));
    }
    async activitys_by_accessibility(max,min){
        return (await this.req(`${this.api}/activity?minaccessibility=${min}&maxaccessibility={max}`));
    }
}
module.exports = {boredapi};
