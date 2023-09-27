import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)]
    const value = await Promise.allSettled(promises);
    const returnStatus = [];
    for (const val of value) {
        returnStatus.push({ status: val.status, value: val.value || val.reason });
    }
    return returnStatus;
};