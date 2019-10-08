import axios from 'axios'
import {baseUrl} from "../config";

export default axios.create({
   'baseURL': baseUrl
});

