
import { parse } from 'qs';

export function parseQueryParameters(url){    
    return  parse(url.replace("?", ""));
}