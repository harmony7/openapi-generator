/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    UserType,
    UserTypeFromJSON,
    UserTypeFromJSONTyped,
    UserTypeToJSON,
} from './UserType';

/**
 * 
 * @export
 * @interface UserUserType
 */
export interface UserUserType {
}

export function UserUserTypeFromJSON(json: any): UserUserType {
    return UserUserTypeFromJSONTyped(json, false);
}

export function UserUserTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUserType {
    return json;
}

export function UserUserTypeToJSON(value?: UserUserType | null): any {
    return value;
}

