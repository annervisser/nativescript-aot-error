import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DatastoreConfig, JsonApiDatastore, JsonApiDatastoreConfig} from 'angular2-jsonapi';

const config: DatastoreConfig = {
    baseUrl: '',
    models: {}
};

@Injectable()
@JsonApiDatastoreConfig(config)
export class AppDatastore extends JsonApiDatastore {

    constructor(http: HttpClient) {
        super(http);
    }
}
