import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)]
    return Promise.allSettled(promises)
    .then((value) => {
        const returnStatus = [];
        for (const val of value) {
            returnStatus.push({ status: val.status, value: val.value || val.reason });
        }
        return returnStatus;
    });
};