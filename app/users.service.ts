
import {Component, Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable}from 'rxjs/Rx';

@Injectable()

export class UserService {
    private _url = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http) {
    }

    getUsers() {
        return this._http.get(this._url)
            .map(resp => resp.json());
    }

    getUser(userId) {
        return this._http.get(this._url + "/" + userId)
            .map(resp => resp.json());
    }

    addUser(user) {
        alert(JSON.stringify(user));
        return this._http.put(this._url, JSON.stringify(user))
            .map(resp => resp.json());
    }

    deleteUser(userId) {
        alert('service delete UserId: ' + userId)
        return this._http.delete(this._url, userId)
            .map(resp => resp.json())
    }

}