import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [signUpUser(), uploadPhoto()]
    return Promise.allSettled(promises)
    .then((value) => {
        value.state;
    })
};