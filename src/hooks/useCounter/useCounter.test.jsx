import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";
describe('useCounter', () => {
    // testing custom hooks
    test('Should render the initial count', () => {
        const {result} = renderHook(useCounter)
        expect(result.current.count).toBe(0)
    });
    // testing custom hooks with props
    test('Should accpet and render the same initial count', () => {
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCounter: 125            }
        });
        expect(result.current.count).toBe(125)
    });
    
});
