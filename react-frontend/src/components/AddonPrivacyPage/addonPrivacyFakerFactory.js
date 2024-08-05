
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds,privacyidIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: projectIdIds[i % projectIdIds.length],
privacyid: privacyidIds[i % privacyidIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
