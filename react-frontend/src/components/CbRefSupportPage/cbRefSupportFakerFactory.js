
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(1),
description: faker.lorem.sentence(1),
currency: faker.lorem.sentence(1),
unit: faker.lorem.sentence(1),
amount: faker.lorem.sentence(1),
applicable: "C",
duration: faker.lorem.sentence(1),
image: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
