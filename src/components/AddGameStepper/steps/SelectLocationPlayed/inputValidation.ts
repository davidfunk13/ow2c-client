import * as Yup from "yup";
import locations from "../../../../utils/Locations";

const inputValidation = Yup.object().shape({
    location: Yup.string().test("test-is-known-location", function (value) {
        const { path, createError } = this;
        console.log({
            value,
            path,
            createError
        });
        const getMatch = () => locations.find((l) => l.name === value);
        const match = getMatch();

        if (!match) {
            return (
                createError({
                    path,
                    message: "You must pick a location"
                })
            );
        }
        
        return true;
    })
});

export default inputValidation;
