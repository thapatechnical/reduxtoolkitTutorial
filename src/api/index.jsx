import Chance from "chance";
const chance = Chance();

export const fakeUserData = () => {
    return `${chance.name()}, ${chance.country({ full: true })}`;
}