
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
code: faker.lorem.sentence(1),
applicable: faker.lorem.sentence(1),
type: "PERCENTAGE",

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
