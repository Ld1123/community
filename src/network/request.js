import axios from "axios"
export function request(config){
  let instence = axios.create({
    baseURL:"http://192.168.1.21545",
    // http://192.168.1.215/staff/select
    // baseURL:"./",
    timeout:20000,

  });
  return instence(config)
}