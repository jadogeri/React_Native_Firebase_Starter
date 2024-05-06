import { render, fireEvent } from "@testing-library/react-native";
import VerticalSpacer from "../../src/components/VerticalSpacer";

describe("VerticalSpacer",() =>{
   
    it("has test ID spacer", () =>{
        const ID = "spacer"
        const {getByTestId} = render(<VerticalSpacer  testID={ID}/>)
        const text = getByTestId("spacer")
        console.log(text)

        expect(text).not.toEqual(null);
    })

});