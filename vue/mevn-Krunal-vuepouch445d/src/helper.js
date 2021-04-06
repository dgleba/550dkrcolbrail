// yes
//https://stackoverflow.com/questions/43608457/how-to-import-functions-from-different-js-file-in-a-vuewebpackvue-loader-proje

import dayjs from "dayjs";

exports.iuid = () => {
  var uid = dayjs()
    .format("YYMMDD_HHmm.ss.SSSZZ-")
    .concat(parseInt(Math.random() * 10000));
  return uid;
};

// export function fiuid = function() {
//   var uid = dayjs()
//     .format("YYMMDD_HHmm.ss.SSSZZ-")
//     .concat(parseInt(Math.random() * 10000));
//   return uid;
// };

//  Date.now()
//   .toString()
//   .concat(parseInt(Math.random() * 10000));

// no
// import * from './helper.js'
// import { fiuid } from "./helper.js";
// https://forum.vuejs.org/t/create-and-import-my-own-js-to-vue-project/30770/11
