
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds,packageIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: projectIdIds[i % projectIdIds.length],
packageId: packageIdIds[i % packageIdIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
