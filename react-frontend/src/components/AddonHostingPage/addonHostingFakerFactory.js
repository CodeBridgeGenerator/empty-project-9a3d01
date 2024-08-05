
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds,hostingIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: projectIdIds[i % projectIdIds.length],
hostingId: hostingIdIds[i % hostingIdIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
