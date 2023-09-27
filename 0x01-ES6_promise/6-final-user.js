import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
    const returnStatus = [];
    return Promise.allSettled(promises)
    .then((value) => {
        for (const val of value) {
            returnStatus.push({ status: val.status, value: val.value || val.reason });
        }
        return returnStatus;
    });
};