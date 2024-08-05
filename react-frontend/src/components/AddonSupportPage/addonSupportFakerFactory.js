
import { faker } from "@faker-js/faker";
export default (user,count,projectidIds,supportidIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
projectid: projectidIds[i % projectidIds.length],
supportid: supportidIds[i % supportidIds.length],

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
