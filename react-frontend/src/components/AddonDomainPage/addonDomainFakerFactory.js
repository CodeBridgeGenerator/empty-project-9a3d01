
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds,domainidIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: projectIdIds[i % projectIdIds.length],
domainid: domainidIds[i % domainidIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
