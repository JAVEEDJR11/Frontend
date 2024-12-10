import { getByText, render,screen } from "@testing-library/react";
import MYNameComp from "./MYNameComp";

describe("MyName Component",()=>{
    test("render it",()=>{
        render(<MYNameComp/>);
        let createElement = screen.getByText(/this is MyName Component/i);
        expect(createElement).toBeInTheDocument();
    })
    test("render with props name",()=>{
        render(<MYNameComp name="Javeed" post="FullStack Developer"/>);
        let createElement = screen.getByText("My Name is :Javeed");
        expect(createElement).toBeInTheDocument();
    })
    test("render with props post",()=>{
        render(<MYNameComp name="Vasanth" post="FullStack Developer"/>);
        let createElement = screen.getByText(/i am :Fullstack Developer/i);
        expect(createElement).toBeInTheDocument();
    })
})