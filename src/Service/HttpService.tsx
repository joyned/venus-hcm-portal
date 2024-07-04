import axios, { AxiosResponse } from "axios";

const GET = async (uri: string, headers?: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_API_URL}${uri}`, { headers: headers }).then((response: AxiosResponse<any>) => {
            response.status === 200 ? resolve(response) : reject(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

const POST = (uri: string, data: any, headers?: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_API_URL}${uri}`, data, { headers: headers }).then((response: AxiosResponse<any>) => {
            response.status === 200 ? resolve(response) : reject(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

const PUT = (uri: string, data: any, headers?: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios.put(`${process.env.REACT_APP_API_URL}${uri}`, data, { headers: headers }).then((response: AxiosResponse<any>) => {
            response.status === 200 ? resolve(response) : reject(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

const DELETE = (uri: string, headers?: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios.delete(`${process.env.REACT_APP_API_URL}${uri}`, { headers: headers }).then((response: AxiosResponse<any>) => {
            response.status === 200 ? resolve(response) : reject(response);
        }).catch((error) => {
            reject(error);
        });
    });
}

export { DELETE, GET, POST, PUT };
