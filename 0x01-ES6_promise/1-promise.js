/* eslint-disable */
export default function getFullResponseFromAPI(success){
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
	body: "success",
      });
    } else {
      reject(new Error("The fake API id not working curremtly"));
    }
  });
}

