
import { faker } from "@faker-js/faker";
export default (user,count,projectIdIds,discountIdIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectId: projectIdIds[i % projectIdIds.length],
discountId: discountIdIds[i % discountIdIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
