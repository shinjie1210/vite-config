import axios from 'axios';
// import isEmpty from 'lodash/isEmpty';
// import assign from 'lodash/assign';
class ApiHost {
    constructor(baseUrl, name, baseOptions) {
        this.name = name;
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            withCredentials: false,
        });
        this.baseUrl = baseUrl;
        this.baseOptions = baseOptions;
        this.axiosInstance.interceptors.request.use(
            config => {
                let token = window.localStorage.getItem('token')
                if (token && config.url.indexOf('login') == -1) {
                    config.headers.token = token
                }
                return config;
            },
            error => {
                return error;
            }
        )
    }

    call(path, method, urlParams, bodyParams, options) {
        let configs = {
            url: `${path}`,
            params: urlParams,
            method,
            data: bodyParams
        };
        // if (!isEmpty(options)) {
        //     configs = assign(configs, options);
        // }

        // let baseOptionsHeaders = this.baseOptions ? this.baseOptions.headers : {}
        // configs.headers = assign(configs.headers || {}, baseOptionsHeaders);
        return new Promise((resolve, reject) => {
            this.axiosInstance
                .request(configs)
                .then(res => {
                    if (res.data.code == '200' || res.data.code == '0') {
                        resolve(res.data);
                    } else {
                        reject(res.data)
                    }
                })
                .catch(error => {
                    reject(error);
                });
        })
    }

    get(path, urlParams, options) {
        return this.call(path, 'get', urlParams, null, options);
    }
    delete(path, urlParams, bodyParams, options) {
        return this.call(path, 'delete', urlParams, bodyParams, options);
    }

    post(path, bodyParams, options) {
        return this.call(path, 'post', null, bodyParams, options);
    }

    put(path, bodyParams, options) {
        return this.call(path, 'put', null, bodyParams, options);
    }

    patch(path, bodyParams, options) {
        return this.call(path, 'patch', null, bodyParams, options);
    }
}

export default class {
    static getApiHost(baseUrl, name, baseOptions) {
        return new ApiHost(baseUrl, name, baseOptions);
    }
}